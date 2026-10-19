import { Button, Switch, TextField, Badge } from '@radix-ui/themes';
import { PlusIcon, TrashIcon } from '@radix-ui/react-icons';
import { Choice, NumberInput } from './Fields.jsx';
import IconAction from './IconAction.jsx';
import { ingredientCost, rupiah, units, newIngredient } from '../model.js';
export default function Ingredients({ items, onChange, notify }) {
  const update = (index, patch) => onChange(items.map((item, i) => i === index ? { ...item, ...patch } : item));
  const remove = index => { const removed = items[index]; onChange(items.filter((_, i) => i !== index)); notify('Komponen dihapus.', () => onChange(current => { const next = [...current]; next.splice(Math.min(index, next.length), 0, removed); return next; })); };
  return <section className="panel ingredients-panel" aria-labelledby="recipe-heading">
    <div className="panel-heading"><h2 id="recipe-heading">Bahan & kemasan</h2><Badge color="gray" variant="soft">{items.filter(i => i.active).length}/{items.length} aktif</Badge></div>
    <div className="table-scroll" role="region" aria-label="Tabel bahan dan kemasan" tabIndex={0}>
      <table className="ingredients-table"><colgroup><col className="ingredient-name-col"/><col className="ingredient-price-col"/><col className="ingredient-size-col"/><col className="ingredient-size-col"/><col className="ingredient-cost-col"/></colgroup><thead><tr><th scope="col">Komponen</th><th scope="col">Harga beli</th><th scope="col">Isi kemasan</th><th scope="col">Pakai / cup</th><th scope="col">Biaya / cup</th></tr></thead><tbody>
      {items.map((item, index) => { const result = ingredientCost(item); return <tr key={item.id} className={item.active ? '' : 'inactive-row'}>
        <td><TextField.Root size="3" value={item.name} onChange={e => update(index, { name: e.target.value })} aria-label={`Nama komponen ${index + 1}`} placeholder="Nama bahan" title={item.name}/><div className="row-options"><Choice value={item.kind} onChange={kind => update(index, { kind })} label={`Jenis ${item.name || index + 1}`} options={[{value:'ingredient',label:'Bahan'},{value:'packaging',label:'Kemasan'}]}/><label className="switch-label"><Switch size="1" checked={item.active} onCheckedChange={active => update(index, { active })} aria-label={`Sertakan ${item.name || 'komponen'} dalam perhitungan`}/></label></div></td>
        <td><NumberInput money value={item.price} onChange={price => update(index, { price })} label={`Harga beli ${item.name || index + 1}`}/></td>
        <td><div className="quantity-input"><NumberInput value={item.packQty} onChange={packQty => update(index, { packQty })} label={`Isi kemasan ${item.name || index + 1}`} invalid={item.active && !(Number(item.packQty) > 0)}/><Choice value={item.packUnit} onChange={packUnit => update(index, { packUnit })} options={units} label={`Satuan kemasan ${item.name || index + 1}`}/></div></td>
        <td><div className="quantity-input"><NumberInput value={item.usage} onChange={usage => update(index, { usage })} label={`Pemakaian ${item.name || index + 1}`}/><Choice value={item.usageUnit} onChange={usageUnit => update(index, { usageUnit })} options={units} label={`Satuan pemakaian ${item.name || index + 1}`}/></div></td>
        <td><div className="row-result"><strong className={result.error ? 'field-error' : ''}>{!item.active ? 'Tidak dihitung' : result.error ? 'Periksa input' : rupiah(result.cost)}</strong><IconAction className="row-delete" onClick={() => remove(index)} label={`Hapus ${item.name || 'komponen'}`}><TrashIcon/></IconAction></div>{result.error && <small className="field-error row-error">{result.error}</small>}</td>
      </tr>; })}
      {!items.length && <tr><td colSpan={5} className="empty-table">Belum ada bahan. Tambahkan bahan pertama untuk mulai menghitung.</td></tr>}
      </tbody></table>
    </div>
    <div className="panel-footer"><Button variant="soft" onClick={() => onChange([...items, newIngredient()])}><PlusIcon/>Tambah bahan</Button></div>
  </section>;
}
