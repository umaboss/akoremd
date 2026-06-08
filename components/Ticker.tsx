// TODO: replace with the real payment-posting feed. Practices, payers and amounts are placeholders.
// Amounts are fixed (not Math.random as in the mockup) so SSR markup is stable.
const NAMES = [
  'Cardiology · Aetna', 'Family Med · BCBS', 'Orthopedics · UHC', 'Internal Med · Cigna',
  'Pediatrics · Medicaid', 'Neurology · Medicare', 'Dermatology · Humana', 'OB-GYN · Aetna',
  'Urgent Care · BCBS', 'Gastro · UHC', 'Pain Mgmt · Cigna', 'Radiology · Medicare',
];
const FLAGS = ['❤️', '🩺', '🦴', '🫀', '🧒', '🧠', '🧴', '🤰', '🚑', '🔬', '💊', '📷'];
const AMOUNTS = [4820, 1340, 7650, 2980, 6210, 920, 8470, 3760, 5290, 1880, 7010, 2450, 9320, 1610];

function Chip({ i }: { i: number }) {
  return (
    <span className="chip">
      <span className="f">{FLAGS[i % FLAGS.length]}</span>
      <span className="n">{NAMES[i % NAMES.length]}</span>
      <span className="a">+${AMOUNTS[i % AMOUNTS.length].toLocaleString('en-US')}</span>
    </span>
  );
}

export default function Ticker() {
  // Duplicate the run (14 + 14) so the marquee loops seamlessly.
  const run = Array.from({ length: 14 }, (_, i) => i);
  return (
    <div className="ticker">
      <span className="lbl">
        <span className="p" />
        LIVE
      </span>
      <div className="chips" id="chips">
        {run.map((i) => (
          <Chip key={`a-${i}`} i={i} />
        ))}
        {run.map((i) => (
          <Chip key={`b-${i}`} i={i} />
        ))}
      </div>
    </div>
  );
}
