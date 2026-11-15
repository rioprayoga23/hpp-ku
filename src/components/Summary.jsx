import { Copy, Info, TriangleAlert } from 'lucide-react';
import { decimal, rupiah } from '../model.js';

export default function Summary({ result, canCopy, onCopy }) {
  const showPrice = result.cost !== null && result.price !== null;
  return (
    <aside
      className="summary-column"
      aria-labelledby="summary-title"
      id="summary"
    >
      <section className="panel summary-panel">
        <div className="panel-heading">
          <h2 id="summary-title">Ringkasan biaya</h2>
          <span className="muted-count">1 cup</span>
        </div>
        <div className="summary-body">
          <dl className="cost-breakdown">
            <div>
              <dt>Bahan baku</dt>
              <dd>{rupiah(result.ingredients)}</dd>
            </div>
            <div>
              <dt>Kemasan</dt>
              <dd>{rupiah(result.packaging)}</dd>
            </div>
            <div>
              <dt>Operasional</dt>
              <dd>{rupiah(result.overhead)}</dd>
            </div>
            <div className="total-cost">
              <dt>HPP / cup</dt>
              <dd id="grand-total">{rupiah(result.cost)}</dd>
            </div>
          </dl>
          <div className="selling-price">
            <span>Harga jual / cup</span>
            <strong id="selling-price">
              {showPrice ? rupiah(result.price) : '—'}
            </strong>
          </div>
          <div className="batch-summary">
            <h3>
              Produksi{' '}
              <span className="batch-cup-count">{decimal(result.cups)}</span>{' '}
              cup
            </h3>
            <dl className="cost-breakdown">
              <div>
                <dt>Total biaya</dt>
                <dd>{rupiah(result.batchCost)}</dd>
              </div>
              <div>
                <dt>Total penjualan</dt>
                <dd>{rupiah(result.batchPrice)}</dd>
              </div>
              <div className="batch-profit">
                <dt>Estimasi laba</dt>
                <dd>{rupiah(result.batchProfit)}</dd>
              </div>
              <div className="batch-margin">
                <dt>Margin</dt>
                <dd>
                  {result.margin === null ? '—' : `${decimal(result.margin)}%`}
                </dd>
              </div>
            </dl>
            {result.cups > 1 && (
              <p className="batch-per-cup">
                <span className="batch-per-cup-label">Estimasi laba / cup</span>
                <strong>{rupiah(result.profit)}</strong>
              </p>
            )}
          </div>
          {result.lossWarning && (
            <p className="inline-warning">
              <TriangleAlert aria-hidden="true" />
              Harga jual lebih rendah dari HPP.
            </p>
          )}
          {result.overheadWarnings.length > 0 && (
            <p className="inline-warning">
              <Info aria-hidden="true" />
              <span>{result.overheadWarnings.join(' ')}</span>
            </p>
          )}
          {result.errors.length > 0 && (
            <div className="calculation-errors" role="status">
              <strong>Lengkapi perhitungan</strong>
              <ul>
                {result.errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <button
            className="btn btn-outline copy-summary"
            type="button"
            onClick={onCopy}
            disabled={!canCopy}
          >
            <Copy aria-hidden="true" />
            Salin tabel HPP
          </button>
        </div>
      </section>
    </aside>
  );
}
