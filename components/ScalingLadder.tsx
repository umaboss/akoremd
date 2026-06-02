const RUNGS = [
  { lv: 'Start', amt: <>$100<span>K</span></> },
  { lv: 'Step 1', amt: <>$200<span>K</span></> },
  { lv: 'Step 2', amt: <>$400<span>K</span></> },
  { lv: 'Step 3', amt: <>$1<span>M</span></> },
  { lv: 'Max', amt: <>$2M</>, peak: true },
];

export default function ScalingLadder() {
  return (
    <section className="sec band" id="scaling">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">[ 06 — SCALING PLAN ]</span>
            <h2 className="h2">
              Stay consistent. <span className="gt">Grow to $2M.</span>
            </h2>
          </div>
          <p>
            Hit your targets and your allocation steps up automatically. No new fee, no
            re-evaluation.
          </p>
        </div>
        <div className="ladder">
          {RUNGS.map((r) => (
            <div className={`rung reveal${r.peak ? ' peak' : ''}`} key={r.lv}>
              <div className="lv">{r.lv}</div>
              <div className="amt">{r.amt}</div>
            </div>
          ))}
        </div>
        <div className="ladder-note">
          Allocation increases after consistent, profitable payout cycles.{' '}
          {/* TODO from the mockup — left verbatim as visible dimmed text */}
          <span style={{ color: 'var(--dim)' }}>
            /* TODO: confirm exact scaling rule &amp; % uplift */
          </span>
        </div>
      </div>
    </section>
  );
}
