// Shared atoms — Nav, Footer, StatusPill, LotCard, PhoneMock, Icon
// Exported to window for cross-file use.

const Icon = ({ name, size = 20, stroke = 1.75, color = 'currentColor' }) => {
  const paths = {
    'map-pin': <><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12Z"/></>,
    'parking': <><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M9 17V8h4a3 3 0 0 1 0 6H9"/></>,
    'clock': <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    'check': <><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></>,
    'arrow-right': <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    'navigation': <><path d="M3 11l18-8-3 18-7-4-3 4z"/></>,
    'bag': <><path d="M14 9V5a3 3 0 0 0-6 0v4M5 9h14l-1 12H6z"/></>,
    'star': <><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></>,
    'sun': <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/></>,
    'waves': <><path d="M3 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M3 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/></>,
    'bell': <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></>,
    'plus': <><path d="M12 5v14M5 12h14"/></>,
    'menu': <><path d="M4 7h16M4 12h16M4 17h10"/></>,
    'search': <><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>,
    'mail': <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 8l9 6 9-6"/></>,
    'chevron-right': <><path d="M9 6l6 6-6 6"/></>,
    'chevron-down': <><path d="M6 9l6 6 6-6"/></>,
    'utensils': <><path d="M3 3v18M3 9h4l-1-6M15 3v8a2 2 0 0 0 2 2h2v8"/></>,
    'shield': <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/></>,
    'zap': <><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></>,
    'route': <><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M6 9v4a4 4 0 0 0 4 4h5"/></>,
    'mic': <><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
         strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ flex: '0 0 auto' }}>
      {paths[name] || null}
    </svg>
  );
};

// -------- Status pill --------
const StatusPill = ({ status = 'open', label, size = 'sm' }) => {
  const labels = { open: 'Open', limited: 'Limited', full: 'Full', unknown: 'No recent report' };
  const cls = `bs-pill bs-pill--${status}${size === 'lg' ? ' bs-pill--lg' : ''}`;
  const style = size === 'lg' ? { height: 32, padding: '0 14px', fontSize: 13 } : {};
  return <span className={cls} style={style}>{label || labels[status]}</span>;
};

// -------- Lot card --------
const lotCardStyles = {
  card: {
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-hair)',
    borderRadius: 'var(--radius-lg)',
    padding: 18,
    boxShadow: 'var(--shadow-2)',
  },
  head: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 },
  name: { font: '600 16px var(--font-body)', color: 'var(--fg-1)', letterSpacing: '-0.01em' },
  meta: { font: '500 12px var(--font-body)', color: 'var(--fg-3)', marginTop: 2 },
  foot: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 },
  price: { font: '600 13px var(--font-body)', color: 'var(--fg-1)' },
  updated: { font: '500 11px var(--font-mono)', color: 'var(--fg-3)' },
};
const LotCard = ({ name, meta, price, updated, status, statusLabel }) => (
  <div style={lotCardStyles.card}>
    <div style={lotCardStyles.head}>
      <div>
        <div style={lotCardStyles.name}>{name}</div>
        <div style={lotCardStyles.meta}>{meta}</div>
      </div>
      <StatusPill status={status} label={statusLabel} />
    </div>
    <div style={lotCardStyles.foot}>
      <div style={lotCardStyles.price}>{price}</div>
      <div style={lotCardStyles.updated}>{updated}</div>
    </div>
  </div>
);

