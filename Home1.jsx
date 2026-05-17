// Home page — driver-first story
// Composes hero → struggle → solution → how it works → community → food → final CTA

// =========================================================
// Hero
// =========================================================
const heroStyles = {
  root: {
    position: 'relative',
    minHeight: '100vh',         /* full viewport so the phone has its own stage and the story starts cleanly below the fold */
    background: 'var(--bg-sky-gradient)',
    overflow: 'hidden',
    paddingTop: 100,
    paddingBottom: 120,
  },
  bottomBleed: {
    position: 'absolute', bottom: 0, left: 0, right: 0, height: 160,
    background: 'linear-gradient(180deg, transparent 0%, rgba(11, 39, 64, 0.45) 100%)',
    pointerEvents: 'none', zIndex: 1,
  },
  grain: {
    position: 'absolute', inset: 0,
    backgroundImage: 'var(--bg-grain)',
    opacity: 0.4,
    pointerEvents: 'none',
    mixBlendMode: 'overlay',
  },
  clouds: {
    position: 'absolute', top: 80, left: 0, right: 0, height: 60, pointerEvents: 'none',
  },
  grid: {
    position: 'relative',
    maxWidth: 1280, margin: '0 auto',
    padding: '64px clamp(20px,5vw,56px) 80px',
    display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48,
    alignItems: 'center',
  },
  copy: { color: '#0E365B' },
  eyebrow: { color: '#1B7BC4' },
  headline: { color: '#0B2740', marginTop: 16 },
  sub: { color: '#385166', marginTop: 24, maxWidth: 520 },
  ctas: { marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' },
  badge: { height: 56 },
  seeHow: {
    marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 6,
    font: '500 14px var(--font-body)', color: 'var(--bs-ocean-deep)', textDecoration: 'none',
  },
  phoneWrap: {
    position: 'relative',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  sunGlow: {
    position: 'absolute',
    width: 380, height: 380, borderRadius: '50%',
    background: 'radial-gradient(closest-side, rgba(246,199,64,0.55) 0%, rgba(246,199,64,0) 70%)',
    top: '6%', right: '8%',
    pointerEvents: 'none',
  },
  pinFloat: {
    position: 'absolute',
    background: 'white', borderRadius: 'var(--radius-xl)',
    padding: '14px 16px',
    boxShadow: 'var(--shadow-3)',
    display: 'flex', alignItems: 'center', gap: 12,
    border: '1px solid var(--border-hair)',
    minWidth: 230,
  },
};

// Sun rays SVG — slow rotation behind the glow
const SunRays = () => (
  <svg className="sun-rays" viewBox="0 0 600 600" aria-hidden="true">
    <defs>
      <radialGradient id="rays-fade" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFD06A" stopOpacity="0.0"/>
        <stop offset="40%" stopColor="#FFD06A" stopOpacity="0.0"/>
        <stop offset="100%" stopColor="#FFB347" stopOpacity="0.55"/>
      </radialGradient>
      <mask id="rays-mask">
        <rect width="600" height="600" fill="url(#rays-fade)"/>
      </mask>
    </defs>
    <g mask="url(#rays-mask)" transform="translate(300 300)">
      {Array.from({ length: 24 }).map((_, i) => (
        <rect key={i} x="-1.6" y="-300" width="3.2" height="600"
              fill="#FFD06A" opacity={i % 2 === 0 ? 0.45 : 0.18}
              transform={`rotate(${(i * 360) / 24})`}/>
      ))}
    </g>
  </svg>
);

const HeroSection = () => (
  <section style={heroStyles.root} data-hero>
    <SunRays />
    <div style={heroStyles.grain}></div>
    <div style={heroStyles.bottomBleed}></div>
    {/* Drifting clouds — 2 layers for parallax depth */}
    <svg style={heroStyles.clouds} viewBox="0 0 1280 60" preserveAspectRatio="none" data-cloud-slow>
      <ellipse cx="180" cy="30" rx="80" ry="10" fill="white" opacity="0.5"/>
      <ellipse cx="320" cy="22" rx="50" ry="6" fill="white" opacity="0.35"/>
      <ellipse cx="980" cy="34" rx="100" ry="11" fill="white" opacity="0.55"/>
      <ellipse cx="1140" cy="24" rx="60" ry="7" fill="white" opacity="0.4"/>
    </svg>
    <svg style={{ ...heroStyles.clouds, top: 140, opacity: 0.7 }} viewBox="0 0 1280 60" preserveAspectRatio="none" data-cloud-fast>
      <ellipse cx="500" cy="20" rx="60" ry="6" fill="white" opacity="0.32"/>
      <ellipse cx="780" cy="14" rx="40" ry="4" fill="white" opacity="0.22"/>
    </svg>
    <div style={heroStyles.grid}>
      <div style={heroStyles.copy}>
        <div className="eyebrow mask-reveal" style={heroStyles.eyebrow} data-eyebrow-reveal><span>Made for the coast</span></div>
        <h1 className="display-xl" style={{ ...heroStyles.headline, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 1 }}>
          <span className="word-reveal" data-word-reveal>Find beach parking </span>
          <span className="word-reveal" data-word-reveal><span className="serif-italic" style={{ color: 'var(--bs-ocean-deep)' }}>faster.</span></span>
        </h1>
        <p className="body-lg reveal" style={heroStyles.sub} data-delay="2">
          Real-time lot availability, crowdsourced by beachgoers along the Coast. Skip the loop. Park sooner. Hit the sand.
        </p>
        <div style={heroStyles.ctas} className="reveal" data-delay="3">
          <a href="https://apps.apple.com/us/app/beach-spot/id6762165460" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store"><img src="/assets/badges/app-store.svg" alt="App Store" style={heroStyles.badge}/></a>
          <a href="mailto:hello@beachspotapp.com?subject=Android%20app%20preview" aria-label="Join the Android preview"><img src="/assets/badges/google-play.svg" alt="Google Play" style={heroStyles.badge}/></a>
        </div>
        <a href="#story" style={heroStyles.seeHow} className="reveal" data-delay="4" data-scroll-hint>
          See how it works <Icon name="chevron-right" size={14} />
        </a>
      </div>
      <div style={heroStyles.phoneWrap} data-hero-phone-holder>
        <div style={heroStyles.sunGlow} data-sun></div>
        <PhoneMock tilt={-4}/>
        {/* Floating pin card */}
        <div data-float style={{ ...heroStyles.pinFloat, top: '12%', left: '-6%' }}>
          <div style={{ width: 34, height: 34, borderRadius: 12, background: 'var(--bs-open-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bs-open)' }}>
            <Icon name="parking" size={20}/>
          </div>
          <div>
            <div style={{ font: '600 13px var(--font-body)', color: 'var(--fg-1)' }}>Pier 14 Public Lot · open</div>
            <div style={{ font: '500 11px var(--font-mono)', color: 'var(--fg-3)' }}>reported 30s ago</div>
          </div>
        </div>
        <div data-float style={{ ...heroStyles.pinFloat, bottom: '14%', right: '-10%' }}>
          <div style={{ width: 34, height: 34, borderRadius: 12, background: 'var(--bs-limited-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B66B00' }}>
            <Icon name="clock" size={20}/>
          </div>
          <div>
            <div style={{ font: '600 13px var(--font-body)', color: 'var(--fg-1)' }}>7th Ave Public · limited</div>
            <div style={{ font: '500 11px var(--font-mono)', color: 'var(--fg-3)' }}>3 reports · 4m</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// SharedPhone — legacy export, kept as alias for any callers.
const SharedPhone = () => <PhoneMock tilt={-4}/>;
// =========================================================
// ScrollStory — sticky 2-column layout
// Phone sits sticky on the right while beats scroll past on the left.
// The phone screen crossfades between 4 frames based on which beat is in view.
// =========================================================
const storyStyles = {
  root: {
    position: 'relative',
    background: 'var(--bs-ocean-ink)',
    color: '#fff',
  },
  topBleed: {
    position: 'absolute', top: 0, left: 0, right: 0, height: 160,
    background: 'linear-gradient(180deg, rgba(252,180,116,0.55) 0%, transparent 100%)',
    pointerEvents: 'none', zIndex: 1,
  },
  bottomBleed: {
    position: 'absolute', bottom: 0, left: 0, right: 0, height: 200,
    background: 'linear-gradient(0deg, var(--bs-foam) 0%, transparent 100%)',
    pointerEvents: 'none', zIndex: 1,
  },
  atmosphere: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(80% 70% at 30% 30%, rgba(255,107,92,0.35) 0%, transparent 70%)',
    pointerEvents: 'none', zIndex: 0,
    willChange: 'background',
  },
  inner: {
    position: 'relative',
    maxWidth: 1280,
    margin: '0 auto',
    padding: 'clamp(96px, 12vw, 160px) clamp(20px, 5vw, 56px)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 80,
    alignItems: 'flex-start',
    zIndex: 2,
  },
  copyCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  beat: {
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '40px 0',
  },
  beatNum: { font: '500 12px var(--font-mono)', color: 'var(--bs-sun)', letterSpacing: '0.18em', textTransform: 'uppercase' },
  beatTitle: { font: '600 clamp(34px, 4vw, 52px) var(--font-display)', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.05, marginTop: 14, textWrap: 'balance' },
  beatBody: { font: '400 clamp(16px, 1.3vw, 19px) var(--font-body)', color: 'rgba(255,255,255,0.75)', marginTop: 18, lineHeight: 1.55, maxWidth: 480, textWrap: 'pretty' },
  phoneCol: {
    position: 'sticky',
    top: 0,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,        /* clearance below the sticky nav */
  },
  phoneFrame: {
    position: 'relative',
    width: 'min(320px, 38vh)',
    height: 'min(640px, 76vh)',
    borderRadius: 'min(44px, 5.5vh)',
    background: 'linear-gradient(180deg, #1a3540 0%, #0a1c25 100%)',
    padding: 'min(12px, 1.5vh)',
    boxShadow: '0 60px 120px -20px rgba(0,0,0,0.55), 0 30px 60px -10px rgba(0,0,0,0.4)',
  },
  phoneScreen: {
    width: '100%', height: '100%',
    borderRadius: 'min(34px, 4.2vh)',
    background: '#0a1c25',
    overflow: 'hidden',
    position: 'relative',
  },
  frameLayer: {
    position: 'absolute', inset: 0,
    opacity: 0,
    transition: 'opacity 600ms var(--ease-tide)',
    willChange: 'opacity',
  },
  frameLayerActive: { opacity: 1 },
  progress: {
    position: 'absolute',
    left: '50%', bottom: 28,
    transform: 'translateX(-50%)',
    display: 'flex', gap: 10,
    zIndex: 3,
  },
};

const ScrollStory = () => {
  const beats = [
    {
      num: '01 · The struggle',
      title: 'Saturday morning. Every lot already full.',
      body: 'Peak season, holiday weekend, beach day. Every lot near the pier shows that depressing red sign.',
    },
    {
      num: '02 · The loop',
      title: '12 minutes circling the same six blocks.',
      body: "Family in the back, sunblock half on, board still on the roof. You're burning daylight on the strip, not on the sand.",
    },
    {
      num: '03 · The relief',
      title: 'A beachgoer just left Pier 14 Public Lot.',
      body: 'BeachSpot pings the moment a nearby lot opens. Tap, drive, park, done.',
    },
    {
      num: '04 · The community',
      title: 'Beachgoers helping beachgoers.',
      body: 'Every report you drop helps the next family. The more locals and visitors use BeachSpot, the sharper it gets.',
    },
  ];

  return (
    <section id="story" style={storyStyles.root} data-story-section>
      <div style={storyStyles.atmosphere} data-story-atmosphere></div>
      <div style={storyStyles.topBleed}></div>
      <div style={storyStyles.bottomBleed}></div>

      <div style={storyStyles.inner}>
        {/* Copy column — each beat is its own viewport-height block */}
        <div style={storyStyles.copyCol}>
          {beats.map((b, i) => (
            <div key={i} style={storyStyles.beat} data-beat={i}>
              <div style={storyStyles.beatNum}>{b.num}</div>
              <h2 style={storyStyles.beatTitle}>{b.title}</h2>
              <p style={storyStyles.beatBody}>{b.body}</p>
            </div>
          ))}
        </div>

        {/* Phone column — sticky */}
        <div style={storyStyles.phoneCol}>
          <div style={storyStyles.phoneFrame}>
            <div style={storyStyles.phoneScreen}>
              {/* 4 crossfading frame layers */}
              {[0, 1, 2, 3].map(i => (
                <div key={i} data-story-frame={i}
                     style={{ ...storyStyles.frameLayer, ...(i === 0 ? storyStyles.frameLayerActive : {}) }}>
                  <StoryViz frame={i}/>
                </div>
              ))}
            </div>
            {/* Progress dots inside the phone bezel */}
            <div style={storyStyles.progress}>
              {beats.map((_, i) => (
                <div key={i} data-story-dot={i} style={{
                  width: i === 0 ? 32 : 6, height: 6, borderRadius: 999,
                  background: i === 0 ? 'var(--bs-sun)' : 'rgba(255,255,255,0.28)',
                  transition: 'width 280ms var(--ease-tide), background 280ms var(--ease-tide)',
                }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Each StoryViz frame renders as a full in-app screen (header + content + tab bar).
// Fits inside the 276×596 phone screen.
const appScreenStyles = {
  root: {
    position: 'absolute', inset: 0,
    background: 'var(--bs-foam)',
    overflow: 'hidden',
    fontFamily: 'var(--font-body)',
    color: 'var(--fg-1)',
  },
  header: {
    padding: '54px 16px 12px',
    background: '#fff',
    borderBottom: '1px solid var(--border-hair)',
    position: 'relative',
    zIndex: 2,
  },
  greet: { font: '500 10px var(--font-mono)', color: 'var(--fg-3)', letterSpacing: '0.04em' },
  title: { font: '700 17px var(--font-display)', color: 'var(--fg-1)', letterSpacing: '-0.01em', marginTop: 2 },
  body: { position: 'relative', flex: 1 },
  tabBar: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    height: 56, paddingBottom: 12, paddingTop: 8,
    background: 'rgba(255,255,255,0.96)',
    backdropFilter: 'blur(20px)',
    borderTop: '0.5px solid var(--border-hair)',
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
    zIndex: 3,
  },
  tab: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
    color: 'var(--fg-3)', font: '600 9px var(--font-body)',
  },
  tabActive: { color: 'var(--bs-ocean)' },
  banner: {
    margin: '12px 16px 0',
    padding: 12,
    borderRadius: 14,
    display: 'flex', alignItems: 'center', gap: 10,
    font: '600 12px var(--font-body)',
  },
  miniLot: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '10px 14px',
    background: '#fff', borderRadius: 14,
    border: '1px solid var(--border-hair)',
  },
  miniLotIcon: { width: 32, height: 32, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', font: '800 13px var(--font-body)', flex: '0 0 auto' },
};

// Mini tab bar shared by frames
const StoryTabBar = ({ active = 'map' }) => (
  <div style={appScreenStyles.tabBar}>
    {[
      { k: 'map', label: 'Map', icon: <Icon name="map-pin" size={18}/> },
      { k: 'saved', label: 'Saved', icon: <Icon name="star" size={18}/> },
      { k: 'report', label: 'Report', icon: <Icon name="plus" size={18}/> },
      { k: 'you', label: 'You', icon: <Icon name="bag" size={18}/> },
    ].map(t => (
      <div key={t.k} style={{ ...appScreenStyles.tab, ...(active === t.k ? appScreenStyles.tabActive : {}) }}>
        {t.icon}
        {t.label}
      </div>
    ))}
  </div>
);

// Visual companion for the story column
const StoryViz = ({ frame }) => {
  // 0 struggle, 1 loop, 2 relief, 3 community
  if (frame === 0) return (
    <div style={appScreenStyles.root}>
      <div style={appScreenStyles.header}>
        <div style={appScreenStyles.greet}>SAT · 10:42 AM · MYRTLE BEACH</div>
        <div style={appScreenStyles.title}>4 lots nearby</div>
      </div>
      <div style={{ ...appScreenStyles.banner, background: 'var(--bs-full-bg)', color: '#A0382A', border: '1px solid rgba(255,107,92,0.3)' }}>
        <Icon name="clock" size={16}/> Every nearby lot is full.
      </div>
      <div style={{ position: 'relative', height: 200, margin: '12px 16px', borderRadius: 14, overflow: 'hidden', border: '1px solid var(--border-hair)' }}>
        <CoastalMap width={244} height={200} showLabels={false} showPiers={true} showUser={true} userPos={{ x: 0.42, y: 0.85 }} density="minimal" pins={[
          { x: 0.70, y: 0.34, status: 'full' },
          { x: 0.46, y: 0.46, status: 'full' },
          { x: 0.70, y: 0.70, status: 'full' },
          { x: 0.30, y: 0.62, status: 'full' },
        ]}/>
      </div>
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8, marginTop: 6 }}>
        {[
          { name: 'Pier 14 Public Lot', meta: '0.3 mi' },
          { name: '7th Ave Public Lot', meta: '0.6 mi' },
          { name: 'Boardwalk Pavilion', meta: '0.9 mi' },
        ].map((l, i) => (
          <div key={i} style={appScreenStyles.miniLot}>
            <div style={{ ...appScreenStyles.miniLotIcon, background: 'var(--bs-full-bg)', color: 'var(--bs-full)' }}>P</div>
            <div style={{ flex: 1 }}>
              <div style={{ font: '600 13px var(--font-body)', color: 'var(--fg-1)' }}>{l.name}</div>
              <div style={{ font: '500 11px var(--font-body)', color: 'var(--fg-3)' }}>Full · {l.meta}</div>
            </div>
          </div>
        ))}
      </div>
      <StoryTabBar active="map"/>
    </div>
  );

  if (frame === 1) return (
    <div style={appScreenStyles.root}>
      <div style={appScreenStyles.header}>
        <div style={appScreenStyles.greet}>STILL LOOKING</div>
        <div style={appScreenStyles.title}>Watching for open spots…</div>
      </div>
      <div style={{ position: 'relative', flex: 1, background: '#1A3A5E', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <CoastalMap width={276} height={400} showLabels={false} showPiers={false} showUser={false} density="minimal" pins={[
            { x: 0.70, y: 0.34, status: 'full' },
            { x: 0.46, y: 0.50, status: 'full' },
            { x: 0.70, y: 0.70, status: 'full' },
            { x: 0.30, y: 0.62, status: 'full' },
          ]}/>
        </div>
        {/* Dark overlay so timer reads */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,39,64,0.55)' }}></div>
        {/* Circling pulse rings centered on user */}
        <svg viewBox="0 0 276 400" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          {[60, 90, 120, 150].map((r, i) => (
            <circle key={i} cx="138" cy="200" r={r} fill="none" stroke="#FF6B5C" strokeWidth="2" strokeDasharray="6 8" opacity={0.7 - i * 0.15}>
              <animate attributeName="r" values={`${r};${r + 12};${r}`} dur="2.8s" begin={`${i * 0.3}s`} repeatCount="indefinite"/>
            </circle>
          ))}
          <circle cx="138" cy="200" r="11" fill="#2EA3F2" stroke="#fff" strokeWidth="3"/>
        </svg>
        {/* Timer overlay */}
        <div style={{ position: 'absolute', top: '38%', left: 0, right: 0, textAlign: 'center', color: '#fff' }}>
          <div style={{ font: '700 56px var(--font-display)', letterSpacing: '-0.02em', lineHeight: 1 }}>12<span style={{ font: '500 20px var(--font-body)', marginLeft: 4 }}>min</span></div>
          <div style={{ font: '500 11px var(--font-mono)', color: '#FF6B5C', letterSpacing: '0.18em', marginTop: 8 }}>CIRCLING</div>
        </div>
        {/* Expand suggestion */}
        <div style={{ position: 'absolute', left: 14, right: 14, bottom: 70, background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)', borderRadius: 14, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 9, background: 'var(--bs-foam-deep)', color: 'var(--bs-ocean-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="search" size={14}/>
          </div>
          <div style={{ flex: 1, font: '500 11px var(--font-body)', color: 'var(--fg-2)' }}>Expand search to 1 mi</div>
          <Icon name="chevron-right" size={14} color="var(--fg-3)"/>
        </div>
      </div>
      <StoryTabBar active="map"/>
    </div>
  );

  if (frame === 2) return (
    <div style={appScreenStyles.root}>
      <div style={appScreenStyles.header}>
        <div style={appScreenStyles.greet}>JUST IN · 30 SECONDS AGO</div>
        <div style={appScreenStyles.title}>Pier 14 Public Lot opened up</div>
      </div>
      <div style={{ position: 'relative', flex: 1 }}>
        <CoastalMap width={276} height={400} showLabels={false} showPiers={true} showUser={true} userPos={{ x: 0.40, y: 0.86 }} density="minimal" pins={[
          { x: 0.70, y: 0.34, status: 'open' },
          { x: 0.46, y: 0.50, status: 'limited' },
          { x: 0.30, y: 0.62, status: 'full' },
        ]}/>
        {/* Route line from user to Pier 14 */}
        <svg viewBox="0 0 276 400" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <path d="M 110 344 Q 150 280 193 136" stroke="#2EA3F2" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="3 6">
            <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.4s" repeatCount="indefinite"/>
          </path>
        </svg>
        <div style={{ position: 'absolute', left: 14, right: 14, bottom: 70, background: '#fff', borderRadius: 16, padding: 14, boxShadow: 'var(--shadow-3)', border: '1px solid var(--border-hair)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ ...appScreenStyles.miniLotIcon, background: 'var(--bs-open-bg)', color: 'var(--bs-open)' }}>P</div>
            <div style={{ flex: 1 }}>
              <div style={{ font: '600 14px var(--font-body)', color: 'var(--fg-1)' }}>Pier 14 Public Lot</div>
              <div style={{ font: '500 11px var(--font-mono)', color: 'var(--fg-3)' }}>0.3 mi · 4 min drive · $5/hr</div>
            </div>
          </div>
          <button style={{
            marginTop: 10, width: '100%',
            background: 'var(--bs-ocean)', color: '#fff', border: 0,
            padding: '10px', borderRadius: 12, font: '600 13px var(--font-body)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <Icon name="navigation" size={14}/> Get directions
          </button>
        </div>
      </div>
      <StoryTabBar active="map"/>
    </div>
  );

  if (frame === 3) return (
    <div style={appScreenStyles.root}>
      <div style={appScreenStyles.header}>
        <div style={appScreenStyles.greet}>RECENT REPORTS · GRAND STRAND</div>
        <div style={appScreenStyles.title}>Beachgoers helping beachgoers</div>
      </div>
      <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8, overflow: 'auto', paddingBottom: 80 }}>
        {[
          { who: 'Cherry Grove',           msg: 'About 8 open spots, moving fast.', t: '30s',  s: 'open' },
          { who: '7th Ave Public Lot',     msg: 'Just filled. Long line.',          t: '2m',   s: 'full' },
          { who: 'Pier 14 Garage',         msg: 'Half full but turning over fast.', t: '4m',   s: 'limited' },
          { who: 'Boardwalk Pavilion',     msg: 'Wide open this morning.',          t: '6m',   s: 'open' },
          { who: '11th Ave N',             msg: 'A couple spots opened up.',        t: '8m',   s: 'open' },
        ].map((r, i) => {
          const bg = r.s === 'open' ? 'var(--bs-open-bg)' : r.s === 'limited' ? 'var(--bs-limited-bg)' : 'var(--bs-full-bg)';
          const fg = r.s === 'open' ? 'var(--bs-open)'   : r.s === 'limited' ? '#B66B00'              : 'var(--bs-full)';
          return (
            <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 10, border: '1px solid var(--border-hair)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                <div style={{ font: '600 12px var(--font-body)', color: 'var(--fg-1)' }}>{r.who}</div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, font: '600 10px var(--font-body)', color: fg, background: bg, padding: '2px 8px', borderRadius: 999 }}>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: fg }}></span>
                  {r.s}
                </span>
              </div>
              <div style={{ font: '500 11px var(--font-body)', color: 'var(--fg-2)', marginTop: 4 }}>{r.msg}</div>
              <div style={{ font: '500 10px var(--font-mono)', color: 'var(--fg-3)', marginTop: 4 }}>{r.t} ago · a beachgoer</div>
            </div>
          );
        })}
      </div>
      <StoryTabBar active="map"/>
    </div>
  );

  return null;
};

const ScrollStoryDeprecated_DoNotUse = null;

Object.assign(window, { HeroSection, ScrollStory, StoryViz, SharedPhone });
