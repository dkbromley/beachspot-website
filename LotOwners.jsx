// Lot owners page — full owner funnel

const ownerHeroStyles = {
  root: { background: 'linear-gradient(180deg, #FFF8EA 0%, var(--bs-foam) 100%)', padding: 'clamp(80px,8vw,120px) clamp(20px,5vw,56px) clamp(64px,7vw,96px)' },
  grid: { maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' },
  ctas: { marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' },
};

const OwnerHero = () => (
  <section style={ownerHeroStyles.root}>
    <div className="bs-mobile-stack" style={ownerHeroStyles.grid}>
      <div className="reveal in-view">
        <div className="eyebrow" style={{ color: 'var(--bs-ocean-deep)' }}>For lot owners</div>
        <h1 className="display-lg" style={{ marginTop: 16, fontSize: 'clamp(40px,5.5vw,72px)' }}>
          Turn peak-season demand into <span className="serif-italic" style={{ color: 'var(--bs-ocean-deep)' }}>visibility.</span>
        </h1>
        <p className="body-lg" style={{ marginTop: 24, maxWidth: 540 }}>
          When the closest lot fills up, BeachSpot points drivers to yours. List your lot, surface real-time availability, and reach beachgoers at the exact moment they need parking.
        </p>
        <div style={ownerHeroStyles.ctas}>
          <a className="bs-btn bs-btn--primary bs-btn--lg" href="https://app.beachspotapp.com/" target="_blank" rel="noopener noreferrer">List your lot</a>
          <a className="bs-btn bs-btn--secondary bs-btn--lg" href="mailto:hello@beachspotapp.com">Talk to us</a>
        </div>
      </div>
      <div className="reveal in-view" data-delay="2" style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          width: 'min(440px, 100%)', background: '#fff', borderRadius: 'var(--radius-xl)', padding: 28,
          boxShadow: 'var(--shadow-4)', border: '1px solid var(--border-hair)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ font: '500 12px var(--font-mono)', color: 'var(--fg-3)' }}>YOUR LOT</div>
              <div style={{ font: '600 20px var(--font-display)', color: 'var(--fg-1)', marginTop: 4 }}>Pier 14 Public Lot</div>
              <div style={{ font: '500 13px var(--font-body)', color: 'var(--fg-3)' }}>Myrtle Beach · 92 spaces</div>
            </div>
            <StatusPill status="open" label="Open · 24"/>
          </div>
          <div style={{ marginTop: 22, height: 1, background: 'var(--border-hair)' }}></div>
          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div>
              <div style={{ font: '500 11px var(--font-mono)', color: 'var(--fg-3)' }}>NEARBY LOTS</div>
              <div style={{ font: '600 22px var(--font-display)', color: 'var(--fg-1)', marginTop: 4 }}>3 full</div>
              <div style={{ font: '500 12px var(--font-body)', color: 'var(--fg-2)' }}>within 0.5 mi</div>
            </div>
            <div>
              <div style={{ font: '500 11px var(--font-mono)', color: 'var(--fg-3)' }}>BEACHGOERS NEARBY</div>
              <div style={{ font: '600 22px var(--font-display)', color: 'var(--fg-1)', marginTop: 4 }}>Active</div>
              <div style={{ font: '500 12px var(--font-body)', color: 'var(--fg-2)' }}>looking for parking</div>
            </div>
          </div>
          <div style={{
            marginTop: 18, padding: 14, borderRadius: 14,
            background: 'var(--bs-open-bg)', border: '1px solid rgba(31, 184, 122, 0.3)',
            display: 'flex', gap: 12, alignItems: 'center',
          }}>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: 'var(--bs-open)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="zap" size={20}/>
            </div>
            <div style={{ font: '500 13px var(--font-body)', color: 'var(--bs-midnight)' }}>
              BeachSpot is routing nearby drivers to your lot when the next closest fills.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// =========================================================
// Owner value
// =========================================================
const ownerValueStyles = {
  root: { background: 'var(--bs-foam)', padding: 'clamp(96px,10vw,140px) clamp(20px,5vw,56px)' },
  inner: { maxWidth: 1280, margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 56 },
  card: { background: '#fff', borderRadius: 22, padding: 28, border: '1px solid var(--border-hair)', boxShadow: 'var(--shadow-1)', minHeight: 220 },
};

const OwnerValue = () => {
  const items = [
    { ic: 'navigation', t: 'Help drivers find your lot', d: 'Show up on the BeachSpot map the moment drivers are searching, not after they\'ve parked elsewhere.' },
    { ic: 'zap', t: 'Surface availability live', d: 'Reports from beachgoers and your attendants keep your lot accurate without manual updates.' },
    { ic: 'route', t: 'Catch nearby overflow', d: 'When the lot next door fills, BeachSpot routes drivers to yours.' },
    { ic: 'shield', t: 'Stay in the right loop', d: 'Manage details, hours, and pricing from a lot-owner dashboard on the web.' },
  ];
  return (
    <section style={ownerValueStyles.root}>
      <div style={ownerValueStyles.inner}>
        <div className="reveal" style={{ maxWidth: 760 }}>
          <div className="eyebrow">Why list with us</div>
          <h2 className="display-md" style={{ marginTop: 14, fontSize: 'clamp(36px,5vw,56px)' }}>
            Reach beachgoers at the exact moment they need parking.
          </h2>
        </div>
        <div style={ownerValueStyles.grid} className="reveal bs-mobile-stack-cards">
          {items.map((x, i) => (
            <div key={i} style={ownerValueStyles.card}>
              <div style={{ width: 46, height: 46, borderRadius: 14, background: 'var(--bs-foam-deep)', color: 'var(--bs-ocean-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={x.ic} size={22}/>
              </div>
              <div style={{ font: '600 19px var(--font-display)', color: 'var(--fg-1)', marginTop: 16 }}>{x.t}</div>
              <div style={{ font: '400 14px var(--font-body)', color: 'var(--fg-2)', marginTop: 8, lineHeight: 1.55 }}>{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =========================================================
// Owner how-it-works (5 steps timeline)
// =========================================================
const ownerFlowStyles = {
  root: { background: 'var(--bs-ocean-ink)', color: '#fff', padding: 'clamp(96px,10vw,140px) clamp(20px,5vw,56px)' },
  inner: { maxWidth: 1280, margin: '0 auto' },
  timeline: { marginTop: 56, position: 'relative', paddingLeft: 0 },
  step: { display: 'grid', gridTemplateColumns: '60px 1fr', gap: 24, padding: '28px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' },
  stepLast: { display: 'grid', gridTemplateColumns: '60px 1fr', gap: 24, padding: '28px 0' },
  num: { font: '600 36px var(--font-display)', color: 'var(--bs-sun)', letterSpacing: '-0.02em' },
};

const OwnerHowItWorks = () => {
  const steps = [
    { n: '01', t: 'Sign up on the web', d: 'Create your BeachSpot account on this site (lot-owner subscriptions are billed online).' },
    { n: '02', t: 'Tell us about your lot', d: 'Address, number of spaces, pricing, hours, photos. Add lot attendants by phone number; they sign in with SMS.' },
    { n: '03', t: 'We review & approve', d: 'BeachSpot reviews each lot for accuracy and location. Most get back to you in 1–2 business days.' },
    { n: '04', t: 'Your lot goes live', d: 'Drivers see your lot on the BeachSpot map, with availability fed by crowd reports and your attendants.' },
    { n: '05', t: 'Manage on the dashboard', d: 'Update hours, pricing, photos, or pause your lot anytime from the owner dashboard.' },
  ];
  return (
    <section style={ownerFlowStyles.root}>
      <div style={ownerFlowStyles.inner}>
        <div className="reveal" style={{ maxWidth: 720 }}>
          <div className="eyebrow" style={{ color: 'var(--bs-sun)' }}>How it works for owners</div>
          <h2 className="display-md" style={{ marginTop: 14, color: '#fff', fontSize: 'clamp(36px,5vw,56px)' }}>
            From signup to live in a few business days.
          </h2>
        </div>
        <div style={ownerFlowStyles.timeline}>
          {steps.map((s, i) => (
            <div key={i} style={i === steps.length - 1 ? ownerFlowStyles.stepLast : ownerFlowStyles.step} className="reveal">
              <div style={ownerFlowStyles.num}>{s.n}</div>
              <div>
                <div style={{ font: '600 22px var(--font-display)', color: '#fff', letterSpacing: '-0.01em' }}>{s.t}</div>
                <div style={{ font: '400 16px var(--font-body)', color: 'rgba(255,255,255,0.7)', marginTop: 8, lineHeight: 1.55, maxWidth: 680 }}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =========================================================
// Pricing — flagged placeholder
// =========================================================
const pricingStyles = {
  root: { background: 'linear-gradient(180deg, var(--bs-foam) 0%, var(--bs-foam-deep) 100%)', padding: 'clamp(96px,10vw,140px) clamp(20px,5vw,56px)' },
  inner: { maxWidth: 1180, margin: '0 auto' },
  cards: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 56, alignItems: 'stretch' },
  card: {
    background: '#fff', borderRadius: 'var(--radius-xl)', padding: '32px 28px',
    border: '1px solid var(--border-hair)',
    boxShadow: 'var(--shadow-2)',
    display: 'flex', flexDirection: 'column',
    position: 'relative',
  },
  cardFeat: {
    borderColor: 'var(--bs-ocean)',
    borderWidth: '2px',
    boxShadow: '0 32px 64px rgba(46,163,242,0.18), 0 16px 32px rgba(46,163,242,0.10)',
    transform: 'translateY(-8px)',
    background: 'linear-gradient(180deg, #FFFFFF 0%, #F4FAFF 100%)',
  },
  ribbon: {
    position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
    background: 'var(--bs-ocean)', color: '#fff',
    font: '600 11px var(--font-body)', letterSpacing: '0.14em', padding: '6px 14px',
    borderRadius: 999, textTransform: 'uppercase',
    boxShadow: '0 6px 16px rgba(46,163,242,0.35)',
    whiteSpace: 'nowrap',
  },
  tierName: {
    font: '600 13px var(--font-body)',
    color: 'var(--bs-ocean-deep)',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
  },
  tagline: {
    font: '500 15px var(--font-body)',
    color: 'var(--fg-2)',
    marginTop: 6,
    lineHeight: 1.4,
    minHeight: 42,
  },
  price: {
    font: '600 56px var(--font-display)',
    color: 'var(--fg-1)',
    letterSpacing: '-0.03em',
    lineHeight: 1,
  },
  unit: {
    font: '500 15px var(--font-body)',
    color: 'var(--fg-3)',
    marginLeft: 8,
  },
  yearly: {
    font: '500 13px var(--font-mono)',
    color: 'var(--fg-3)',
    marginTop: 8,
    letterSpacing: '0.02em',
  },
  bestForBlock: {
    marginTop: 22,
    padding: '14px 16px',
    background: 'var(--bs-foam)',
    border: '1px solid var(--border-hair)',
    borderRadius: 'var(--radius-md)',
  },
  bestForLabel: {
    font: '500 11px var(--font-mono)',
    color: 'var(--fg-3)',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
  },
  bestForText: {
    font: '500 14px var(--font-body)',
    color: 'var(--fg-1)',
    marginTop: 4,
    lineHeight: 1.45,
  },
  ul: {
    listStyle: 'none', padding: 0, margin: '24px 0 0',
    display: 'flex', flexDirection: 'column', gap: 10,
    flex: 1,
  },
  li: {
    display: 'flex', gap: 10, alignItems: 'flex-start',
    font: '400 14px var(--font-body)', color: 'var(--fg-2)', lineHeight: 1.5,
  },
  liIconYes: {
    width: 18, height: 18, borderRadius: '50%',
    background: 'var(--bs-open-bg)', color: 'var(--bs-open)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    flex: '0 0 auto', marginTop: 2,
  },
  liIconNo: {
    width: 18, height: 18, borderRadius: '50%',
    background: 'rgba(11,39,64,0.05)', color: 'var(--fg-3)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    flex: '0 0 auto', marginTop: 2,
  },
  subCta: {
    font: '500 12px var(--font-body)',
    color: 'var(--fg-3)',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 1.4,
  },
  ctaBlock: {
    marginTop: 56,
    textAlign: 'center',
    padding: '40px 24px',
  },
  ctaButton: {
    fontSize: 20,
    padding: '22px 44px',
    borderRadius: 'var(--radius-lg)',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    fontWeight: 700,
    boxShadow: '0 18px 36px rgba(46,163,242,0.32), 0 8px 16px rgba(46,163,242,0.18)',
  },
  ctaSub: {
    marginTop: 16,
    font: '500 13px var(--font-mono)',
    color: 'var(--fg-3)',
    letterSpacing: '0.04em',
  },
};

const OwnerPricing = () => {
  const tiers = [
    {
      name: 'Starter',
      tagline: 'For solo operators with one lot',
      monthly: '$29',
      yearly: '$290/year',
      bestFor: 'A single beach parking lot that wants to be discoverable',
      included: [
        'Verified listing with photos',
        'Real-time status control (Available / Limited / Full)',
        "Lot insights dashboard (peak hours, today's reports)",
        'Featured placement on search & map',
        'Direct support',
      ],
      excluded: [
        'Attendant authorization',
        'Multi-lot management',
        'Event boost discount',
      ],
      cta: 'Start Starter Plan',
      subCta: '30-day free trial — no credit card required',
    },
    {
      name: 'Growth',
      tagline: 'For owners managing 2-3 lots with on-site staff',
      monthly: '$59',
      yearly: '$590/year',
      bestFor: 'Small lot portfolios with attendants helping update status',
      included: [
        'Everything in Starter, plus:',
        'Up to 3 lots under one account',
        'Up to 3 attendants per lot (text-link invites, no app install)',
        'Trusted attendant reports (1.5× weight in status decisions)',
        'Cross-lot analytics view',
        'Priority support',
        '$10 off any Event Boost',
      ],
      excluded: [],
      cta: 'Start Growth Plan',
      subCta: '30-day free trial — no credit card required',
      feat: true,
    },
    {
      name: 'Pro',
      tagline: 'For management companies with multiple properties',
      monthly: '$129',
      yearly: '$1,290/year',
      bestFor: 'Operators with 4+ lots or a busy property management team',
      included: [
        'Everything in Growth, plus:',
        'Unlimited lots under one account',
        'Up to 10 attendants per lot',
        'Advanced analytics (week-over-week, seasonal trends, lot comparison)',
        'Portfolio dashboard (manage all lots from one view)',
        'White-glove onboarding + dedicated success rep',
        '$25 off any Event Boost',
        'Early access to BeachSpot beta features',
      ],
      excluded: [],
      cta: 'Start Pro Plan',
      subCta: '30-day free trial — no credit card required',
    },
  ];
  return (
    <section id="signup" style={pricingStyles.root}>
      <div style={pricingStyles.inner}>
        <div className="reveal">
          <div className="eyebrow">Pricing</div>
          <h2 className="display-md" style={{ marginTop: 14, fontSize: 'clamp(36px,5vw,56px)' }}>
            Pick the plan that fits your lot count.
          </h2>
          <p className="body-lg" style={{ marginTop: 14, maxWidth: 560 }}>
            Billed monthly or annually through Stripe on the web — never inside the mobile app.
          </p>
        </div>
        <div style={pricingStyles.cards} className="reveal bs-mobile-stack-cards">
          {tiers.map((t, i) => (
            <div key={i} style={{ ...pricingStyles.card, ...(t.feat ? pricingStyles.cardFeat : {}) }}>
              {t.feat && <div style={pricingStyles.ribbon}>★ Most popular</div>}
              <div style={pricingStyles.tierName}>{t.name}</div>
              <div style={pricingStyles.tagline}>{t.tagline}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', marginTop: 18 }}>
                <span style={pricingStyles.price}>{t.monthly}</span>
                <span style={pricingStyles.unit}>/month</span>
              </div>
              <div style={pricingStyles.yearly}>or {t.yearly}</div>
              <div style={pricingStyles.bestForBlock}>
                <div style={pricingStyles.bestForLabel}>Best for</div>
                <div style={pricingStyles.bestForText}>{t.bestFor}</div>
              </div>
              <ul style={pricingStyles.ul}>
                {t.included.map((f, j) => (
                  <li key={`i${j}`} style={pricingStyles.li}>
                    <span style={pricingStyles.liIconYes}><Icon name="check" size={14} stroke={2.5}/></span>
                    <span>{f}</span>
                  </li>
                ))}
                {t.excluded.map((f, j) => (
                  <li key={`x${j}`} style={{ ...pricingStyles.li, color: 'var(--fg-3)' }}>
                    <span style={pricingStyles.liIconNo}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M6 18L18 6"/></svg>
                    </span>
                    <span style={{ textDecoration: 'line-through', textDecorationColor: 'rgba(11,39,64,0.25)' }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={pricingStyles.ctaBlock} className="reveal">
          <a
            className="bs-btn bs-btn--primary bs-btn--lg"
            href="https://app.beachspotapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={pricingStyles.ctaButton}
          >
            List your lot <Icon name="arrow-right" size={18}/>
          </a>
          <div style={pricingStyles.ctaSub}>30-day free trial · no credit card required · cancel anytime</div>
        </div>
      </div>
    </section>
  );
};

// =========================================================
// Owner FAQ
// =========================================================
const faqStyles = {
  root: { background: 'var(--bs-foam)', padding: 'clamp(96px,10vw,140px) clamp(20px,5vw,56px)' },
  inner: { maxWidth: 880, margin: '0 auto' },
  q: { borderBottom: '1px solid var(--border-hair)' },
  qBtn: { background: 'transparent', border: 0, width: '100%', textAlign: 'left', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, cursor: 'pointer', font: '600 19px var(--font-display)', color: 'var(--fg-1)', letterSpacing: '-0.01em' },
  qBody: { font: '400 16px var(--font-body)', color: 'var(--fg-2)', paddingBottom: 24, lineHeight: 1.6, maxWidth: 720 },
};

const OwnerFAQ = () => {
  const [open, setOpen] = React.useState(0);
  const qs = [
    { q: 'How is lot availability updated?', a: 'A mix of beachgoers reporting Open / Limited / Full as they drive past, your lot attendants (added via phone-number SMS sign-in), and you the owner from the dashboard. Reports age out so stale data doesn\'t mislead drivers.' },
    { q: 'Can I manage my own lot?', a: 'Yes. Once approved, you get a lot-owner role and access to a web dashboard where you can update hours, pricing, photos, attendants, and pause/resume your lot.' },
    { q: 'Why can\'t I sign up from inside the mobile app?', a: 'Apple\'s App Store rules (3.1.1) prevent us from linking to subscription or external business sign-up from the iOS app. Lot-owner signup and billing happen on this website only.' },
    { q: 'How does approval work?', a: 'BeachSpot reviews each lot to verify location and basic accuracy. Most lots are approved within 1–2 business days. We\'ll email you when you\'re live.' },
    { q: 'What if a report about my lot is wrong?', a: 'You can correct status from the dashboard and your update overrides recent crowd reports. Over time, our trust system weights consistent, accurate reporters more heavily.' },
    { q: 'How does billing work?', a: 'Monthly subscription via Stripe (web checkout). Cancel anytime — your lot stays listed through the end of the billing period.' },
  ];
  return (
    <section style={faqStyles.root}>
      <div style={faqStyles.inner}>
        <div className="reveal" style={{ marginBottom: 32 }}>
          <div className="eyebrow">Questions</div>
          <h2 className="display-md" style={{ marginTop: 14, fontSize: 'clamp(36px,5vw,56px)' }}>
            Owner FAQ.
          </h2>
        </div>
        <div className="reveal">
          {qs.map((it, i) => (
            <div key={i} style={faqStyles.q}>
              <button style={faqStyles.qBtn} onClick={() => setOpen(open === i ? -1 : i)}>
                {it.q}
                <span style={{ color: 'var(--fg-3)', transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 220ms var(--ease-tide)' }}>
                  <Icon name="chevron-down" size={20}/>
                </span>
              </button>
              {open === i && <div style={faqStyles.qBody}>{it.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =========================================================
// Owner final CTA
// =========================================================
const OwnerFinalCTA = () => (
  <section style={{ background: 'linear-gradient(180deg, #FFF8EA 0%, var(--bs-sand) 100%)', padding: 'clamp(96px,10vw,140px) clamp(20px,5vw,56px)', textAlign: 'center' }}>
    <div className="reveal" style={{ maxWidth: 720, margin: '0 auto' }}>
      <h2 className="display-lg" style={{ fontSize: 'clamp(40px,6vw,72px)' }}>
        Become a BeachSpot lot owner.
      </h2>
      <p className="body-lg" style={{ marginTop: 20 }}>
        List your lot, surface live availability, and catch the overflow when the lot next door fills.
      </p>
      <div style={{ marginTop: 32, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a className="bs-btn bs-btn--primary bs-btn--lg" href="https://app.beachspotapp.com/" target="_blank" rel="noopener noreferrer">List your lot</a>
        <a className="bs-btn bs-btn--secondary bs-btn--lg" href="mailto:hello@beachspotapp.com">Contact BeachSpot</a>
      </div>
    </div>
  </section>
);

const LotOwnersPage = () => (
  <main>
    <OwnerHero/>
    <OwnerValue/>
    <OwnerHowItWorks/>
    <OwnerPricing/>
    <OwnerFAQ/>
    <OwnerFinalCTA/>
  </main>
);

Object.assign(window, { OwnerHero, OwnerValue, OwnerHowItWorks, OwnerPricing, OwnerFAQ, OwnerFinalCTA, LotOwnersPage });