// -------- Phone mock --------
const phoneStyles = {
  frame: {
    width: 300, height: 600,
    borderRadius: 44,
    background: 'linear-gradient(180deg, #1a3540 0%, #0a1c25 100%)',
    padding: 12,
    boxShadow: '0 60px 120px -30px rgba(6, 107, 126, 0.5), 0 30px 60px -20px rgba(11, 42, 58, 0.4)',
    position: 'relative',
  },
  screen: {
    width: '100%', height: '100%',
    borderRadius: 34,
    background: 'var(--bs-foam)',
    overflow: 'hidden',
    position: 'relative',
  },
  notch: {
    position: 'absolute', top: 18, left: '50%', transform: 'translateX(-50%)',
    width: 110, height: 26, borderRadius: 999,
    background: '#0a1c25', zIndex: 5,
  },
  status: {
    height: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '8px 24px 0', font: '600 13px var(--font-body)', color: 'var(--fg-1)',
  },
  header: {
    padding: '12px 18px 14px',
    background: 'var(--bg-surface)',
    borderBottom: '1px solid var(--border-hair)',
  },
  greet: { font: '500 12px var(--font-body)', color: 'var(--fg-3)' },
  title: { font: '600 20px var(--font-display)', color: 'var(--fg-1)', letterSpacing: '-0.01em' },
  map: {
    height: 200, position: 'relative',
    background: 'linear-gradient(180deg, #E6F2F4 0%, #D2E8EC 100%)',
    overflow: 'hidden',
  },
  list: { padding: 14, display: 'flex', flexDirection: 'column', gap: 10 },
  tabBar: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    height: 70, paddingBottom: 16, paddingTop: 12,
    background: 'rgba(255,255,255,0.96)',
    backdropFilter: 'blur(20px)',
    borderTop: '1px solid var(--border-hair)',
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', alignItems: 'center', justifyItems: 'center',
  },
  tab: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, color: 'var(--fg-3)', fontSize: 9, fontWeight: 600 },
  tabActive: { color: 'var(--bs-ocean)' },
};

// Simple map face with pins (svg)
const MapFace = ({ pulse = true }) => (
  <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
    <rect width="300" height="200" fill="#E6F2F4"/>
    <g stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" fill="none">
      <path d="M-20 80 Q 80 60 160 100 T 320 130"/>
      <path d="M50 -10 L 50 100 L 110 140 L 110 220"/>
      <path d="M210 -10 L 210 80 L 170 120 L 170 220"/>
    </g>
    <g stroke="#B7D8DE" strokeWidth="1.5" strokeLinecap="round" fill="none">
      <path d="M-20 80 Q 80 60 160 100 T 320 130"/>
      <path d="M50 -10 L 50 100 L 110 140 L 110 220"/>
      <path d="M210 -10 L 210 80 L 170 120 L 170 220"/>
    </g>
    <path d="M250 0 L 300 0 L 300 200 L 270 200 Q 250 140 260 90 Q 270 40 250 0Z" fill="#9FDDEA"/>
    {/* pins */}
    <g transform="translate(60,70)">
      {pulse && <circle r="22" fill="#1FB87A" opacity="0.18"><animate attributeName="r" values="14;26;14" dur="2.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.3;0;0.3" dur="2.6s" repeatCount="indefinite"/></circle>}
      <circle r="12" fill="#1FB87A"/>
      <text y="4" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily="sans-serif">P</text>
    </g>
    <g transform="translate(130,110)">
      <circle r="12" fill="#F59E0B"/>
      <text y="4" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily="sans-serif">P</text>
    </g>
    <g transform="translate(195,150)">
      <circle r="12" fill="#FF6B5C"/>
      <text y="4" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily="sans-serif">P</text>
    </g>
    {/* user */}
    <g transform="translate(150,170)">
      <circle r="8" fill="#0EA5C0" stroke="#fff" strokeWidth="3"/>
    </g>
  </svg>
);

