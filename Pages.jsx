// Support, Privacy, Terms — utility pages

const supportStyles = {
  hero: { background: 'linear-gradient(180deg, var(--bs-foam-deep) 0%, var(--bs-foam) 100%)', padding: 'clamp(64px,7vw,96px) clamp(20px,5vw,56px) clamp(48px,5vw,64px)' },
  heroInner: { maxWidth: 880, margin: '0 auto', textAlign: 'center' },
  cats: { background: 'var(--bs-foam)', padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,56px) clamp(80px,9vw,120px)' },
  catsInner: { maxWidth: 1080, margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 },
  card: { background: '#fff', borderRadius: 'var(--radius-lg)', padding: 22, border: '1px solid var(--border-hair)', boxShadow: 'var(--shadow-1)', display: 'flex', flexDirection: 'column', gap: 8, textDecoration: 'none' },
  ico: { width: 40, height: 40, borderRadius: 12, background: 'var(--bs-foam-deep)', color: 'var(--bs-ocean-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  qa: { background: '#FFFDF8', padding: 'clamp(80px,9vw,120px) clamp(20px,5vw,56px)', borderTop: '1px solid var(--border-hair)' },
  qaInner: { maxWidth: 760, margin: '0 auto' },
  qaItem: { padding: '24px 0', borderBottom: '1px solid var(--border-hair)' },
  qaQ: { font: '600 19px var(--font-display)', color: 'var(--fg-1)' },
  qaA: { font: '400 16px var(--font-body)', color: 'var(--fg-2)', marginTop: 8, lineHeight: 1.65 },
  delBox: { background: 'var(--bs-foam-deep)', border: '1px solid rgba(46,163,242,0.25)', borderRadius: 'var(--radius-xl)', padding: 28, marginTop: 32 },
};

const SupportPage = () => (
  <main>
    <section style={supportStyles.hero}>
      <div style={supportStyles.heroInner} className="reveal in-view">
        <div className="eyebrow">Support</div>
        <h1 className="display-md" style={{ marginTop: 12, fontSize: 'clamp(40px,5vw,56px)' }}>
          How can we help?
        </h1>
        <p className="body-lg" style={{ marginTop: 16, color: 'var(--fg-2)' }}>
          Email us anytime at <a href="mailto:hello@beachspotapp.com" style={{ color: 'var(--bs-ocean-deep)', borderBottom: '1px solid currentColor', textDecoration: 'none' }}>hello@beachspotapp.com</a>. We read every message.
        </p>
      </div>
    </section>

    <section style={supportStyles.cats}>
      <div style={supportStyles.catsInner}>
        <div style={supportStyles.grid} className="reveal">
          {[
            { ic: 'map-pin', t: 'Using the app', d: 'Reporting lots, saving favorites, push notifications, account basics.' },
            { ic: 'parking', t: 'Lot owners', d: 'Listing your lot, attendants, dashboard, billing & cancellations.' },
            { ic: 'shield', t: 'Account & data', d: 'Sign-in problems, account deletion, privacy controls.' },
            { ic: 'mail', t: 'Report a problem', d: 'Wrong lot info, bugs, lot we should add, lot we should remove.' },
            { ic: 'star', t: 'Feedback', d: 'Feature ideas, what works, what doesn\'t. We\'re a small team and we listen.' },
            { ic: 'utensils', t: 'Restaurants', d: 'Listed restaurant updates, removals, corrections.' },
          ].map((c, i) => (
            <a key={i} href="mailto:hello@beachspotapp.com" style={supportStyles.card}>
              <div style={supportStyles.ico}><Icon name={c.ic} size={20}/></div>
              <div style={{ font: '600 17px var(--font-body)', color: 'var(--fg-1)', marginTop: 4 }}>{c.t}</div>
              <div style={{ font: '400 14px var(--font-body)', color: 'var(--fg-2)', lineHeight: 1.55 }}>{c.d}</div>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section style={supportStyles.qa}>
      <div style={supportStyles.qaInner}>
        <div className="reveal">
          <div className="eyebrow">Account deletion</div>
          <h2 className="h1" style={{ marginTop: 12 }}>Delete your BeachSpot account.</h2>
          <p className="body-lg" style={{ marginTop: 12, color: 'var(--fg-2)' }}>
            You can delete your BeachSpot account at any time. We honor deletion requests promptly per our privacy policy.
          </p>
          <div style={supportStyles.delBox}>
            <div style={{ font: '600 14px var(--font-body)', color: 'var(--bs-ocean-deep)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Two ways to delete</div>
            <ol style={{ marginTop: 14, paddingLeft: 22, color: 'var(--fg-1)', font: '500 16px var(--font-body)', lineHeight: 1.7 }}>
              <li>In the BeachSpot app: open <b>You → Settings → Delete account</b>. Confirm. Your account is queued for deletion immediately.</li>
              <li>By email: write to <a href="mailto:hello@beachspotapp.com" style={{ color: 'var(--bs-ocean-deep)' }}>hello@beachspotapp.com</a> from the address on your account, subject "Delete my BeachSpot account". We confirm within 5 business days.</li>
            </ol>
            <p className="body-sm" style={{ marginTop: 16, color: 'var(--fg-2)' }}>
              When you delete, we remove your profile, saved lots, XP and badge progress, and personally identifying info. We retain anonymous, de-identified report data so existing lot history remains accurate (no name or device attached).
            </p>
          </div>
        </div>

        <div className="reveal" style={{ marginTop: 56 }}>
          <h2 className="h2">Common questions</h2>
          {[
            { q: 'I\'m not getting lot-availability notifications.', a: 'Make sure notifications are enabled for BeachSpot in your phone\'s settings. Saved-lot pings require both system notification permission and being signed in.' },
            { q: 'Can I use BeachSpot without signing in?', a: 'Yes. You can view the map and submit reports without an account. Sign in to save lots, get pings, and earn XP/badges.' },
            { q: 'I see a lot that no longer exists.', a: 'Email us with the lot name and address — we\'ll review and remove it.' },
            { q: 'I\'m a lot attendant — how do I sign in?', a: 'Your lot owner adds your phone number to their dashboard. Open the app, choose attendant sign-in, enter your number, and confirm the SMS code from Twilio.' },
            { q: 'How recent does a lot report need to be?', a: 'BeachSpot weights fresh reports higher and labels older ones. After a while a lot reverts to "no recent report".' },
          ].map((it, i) => (
            <div key={i} style={supportStyles.qaItem}>
              <div style={supportStyles.qaQ}>{it.q}</div>
              <div style={supportStyles.qaA}>{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

// =========================================================
// Privacy & Terms — preserve plain-language voice
// =========================================================
const legalStyles = {
  root: { background: 'var(--bs-foam)', padding: 'clamp(48px,5vw,72px) clamp(20px,5vw,56px) clamp(80px,9vw,120px)' },
  inner: { maxWidth: 760, margin: '0 auto' },
  back: { display: 'inline-flex', alignItems: 'center', gap: 6, font: '500 13px var(--font-body)', color: 'var(--bs-ocean-deep)', textDecoration: 'none', marginBottom: 24 },
  short: { background: 'var(--bs-foam-deep)', border: '1px solid rgba(46,163,242,0.25)', borderRadius: 'var(--radius-lg)', padding: 24, marginTop: 24 },
  h: { marginTop: 48, marginBottom: 12 },
};

// Privacy page styles — extend the legal base
const privacyStyles = {
  list: { paddingLeft: 0, marginTop: 12, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
  li: {
    position: 'relative',
    paddingLeft: 22,
    font: '400 16px var(--font-body)',
    color: 'var(--fg-2)',
    lineHeight: 1.6,
  },
  liBullet: {
    position: 'absolute',
    left: 4, top: 11,
    width: 6, height: 6,
    borderRadius: '50%',
    background: 'var(--bs-ocean)',
  },
  subH: {
    font: '600 18px var(--font-display)',
    color: 'var(--fg-1)',
    marginTop: 24,
    marginBottom: 6,
    letterSpacing: '-0.01em',
  },
  vendor: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '6px 14px',
    marginTop: 14,
    font: '400 15px var(--font-body)',
    color: 'var(--fg-2)',
  },
  vendorName: {
    font: '600 15px var(--font-body)',
    color: 'var(--fg-1)',
    whiteSpace: 'nowrap',
  },
  contactCard: {
    marginTop: 24,
    padding: 22,
    background: '#fff',
    border: '1px solid var(--border-hair)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-1)',
  },
};

const PrivacyList = ({ items }) => (
  <ul style={privacyStyles.list}>
    {items.map((it, i) => (
      <li key={i} style={privacyStyles.li}>
        <span style={privacyStyles.liBullet}></span>
        {typeof it === 'string'
          ? it
          : (<><strong style={{ color: 'var(--fg-1)', fontWeight: 600 }}>{it.t}: </strong>{it.d}</>)}
      </li>
    ))}
  </ul>
);

const PrivacyPage = ({ go }) => (
  <main style={legalStyles.root}>
    <div style={legalStyles.inner}>
      <a href="#" style={legalStyles.back} onClick={(e) => { e.preventDefault(); go('home'); }}>
        ← Back to BeachSpot
      </a>
      <div className="eyebrow">Privacy</div>
      <h1 className="display-md" style={{ marginTop: 8, fontSize: 'clamp(36px,4vw,48px)' }}>
        Your data, <span className="serif-italic" style={{ color: 'var(--bs-ocean-deep)' }}>handled with care.</span>
      </h1>
      <p className="body" style={{ marginTop: 18, color: 'var(--fg-3)' }}>
        Last updated: April 27, 2026 · Effective: April 27, 2026
      </p>

      <div style={legalStyles.short}>
        <div style={{ font: '600 14px var(--font-body)', color: 'var(--bs-ocean-deep)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>The short version</div>
        <p className="body" style={{ marginTop: 10, color: 'var(--fg-1)' }}>
          BeachSpot collects only what we need to show you nearby parking and keep reports honest. We don't sell your data, we don't run ads, and we don't track you across other apps.
        </p>
      </div>

      <p className="body" style={{ marginTop: 28 }}>
        BeachSpot ("we," "us," or "our") operates the BeachSpot mobile application and beachspotapp.com (together, the "Service"). This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using the Service, you agree to the practices described below.
      </p>

      {/* ---------- 1. Information we collect ---------- */}
      <h2 className="h2" style={legalStyles.h}>1. Information we collect</h2>

      <h3 style={privacyStyles.subH}>1.1 Information you provide</h3>
      <PrivacyList items={[
        { t: 'Account info', d: 'when you sign up, we collect your email address and a chosen username.' },
        { t: 'Parking reports', d: "the lot you're reporting, the status you select, and any optional note you add." },
        { t: 'Lot owner submissions', d: 'if you claim or register a parking lot, we collect business name, address, hours, pricing, and contact details.' },
        { t: 'Support messages', d: 'anything you send to us via in-app contact forms or email.' },
      ]}/>

      <h3 style={privacyStyles.subH}>1.2 Information collected automatically</h3>
      <PrivacyList items={[
        { t: 'Location', d: "if you grant permission, we use your device's GPS to show nearby parking and to verify reports are submitted from a plausible location. You can revoke this permission at any time in your device settings." },
        { t: 'Device info', d: 'a non-personal device identifier used to rate-limit anonymous reports and prevent abuse.' },
        { t: 'Usage data', d: 'events such as screens viewed, reports submitted, and errors encountered, used to improve the app.' },
        { t: 'Crash logs', d: 'diagnostic information collected via Sentry when the app encounters an error.' },
      ]}/>

      <h3 style={privacyStyles.subH}>1.3 Information we do NOT collect</h3>
      <PrivacyList items={[
        'We do not access your contacts, photos, microphone, camera, or calendar.',
        'We do not collect precise location in the background — only while the app is open.',
        'We do not sell your personal information to anyone, ever.',
      ]}/>

      {/* ---------- 2. How we use information ---------- */}
      <h2 className="h2" style={legalStyles.h}>2. How we use information</h2>
      <PrivacyList items={[
        'Show you nearby parking lots and their real-time availability.',
        'Calculate trust scores and prevent spam or abusive reports.',
        'Award points, badges, and streaks as part of the rewards system.',
        "Send you the notifications you've opted into (e.g., favorite lot opens up).",
        'Process payments for lot owner subscriptions and event boosts (via Stripe).',
        "Send SMS notifications to attendants you've authorized (via Twilio), where applicable.",
        'Diagnose and fix bugs, monitor app performance, and improve the Service.',
      ]}/>

      {/* ---------- 3. How we share information ---------- */}
      <h2 className="h2" style={legalStyles.h}>3. How we share information</h2>
      <p className="body">
        We share data only with service providers that help us run the Service, and only to the extent needed for them to do so:
      </p>
      <div style={privacyStyles.vendor}>
        <span style={privacyStyles.vendorName}>Supabase</span>
        <span>database, authentication, real-time, and file storage.</span>
        <span style={privacyStyles.vendorName}>Stripe</span>
        <span>payment processing for lot owner subscriptions. We never see or store full credit card numbers.</span>
        <span style={privacyStyles.vendorName}>Twilio</span>
        <span>SMS delivery for attendant invites and notifications, where enabled.</span>
        <span style={privacyStyles.vendorName}>Mapbox</span>
        <span>map tile rendering and geocoding for addresses you search.</span>
        <span style={privacyStyles.vendorName}>Sentry</span>
        <span>anonymous crash and error monitoring.</span>
        <span style={privacyStyles.vendorName}>Apple / Google</span>
        <span>push notification delivery, when you've enabled them.</span>
      </div>
      <p className="body" style={{ marginTop: 18 }}>
        We may also disclose information if required by law, to protect our rights, or to protect users from harm. If BeachSpot is acquired or merged, your information may transfer to the successor entity, subject to this Privacy Policy.
      </p>

      {/* ---------- 4. Data retention ---------- */}
      <h2 className="h2" style={legalStyles.h}>4. Data retention</h2>
      <p className="body">
        We keep your account information for as long as your account is active. Reports are retained indefinitely as anonymized, aggregated data — but identifying information tied to a specific report is deleted when you delete your account. You can request account deletion from within the app or by emailing us.
      </p>

      {/* ---------- 5. Your rights and choices ---------- */}
      <h2 className="h2" style={legalStyles.h}>5. Your rights and choices</h2>
      <PrivacyList items={[
        { t: 'Access & export', d: 'you can request a copy of the personal data we hold about you.' },
        { t: 'Correction', d: 'update your username, email, and other profile fields from the app.' },
        { t: 'Deletion', d: 'delete your account at any time. Aggregated, anonymized usage data may persist.' },
        { t: 'Location', d: 'revoke location access in your device settings; the app will still work, with reduced functionality.' },
        { t: 'Notifications', d: 'turn push and SMS notifications off in app settings or your device settings.' },
      ]}/>
      <p className="body" style={{ marginTop: 18 }}>
        California, EU, and UK residents have additional rights under their respective privacy laws (CCPA, GDPR, UK GDPR). To exercise any of these, contact us using the email below — we'll respond within the timeframe required by applicable law.
      </p>

      {/* ---------- 6. Children's privacy ---------- */}
      <h2 className="h2" style={legalStyles.h}>6. Children's privacy</h2>
      <p className="body">
        BeachSpot is not directed to children under 13, and we do not knowingly collect personal information from anyone under 13. If you believe a child has provided us with personal information, please contact us and we'll delete it.
      </p>

      {/* ---------- 7. Security ---------- */}
      <h2 className="h2" style={legalStyles.h}>7. Security</h2>
      <p className="body">
        We use industry-standard encryption in transit (TLS) and at rest, role-based access controls, and regular security reviews. No system is perfectly secure, but we work hard to protect your data and notify you promptly if a breach occurs.
      </p>

      {/* ---------- 8. Changes to this policy ---------- */}
      <h2 className="h2" style={legalStyles.h}>8. Changes to this policy</h2>
      <p className="body">
        We may update this Privacy Policy from time to time. Material changes will be announced in the app and reflected by the "Last updated" date at the top of this page. Continued use of the Service after changes take effect constitutes acceptance of the updated policy.
      </p>

      {/* ---------- 9. Contact ---------- */}
      <h2 className="h2" style={legalStyles.h}>9. Contact</h2>
      <p className="body">
        Questions? We'll get back to you within a few business days.
      </p>
      <div style={privacyStyles.contactCard}>
        <div style={{ font: '500 12px var(--font-mono)', color: 'var(--fg-3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get in touch</div>
        <div style={{ marginTop: 10, font: '500 16px var(--font-body)', color: 'var(--fg-1)' }}>
          Email: <a href="mailto:hello@beachspotapp.com" style={{ color: 'var(--bs-ocean-deep)', borderBottom: '1px solid currentColor', textDecoration: 'none' }}>hello@beachspotapp.com</a>
        </div>
        <div style={{ marginTop: 6, font: '500 16px var(--font-body)', color: 'var(--fg-1)' }}>
          Web: <a href="https://beachspotapp.com" style={{ color: 'var(--bs-ocean-deep)', borderBottom: '1px solid currentColor', textDecoration: 'none' }}>beachspotapp.com</a>
        </div>
      </div>
    </div>
  </main>
);

const TermsPage = ({ go }) => (
  <main style={legalStyles.root}>
    <div style={legalStyles.inner}>
      <a href="#" style={legalStyles.back} onClick={(e) => { e.preventDefault(); go('home'); }}>
        ← Back to BeachSpot
      </a>
      <div className="eyebrow">Terms</div>
      <h1 className="display-md" style={{ marginTop: 8, fontSize: 'clamp(36px,4vw,48px)' }}>
        The fine print, <span className="serif-italic" style={{ color: 'var(--bs-ocean-deep)' }}>kept short.</span>
      </h1>
      <p className="body" style={{ marginTop: 18, color: 'var(--fg-3)' }}>
        Last updated: April 27, 2026 · Effective: April 27, 2026
      </p>

      <div style={legalStyles.short}>
        <div style={{ font: '600 14px var(--font-body)', color: 'var(--bs-ocean-deep)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>The short version</div>
        <p className="body" style={{ marginTop: 10, color: 'var(--fg-1)' }}>
          Be a good beach neighbor. Report honestly. Don't break the law. We provide BeachSpot as-is and we may update it.
        </p>
      </div>

      <p className="body" style={{ marginTop: 28 }}>
        Welcome to BeachSpot. These Terms of Service ("Terms") govern your use of the BeachSpot mobile application and beachspotapp.com (together, the "Service"), operated by BeachSpot ("we," "us," "our"). By creating an account, downloading the app, or otherwise using the Service, you agree to these Terms. If you don't agree, please don't use the Service.
      </p>

      {/* ---------- 1. Eligibility ---------- */}
      <h2 className="h2" style={legalStyles.h}>1. Eligibility</h2>
      <p className="body">
        You must be at least 13 years old to use BeachSpot. By using the Service, you represent that you meet this requirement. If you're using the Service on behalf of a business (e.g., as a parking lot owner or attendant), you represent that you have authority to bind that business to these Terms.
      </p>

      {/* ---------- 2. Your account ---------- */}
      <h2 className="h2" style={legalStyles.h}>2. Your account</h2>
      <p className="body">
        You're responsible for keeping your login credentials secure and for everything that happens under your account. Notify us immediately at <a href="mailto:hello@beachspotapp.com" style={{ color: 'var(--bs-ocean-deep)' }}>hello@beachspotapp.com</a> if you suspect unauthorized access. You can browse as a guest, but some features (reporting, points, badges, lot management) require an account.
      </p>

      {/* ---------- 3. How BeachSpot works ---------- */}
      <h2 className="h2" style={legalStyles.h}>3. How BeachSpot works</h2>
      <p className="body">
        BeachSpot shows real-time parking availability based on reports submitted by other users, lot owners, and attendants. Availability information is crowdsourced and time-decayed — it reflects the best available signal at a given moment, but conditions change quickly.
      </p>
      <div style={{ ...legalStyles.short, background: 'var(--bs-limited-bg)', borderColor: 'rgba(245, 158, 11, 0.35)', marginTop: 18 }}>
        <div style={{ font: '600 14px var(--font-body)', color: '#7B4A06', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Heads up</div>
        <p className="body" style={{ marginTop: 10, color: 'var(--fg-1)' }}>
          BeachSpot does not guarantee that any specific parking spot will be available when you arrive. Always confirm in person, follow posted signage, and obey local parking regulations.
        </p>
      </div>

      {/* ---------- 4. Acceptable use ---------- */}
      <h2 className="h2" style={legalStyles.h}>4. Acceptable use</h2>
      <p className="body">You agree not to:</p>
      <PrivacyList items={[
        'Submit false, misleading, or spam reports.',
        'Use the Service to harass, threaten, or harm other users.',
        'Reverse-engineer, scrape, or misuse the Service or its data.',
        "Impersonate someone else, including a lot owner you don't represent.",
        'Use the app while driving in a way that violates local distracted-driving laws.',
        'Attempt to bypass rate limits, trust scoring, or other anti-abuse systems.',
      ]}/>
      <p className="body" style={{ marginTop: 18 }}>
        We may suspend or terminate accounts that violate these rules, in our reasonable discretion.
      </p>

      {/* ---------- 5. Rewards, points, and badges ---------- */}
      <h2 className="h2" style={legalStyles.h}>5. Rewards, points, and badges</h2>
      <p className="body">
        Points, badges, streaks, and trust scores are non-monetary, non-transferable, and have no cash value. We may adjust the rewards system, recalculate scores, or remove fraudulent activity at any time. Rewards exist solely to encourage good reporting behavior.
      </p>

      {/* ---------- 6. Lot owner subscriptions and payments ---------- */}
      <h2 className="h2" style={legalStyles.h}>6. Lot owner subscriptions and payments</h2>
      <p className="body">
        If you subscribe to a paid lot owner plan (Starter, Growth, or Pro) or purchase an Event Boost, the following applies:
      </p>
      <PrivacyList items={[
        { t: 'Billing', d: 'handled by Stripe. By subscribing, you authorize recurring charges to your payment method until you cancel.' },
        { t: 'Cancellation', d: 'you can cancel any time in the app. Your plan remains active through the end of the current billing period.' },
        { t: 'Refunds', d: "we don't offer refunds for partial billing periods, except where required by law." },
        { t: 'Plan changes', d: 'upgrading takes effect immediately, with a prorated charge. Downgrading takes effect at the next billing cycle.' },
        { t: 'Pricing', d: "we may change pricing with at least 30 days' notice; changes apply to the next billing period." },
      ]}/>

      {/* ---------- 7. User-submitted content ---------- */}
      <h2 className="h2" style={legalStyles.h}>7. User-submitted content</h2>
      <p className="body">
        When you submit a report, lot listing, photo, note, or other content ("User Content"), you grant BeachSpot a worldwide, royalty-free, non-exclusive license to use, display, modify, and distribute that content in connection with operating and improving the Service. You retain ownership of your User Content. You're responsible for making sure your submissions are accurate and don't infringe anyone else's rights.
      </p>

      {/* ---------- 8. Intellectual property ---------- */}
      <h2 className="h2" style={legalStyles.h}>8. Intellectual property</h2>
      <p className="body">
        The BeachSpot name, logo, app, website, and design are owned by us. You may not copy, modify, or create derivative works of the Service without our written permission. All other trademarks belong to their respective owners.
      </p>

      {/* ---------- 9. Third-party services ---------- */}
      <h2 className="h2" style={legalStyles.h}>9. Third-party services</h2>
      <p className="body">
        The Service uses third-party services (Stripe for payments, Mapbox for maps, Twilio for SMS, Apple/Google for push notifications, Supabase for backend, Sentry for monitoring). Your use of those services is also governed by their terms and privacy policies. We're not responsible for third-party outages or issues outside our control.
      </p>

      {/* ---------- 10. Disclaimer of warranties ---------- */}
      <h2 className="h2" style={legalStyles.h}>10. Disclaimer of warranties</h2>
      <p className="body">
        The Service is provided <strong style={{ color: 'var(--fg-1)' }}>"as is"</strong> and <strong style={{ color: 'var(--fg-1)' }}>"as available"</strong>, without warranties of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement. We don't warrant that parking availability data will be accurate, complete, or timely, or that the Service will be uninterrupted or error-free.
      </p>

      {/* ---------- 11. Limitation of liability ---------- */}
      <h2 className="h2" style={legalStyles.h}>11. Limitation of liability</h2>
      <p className="body">
        To the fullest extent allowed by law, BeachSpot and its team will not be liable for indirect, incidental, special, consequential, or punitive damages — including lost profits, lost data, parking tickets, towing fees, or missed beach time — arising from your use of the Service. Our total liability for any claim is limited to the greater of (a) the amount you paid us in the 12 months before the claim, or (b) $50.
      </p>

      {/* ---------- 12. Indemnification ---------- */}
      <h2 className="h2" style={legalStyles.h}>12. Indemnification</h2>
      <p className="body">
        You agree to indemnify and hold BeachSpot harmless from any claims, damages, or expenses arising from your violation of these Terms, your User Content, or your use of the Service.
      </p>

      {/* ---------- 13. Termination ---------- */}
      <h2 className="h2" style={legalStyles.h}>13. Termination</h2>
      <p className="body">
        You can stop using the Service and delete your account at any time. We may suspend or terminate your access if you violate these Terms or if we discontinue the Service. Sections that should reasonably survive termination (like ownership, disclaimers, and limitation of liability) will survive.
      </p>

      {/* ---------- 14. Governing law and disputes ---------- */}
      <h2 className="h2" style={legalStyles.h}>14. Governing law and disputes</h2>
      <p className="body">
        These Terms are governed by the laws of the State of South Carolina, without regard to its conflict-of-laws rules. Any dispute will be resolved in the state or federal courts located in Horry County, South Carolina, and you consent to personal jurisdiction there.
      </p>

      {/* ---------- 15. Changes to these Terms ---------- */}
      <h2 className="h2" style={legalStyles.h}>15. Changes to these Terms</h2>
      <p className="body">
        We may update these Terms from time to time. Material changes will be announced in the app and reflected by the "Last updated" date at the top of this page. Continued use of the Service after changes take effect means you accept the updated Terms.
      </p>

      {/* ---------- 16. Apple App Store additional terms ---------- */}
      <h2 className="h2" style={legalStyles.h}>16. Apple App Store additional terms</h2>
      <p className="body">
        If you downloaded BeachSpot from the Apple App Store, you acknowledge that these Terms are between you and BeachSpot only — not Apple. Apple is not responsible for the Service or any claims related to it. Apple is, however, a third-party beneficiary of these Terms and may enforce them against you.
      </p>

      {/* ---------- 17. Contact ---------- */}
      <h2 className="h2" style={legalStyles.h}>17. Contact</h2>
      <p className="body">
        Questions about these Terms? Get in touch.
      </p>
      <div style={privacyStyles.contactCard}>
        <div style={{ font: '500 12px var(--font-mono)', color: 'var(--fg-3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get in touch</div>
        <div style={{ marginTop: 10, font: '500 16px var(--font-body)', color: 'var(--fg-1)' }}>
          Email: <a href="mailto:hello@beachspotapp.com" style={{ color: 'var(--bs-ocean-deep)', borderBottom: '1px solid currentColor', textDecoration: 'none' }}>hello@beachspotapp.com</a>
        </div>
        <div style={{ marginTop: 6, font: '500 16px var(--font-body)', color: 'var(--fg-1)' }}>
          Web: <a href="https://beachspotapp.com" style={{ color: 'var(--bs-ocean-deep)', borderBottom: '1px solid currentColor', textDecoration: 'none' }}>beachspotapp.com</a>
        </div>
      </div>
    </div>
  </main>
);

Object.assign(window, { SupportPage, PrivacyPage, TermsPage });
