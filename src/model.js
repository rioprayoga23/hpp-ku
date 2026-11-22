export const id = () => crypto.randomUUID();
export const units = ['ml', 'L', 'g', 'kg', 'pcs'];
const families = {
  ml: 'volume',
  L: 'volume',
  g: 'mass',
  kg: 'mass',
  pcs: 'count',
};
const factors = { ml: 1, L: 1000, g: 1, kg: 1000, pcs: 1 };

export const rupiah = (value) =>
  value == null || !Number.isFinite(value)
    ? 'Belum tersedia'
    : new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
      }).format(value);
export const decimal = (value) =>
  new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2 }).format(
    value || 0
  );
export const integer = (value) =>
  value === ''
    ? ''
    : new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 }).format(
        value
      );
const valid = (value, min = 0, max = Number.MAX_SAFE_INTEGER) =>
  value !== '' &&
  value !== null &&
  Number.isFinite(Number(value)) &&
  Number(value) >= min &&
  Number(value) <= max;

export function freshMenu(example = false) {
  const items = example
    ? [
        ['Espresso', 90000, 1000, 30, 'ml', 'ml', 'ingredient'],
        ['Brown Sugar (Delifru)', 111000, 1000, 15, 'ml', 'ml', 'ingredient'],
        ['Creamiera', 65000, 1000, 15, 'ml', 'ml', 'ingredient'],
        [
          'Susu UHT (Indomilk Good Milk)',
          18500,
          950,
          80,
          'ml',
          'ml',
          'ingredient',
        ],
        ['Gula cair', 75000, 3, 15, 'kg', 'g', 'ingredient'],
        ['Es batu', 10000, 1, 150, 'kg', 'g', 'ingredient'],
        ['Cup', 1000, 1, 1, 'pcs', 'pcs', 'packaging'],
      ].map(([name, price, packQty, usage, packUnit, usageUnit, kind]) => ({
        id: id(),
        name,
        price,
        packQty,
        usage,
        packUnit,
        usageUnit,
        kind,
        active: true,
      }))
    : [];
  return {
    id: id(),
    name: example ? 'Kopi Brown Sugar' : '',
    category: '',
    cups: 1,
    items,
    overheads: [],
    overheadsActive: true,
    target: '',
    pricing: { percent: 45, customPrice: '' },
    marginActive: true,
    updatedAt: null,
  };
}

export const newIngredient = () => ({
  id: id(),
  name: '',
  price: '',
  packQty: 1,
  usage: 1,
  packUnit: 'g',
  usageUnit: 'g',
  kind: 'ingredient',
  active: true,
});

export function normalizeMenu(raw = {}) {
  const base = freshMenu();
  const priorPricing = raw.pricing ?? {};
  const priorPercent = Number(priorPricing.percent);
  const marginPercent =
    priorPricing.mode === 'markup' &&
    Number.isFinite(priorPercent) &&
    priorPercent >= 0
      ? (priorPercent / (100 + priorPercent)) * 100
      : (priorPricing.percent ?? base.pricing.percent);
  const normalizedCups = Number(raw.cups);
  return {
    ...base,
    id: typeof raw.id === 'string' ? raw.id : base.id,
    name: String(raw.name ?? raw.recipe ?? ''),
    category: String(raw.category ?? ''),
    cups: valid(normalizedCups, 1, 100000) ? normalizedCups : 1,
    items: (Array.isArray(raw.items) ? raw.items : []).map((item) => ({
      id: typeof item.id === 'string' ? item.id : id(),
      name: String(item.name ?? ''),
      price: item.price ?? '',
      packQty: item.packQty ?? '',
      usage: item.usage ?? '',
      packUnit: units.includes(item.packUnit)
        ? item.packUnit
        : units.includes(item.unit)
          ? item.unit
          : 'ml',
      usageUnit: units.includes(item.usageUnit)
        ? item.usageUnit
        : units.includes(item.unit)
          ? item.unit
          : 'ml',
      kind:
        item.kind === 'recipe'
          ? 'recipe'
          : item.kind === 'packaging'
            ? 'packaging'
            : 'ingredient',
      sourceRecipeId:
        typeof item.sourceRecipeId === 'string' ? item.sourceRecipeId : null,
      sourceRecipeName: String(item.sourceRecipeName ?? item.name ?? ''),
      sourceRecipeUpdatedAt: item.sourceRecipeUpdatedAt ?? null,
      sourceRecipeData:
        item.sourceRecipeData &&
        typeof item.sourceRecipeData === 'object' &&
        !Array.isArray(item.sourceRecipeData)
          ? item.sourceRecipeData
          : null,
      recipeCost: item.recipeCost ?? null,
      active: item.active !== false,
    })),
    overheads: (Array.isArray(raw.overheads) ? raw.overheads : []).map((o) => ({
      id: typeof o.id === 'string' ? o.id : id(),
      name: String(o.name ?? ''),
      amount: o.amount ?? '',
      period: o.period === 'portion' ? 'portion' : 'month',
    })),
    target: raw.target ?? '',
    overheadsActive: raw.overheadsActive !== false,
    pricing: {
      percent: marginPercent,
      customPrice:
        priorPricing.customPrice !== undefined &&
        priorPricing.customPrice !== '' &&
        valid(priorPricing.customPrice, 1)
          ? Number(priorPricing.customPrice)
          : '',
    },
    marginActive: raw.marginActive !== false,
    updatedAt: raw.updatedAt ?? null,
  };
}