const PhoneMock = ({ tilt = -6, lots, mapPulse = true }) => {
  const defaultLots = [
    { name: 'Pier 14 Public Lot',  meta: '0.3 mi · N Ocean Blvd', price: 'Available · $5/hr', updated: '2m ago',   status: 'open' },
    { name: 'Cherry Grove Lot',    meta: '0.5 mi · N. Myrtle',    price: '$8/hr',              updated: '6m ago',   status: 'limited' },
    { name: '7th Ave Public Lot',  meta: '0.6 mi · Myrtle',       price: '$3/hr',              updated: 'just now', status: 'full' },
  ];
  const data = lots || defaultLots;
  const phonePins = [
    { x: 0.70, y: 0.72, status: 'open' },
    { x: 0.46, y: 0.46, status: 'limited' },
    { x: 0.74, y: 0.34, status: 'full' },
    { x: 0.30, y: 0.58, status: 'open' },
  ];
  return (
    <div style={{ ...phoneStyles.frame, transform: `rotate(${tilt}deg)` }}>
      <div style={phoneStyles.screen}>
        <div style={phoneStyles.notch}></div>
        <div style={phoneStyles.status}>
          <span>9:41</span>
          <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <Icon name="waves" size={14} color="var(--bs-ocean)" />
          </span>
        </div>
        <div style={phoneStyles.header}>
          <div style={phoneStyles.greet}>Good morning · Myrtle Beach</div>
          <div style={phoneStyles.title}>Nearby lots</div>
        </div>
        <div style={phoneStyles.map}>
          <CoastalMap width={300} height={200} pins={phonePins} showLabels={false} showPiers={true} showUser={true} userPos={{ x: 0.50, y: 0.84 }} density="minimal"/>
        </div>
        <div style={phoneStyles.list}>
          {data.slice(0, 2).map((l, i) => <LotCard key={i} {...l} />)}
        </div>
        <div style={phoneStyles.tabBar}>
          <div style={{ ...phoneStyles.tab, ...phoneStyles.tabActive }}>
            <Icon name="map-pin" size={20} />Map
          </div>
          <div style={phoneStyles.tab}><Icon name="star" size={20} />Saved</div>
          <div style={phoneStyles.tab}><Icon name="plus" size={20} />Report</div>
          <div style={phoneStyles.tab}><Icon name="bag" size={20} />You</div>
        </div>
      </div>
    </div>
  );
};

// -------- Nav --------
const navStyles = {
  brand: { display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' },
  logo: { height: 44, width: 44, borderRadius: 12, boxShadow: '0 4px 12px rgba(46,163,242,0.28)' },
  wordmark: { font: '700 24px var(--font-display)', color: 'var(--fg-1)', letterSpacing: '-0.02em' },
  pillCta: { fontSize: 14, padding: '10px 16px' },
};
const Nav = ({ current, go }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 12);
    onS();
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);
  // Light surfaces under nav: lot-owners hero (sand), support (foam-deep), legal (foam).
  // Only the home hero gets the over-gradient treatment.
  const overHero = current === 'home' && !scrolled;
  return (
    <nav className={'bs-nav' + (scrolled ? ' scrolled' : '') + (overHero ? ' over-hero' : '')}>
      <a className="bs-nav__brand" href="#" style={navStyles.brand} onClick={(e) => { e.preventDefault(); go('home'); }}>
        <img src="/assets/icon.png" alt="" style={navStyles.logo}/>
        <span className="bs-nav__wordmark" style={navStyles.wordmark}>BeachSpot</span>
      </a>
      <div className="bs-nav__links">
        <a className="bs-nav__link" href="#" onClick={(e) => { e.preventDefault(); go('home'); }}>How it works</a>
        <a className="bs-nav__link" href="#" onClick={(e) => { e.preventDefault(); go('lot-owners'); }}>For lot owners</a>
        <a className="bs-nav__link" href="#" onClick={(e) => { e.preventDefault(); go('support'); }}>Support</a>
        <a
          className="bs-btn bs-btn--primary bs-nav__cta"
          style={navStyles.pillCta}
          href="#download"
          onClick={(e) => {
            e.preventDefault();
            const scrollToDownload = () => {
              const el = document.getElementById('download');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            };
            if (current !== 'home') {
              go('home');
              // wait a frame for the home page to mount, then scroll
              setTimeout(scrollToDownload, 60);
            } else {
              scrollToDownload();
            }
          }}
        >Get the app</a>
      </div>
    </nav>
  );
};

