'use client';

import { useT } from './LanguageProvider';

//    = wide diamond separators from the mockup (nowrap collapses ordinary spaces).
const SEP = '  ◆  ';

export default function PromoBar() {
  const t = useT();
  const promo = t.promo.join(SEP) + SEP;
  return (
    <div className="promo">
      <div className="row" id="promoRow">
        <span>{promo}</span>
        <span>{promo}</span>
      </div>
    </div>
  );
}