export function ingredientCost(item) {
  if (!item.active) return { cost: 0, error: null };
  if (item.kind === 'recipe') {
    if (!valid(item.recipeCost, 0))
      return {
        cost: null,
        error: 'HPP resep sumber belum tersedia.',
      };
    if (!valid(item.usage, Number.MIN_VALUE))
      return {
        cost: null,
        error: 'Isi pemakaian resep lebih dari 0.',
      };
    const cost = Number(item.recipeCost) * Number(item.usage);
    return Number.isFinite(cost) && cost <= Number.MAX_SAFE_INTEGER
      ? { cost, error: null }
      : { cost: null, error: 'Angka terlalu besar untuk dihitung.' };
  }
  if (families[item.packUnit] !== families[item.usageUnit])
    return {
      cost: null,
      error: 'Samakan jenis satuan (berat, volume, atau pcs).',
    };
  if (!valid(item.packQty, Number.MIN_VALUE))
    return { cost: null, error: 'Isi kemasan harus lebih dari 0.' };
  if (!valid(item.price) || !valid(item.usage))
    return {
      cost: null,
      error: 'Isi harga dan pemakaian dengan angka 0 atau lebih.',
    };
  const cost =
    (Number(item.price) * (Number(item.usage) * factors[item.usageUnit])) /
    (Number(item.packQty) * factors[item.packUnit]);
  return Number.isFinite(cost) && cost <= Number.MAX_SAFE_INTEGER
    ? { cost, error: null }
    : { cost: null, error: 'Angka terlalu besar untuk dihitung.' };
}

