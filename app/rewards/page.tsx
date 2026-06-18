import Ticker from '@/components/Ticker';
import FinalCTA from '@/components/FinalCTA';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata('rewards');

// TODO: replace placeholders with the real collections ledger feed.
const LEDGER = [
  { date: 'Jun 05, 2026', flag: '❤️', practice: 'Cardiology Group', size: 'Multi-site', plan: 'Medicare', amt: '$12,129', tx: 'CLM-bd5cac' },
  { date: 'Jun 05, 2026', flag: '🦴', practice: 'Orthopedic Clinic', size: '8 providers', plan: 'Aetna', amt: '$8,777', tx: 'CLM-942ddf' },
  { date: 'Jun 05, 2026', flag: '🩺', practice: 'Internal Medicine', size: '4 providers', plan: 'BCBS', amt: '$4,294', tx: 'CLM-4a51c3' },
  { date: 'Jun 05, 2026', flag: '🧒', practice: 'Pediatrics Assoc.', size: 'Group', plan: 'Medicaid', amt: '$3,402', tx: 'CLM-cdc7f1' },
  { date: 'Jun 04, 2026', flag: '🧴', practice: 'Dermatology Clinic', size: 'Solo', plan: 'Cigna', amt: '$2,184', tx: 'CLM-f54c1a' },
  { date: 'Jun 04, 2026', flag: '🧠', practice: 'Neurology Assoc.', size: '5 providers', plan: 'UnitedHealthcare', amt: '$13,589', tx: 'CLM-feb92b' },
  { date: 'Jun 04, 2026', flag: '🤰', practice: 'OB-GYN Practice', size: 'Group', plan: 'Humana', amt: '$5,574', tx: 'CLM-d5d093' },
  { date: 'Jun 04, 2026', flag: '🚑', practice: 'Urgent Care', size: '6 providers', plan: 'Aetna', amt: '$3,130', tx: 'CLM-30c363' },
  { date: 'Jun 04, 2026', flag: '💊', practice: 'Pain Management', size: 'Solo', plan: 'Medicare', amt: '$2,491', tx: 'CLM-9ebbe5' },
  { date: 'Jun 04, 2026', flag: '🔬', practice: 'Gastroenterology', size: '3 providers', plan: 'BCBS', amt: '$9,909', tx: 'CLM-72e8b1' },
];

const COUNTRIES = [
  { flag: '🏛️', name: 'Medicare', amt: '$14.2M' },
  { flag: '🔵', name: 'BCBS', amt: '$9.9M' },
  { flag: '🟣', name: 'Aetna', amt: '$7.4M' },
  { flag: '🟠', name: 'UnitedHealthcare', amt: '$6.6M' },
  { flag: '🟢', name: 'Cigna', amt: '$4.9M' },
];

