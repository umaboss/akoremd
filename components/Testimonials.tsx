// TODO: replace with real verified testimonials — names, accounts and payouts are placeholders.
const REVIEWS = [
  {
    quote:
      'Took the daily cycle for a week to cover rent, switched to monthly after. Having the choice is the whole point.',
    nm: 'Evgeny M.',
    l: '$100K · Funded',
    pay: '$36,393',
  },
  {
    quote:
      'The dashboard shows my exact drawdown buffer at all times. I never have to guess where I stand on the rules.',
    nm: 'Mac Ting',
    l: '$200K · Funded',
    pay: '$50,400',
  },
  {
    quote:
      'Support actually answers. Got a payout question resolved on chat in fifteen minutes at 2am my time.',
    nm: 'Nipong',
    l: '$50K · Funded',
    pay: '$12,656',
  },
  {
    quote:
      'Came from a firm that moved the target after I passed. Capital Chain published every rule. Refreshing.',
    nm: 'Aisha N.',
    l: '$100K · Funded',
    pay: '$41,210',
  },
];

export default function Testimonials() {
  return (
    <section className="sec" id="reviews">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="idx">[ 09 — TRADER STORIES ]</span>
            <h2 className="h2">
              What funded traders <span className="gt">actually say.</span>
            </h2>
          </div>
          <p>Verified payouts from Capital Chain traders. Scroll →</p>
        </div>
      </div>
      <div className="wrap">
        <div className="hscroll">
          {REVIEWS.map((r) => (
            <div className="hcard rev reveal" key={r.nm}>
              <div className="stars">★★★★★</div>
              <p>{r.quote}</p>
              <div className="who">
                <span className="av" />
                <div>
                  <div className="nm">{r.nm}</div>
                  <div className="l">{r.l}</div>
                </div>
                <span className="pay">{r.pay}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
