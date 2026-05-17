// Extras — Live ticker rail + animated counters bar
// Drops between sections for a feeling of liveness.

const tickerItems = [
  { who: 'A beachgoer at Cherry Grove',     msg: '~8 open spots, moving fast',   t: '30s', s: 'open' },
  { who: 'A local at 7th Ave Public Lot',   msg: 'Just filled · long line',      t: '2m',  s: 'full' },
  { who: 'A visitor at Pier 14 Garage',     msg: 'Half full · turning over',     t: '4m',  s: 'limited' },
  { who: 'A beachgoer at Boardwalk',        msg: 'Wide open this morning',       t: '6m',  s: 'open' },
  { who: 'A driver at 11th Ave N',          msg: 'A couple spots opened up',     t: '8m',  s: 'open' },
  { who: 'A family at Surfside Access 3',   msg: 'Now full · busy weekend',      t: '11m', s: 'full' },
  { who: 'A surfer at Dunes End',           msg: 'About 4 spots left',           t: '14m', s: 'limited' },
  { who: 'A local at Murrells Inlet',       msg: 'Lot empty pre-sunset',         t: '18m', s: 'open' },
];

const TickerRail = () => {
  // Render the items twice so the marquee can scroll seamlessly to -50%
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker-rail" aria-label="Live community reports">
      <div className="ticker-track">
        {items.map((r, i) => (
          <div key={i} className="ticker-item">
            <span className={'ticker-dot ticker-dot--' + r.s}></span>
            <strong style={{ color: '#fff', fontWeight: 600 }}>{r.who}</strong>
            <span className="ticker-sep">·</span>
            <span>{r.msg}</span>
            <span className="ticker-when">{r.t} ago</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------- Animated counters band ----------
// Sits inside the dark community section background so the numbers
// feel like a live pulse from the network.
const countersStyles = {
  band: {
    position: 'relative',
    background: 'linear-gradient(180deg, #0a1c2b 0%, var(--bs-ocean-ink) 100%)',
    padding: 'clamp(72px, 9vw, 120px) clamp(20px, 5vw, 56px)',
    color: '#fff',
    overflow: 'hidden',
  },
  inner: { maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 },
  intro: { textAlign: 'center', marginBottom: 56 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 },
  cell: {
    padding: 28,
    borderRadius: 'var(--radius-xl)',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    backdropFilter: 'blur(8px)',
    textAlign: 'left',
  },
};

const CountersBand = () => {
  const stats = [
    { num: 12482, suffix: '', label: 'Reports this week', accent: 'var(--bs-sun)' },
    { num: 47,    suffix: '',  label: 'Lots covered along Grand Strand', accent: 'var(--bs-ocean)' },
    { num: 92,    suffix: '%', label: 'Reports under 5 min old', accent: 'var(--bs-open)' },
    { num: 6.4,   suffix: ' min', label: 'Avg time saved per park', accent: 'var(--bs-coral)' },
  ];
  return (
    <section style={countersStyles.band} data-counters-band>
      <div className="bg-blob" style={{ background: 'rgba(46,163,242,0.45)', width: 460, height: 460, left: '-8%', top: '-20%' }}></div>
      <div className="bg-blob" style={{ background: 'rgba(246,199,64,0.25)', width: 420, height: 420, right: '-10%', bottom: '-20%' }}></div>
      <div style={countersStyles.inner}>
        <div style={countersStyles.intro} className="reveal">
          <div className="eyebrow" style={{ color: 'var(--bs-sun)' }}>The pulse of the strand</div>
          <h2 className="display-md" style={{ marginTop: 14, color: '#fff', fontSize: 'clamp(36px,5vw,56px)' }}>
            A coastline of beachgoers <span className="serif-italic" style={{ color: 'var(--bs-sun)' }}>helping each other park.</span>
          </h2>
        </div>
        <div style={countersStyles.grid} data-card-stagger>
          {stats.map((s, i) => (
            <div key={i} style={countersStyles.cell}>
              <span
                className="counter-stat"
                data-counter
                data-target={s.num}
                data-suffix={s.suffix}
                style={{ color: s.accent }}
              >0{s.suffix}</span>
              <span className="counter-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Divider — soft curve top of a section ----------
const DividerCurve = ({ from = '#fff', to = '#fff', flip = false, height = 80 }) => (
  <svg className="divider-curve" viewBox="0 0 1440 80" preserveAspectRatio="none"
       style={{ height, transform: flip ? 'scaleY(-1)' : 'none', display: 'block' }}>
    <defs>
      <linearGradient id={`grad-${from}-${to}`.replace(/[#,()%\s]/g, '')} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={from}/>
        <stop offset="100%" stopColor={to}/>
      </linearGradient>
    </defs>
    <path d="M0,0 C320,80 1120,80 1440,0 L1440,80 L0,80 Z" fill={to}/>
  </svg>
);

Object.assign(window, { TickerRail, CountersBand, DividerCurve });
