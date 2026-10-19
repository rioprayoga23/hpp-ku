import { Button, Callout } from '@radix-ui/themes';
import { CopyIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { decimal, rupiah } from '../model.js';

export default function Summary({ result, canCopy, onCopy }) {
  const showPrice = result.marginActive && result.overheadsActive && result.price !== null;
  const rows = [['Bahan baku', result.ingredients], ['Kemasan', result.packaging]];
  if (result.overheadsActive) rows.push(['Operasional / cup', result.overhead]);

  return <aside className="summary-column" aria-labelledby="summary-title"><section className="panel summary-panel" id="summary">
    <div className="panel-heading"><h2 id="summary-title">Ringkasan / cup</h2></div>
    <div className="summary-body">
      <dl className="cost-breakdown">
        {rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{rupiah(value)}</dd></div>)}
        <div className="total-cost"><dt>Total HPP</dt><dd id="grand-total">{rupiah(result.cost)}</dd></div>
      </dl>
      {showPrice ? <>
        <div className="recommended-price"><span>Harga jual / cup</span><strong id="selling-price">{rupiah(result.price)}</strong></div>
        <dl className="cost-breakdown profit-breakdown">
          <div className="profit-row"><dt>Estimasi laba</dt><dd id="net-profit">{rupiah(result.profit)}</dd></div>
          <div><dt>Margin aktual</dt><dd>{decimal(result.margin)}%</dd></div>
        </dl>
      </> : <p className="price-unavailable">{result.marginActive && result.overheadsActive ? 'Periksa komponen aktif untuk menghitung harga jual.' : 'Aktifkan operasional dan margin untuk menghitung harga jual.'}</p>}
      {result.unallocatedMonthly > 0 && <Callout.Root className="summary-warning" size="1"><Callout.Icon><ExclamationTriangleIcon/></Callout.Icon><Callout.Text>Isi target cup per bulan untuk memasukkan overhead bulanan ke HPP.</Callout.Text></Callout.Root>}
      {result.overheadWarnings.length > 0 && <Callout.Root color="amber" className="summary-warning" size="1"><Callout.Icon><ExclamationTriangleIcon/></Callout.Icon><Callout.Text>{result.overheadWarnings.join(' ')}</Callout.Text></Callout.Root>}
      {result.errors.length > 0 && <div className="calculation-errors" role="status"><strong>Periksa bahan</strong><ul>{result.errors.map(error => <li key={error}>{error}</li>)}</ul></div>}
      <div className="save-actions"><Button highContrast size="3" onClick={onCopy} disabled={!canCopy}><CopyIcon/>Salin tabel HPP</Button></div>
    </div>
  </section></aside>;
}
