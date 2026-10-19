import { freshMenu, id, ingredientCost, units } from './model.js';

const clean = value => String(value ?? '').replace(/[\r\n\t]/g, ' ').trim();
const rawNumber = value => String(Math.round(Number(value) || 0));
const groupedNumber = value => new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0, useGrouping: true }).format(Number(value) || 0);
const quantityNumber = value => new Intl.NumberFormat('id-ID', { maximumFractionDigits: 12, useGrouping: false }).format(Number(value) || 0);
const htmlEscape = value => String(value ?? '').replace(/[&<>"]/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;',
}[character]));
const excelText = value => {
  const text = clean(value);
  return /^[=+@-]/.test(text) ? "'" + text : text;
};

function copiedRows(menu) {
  const activeItems = menu.items.filter(item => item.active);
  const rows = activeItems.map((item, index) => ({
    index,
    cells: [
      '1',
      excelText(menu.name || '(tanpa nama)'),
      excelText(item.name || '(tanpa nama)'),
      rawNumber(item.price),
      quantityNumber(item.packQty) + ' ' + item.packUnit,
      quantityNumber(item.usage) + ' ' + item.usageUnit,
      rawNumber(ingredientCost(item).cost),
    ],
    total: false,
  }));
  const total = rows.reduce((sum, row) => sum + Number(row.cells[6]), 0);
  rows.push({ cells: ['', '', '', '', '', 'TOTAL HPP / CUP', String(total)], total: true });
  return rows;
}

export function copiedHppTotal(menu) {
  return copiedRows(menu).filter(row => !row.total).reduce((sum, row) => sum + Number(row.cells[6]), 0);
}

export function exportRecipe(menu) {
  const header = ['No', 'Menu', 'Komposisi', 'Harga Beli Kemasan', 'Ukuran Kemasan', 'Takaran / Cup', 'HPP / Porsi'];
  const rows = copiedRows(menu).map(row => row.cells.map((value, index) =>
    value !== '' && (index === 3 || index === 6) ? groupedNumber(value) : value,
  ).join('\t'));
  return [header.join('\t'), ...rows].join('\n');
}

export function exportRecipeHtml(menu) {
  const rows = copiedRows(menu);
  const itemCount = rows.filter(row => !row.total).length;
  const header = ['No', 'Menu', 'Komposisi', 'Harga Beli Kemasan', 'Ukuran Kemasan', 'Takaran / Cup', 'HPP / Porsi'];
  const headerRow = '<tr>' + header.map(value => '<th style="border:1px solid #173f73;padding:6px 8px;vertical-align:middle;text-align:center;background:#214e78;color:#fff;font-weight:bold">' + htmlEscape(value) + '</th>').join('') + '</tr>';
  const htmlRows = rows.map(row => '<tr>' + row.cells.map((value, index) => {
    if (!row.total && index < 2) {
      if (row.index > 0) return '';
      const style = [
        'border:1px solid #d8dee8',
        'padding:5px 8px',
        'vertical-align:middle',
        'mso-vertical-align-alt:middle',
        index === 0 ? 'text-align:center' : 'text-align:left',
      ].join(';');
      const align = index === 0 ? 'center' : 'left';
      return '<td rowspan="' + itemCount + '" valign="middle" align="' + align + '" style="' + style + '">' + htmlEscape(value) + '</td>';
    }
    const numeric = index === 3 || index === 6;
    const style = [
      'border:1px solid #d8dee8',
      'padding:5px 8px',
      'vertical-align:middle',
      numeric ? 'text-align:right' : 'text-align:left',
      numeric ? 'mso-number-format:"\\#\\,\\#\\#0"' : '',
      row.total ? 'font-weight:bold;border-top:2px solid #173f73' : '',
    ].filter(Boolean).join(';');
    const numericValue = numeric && value !== '' ? ' x:num="' + rawNumber(value) + '"' : '';
    return '<td' + numericValue + " style='" + style + "'>" + htmlEscape(value) + '</td>';
  }).join('') + '</tr>').join('');
  return '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body><table><thead>' + headerRow + '</thead><tbody>' + htmlRows + '</tbody></table></body></html>';
}

function parseNumber(raw, label, allowNegative = false) {
  if (raw === '(belum diisi)') return '';
  const text = String(raw).replace(/^Rp\s*/i, '').replace(/%$/, '').replace(/\s/g, '');
  if (!/^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(text)) throw new Error(label + ': format angka tidak dikenali.');
  const n = Number(text.replace(/\./g, '').replace(',', '.'));
  if (!Number.isFinite(n) || (!allowNegative && n < 0) || Math.abs(n) > Number.MAX_SAFE_INTEGER) throw new Error(label + ': isi angka yang valid.');
  return n;
}

function quantity(raw, label) {
  const match = String(raw).match(/^(.+)\s+(ml|L|g|kg|pcs)$/);
  if (!match || !units.includes(match[2])) throw new Error(label + ': sertakan satuan ml, L, g, kg, atau pcs.');
  return [parseNumber(match[1], label), match[2]];
}

