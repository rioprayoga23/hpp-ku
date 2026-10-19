import { useMemo, useState } from 'react';
import { Button, Dialog, TextArea, Callout } from '@radix-ui/themes';
import { CheckCircledIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { calculate, rupiah } from '../model.js';
import { importRecipe } from '../recipeTransfer.js';

export default function TransferDialog({ open, onOpenChange, onImport, copyFallback }) {
  const [text, setText] = useState('');
  const parsed = useMemo(() => {
    if (!text.trim()) return {};
    try { return { menu: importRecipe(text) }; }
    catch (error) { return { error: error.message }; }
  }, [text]);
  const importedResult = parsed.menu ? calculate(parsed.menu) : null;

  return <Dialog.Root open={open} onOpenChange={onOpenChange}><Dialog.Content maxWidth="620px"><Dialog.Title>{copyFallback ? 'Salin tabel secara manual' : 'Import resep'}</Dialog.Title><Dialog.Description>{copyFallback ? 'Clipboard tidak tersedia. Pilih dan salin tabel di bawah.' : 'Tempel tabel dari Excel, Markdown, atau hasil Salin tabel. Format resep HPP-Ku lama juga bisa diimpor.'}</Dialog.Description>
    <label className="paste-label" htmlFor="recipe-paste">{copyFallback ? 'Tabel HPP' : 'Tempel tabel atau resep di sini'}</label>
    <TextArea id="recipe-paste" size="3" rows={10} value={copyFallback || text} readOnly={Boolean(copyFallback)} onChange={event => setText(event.target.value)} maxLength={100000} placeholder={'No	Menu	Komposisi	Harga Beli Kemasan	Ukuran Kemasan	Takaran / Cup	HPP / Porsi'} onFocus={event => { if (copyFallback) event.target.select(); }} />
    {!copyFallback && parsed.error && <Callout.Root color="red" className="import-feedback"><Callout.Icon><ExclamationTriangleIcon/></Callout.Icon><Callout.Text>{parsed.error}</Callout.Text></Callout.Root>}
    {!copyFallback && parsed.menu && <Callout.Root className="import-feedback"><Callout.Icon><CheckCircledIcon/></Callout.Icon><Callout.Text><strong>{parsed.menu.name || 'Resep tanpa nama'}</strong><br/>{parsed.menu.items.length} komponen aktif · HPP / cup: {rupiah(importedResult.cost)}</Callout.Text></Callout.Root>}
    <div className="dialog-actions"><Dialog.Close><Button variant="soft" color="gray">Batal</Button></Dialog.Close>{copyFallback ? <Button highContrast onClick={() => document.getElementById('recipe-paste')?.select()}>Pilih semua teks</Button> : <Button highContrast disabled={!parsed.menu} onClick={() => { onImport(parsed.menu); setText(''); onOpenChange(false); }}>Gunakan resep</Button>}</div>
  </Dialog.Content></Dialog.Root>;
}
