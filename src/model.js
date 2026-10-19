export const STORAGE_KEY = "kopti-workspace-v2";
export const LEGACY_KEY = "kopti-hpp-calculator-v1";
export const id = () => crypto.randomUUID();
export const units = ["ml", "L", "g", "kg", "pcs"];
const families = {
  ml: "volume",
  L: "volume",
  g: "mass",
  kg: "mass",
  pcs: "count",
};
const factors = { ml: 1, L: 1000, g: 1, kg: 1000, pcs: 1 };
export const rupiah = (value) =>
  value == null || !Number.isFinite(value)
    ? "Belum tersedia"
    : new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      }).format(value);
export const decimal = (value) =>
  new Intl.NumberFormat("id-ID", { maximumFractionDigits: 2 }).format(
    value || 0,
  );
export const integer = (value) =>
  value === ""
    ? ""
    : new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(
        value,
      );
const valid = (value, min = 0, max = Number.MAX_SAFE_INTEGER) =>
  value !== "" &&
  value !== null &&
  Number.isFinite(Number(value)) &&
  Number(value) >= min &&
  Number(value) <= max;

export function freshMenu(example = false) {
  const items = example
    ? [
        ["Espresso", 90000, 1000, 30, "ml", "ml", "ingredient"],
        ["Brown Sugar (Delifru)", 111000, 1000, 15, "ml", "ml", "ingredient"],
        ["Creamiera", 65000, 1000, 15, "ml", "ml", "ingredient"],
        [
          "Susu UHT (Indomilk Good Milk)",
          18500,
          950,
          80,
          "ml",
          "ml",
          "ingredient",
        ],
        ["Gula cair", 75000, 3, 15, "kg", "g", "ingredient"],
        ["Es batu", 10000, 1, 150, "kg", "g", "ingredient"],
        ["Cup", 1000, 1, 1, "pcs", "pcs", "packaging"],
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
    name: example ? "Kopi Brown Sugar" : "",
    items,
    overheads: [],
    overheadsActive: true,
    target: "",
    pricing: { percent: 45 },
    marginActive: true,
    updatedAt: null,
  };
}
export const newIngredient = () => ({
  id: id(),
  name: "",
  price: "",
  packQty: 1,
  usage: 1,
  packUnit: "g",
  usageUnit: "g",
  kind: "ingredient",
  active: true,
});
export function normalizeMenu(raw) {
  const base = freshMenu();
  const priorPricing = raw.pricing ?? {};
  const priorPercent = Number(priorPricing.percent);
  const marginPercent =
    priorPricing.mode === "markup" &&
    Number.isFinite(priorPercent) &&
    priorPercent >= 0
      ? (priorPercent / (100 + priorPercent)) * 100
      : (priorPricing.percent ?? base.pricing.percent);
  return {
    ...base,
    id: typeof raw.id === "string" ? raw.id : base.id,
    name: String(raw.name ?? raw.recipe ?? ""),
    items: (Array.isArray(raw.items) ? raw.items : []).map((item) => ({
      id: typeof item.id === "string" ? item.id : id(),
      name: String(item.name ?? ""),
      price: item.price ?? "",
      packQty: item.packQty ?? "",
      usage: item.usage ?? "",
      packUnit: units.includes(item.packUnit)
        ? item.packUnit
        : units.includes(item.unit)
          ? item.unit
          : "ml",
      usageUnit: units.includes(item.usageUnit)
        ? item.usageUnit
        : units.includes(item.unit)
          ? item.unit
          : "ml",
      kind: item.kind === "packaging" ? "packaging" : "ingredient",
      active: item.active !== false,
    })),
    overheads: (Array.isArray(raw.overheads) ? raw.overheads : []).map((o) => ({
      id: typeof o.id === "string" ? o.id : id(),
      name: String(o.name ?? ""),
      amount: o.amount ?? "",
      period: o.period === "portion" ? "portion" : "month",
    })),
    target: raw.target ?? "",
    overheadsActive: raw.overheadsActive !== false,
    pricing: { percent: marginPercent },
    marginActive: raw.marginActive !== false,
    updatedAt: raw.updatedAt ?? null,
  };
}
export function ingredientCost(item) {
  if (!item.active) return { cost: 0, error: null };
  if (families[item.packUnit] !== families[item.usageUnit])
    return {
      cost: null,
      error: "Samakan jenis satuan (berat, volume, atau pcs).",
    };
  if (!valid(item.packQty, Number.MIN_VALUE))
    return { cost: null, error: "Isi kemasan harus lebih dari 0." };
  if (!valid(item.price) || !valid(item.usage))
    return {
      cost: null,
      error: "Isi harga dan pemakaian dengan angka 0 atau lebih.",
    };
  const cost =
    (Number(item.price) * (Number(item.usage) * factors[item.usageUnit])) /
    (Number(item.packQty) * factors[item.packUnit]);
  return Number.isFinite(cost) && cost <= Number.MAX_SAFE_INTEGER
    ? { cost, error: null }
    : { cost: null, error: "Angka terlalu besar untuk dihitung." };
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
    else if (item.kind === "packaging") packaging += result.cost;
    else ingredients += result.cost;
  }
  const overheadsActive = menu.overheadsActive !== false;
  for (const [i, o] of menu.overheads.entries()) {
    if (o.amount === "" || o.amount === null) continue;
    if (!valid(o.amount)) {
      if (overheadsActive)
        overheadWarnings.push(
          `${o.name || `Biaya ${i + 1}`}: nominal diabaikan karena belum valid.`,
        );
    } else if (o.period === "month") monthly += Number(o.amount);
    else perPortion += Number(o.amount);
  }
  const targetValid = valid(menu.target, Number.MIN_VALUE);
  if (overheadsActive && monthly > 0 && !targetValid)
    overheadWarnings.push(
      "Isi target cup per bulan untuk memasukkan biaya bulanan ke HPP.",
    );
  const monthlyAllocated =
    monthly > 0 && targetValid ? monthly / Number(menu.target) : 0;
  const overhead = overheadsActive ? perPortion + monthlyAllocated : 0;
  const marginActive = menu.marginActive !== false;
  const { percent } = menu.pricing;
  if (!activeCount) errors.push("Tambahkan setidaknya satu komponen aktif.");
  const cost = ingredients + packaging + overhead;
  if (!Number.isFinite(cost) || cost > Number.MAX_SAFE_INTEGER)
    errors.push("Total biaya terlalu besar untuk dihitung.");
  if (marginActive && !valid(percent, 0, 99.99))
    errors.push("Margin harus antara 0 dan kurang dari 100%.");
  if (cost <= 0)
    errors.push(
      "Tambahkan biaya aktif agar HPP dan harga jual dapat dihitung.",
    );
  let price = null,
    profit = null,
    margin = null;
  const ingredientErrors = errors.some((error) =>
    /Samakan jenis satuan|Isi kemasan|Isi harga|Angka terlalu besar/.test(
      error,
    ),
  );
  const costValid =
    activeCount > 0 &&
    !ingredientErrors &&
    Number.isFinite(cost) &&
    cost <= Number.MAX_SAFE_INTEGER &&
    cost > 0;
  if (
    costValid &&
    (!marginActive || !errors.some((error) => error.includes("Margin harus")))
  ) {
    const effectivePercent = marginActive ? Number(percent) : 0;
    price = Math.ceil(cost / (1 - effectivePercent / 100));
    profit = price - cost;
    margin = (profit / price) * 100;
    if (
      ![price, profit, margin].every(Number.isFinite) ||
      price > Number.MAX_SAFE_INTEGER
    ) {
      errors.push("Hasil terlalu besar. Kurangi nilai biaya atau margin.");
      price = profit = margin = null;
    }
  }
  return {
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
    errors,
    overheadWarnings,
    lowMargin: marginActive && margin !== null && margin < 30,
  };
}
export function loadWorkspace(storage = localStorage) {
  let current;
  try {
    current = storage.getItem(STORAGE_KEY);
  } catch {
    return {
      draft: freshMenu(true),
      menus: [],
      issue:
        "Penyimpanan browser tidak dapat dibaca. Perubahan hanya tersedia selama halaman terbuka.",
      blocked: true,
    };
  }
  if (current) {
    try {
      const data = JSON.parse(current);
      if (data.schema !== 2 || !data.draft || !Array.isArray(data.menus))
        throw new Error("invalid");
      return {
        draft: normalizeMenu(data.draft),
        menus: data.menus.map(normalizeMenu),
        issue: "",
        blocked: false,
      };
    } catch {
      return {
        draft: freshMenu(true),
        menus: [],
        issue:
          "Data tersimpan tidak dapat dibaca. Data asli dipertahankan; penyimpanan dinonaktifkan agar tidak tertimpa.",
        blocked: true,
      };
    }
  }
  try {
    const legacy = storage.getItem(LEGACY_KEY);
    if (legacy) {
      const data = JSON.parse(legacy);
      if (!Array.isArray(data.items)) throw new Error("invalid legacy");
      return {
        draft: normalizeMenu(data),
        menus: [],
        issue: "",
        blocked: false,
        migrated: true,
      };
    }
  } catch {
    return {
      draft: freshMenu(true),
      menus: [],
      issue:
        "Resep lama tidak dapat dibaca. Data lama dipertahankan; penyimpanan dinonaktifkan agar aman.",
      blocked: true,
    };
  }
  return { draft: freshMenu(true), menus: [], issue: "", blocked: false };
}
export function persistWorkspace(draft, menus, storage = localStorage) {
  storage.setItem(STORAGE_KEY, JSON.stringify({ schema: 2, draft, menus }));
}
export function menuSnapshot(menu) {
  const { updatedAt, ...data } = menu;
  return JSON.stringify(data);
}