function markdownTableToTsv(text) {
  return text.split('\n').filter(line => line.includes('|')).map(line => {
    const trimmed = line.trim().replace(/^\|/, '').replace(/\|$/, '');
    const cells = trimmed.split('|').map(cell => cell.trim().replace(/\*\*/g, '').replace(/__([^_]+)__/g, '$1').replace(/`/g, ''));
    if (cells.length && cells.every(cell => /^:?-{3,}:?$/.test(cell.replace(/\s/g, '')))) return '';
    return cells.join('\t');
  }).filter(Boolean).join('\n');
}

function looksLikeQuantity(value) {
  return /^.+\s+(ml|L|g|kg|pcs)$/i.test(String(value ?? '').trim());
}

function importTable(text) {
  const rows = text.replace(/^\uFEFF/, '').replace(/\r/g, '').split('\n').map(line => line.split('\t').map(cell => cell.trim()));
  const oldFormat = (rows[0] || []).map(cell => cell.toLowerCase()).slice(0, 3).join('|') === 'no|menu|komposisi';
  const numberedFormat = !oldFormat && (rows[0] || []).length >= 7 && /^\d+$/.test((rows[0] || [])[0] || '');
  const menu = freshMenu();
  menu.items = [];
  menu.overheads = [];
  menu.name = '';
  let hasOperationalRow = false;
  let previousMenu = '';

  const addItem = (menuName, itemName, price, pack, usage) => {
    const cleanMenuName = menuName.startsWith("'") ? menuName.slice(1) : menuName;
    const cleanItemName = itemName.startsWith("'") ? itemName.slice(1) : itemName;
    if (!cleanItemName) return;
    if (menu.name && cleanMenuName && menu.name !== cleanMenuName) throw new Error('Salinan tabel berisi lebih dari satu nama menu.');
    if (!menu.name && cleanMenuName && cleanMenuName !== '(tanpa nama)') menu.name = cleanMenuName;
    const [packQty, packUnit] = quantity(pack, 'Ukuran kemasan');
    const [usageQty, usageUnit] = quantity(usage, 'Takaran / cup');
    const packagingWords = /cup|gelas|lid|tutup|sedotan|straw|seal|kemasan|stiker|sticker|plastik|plastic/i;
    menu.items.push({
      id: id(),
      name: cleanItemName,
      price: parseNumber(price, 'Harga beli kemasan'),
      packQty,
      packUnit,
      usage: usageQty,
      usageUnit,
      kind: packagingWords.test(cleanItemName) ? 'packaging' : 'ingredient',
      active: true,
    });
  };

  const dataRows = oldFormat ? rows.slice(1) : rows;
  for (const row of dataRows) {
    if (row.every(cell => !cell)) continue;
    if (oldFormat || numberedFormat) {
      const cells = [...row, '', '', '', '', '', '', ''].slice(0, 7);
      if (cells.some(cell => cell.toLowerCase().includes('total hpp'))) continue;
      if (oldFormat && cells[5].toLowerCase().includes('operasional')) {
        menu.overheads.push({ id: id(), name: 'Operasional / cup', amount: parseNumber(cells[6], 'Operasional / cup'), period: 'portion' });
        hasOperationalRow = true;
        continue;
      }
      if (/^\d+$/.test(cells[0]) && cells[1]) previousMenu = cells[1];

      // Accept compact Markdown tables where merged No/Menu cells shift continuation rows left.
      if (cells[0] && !/^\d+$/.test(cells[0]) && cells[1] && /^\d[\d.,]*$/.test(cells[1]) && looksLikeQuantity(cells[2]) && looksLikeQuantity(cells[3])) {
        addItem(previousMenu, cells[0], cells[1], cells[2], cells[3]);
        continue;
      }

      const menuName = cells[1] || previousMenu;
      if (menuName && cells[2] && cells[3] && cells[4] && cells[5]) {
        if (cells[1]) previousMenu = cells[1];
        addItem(menuName, cells[2], cells[3], cells[4], cells[5]);
      }
    } else {
      const cells = [...row, '', '', '', '', '', ''].slice(0, 6);
      if (cells[4].toLowerCase().includes('total hpp')) continue;
      if (cells[0] && cells[1]) addItem(cells[0], cells[1], cells[2], cells[3], cells[4]);
    }
  }

  if (!menu.items.length) throw new Error('Tabel belum berisi komponen untuk diimpor.');
  menu.overheadsActive = hasOperationalRow;
  menu.marginActive = false;
  return menu;
}

export function importRecipe(text) {
  if (text.length > 100000) throw new Error('Teks terlalu panjang. Maksimal 100.000 karakter.');
  let cleanText = text.replace(/\r/g, '');
  const fence = String.fromCharCode(96).repeat(3);
  if (cleanText.startsWith(fence)) {
    const firstBreak = cleanText.indexOf('\n');
    if (firstBreak >= 0) cleanText = cleanText.slice(firstBreak + 1);
  }
  if (cleanText.endsWith(fence)) cleanText = cleanText.slice(0, -fence.length);
  if (cleanText.split('\n').some(line => /^\s*\|.*\|\s*$/.test(line))) cleanText = markdownTableToTsv(cleanText);
  const firstLine = cleanText.split('\n')[0].trim().replace(/^\uFEFF/, '');
  if (firstLine.toLowerCase().startsWith('no\tmenu\t') || firstLine.includes('\t')) return importTable(cleanText);

  const lines = cleanText.split('\n').map(line => line.trim()).filter(Boolean);
  if (!['RESEP HPP-KU', 'RESEP KOPTI'].includes(lines[0])) throw new Error('Tempel tabel HPP atau format resep HPP-Ku yang lama.');
  const menu = freshMenu(), settings = {}, head = {};
  let section = 'head', current = null;
  const sections = new Set();
  for (const line of lines.slice(1)) {
    if (['BAHAN AKTIF', 'OPERASIONAL', 'OVERHEAD', 'PENGATURAN', 'RINGKASAN PER PORSI'].includes(line)) { section = line; sections.add(line); current = null; continue; }
    if (section === 'RINGKASAN PER PORSI' || line.startsWith('Tempel teks ini')) continue;
    if (line === '(tidak ada)') continue;
    if ((section === 'BAHAN AKTIF' || section === 'OPERASIONAL' || section === 'OVERHEAD') && line.startsWith('- ')) {
      const importedName = line.slice(2).trim();
      current = { id: id(), name: importedName === '(tanpa nama)' ? '' : importedName };
      if (section === 'BAHAN AKTIF') { current.active = true; menu.items.push(current); }
      else menu.overheads.push(current);
      continue;
    }
    const split = line.indexOf(':');
    if (split < 0) throw new Error('Baris tidak dikenali: ' + line.slice(0, 70));
    const label = line.slice(0, split).trim(), value = line.slice(split + 1).trim();
    if (section === 'head') head[label] = value;
    else if (section === 'PENGATURAN') settings[label] = value;
    else if (section === 'BAHAN AKTIF' && current) {
      if (label === 'Jenis') { if (!['Kemasan', 'Bahan'].includes(value)) throw new Error('Jenis komponen harus Bahan atau Kemasan.'); current.kind = value === 'Kemasan' ? 'packaging' : 'ingredient'; }
      else if (label === 'Harga beli') current.price = parseNumber(value, label);
      else if (label === 'Isi kemasan') [current.packQty, current.packUnit] = quantity(value, label);
      else if (label === 'Pemakaian') [current.usage, current.usageUnit] = quantity(value, label);
      else throw new Error('Kolom bahan tidak dikenali: ' + label);
    } else if ((section === 'OPERASIONAL' || section === 'OVERHEAD') && current) {
      if (label === 'Nominal') current.amount = parseNumber(value, label);
      else if (label === 'Periode') { if (!['Bulan', 'Cup', 'Porsi'].includes(value)) throw new Error('Periode biaya harus Bulan atau Cup.'); current.period = value === 'Bulan' ? 'month' : 'portion'; }
      else throw new Error('Kolom biaya tidak dikenali: ' + label);
    } else throw new Error('Baris tidak pada bagian yang tepat: ' + label);
  }
  if (!head['Nama minuman'] && !head['Nama menu']) throw new Error('Nama minuman tidak ditemukan.');
  if (!sections.has('BAHAN AKTIF') || !(sections.has('OPERASIONAL') || sections.has('OVERHEAD')) || !sections.has('PENGATURAN')) throw new Error('Salinan resep belum lengkap.');
  for (const item of menu.items) if (['kind', 'price', 'packQty', 'packUnit', 'usage', 'usageUnit'].some(key => item[key] === undefined)) throw new Error('Data bahan “' + item.name + '” belum lengkap.');
  for (const overhead of menu.overheads) if (overhead.amount === undefined || !overhead.period) throw new Error('Data biaya “' + overhead.name + '” belum lengkap.');
  const oldMode = String(settings.Metode ?? '').toLowerCase();
  const margin = settings.Margin ?? settings['Target keuntungan'];
  if (margin === undefined) throw new Error('Margin resep tidak ditemukan.');
  const readActive = (key, fallback) => {
    const value = settings[key];
    if (value === undefined) return fallback;
    if (value === 'Ya') return true;
    if (value === 'Tidak') return false;
    throw new Error(key + ': pilih Ya atau Tidak.');
  };
  menu.name = (head['Nama minuman'] ?? head['Nama menu']) === '(tanpa nama)' ? '' : head['Nama minuman'] ?? head['Nama menu'];
  menu.target = parseNumber(settings['Target cup/bulan'] ?? settings['Target porsi/bulan'] ?? '(belum diisi)', 'Target cup/bulan', true);
  menu.overheadsActive = readActive('Operasional aktif', true);
  menu.marginActive = readActive('Margin aktif', true);
  const oldPercent = parseNumber(margin, 'Margin');
  menu.pricing = { percent: oldMode === 'markup' ? (oldPercent / (100 + oldPercent)) * 100 : oldPercent };
  return menu;
}
