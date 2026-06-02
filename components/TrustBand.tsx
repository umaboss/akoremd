// TODO: replace with real verified figures (paid-to-traders, funded accounts,
// countries, Trustpilot score). Numbers below are illustrative placeholders.
export default function TrustBand() {
  return (
    <div className="trust">
      <div className="wrap">
        <div className="st reveal">
          <div className="v">
            <span className="u">$</span>
            <span data-count="0" data-suffix="M+">
              0
            </span>
          </div>
          <div className="k">Paid to traders</div>
        </div>
        <div className="st reveal">
          <div className="v">
            <span data-count="0" data-suffix="K+">
              0
            </span>
          </div>
          <div className="k">Funded accounts</div>
        </div>
        <div className="st reveal">
          <div className="v">
            <span data-count="0" data-suffix="+">
              0
            </span>
          </div>
          <div className="k">Countries served</div>
        </div>
        <div className="st reveal">
          <div className="v">0.0</div>
          <div className="tp">
            <span className="stars">★★★★★</span>
            <span className="tx">Trustpilot</span>
          </div>
          <div className="k">Verified reviews</div>
        </div>
      </div>
    </div>
  );
}