export default function Rewards() {
  return (
    <>
      <main className="rw-dash">
        <div className="wrap">
          {/* Status bar */}
          <div className="rw-statusbar reveal">
            <span className="rw-tag">
              [ AKOREMD · VERIFIED RESULTS ]
              <span className="rw-live">
                <span className="lr-dot" /> LIVE
              </span>
            </span>
            <span className="rw-status-meta">
              <span>SYNC <b>CONTINUOUS</b></span>
              <span>AUDIT <b>TRANSPARENT REPORTING</b></span>
              <span>RECORDS <b>28,940</b></span>
            </span>
          </div>

          {/* Hero + stats */}
          <div className="rw-top reveal">
            <div className="rw-hero-card">
              <span className="rw-tag">[ REAL CLAIMS · REAL PRACTICES ]</span>
              <div className="rw-receipts">
                <span className="rw-receipt">+$12,129</span>
                <span className="rw-receipt alt">+$4,294</span>
              </div>
              <h1 className="rw-h1">
                Real Results.
                <br />
                <span className="gt">Fully Transparent.</span>
              </h1>
              <p>
                Every payment AkoreMD has collected and posted for its client practices, logged
                with transparent reporting on every claim. No press releases. Just results.
              </p>
              <a href="/contact" className="btn btn-p" data-magnetic>
                Get Started ↗
              </a>
            </div>

            <div className="rw-right">
              <div className="rw-statbar">
                <div className="rw-statbox">
                  <span className="rw-tag">[ COLLECTED FOR CLIENTS ]</span>
                  <div className="v gt">$48.6M+</div>
                  <div className="s">ALL-TIME · ALL PAYERS</div>
                </div>
                <div className="rw-statbox">
                  <span className="rw-tag">[ CLAIMS PROCESSED ]</span>
                  <div className="v gt">28,940</div>
                  <div className="s">SINCE LAUNCH</div>
                </div>
                <div className="rw-statbox">
                  <span className="rw-tag">[ CLEAN CLAIM RATE ]</span>
                  <div className="v gt">98.2%</div>
                  <div className="s">FIRST-PASS ACCEPTANCE</div>
                </div>
              </div>

              {/* Milestones */}
              <div className="rw-panel rw-miles-panel">
                <div className="rw-panel-head">
                  <span className="rw-tag">[ MILESTONES ]</span>
                  <span className="rw-tag muted">SINCE LAUNCH</span>
                </div>
                <svg className="rw-spark" viewBox="0 0 600 90" preserveAspectRatio="none">
                  <polyline
                    points="0,80 150,64 300,40 450,20 600,8"
                    fill="none"
                    stroke="url(#rwspark)"
                    strokeWidth="2.5"
                  />
                  <defs>
                    <linearGradient id="rwspark" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#9fd8cd" />
                      <stop offset="1" stopColor="#0fa89c" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="rw-mile-row">
                  <div className="rw-mile">
                    <div className="d">AUG 9, 2024</div>
                    <div className="a gt">$1M</div>
                    <div className="l">First million collected</div>
                  </div>
                  <div className="rw-mile">
                    <div className="d">DEC 2024</div>
                    <div className="a gt">$12M</div>
                    <div className="l">120 practices onboarded</div>
                  </div>
                  <div className="rw-mile">
                    <div className="d">FEB 2026</div>
                    <div className="a gt">$40M</div>
                    <div className="l">Record month ($4.1M / 30d)</div>
                  </div>
                  <div className="rw-mile">
                    <div className="d">ON THE HORIZON</div>
                    <div className="a muted">$60M</div>
                    <div className="l">Next milestone, in reach</div>
                  </div>
                </div>
              </div>

              {/* Live total */}
              <div className="rw-panel rw-total">
                <span className="rw-corner tl" />
                <span className="rw-corner tr" />
                <span className="rw-corner bl" />
                <span className="rw-corner br" />
                <span className="rw-tag center">
                  <span className="lr-dot" /> LIVE NOW · JUN 05, 2026 · CURRENT TOTAL
                </span>
                <div className="rw-total-num gt">$48,612,940.08</div>
                <div className="rw-total-row">
                  <span>
                    <b>28,940</b> CLAIMS
                  </span>
                  <span>
                    <b>98.2%</b> CLEAN CLAIM RATE
                  </span>
                  <span>
                    <b>All</b> SPECIALTIES
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mid: payers + hall of fame + payer mix */}
          <div className="rw-mid reveal">
            <div className="rw-panel rw-globe">
              <span className="rw-tag">[ TOP PAYERS ]</span>
              <div className="rw-globe-list">
                {COUNTRIES.map((c) => (
                  <span className="rw-country" key={c.name}>
                    <span className="f">{c.flag}</span>
                    <span className="n">{c.name}</span>
                    <span className="a gt">{c.amt}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="rw-panel">
              <div className="rw-panel-head">
                <span className="rw-tag">[ HIGHLIGHTS ]</span>
                <span className="rw-tag muted">RECORDS</span>
              </div>
              <div className="rw-records">
                <div className="rw-rec">
                  <div>
                    <div className="t">Largest single recovery</div>
                    <div className="m">Cardiology Group · Feb 2026</div>
                  </div>
                  <div className="amt gt">$140,513</div>
                </div>
                <div className="rw-rec">
                  <div>
                    <div className="t">Biggest denial turnaround</div>
                    <div className="m">Orthopedic Clinic · appeals won</div>
                  </div>
                  <div className="amt gt">−42%</div>
                </div>
                <div className="rw-rec">
                  <div>
                    <div className="t">Single-day record</div>
                    <div className="m">38 practices · May 01, 2026</div>
                  </div>
                  <div className="amt gt">$361,570</div>
                </div>
                <div className="rw-rec">
                  <div>
                    <div className="t">Latest milestone</div>
                    <div className="m">Live · last activity just now</div>
                  </div>
                  <div className="amt gt">$48.6M</div>
                </div>
              </div>
            </div>

            <div className="rw-panel">
              <div className="rw-panel-head">
                <span className="rw-tag">[ PAYER MIX ]</span>
                <span className="rw-tag muted">BREAKDOWN</span>
              </div>
              <div className="rw-rail">
                <div className="rw-rail-head">
                  <span>GOVERNMENT · 38.6% of collected</span>
                  <span className="amt gt">$18.8M</span>
                </div>
                <div className="rw-bar">
                  <span style={{ width: '38.6%' }} />
                </div>
                <div className="rw-rail-meta">
                  <span>MEDICARE</span>
                  <span>MEDICAID</span>
                  <span>TRICARE</span>
                </div>
              </div>
              <div className="rw-rail">
                <div className="rw-rail-head">
                  <span>COMMERCIAL · 61.4% of collected</span>
                  <span className="amt gt">$29.8M</span>
                </div>
                <div className="rw-bar">
                  <span style={{ width: '61.4%' }} />
                </div>
                <div className="rw-rail-meta">
                  <span>BCBS</span>
                  <span>AETNA</span>
                  <span>UHC · CIGNA</span>
                </div>
              </div>
              <div className="rw-balance">
                <span style={{ width: '38.6%' }} className="c" />
                <span style={{ width: '61.4%' }} className="r" />
              </div>
            </div>
          </div>

          {/* Live collection stream */}
          <div className="rw-panel rw-stream reveal">
            <span className="rw-tag">[ LIVE COLLECTION STREAM ]</span>
            <Ticker />
          </div>

          {/* Collections ledger */}
          <div className="rw-panel rw-ledger-panel reveal">
            <div className="rw-panel-head">
              <span className="rw-tag">
                [ COLLECTIONS LEDGER ] <span className="muted">// EVERY PAYMENT SINCE LAUNCH · AUG 9 2024 → PRESENT</span>
              </span>
              <span className="rw-tag muted">SHOWING 1–10 OF 28,940</span>
            </div>
            <div className="rw-ledger-controls">
              <select className="rw-input" defaultValue="all" aria-label="Date range">
                <option value="all">All time</option>
                <option value="30">Last 30 days</option>
                <option value="7">Last 7 days</option>
                <option value="24">Last 24 hours</option>
              </select>
              <input className="rw-input grow" placeholder="Search practice or payer" aria-label="Search practice or payer" />
              <button className="rw-input rw-reset" type="button">Reset</button>
            </div>
            <div className="rw-ledger-wrap">
              <table className="rw-ledger">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Practice</th>
                    <th>Size</th>
                    <th>Payer</th>
                    <th>Collected</th>
                    <th>Claim ID</th>
                  </tr>
                </thead>
                <tbody>
                  {LEDGER.map((r) => (
                    <tr key={r.tx}>
                      <td>{r.date}</td>
                      <td>
                        <span className="rw-flag">{r.flag}</span> {r.practice}
                      </td>
                      <td>{r.size}</td>
                      <td>{r.plan}</td>
                      <td className="amt gt">{r.amt}</td>
                      <td className="tx">{r.tx} ↗</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rw-ledger-foot">
              <span>MAX 10 ROWS · LIVE LEDGER FEED</span>
              <span className="rw-pager">
                <b>1–10</b>
                <button type="button">‹ Prev</button>
                <button type="button">Next ›</button>
                <span className="muted">FILTER STATE // DEFAULT</span>
              </span>
            </div>
          </div>

          {/* Methodology */}
          <div className="rw-method reveal">
            <div className="rw-panel">
              <span className="rw-tag">[ METHODOLOGY ]</span>
              <h3>How the ledger works</h3>
              <p>
                Collection data is drawn live from the AkoreMD billing platform via realtime sync.
                Practice identities are anonymised to specialty and size; every figure ties back to
                a posted remittance in your monthly reporting.
              </p>
            </div>
            <div className="rw-panel">
              <span className="rw-tag">[ WHY THIS MATTERS ]</span>
              <h3>Proof, not press releases</h3>
              <p>
                Most billing companies publish self-reported totals. We expose collections at the
                claim level across every payer, with transparent reporting on each one. No vanity
                metrics — just a ledger you can reconcile.
              </p>
            </div>
            <div className="rw-panel">
              <span className="rw-tag">[ LAST UPDATE ]</span>
              <div className="rw-update">
                <div className="rw-update-row">
                  <span>SYNC</span>
                  <b>JUN 05, 2026</b>
                </div>
                <div className="rw-update-row">
                  <span>NEXT</span>
                  <b>CONTINUOUS</b>
                </div>
                <div className="rw-update-row">
                  <span>AUDIT</span>
                  <b className="gt">REPORTED</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FinalCTA />
    </>
  );
}