// -------- Footer --------
const footerStyles = {
  root: { background: 'var(--bs-ocean-ink)', color: 'rgba(255,255,255,0.78)', padding: '64px clamp(20px,5vw,56px) 40px' },
  inner: { maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48 },
  brand: { display: 'flex', flexDirection: 'column', gap: 14 },
  tagline: { font: '500 14px var(--font-body)', maxWidth: 280, color: 'rgba(255,255,255,0.65)' },
  colHead: { font: '600 11px var(--font-body)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 14 },
  link: { display: 'block', font: '500 14px var(--font-body)', color: 'rgba(255,255,255,0.78)', textDecoration: 'none', padding: '5px 0' },
  base: { borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 48, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', font: '500 12px var(--font-mono)', color: 'rgba(255,255,255,0.45)' },
};
const Footer = ({ go }) => (
  <footer style={footerStyles.root}>
    <div className="bs-mobile-stack" style={footerStyles.inner}>
      <div style={footerStyles.brand}>
        <a href="#" onClick={(e) => { e.preventDefault(); go && go('home'); }} style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>
          <img src="/assets/icon.png" alt="" style={{ height: 72, width: 72, borderRadius: 18, boxShadow: '0 8px 20px rgba(0,0,0,0.25)' }}/>
          <span style={{ font: '700 36px var(--font-display)', color: '#fff', letterSpacing: '-0.02em' }}>BeachSpot</span>
        </a>
        <div style={footerStyles.tagline}>Real-time beach parking, crowdsourced by beachgoers along the Grand Strand. Made for the coast.</div>
        <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
          <a href="https://apps.apple.com/us/app/beach-spot/id6762165460" target="_blank" rel="noopener noreferrer"><img src="/assets/badges/app-store.svg" alt="App Store" style={{ height: 42 }}/></a>
          <a href="mailto:hello@beachspotapp.com?subject=Android%20app%20preview"><img src="/assets/badges/google-play.svg" alt="Google Play" style={{ height: 42 }}/></a>
        </div>
      </div>
      <div>
        <div style={footerStyles.colHead}>Product</div>
        <a href="#" style={footerStyles.link} onClick={(e) => { e.preventDefault(); go('home'); }}>How it works</a>
        <a href="#" style={footerStyles.link} onClick={(e) => { e.preventDefault(); go('home'); }}>Download</a>
        <a href="#" style={footerStyles.link} onClick={(e) => { e.preventDefault(); go('support'); }}>Support</a>
      </div>
      <div>
        <div style={footerStyles.colHead}>Lot owners</div>
        <a href="#" style={footerStyles.link} onClick={(e) => { e.preventDefault(); go('lot-owners'); }}>List your lot</a>
        <a href="#" style={footerStyles.link} onClick={(e) => { e.preventDefault(); go('lot-owners'); }}>Pricing</a>
        <a href="#" style={footerStyles.link} onClick={(e) => { e.preventDefault(); go('lot-owners'); }}>Owner FAQ</a>
      </div>
      <div>
        <div style={footerStyles.colHead}>Legal</div>
        <a href="#" style={footerStyles.link} onClick={(e) => { e.preventDefault(); go('privacy'); }}>Privacy</a>
        <a href="#" style={footerStyles.link} onClick={(e) => { e.preventDefault(); go('terms'); }}>Terms</a>
        <a href="mailto:hello@beachspotapp.com" style={footerStyles.link}>hello@beachspotapp.com</a>
      </div>
    </div>
    <div style={{ ...footerStyles.base, maxWidth: 1280, margin: '48px auto 0' }}>
      <div>© 2026 BeachSpot · Made for the coast.</div>
      <div>v1.4.2</div>
    </div>
  </footer>
);

Object.assign(window, { Icon, StatusPill, LotCard, PhoneMock, MapFace, Nav, Footer });