export function calculate(menu) {
  const errors = [],
    overheadWarnings = [];
  let ingredients = 0,
    packaging = 0,
    monthly = 0,
    perPortion = 0;
  let activeCount = 0;
  for (const [i, item] of menu.items.entries()) {
    if (item.active) activeCount++;
    const result = ingredientCost(item);
    if (result.error)
      errors.push(`${item.name || `Bahan ${i + 1}`}: ${result.error}`);
    else if (item.kind === 'packaging') packaging += result.cost;
    else ingredients += result.cost;
  }
  const overheadsActive = menu.overheadsActive !== false;
  for (const [i, o] of menu.overheads.entries()) {
    if (o.amount === '' || o.amount === null) continue;
    if (!valid(o.amount)) {
      if (overheadsActive)
        overheadWarnings.push(
          `${o.name || `Biaya ${i + 1}`}: nominal diabaikan karena belum valid.`
        );
    } else if (o.period === 'month') monthly += Number(o.amount);
    else perPortion += Number(o.amount);
  }
  const targetValid = valid(menu.target, Number.MIN_VALUE);
  if (overheadsActive && monthly > 0 && !targetValid)
    overheadWarnings.push(
      'Isi target cup per bulan untuk memasukkan biaya bulanan ke HPP.'
    );
  const monthlyAllocated =
    monthly > 0 && targetValid ? monthly / Number(menu.target) : 0;
  const overhead = overheadsActive ? perPortion + monthlyAllocated : 0;
  const marginActive = menu.marginActive !== false;
  const { percent, customPrice } = menu.pricing || {};
  const hasCustomPrice = marginActive && valid(customPrice, 1);
  const cups = valid(menu.cups, 1, 100000) ? Number(menu.cups) : 1;
  if (!activeCount) errors.push('Tambahkan setidaknya satu komponen aktif.');
  const cost = ingredients + packaging + overhead;
  if (!Number.isFinite(cost) || cost > Number.MAX_SAFE_INTEGER)
    errors.push('Total biaya terlalu besar untuk dihitung.');
  if (marginActive && !hasCustomPrice && !valid(percent, 0, 99.99))
    errors.push('Margin harus antara 0 dan kurang dari 100%.');
  if (cost <= 0)
    errors.push(
      'Tambahkan biaya aktif agar HPP dan harga jual dapat dihitung.'
    );
  let price = null,
    profit = null,
    margin = null;
  const ingredientErrors = errors.some((error) =>
    /Samakan jenis satuan|Isi kemasan|Isi harga|Angka terlalu besar/.test(error)
  );
  const costValid =
    activeCount > 0 &&
    !ingredientErrors &&
    Number.isFinite(cost) &&
    cost <= Number.MAX_SAFE_INTEGER &&
    cost > 0;
  if (
    costValid &&
    (!marginActive ||
      hasCustomPrice ||
      !errors.some((error) => error.includes('Margin harus')))
  ) {
    if (hasCustomPrice) {
      price = Math.round(Number(customPrice));
      profit = price - cost;
      margin = price > 0 ? (profit / price) * 100 : 0;
    } else {
      const effectivePercent = marginActive ? Number(percent) : 0;
      price = Math.ceil(cost / (1 - effectivePercent / 100));
      profit = price - cost;
      margin = price > 0 ? (profit / price) * 100 : 0;
    }
    if (
      ![price, profit, margin].every(Number.isFinite) ||
      price > Number.MAX_SAFE_INTEGER
    ) {
      errors.push('Hasil terlalu besar. Kurangi nilai biaya atau margin.');
      price = profit = margin = null;
    }
  }
  const batch = (value) =>
    value == null || !Number.isFinite(value) ? null : value * cups;
  return {
    cups,
    ingredients: ingredientErrors ? null : ingredients,
    packaging: ingredientErrors ? null : packaging,
    monthly,
    overhead: ingredientErrors ? null : overhead,
    overheadsActive,
    marginActive,
    unallocatedMonthly: overheadsActive && monthlyAllocated === 0 ? monthly : 0,
    cost: costValid ? cost : null,
    price,
    profit,
    margin,
    batchIngredients: batch(ingredientErrors ? null : ingredients),
    batchPackaging: batch(ingredientErrors ? null : packaging),
    batchOverhead: batch(ingredientErrors ? null : overhead),
    batchCost: batch(costValid ? cost : null),
    batchPrice: batch(price),
    batchProfit: batch(profit),
    errors,
    overheadWarnings,
    lowMargin: marginActive && margin !== null && margin < 30,
    lossWarning: marginActive && price !== null && costValid && profit < 0,
  };
}

