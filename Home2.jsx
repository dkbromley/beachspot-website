// Home page — sections 2: solution / how it works / food / community / final CTA

// =========================================================
// "How it works" — 4-step driver flow
// =========================================================
const howStyles = {
  root: { background: 'var(--bs-foam)', padding: 'clamp(96px, 12vw, 160px) clamp(20px, 5vw, 56px)' },
  inner: { maxWidth: 1280, margin: '0 auto' },
  head: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap', marginBottom: 64 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 },
  card: { background: '#fff', borderRadius: 'var(--radius-xl)', padding: 32, border: '1px solid var(--border-hair)', boxShadow: 'var(--shadow-1)', position: 'relative', overflow: 'hidden', minHeight: 280 },
  num: { font: '500 13px var(--font-mono)', color: 'var(--bs-ocean-deep)', letterSpacing: '0.04em' },
  ico: { width: 48, height: 48, borderRadius: 14, background: 'var(--bs-foam-deep)', color: 'var(--bs-ocean-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 14 },
  title: { font: '600 22px var(--font-display)', color: 'var(--fg-1)', marginTop: 20, letterSpacing: '-0.01em' },
  body: { font: '400 15px var(--font-body)', color: 'var(--fg-2)', marginTop: 8, lineHeight: 1.55 },
};

const HowItWorks = () => {
  const steps = [
    { num: 'step 01', icon: 'map-pin', title: 'Open BeachSpot', body: 'See every reporting lot near you, color-coded by what beachgoers just saw.' },
    { num: 'step 02', icon: 'navigation', title: 'Pick a lot', body: 'Pier 14 wide open? Surfside Access 3 full? Tap the green pin and head straight there.' },
    { num: 'step 03', icon: 'parking', title: 'Drop a report', body: 'Pulling in or driving past? Tap Open, Limited, or Full. Takes two seconds.' },
    { num: 'step 04', icon: 'waves', title: 'Hit the sand', body: 'You helped the next family skip the loop. Earn XP and badges while you\'re at it.' },
  ];
  return (
    <section style={howStyles.root} data-how>
      <div style={howStyles.inner}>
        <div style={howStyles.head} className="reveal">
          <div>
            <div className="eyebrow">For beachgoers</div>
            <h2 className="display-md" style={{ marginTop: 14, maxWidth: 720, fontSize: 'clamp(36px,5vw,56px)' }}>
              Four taps from the car to the sand.
            </h2>
          </div>
          <p className="body-lg" style={{ maxWidth: 360 }}>
            BeachSpot works because beachgoers help beachgoers. Every report you drop helps the next family park sooner.
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="connector-track" data-connector></div>
          <div style={howStyles.grid} data-card-stagger>
            {steps.map((s, i) => (
              <div key={i} style={howStyles.card} className="lot-card-hoverable">
                <div style={{ ...howStyles.ico, position: 'absolute', top: 24, right: 24, marginTop: 0, background: i === 0 ? 'var(--bs-foam-deep)' : i === 1 ? 'rgba(31,184,122,0.12)' : i === 2 ? 'rgba(246,199,64,0.18)' : 'rgba(255,107,92,0.12)', color: i === 0 ? 'var(--bs-ocean-deep)' : i === 1 ? 'var(--bs-open)' : i === 2 ? '#B66B00' : 'var(--bs-coral)' }}><Icon name={s.icon} size={22}/></div>
                <div style={howStyles.num}>{s.num}</div>
                <div style={{ ...howStyles.title, marginTop: 56 }}>{s.title}</div>
                <div style={howStyles.body}>{s.body}</div>
                <div style={{ position: 'absolute', bottom: 24, right: 28, font: '700 56px var(--font-display)', color: 'rgba(11,39,64,0.04)', letterSpacing: '-0.04em', lineHeight: 1, userSelect: 'none' }}>0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// =========================================================
// Solution — split: lot list + phone with "try this lot instead" interaction
// =========================================================
const solutionStyles = {
  root: { background: 'linear-gradient(180deg, var(--bs-foam) 0%, var(--bs-foam-deep) 100%)', padding: 'clamp(96px, 12vw, 160px) clamp(20px, 5vw, 56px)' },
  inner: { maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' },
  panel: { background: '#fff', borderRadius: 'var(--radius-xl)', padding: 28, boxShadow: 'var(--shadow-3)', border: '1px solid var(--border-hair)' },
  list: { display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 },
  toast: {
    marginTop: 18,
    padding: 16,
    background: 'var(--bs-open-bg)',
    border: '1px solid rgba(31, 184, 122, 0.3)',
    borderRadius: 'var(--radius-lg)',
    display: 'flex', gap: 12, alignItems: 'center',
  },
};

const SolutionSection = () => (
  <section style={solutionStyles.root}>
    <div style={solutionStyles.inner}>
      <div className="reveal">
        <div className="eyebrow">The BeachSpot solution</div>
        <h2 className="display-md" style={{ marginTop: 14, fontSize: 'clamp(36px,5vw,56px)' }}>
          When this lot is full, <span className="serif-italic" style={{ color: 'var(--bs-ocean-deep)' }}>try this lot instead.</span>
        </h2>
        <p className="body-lg" style={{ marginTop: 18, maxWidth: 540 }}>
          BeachSpot watches the lots around you. The moment a closer one opens up — or yours fills — we ping you with the next-best spot down the strip.
        </p>
        <ul style={{ marginTop: 24, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { ico: 'zap', t: 'Real-time crowd reports', d: 'Open / Limited / Full from people parking right now.' },
            { ico: 'route', t: 'Better routes when yours is full', d: 'We surface the closest open lot when your first choice is gone.' },
            { ico: 'bell', t: 'Save a lot, get a ping', d: 'Get notified the moment your usual lot has spots again.' },
          ].map((r, i) => (
            <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, borderRadius: 12, background: 'var(--bs-foam)', color: 'var(--bs-ocean-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', marginTop: 2 }}>
                <Icon name={r.ico} size={20}/>
              </div>
              <div>
                <div style={{ font: '600 16px var(--font-body)', color: 'var(--fg-1)' }}>{r.t}</div>
                <div style={{ font: '400 14px var(--font-body)', color: 'var(--fg-2)', marginTop: 2 }}>{r.d}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div style={solutionStyles.panel} className="reveal" data-delay="2">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ font: '500 12px var(--font-mono)', color: 'var(--fg-3)' }}>WITHIN 0.5 MI</div>
            <div style={{ font: '600 18px var(--font-display)', color: 'var(--fg-1)', marginTop: 4 }}>4 lots near Pier 14</div>
          </div>
          <div className="bs-pill bs-pill--unknown" style={{ height: 28 }}>updated 30s ago</div>
        </div>
        <div style={solutionStyles.list} data-card-stagger>
          <div className="lot-card-hoverable" style={{ borderRadius: 'var(--radius-lg)' }}><LotCard name="Pier 14 Public Lot"   meta="0.3 mi · 1411 N Ocean Blvd" price="Available · $5/hr"   updated="30s ago"  status="open"/></div>
          <div className="lot-card-hoverable" style={{ borderRadius: 'var(--radius-lg)' }}><LotCard name="Pier 14 Garage"       meta="0.4 mi · Pier 14"           price="$5/hr · $20 daily"  updated="2m ago"   status="open"/></div>
          <div className="lot-card-hoverable" style={{ borderRadius: 'var(--radius-lg)' }}><LotCard name="7th Ave Public Lot"   meta="0.6 mi · Myrtle"            price="$3/hr"              updated="6m ago"   status="limited"/></div>
          <div className="lot-card-hoverable" style={{ borderRadius: 'var(--radius-lg)' }}><LotCard name="Boardwalk Pavilion"   meta="0.9 mi · Boardwalk"         price="$5/hr"              updated="just now" status="full"/></div>
        </div>
        <div style={solutionStyles.toast}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: 'var(--bs-open)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="navigation" size={20}/>
          </div>
          <div>
            <div style={{ font: '600 14px var(--font-body)', color: 'var(--bs-open)' }}>Try Pier 14 Public Lot — just opened</div>
            <div style={{ font: '500 12px var(--font-mono)', color: 'var(--bs-midnight-2)' }}>4 min drive · reported 30s ago by a beachgoer</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// =========================================================
// Food nearby
// =========================================================
const foodStyles = {
  root: { background: 'linear-gradient(180deg, #FFF8EA 0%, var(--bs-sand) 100%)', padding: 'clamp(96px, 12vw, 160px) clamp(20px, 5vw, 56px)' },
  inner: { maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' },
  cards: { display: 'flex', flexDirection: 'column', gap: 14 },
  fcard: { background: '#fff', borderRadius: 22, padding: 18, display: 'flex', gap: 16, alignItems: 'center', boxShadow: 'var(--shadow-2)', border: '1px solid var(--border-hair)' },
  thumb: { width: 64, height: 64, borderRadius: 16, flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' },
};

const FoodNearby = () => (
  <section style={foodStyles.root}>
    <div style={foodStyles.inner}>
      <div className="reveal">
        <div className="eyebrow" style={{ color: '#B66B00' }}>After the beach</div>
        <h2 className="display-md" style={{ marginTop: 14, fontSize: 'clamp(36px,5vw,56px)' }}>
          When you're hungry, sandy, and ten blocks from the car.
        </h2>
        <p className="body-lg" style={{ marginTop: 18, maxWidth: 480 }}>
          BeachSpot shows food spots near your lot — so the walk back is a meal, not a search.
        </p>
        <p className="caption" style={{ marginTop: 18, color: 'var(--fg-3)', maxWidth: 440 }}>
          We surface nearby restaurants only. BeachSpot doesn't take reservations or process orders.
        </p>
      </div>
      <div style={foodStyles.cards} className="reveal" data-delay="2">
        {[
          { name: 'The Sea Captain\'s House', meta: 'Seafood · 0.3 mi · $$', c: '#FF6B5C', ic: 'utensils' },
          { name: 'Boardwalk Tacos', meta: 'Tacos · 0.4 mi · $', c: '#F6C740', ic: 'utensils' },
          { name: 'Croissants & Coffee', meta: 'Breakfast · 0.6 mi · $', c: '#1FB87A', ic: 'utensils' },
        ].map((f, i) => (
          <div key={i} style={foodStyles.fcard}>
            <div style={{ ...foodStyles.thumb, background: f.c + '22', color: f.c }}>
              <Icon name={f.ic} size={28}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ font: '600 17px var(--font-body)', color: 'var(--fg-1)' }}>{f.name}</div>
              <div style={{ font: '500 13px var(--font-body)', color: 'var(--fg-3)', marginTop: 2 }}>{f.meta}</div>
            </div>
            <Icon name="chevron-right" size={20} color="var(--fg-3)"/>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// =========================================================
// Community — honest crowdsourcing trust
// =========================================================
const communityStyles = {
  root: { background: 'var(--bs-ocean-ink)', color: '#fff', padding: 'clamp(96px, 12vw, 160px) clamp(20px, 5vw, 56px)' },
  inner: { maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' },
  feed: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--radius-xl)', padding: 28 },
  pulse: { display: 'flex', alignItems: 'center', gap: 8, font: '500 11px var(--font-mono)', color: 'var(--bs-sun)', letterSpacing: '0.14em', textTransform: 'uppercase' },
  pulseDot: { width: 8, height: 8, borderRadius: '50%', background: 'var(--bs-sun)', animation: 'bspulse 1.6s var(--ease-tide) infinite' },
};

const CommunitySection = () => (
  <section style={communityStyles.root}>
    <style>{`@keyframes bspulse { 0%,100%{opacity:1; transform:scale(1)} 50%{opacity:0.4; transform:scale(1.4)} }`}</style>
    <div style={communityStyles.inner}>
      <div className="reveal">
        <div className="eyebrow" style={{ color: 'var(--bs-sun)' }}>Built by the coast</div>
        <h2 className="display-md" style={{ marginTop: 14, color: '#fff', fontSize: 'clamp(36px,5vw,56px)' }}>
          The more beachgoers using it, the sharper it gets.
        </h2>
        <p className="body-lg" style={{ marginTop: 20, color: 'rgba(255,255,255,0.75)', maxWidth: 480 }}>
          No paid sensors. No black-box prediction. Just locals and visitors dropping fast Open / Limited / Full pings as they pass. Honest data, freshest where you need it most.
        </p>
        <p className="body" style={{ marginTop: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 480 }}>
          You can browse and report without an account. Sign in to save lots, get pings, and earn XP.
        </p>
      </div>
      <div style={communityStyles.feed} className="reveal" data-delay="2">
        <div style={communityStyles.pulse}>
          <div style={communityStyles.pulseDot}></div>
          Live reports · Grand Strand
        </div>
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14 }} data-card-stagger>
          {[
            { who: 'A beachgoer at Cherry Grove',         msg: 'About 8 open spots, moving fast.',     t: '30s', c: 'open' },
            { who: 'A local at 7th Ave Public Lot',       msg: 'Just filled. Long line at entrance.',  t: '2m',  c: 'full' },
            { who: 'A beachgoer at Pier 14 Garage',       msg: 'Half full but turning over fast.',     t: '4m',  c: 'limited' },
            { who: 'A weekly visitor at Boardwalk',       msg: 'Boardwalk Pavilion wide open today.',  t: '6m',  c: 'open' },
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: `var(--bs-${r.c})`, marginTop: 8, flex: '0 0 auto' }}></div>
              <div style={{ flex: 1 }}>
                <div style={{ font: '500 11px var(--font-mono)', color: 'rgba(255,255,255,0.5)' }}>{r.who} · {r.t} ago</div>
                <div style={{ font: '500 14px var(--font-body)', color: '#fff', marginTop: 2 }}>{r.msg}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="caption" style={{ marginTop: 22, color: 'rgba(255,255,255,0.5)' }}>
          Sample reports for illustration. Live data shows in-app.
        </p>
      </div>
    </div>
  </section>
);

// =========================================================
// Final CTA
// =========================================================
const finalStyles = {
  root: {
    position: 'relative',
    background: 'var(--bg-sky-gradient)',
    padding: 'clamp(120px, 14vw, 200px) clamp(20px, 5vw, 56px)',
    overflow: 'hidden',
    textAlign: 'center',
  },
  grain: { position: 'absolute', inset: 0, backgroundImage: 'var(--bg-grain)', opacity: 0.3, pointerEvents: 'none', mixBlendMode: 'overlay' },
  inner: { position: 'relative', maxWidth: 880, margin: '0 auto' },
};

const FinalCTA = ({ go }) => (
  <section id="download" style={finalStyles.root}>
    <div style={finalStyles.grain}></div>
    <div style={finalStyles.inner} className="reveal">
      <h2 className="display-lg" style={{ fontSize: 'clamp(48px,7vw,88px)', color: '#0B2740' }}>
        Park sooner. <span className="serif-italic" style={{ color: 'var(--bs-ocean-deep)' }}>Sand quicker.</span>
      </h2>
      <p className="body-lg" style={{ marginTop: 22, color: '#385166', maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
        Free to browse. Free to report. Sign in to save lots, get pings, and help the next beachgoer.
      </p>
      <div style={{ marginTop: 36, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="https://apps.apple.com/us/app/beach-spot/id6762165460" target="_blank" rel="noopener noreferrer"><img src="/assets/badges/app-store.svg" alt="App Store" style={{ height: 60 }}/></a>
        <a href="mailto:hello@beachspotapp.com?subject=Android%20app%20preview"><img src="/assets/badges/google-play.svg" alt="Google Play" style={{ height: 60 }}/></a>
      </div>
    </div>
  </section>
);

// =========================================================
// HomePage — composes all
// =========================================================
const HomePage = ({ go }) => (
  <main>
    <HeroSection/>
    <ScrollStory/>
    <HowItWorks/>
    <SolutionSection/>
    <TickerRail/>
    <FoodNearby/>
    <CommunitySection/>
    <CountersBand/>
    <FinalCTA go={go}/>
  </main>
);

Object.assign(window, { HowItWorks, SolutionSection, FoodNearby, CommunitySection, FinalCTA, HomePage });
