//    = the double &nbsp; diamond separators from the mockup (nowrap collapses
// ordinary spaces, so non-breaking spaces are needed to preserve the wide gaps).
const SEP = '  ◆  ';
const PROMO = `May 1 · Buy 1 Get 1 — enter code MOGO at checkout${SEP}Up to 100% profit split${SEP}Payouts from 1 business day${SEP}`;

export default function PromoBar() {
  return (
    <div className="promo">
      <div className="row" id="promoRow">
        <span>{PROMO}</span>
        <span>{PROMO}</span>
      </div>
    </div>
  );
}