export function canonicalRecipeName(name) {
  return String(name || '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

export function findMatchingRecipe(item, savedRecipes = []) {
  if (!item || !Array.isArray(savedRecipes) || !savedRecipes.length) return null;

  // 1. Match by ID (sourceRecipeId, sourceRecipeData.id, sourceRecipeData.menu.id)
  const itemIds = [
    item.sourceRecipeId,
    item.sourceRecipeData?.id,
    item.sourceRecipeData?.menu?.id,
  ]
    .filter(Boolean)
    .map(String);

  for (const targetId of itemIds) {
    if (!targetId) continue;
    const byId = savedRecipes.find((r) => {
      if (!r) return false;
      const rIds = [r.id, r.data?.id, r.menu?.id].filter(Boolean).map(String);
      return rIds.includes(targetId);
    });
    if (byId) return byId;
  }

  // 2. Match by exact normalized name
  const names = [
    item.sourceRecipeName,
    item.name,
    item.sourceRecipeData?.name,
    item.sourceRecipeData?.menu?.name,
    item.sourceRecipeData?.recipe,
  ]
    .filter(Boolean)
    .map((n) => String(n).trim().toLowerCase());

  for (const name of names) {
    if (!name) continue;
    const byName = savedRecipes.find((r) => {
      if (!r) return false;
      const rNames = [
        r.name,
        r.data?.name,
        r.data?.recipe,
        r.menu?.name,
      ]
        .filter(Boolean)
        .map((n) => String(n).trim().toLowerCase());
      return rNames.includes(name);
    });
    if (byName) return byName;
  }

  // 3. Match by canonical alphanumeric name (ignoring commas, spaces, dashes, quotes, etc.)
  const canonicalNames = names
    .map(canonicalRecipeName)
    .filter((n) => n.length > 0);

  for (const cName of canonicalNames) {
    const byCanonical = savedRecipes.find((r) => {
      if (!r) return false;
      const rCanonicals = [
        r.name,
        r.data?.name,
        r.data?.recipe,
        r.menu?.name,
      ]
        .filter(Boolean)
        .map(canonicalRecipeName);
      return rCanonicals.includes(cName);
    });
    if (byCanonical) return byCanonical;
  }

  return null;
}

export function syncRecipeItems(menu, savedRecipes) {
  if (
    !menu ||
    !Array.isArray(menu.items) ||
    !Array.isArray(savedRecipes) ||
    !savedRecipes.length
  ) {
    return menu;
  }

  let hasChanges = false;
  const nextItems = menu.items.map((item) => {
    if (item.kind !== 'recipe') {
      return item;
    }

    const source = findMatchingRecipe(item, savedRecipes);
    if (!source) {
      return item;
    }

    const sourceName =
      source.name ||
      String(
        source.data?.name ||
          item.sourceRecipeName ||
          item.name ||
          'Resep tersimpan'
      );

    const rawData = source.data || source;
    const parsedData =
      typeof rawData === 'string'
        ? (() => {
            try {
              return JSON.parse(rawData);
            } catch {
              return {};
            }
          })()
        : rawData && typeof rawData === 'object'
          ? rawData
          : {};

    const sourceMenu =
      source.menu ||
      normalizeMenu({
        ...parsedData,
        id: source.id || parsedData.id,
        name: sourceName,
        updatedAt:
          source.updated_at || parsedData.updatedAt || parsedData.updated_at,
      });

    const calculated = calculate(sourceMenu);
    const sourceCost = source.cost ?? calculated.cost;

    const newSourceData = structuredClone(sourceMenu);
    const newUpdatedAt =
      source.updated_at ?? parsedData.updatedAt ?? parsedData.updated_at ?? null;
    const newSourceId = source.id || item.sourceRecipeId;

    const isIdDifferent = newSourceId && item.sourceRecipeId !== newSourceId;
    const isNameDifferent =
      item.name !== sourceName || item.sourceRecipeName !== sourceName;
    const isCostDifferent =
      sourceCost !== null &&
      Number.isFinite(sourceCost) &&
      (item.recipeCost !== sourceCost || item.price !== sourceCost);
    const isUpdatedAtDifferent =
      newUpdatedAt && item.sourceRecipeUpdatedAt !== newUpdatedAt;
    const isDataDifferent =
      JSON.stringify(item.sourceRecipeData) !== JSON.stringify(newSourceData);

    if (
      isIdDifferent ||
      isNameDifferent ||
      isCostDifferent ||
      isUpdatedAtDifferent ||
      isDataDifferent
    ) {
      hasChanges = true;
      return {
        ...item,
        sourceRecipeId: newSourceId || item.sourceRecipeId,
        name: sourceName,
        sourceRecipeName: sourceName,
        sourceRecipeUpdatedAt: newUpdatedAt,
        sourceRecipeData: newSourceData,
        recipeCost:
          sourceCost !== null && Number.isFinite(sourceCost)
            ? sourceCost
            : item.recipeCost,
        price:
          sourceCost !== null && Number.isFinite(sourceCost)
            ? sourceCost
            : item.price,
      };
    }

    return item;
  });

  if (!hasChanges) {
    return menu;
  }

  return {
    ...menu,
    items: nextItems,
  };
}

export function syncAllRecipes(recipes) {
  if (!Array.isArray(recipes) || !recipes.length) return recipes;
  let currentList = recipes;
  for (let pass = 0; pass < 5; pass++) {
    let changed = false;
    currentList = currentList.map((r) => {
      const menu = normalizeMenu({
        ...(r.data || {}),
        id: r.id,
        name: r.name,
        updatedAt: r.updated_at,
      });
      const synced = syncRecipeItems(menu, currentList);
      if (synced !== menu) {
        changed = true;
        return {
          ...r,
          name: synced.name,
          data: synced,
          updated_at: r.updated_at,
        };
      }
      return r;
    });
    if (!changed) break;
  }
  return currentList;
}
