import { Button, Callout } from "@radix-ui/themes";
import { CopyIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { decimal, rupiah } from "../model.js";
import Overheads from "./Overheads.jsx";
import Pricing from "./Pricing.jsx";

export default function Summary({
  menu,
  update,
  result,
  canCopy,
  onCopy,
  notify,
}) {
  const showPrice = result.cost !== null && result.price !== null;
  const overheadActive = menu.overheadsActive !== false;

  return (
    <aside className="summary-column" aria-labelledby="summary-title">
      <section className="panel summary-panel" id="summary">
        <div className="summary-body">
          {/* 1. TOP: Biaya Operasional */}
          <div className="summary-section overhead-section">
            <Overheads
              menu={menu}
              update={update}
              result={result}
              notify={notify}
            />
          </div>

          {/* 2. MIDDLE: Margin Keuntungan */}
          <div className="summary-section pricing-section">
            <Pricing menu={menu} update={update} result={result} />
          </div>

          {/* 3. BOTTOM: Ringkasan / cup (PALING BAWAH) */}
          <div className="summary-section summary-final-section">
            <div className="final-summary-header">
              <h2 id="summary-title" className="summary-main-title">
                Ringkasan / cup
              </h2>
            </div>

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
                <dt>Operasional / cup</dt>
                <dd>{overheadActive ? rupiah(result.overhead) : "Rp 0"}</dd>
              </div>
              <div className="total-cost">
                <dt>Total HPP</dt>
                <dd id="grand-total">{rupiah(result.cost)}</dd>
              </div>
            </dl>

            {showPrice ? (
              <div className="price-results-block">
                <div className="recommended-price">
                  <span>Harga jual / cup</span>
                  <strong id="selling-price">{rupiah(result.price)}</strong>
                </div>
                <dl className="cost-breakdown profit-breakdown">
                  <div className="profit-row">
                    <dt>Estimasi laba</dt>
                    <dd id="net-profit">{rupiah(result.profit)}</dd>
                  </div>
                  <div>
                    <dt>Margin aktual</dt>
                    <dd>{decimal(result.margin)}%</dd>
                  </div>
                </dl>
              </div>
            ) : (
              <p className="price-unavailable">
                Tambahkan bahan untuk menghitung total HPP dan harga jual.
              </p>
            )}

            {result.lossWarning && (
              <Callout.Root color="red" className="summary-warning" size="1">
                <Callout.Icon>
                  <ExclamationTriangleIcon />
                </Callout.Icon>
                <Callout.Text>
                  Harga jual lebih rendah dari total HPP (rugi).
                </Callout.Text>
              </Callout.Root>
            )}
            {result.unallocatedMonthly > 0 && (
              <Callout.Root className="summary-warning" size="1">
                <Callout.Icon>
                  <ExclamationTriangleIcon />
                </Callout.Icon>
                <Callout.Text>
                  Isi target cup per bulan untuk alokasi biaya bulanan ke HPP.
                </Callout.Text>
              </Callout.Root>
            )}
            {result.overheadWarnings.length > 0 && (
              <Callout.Root color="amber" className="summary-warning" size="1">
                <Callout.Icon>
                  <ExclamationTriangleIcon />
                </Callout.Icon>
                <Callout.Text>{result.overheadWarnings.join(" ")}</Callout.Text>
              </Callout.Root>
            )}
            {result.errors.length > 0 && (
              <div className="calculation-errors" role="status">
                <strong>Periksa bahan</strong>
                <ul>
                  {result.errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="save-actions">
              <Button
                highContrast
                size="3"
                onClick={onCopy}
                disabled={!canCopy}
                className="copy-btn-block"
              >
                <CopyIcon />
                Salin tabel HPP
              </Button>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
}
