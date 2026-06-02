const TILES = [
  { cls: 'a', badge: 'MT5 / MT4', h: 'MetaTrader', p: 'Full multi-asset terminals. EAs and custom indicators fully supported.' },
  { cls: 'b', badge: 'cTRADER', h: 'cTrader', p: 'Depth-of-market execution and clean charting.' },
  { cls: 'c', badge: 'API', h: 'FIX / REST', p: 'For systematic traders.' },
  { cls: 'd', badge: '⚡ SPEED', h: '<30ms fills', p: 'Market execution on deep liquidity. No requotes, no artificial slippage.' },
  { cls: 'e', badge: '📈 LEVERAGE', h: '1:100', p: 'FX, indices, metals and crypto with professional leverage.' },
  { cls: 'f', badge: '✓ FREEDOM', h: 'Trade everything', p: 'News, weekend holds, hedging and EAs — all allowed.' },
];

export default function Platforms() {
  return (
    <section className="sec" id="platforms">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">[ 07 — EXECUTION ]</span>
            <h2 className="h2">
              Trade where you&apos;re <span className="gt">already sharp.</span>
            </h2>
          </div>
          <p>
            Institutional infrastructure, retail access. Plug into the terminals you already know.
          </p>
        </div>
        <div className="plat-bento">
          {TILES.map((t) => (
            <div className={`ptile ${t.cls} reveal`} key={t.cls} data-tilt>
              <span className="badge">{t.badge}</span>
              <h4>{t.h}</h4>
              <p>{t.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
