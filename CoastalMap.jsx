// Real Grand Strand coastal map view
// Apple-Maps-inspired: warm cream base, white roads with sandy outlines,
// real N. Myrtle Beach geography (ocean east, parallel coastal grid).
// Used by PhoneMock, StoryViz, hero, lot-owner hero, lot detail.

// pins array: [{ x, y, status, name, label }]
const CoastalMap = ({
  width = 1200, height = 800,           // ASPECT ratio source (responsive via preserveAspectRatio)
  pins = [],
  showLabels = true,
  showPiers = true,
  showCompass = false,
  showUser = false,
  userPos = { x: 0.46, y: 0.78 },
  density = 'normal',                    // 'normal' | 'detailed'
  className,
  style,
}) => {
  // colors — Apple-Maps coastal
  const C = {
    base:    '#F4ECDB',      // warm cream/sand land
    park:    '#C8E1A6',      // parks & dunes
    water:   '#A9D7F0',      // ocean / waterway
    waterDk: '#7FBEDF',
    sand:    '#F0DEB5',      // beach strip
    rdMaj:   '#FFFFFF',      // primary road fill
    rdMajLn: '#E1D6BB',      // primary road outline
    rdMin:   '#FBF4E2',      // residential street
    rdMinLn: '#E8DCBF',
    hwy:     '#FFD66B',      // highway accent
    hwyLn:   '#E5B73B',
    pier:    '#B89571',
    pierLn:  '#8C6E4C',
    text:    '#6B5A3D',
    textHi:  '#3A2F1E',
    bldg:    '#E9DFC8',
  };

  // Real Grand Strand-ish street grid:
  //   - Ocean on east (right) — large water expanse
  //   - Beach strip (sand) hugging the coast
  //   - "N Ocean Blvd" coastal road parallel to beach
  //   - "Kings Hwy" inland parallel
  //   - "Hwy 17 Bypass" further inland (highway accent)
  //   - Numbered Aves running east-west, perpendicular to the ocean
  //   - Park/golf course patch inland
  // All coordinates in 0..1 normalized; rendered at viewBox W×H.
  const W = width, H = height;
  const PAD = 0;

  // Avenue X positions (vertical strokes on the map = north-south of grid since map is rotated 90° to put ocean east-right)
  // We treat: X axis = west(left) → east(right, ocean), Y axis = north(top) → south(bottom).
  // Streets running parallel to ocean are vertical lines on screen (constant X).
  // Numbered Aves run perpendicular (horizontal lines).
  const parallelXs = [
    { x: 0.04, label: 'Hwy 17 Bypass', kind: 'hwy' },
    { x: 0.22, label: 'Hwy 17 Business', kind: 'major' },
    { x: 0.46, label: 'Kings Hwy', kind: 'major' },
    { x: 0.70, label: 'N Ocean Blvd', kind: 'major' },
  ];
  const aves = [
    { y: 0.10, label: '24th Ave N' },
    { y: 0.22, label: '21st Ave N' },
    { y: 0.34, label: '17th Ave N' },
    { y: 0.46, label: '14th Ave N' },
    { y: 0.58, label: '11th Ave N' },
    { y: 0.70, label: '7th Ave N' },
    { y: 0.82, label: '3rd Ave N' },
  ];
  // Residential minor streets in between for texture
  const minorYs = [0.04, 0.16, 0.28, 0.40, 0.52, 0.64, 0.76, 0.88];
  const minorXs = [0.10, 0.30, 0.34, 0.38, 0.54, 0.60, 0.64];

  const xPx = (n) => PAD + n * W;
  const yPx = (n) => PAD + n * H;

  // Beach sand strip + ocean band on east side
  const beachX = 0.78;  // start of sand
  const oceanX = 0.86;  // start of water

  // Building blocks for inland texture
  const blocks = [];
  if (density !== 'minimal') {
    for (let i = 0; i < parallelXs.length - 1; i++) {
      const x0 = parallelXs[i].x + 0.01;
      const x1 = parallelXs[i + 1].x - 0.01;
      for (let j = 0; j < aves.length - 1; j++) {
        const y0 = aves[j].y + 0.012;
        const y1 = aves[j + 1].y - 0.012;
        if (Math.random() > 0.45) continue;
        // Two or three building footprints inside block
        const subs = 1 + Math.floor(Math.random() * 3);
        for (let s = 0; s < subs; s++) {
          const bx = x0 + Math.random() * (x1 - x0) * 0.6;
          const by = y0 + Math.random() * (y1 - y0) * 0.6;
          const bw = (0.04 + Math.random() * 0.06) * (x1 - x0);
          const bh = (0.18 + Math.random() * 0.28) * (y1 - y0);
          blocks.push({ x: bx, y: by, w: bw, h: bh });
        }
      }
    }
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={{ width: '100%', height: '100%', display: 'block', ...style }}
    >
      <defs>
        <linearGradient id="cm-water" x1="0" y1="0" x2={W} y2={H} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={C.water}/>
          <stop offset="100%" stopColor={C.waterDk}/>
        </linearGradient>
        <pattern id="cm-sand-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="0.7" fill="#C9A86A" opacity="0.55"/>
          <circle cx="9" cy="8" r="0.6" fill="#C9A86A" opacity="0.4"/>
        </pattern>
      </defs>

      {/* base land */}
      <rect x="0" y="0" width={W} height={H} fill={C.base}/>

      {/* inland park / golf-course patch */}
      <path d={`M${xPx(0.05)} ${yPx(0.06)} Q ${xPx(0.14)} ${yPx(0.02)} ${xPx(0.20)} ${yPx(0.10)} L ${xPx(0.18)} ${yPx(0.22)} Q ${xPx(0.10)} ${yPx(0.24)} ${xPx(0.05)} ${yPx(0.18)} Z`} fill={C.park} opacity="0.85"/>
      <path d={`M${xPx(0.32)} ${yPx(0.62)} Q ${xPx(0.42)} ${yPx(0.60)} ${xPx(0.44)} ${yPx(0.72)} L ${xPx(0.38)} ${yPx(0.78)} Q ${xPx(0.30)} ${yPx(0.76)} ${xPx(0.30)} ${yPx(0.68)} Z`} fill={C.park} opacity="0.75"/>

      {/* buildings */}
      {blocks.map((b, i) => (
        <rect key={'b' + i} x={xPx(b.x)} y={yPx(b.y)} width={W*b.w} height={H*b.h} fill={C.bldg} rx="1"/>
      ))}

      {/* MINOR residential streets (under majors) */}
      <g stroke={C.rdMin} strokeWidth="6" strokeLinecap="round" fill="none">
        {minorYs.map((y, i) => <path key={'my'+i} d={`M${xPx(0)} ${yPx(y)} L ${xPx(beachX-0.01)} ${yPx(y)}`}/>)}
        {minorXs.map((x, i) => <path key={'mx'+i} d={`M${xPx(x)} ${yPx(0)} L ${xPx(x)} ${yPx(1)}`}/>)}
      </g>
      <g stroke={C.rdMinLn} strokeWidth="0.8" strokeLinecap="round" fill="none">
        {minorYs.map((y, i) => <path key={'myl'+i} d={`M${xPx(0)} ${yPx(y)} L ${xPx(beachX-0.01)} ${yPx(y)}`}/>)}
        {minorXs.map((x, i) => <path key={'mxl'+i} d={`M${xPx(x)} ${yPx(0)} L ${xPx(x)} ${yPx(1)}`}/>)}
      </g>

      {/* MAJOR coastal-parallel streets — outline then fill */}
      <g strokeLinecap="round" fill="none">
        {parallelXs.map((s, i) => (
          <g key={'pp'+i}>
            <path d={`M${xPx(s.x)} ${yPx(0)} L ${xPx(s.x)} ${yPx(1)}`}
                  stroke={s.kind === 'hwy' ? C.hwyLn : C.rdMajLn}
                  strokeWidth={s.kind === 'hwy' ? '18' : '14'}/>
            <path d={`M${xPx(s.x)} ${yPx(0)} L ${xPx(s.x)} ${yPx(1)}`}
                  stroke={s.kind === 'hwy' ? C.hwy : C.rdMaj}
                  strokeWidth={s.kind === 'hwy' ? '14' : '11'}/>
          </g>
        ))}
        {/* numbered aves */}
        {aves.map((a, i) => (
          <g key={'av'+i}>
            <path d={`M${xPx(0)} ${yPx(a.y)} L ${xPx(beachX-0.01)} ${yPx(a.y)}`} stroke={C.rdMajLn} strokeWidth="11"/>
            <path d={`M${xPx(0)} ${yPx(a.y)} L ${xPx(beachX-0.01)} ${yPx(a.y)}`} stroke={C.rdMaj} strokeWidth="8"/>
          </g>
        ))}
      </g>

      {/* sand strip + dot texture */}
      <rect x={xPx(beachX)} y="0" width={W*(oceanX-beachX)} height={H} fill={C.sand}/>
      <rect x={xPx(beachX)} y="0" width={W*(oceanX-beachX)} height={H} fill="url(#cm-sand-dots)"/>

      {/* OCEAN */}
      <rect x={xPx(oceanX)} y="0" width={W*(1-oceanX)} height={H} fill="url(#cm-water)"/>
      {/* wave streaks */}
      <g stroke="#fff" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.55">
        <path d={`M${xPx(oceanX+0.02)} ${yPx(0.12)} Q ${xPx(oceanX+0.04)} ${yPx(0.13)} ${xPx(oceanX+0.07)} ${yPx(0.12)}`}/>
        <path d={`M${xPx(oceanX+0.05)} ${yPx(0.34)} Q ${xPx(oceanX+0.08)} ${yPx(0.36)} ${xPx(oceanX+0.11)} ${yPx(0.34)}`}/>
        <path d={`M${xPx(oceanX+0.02)} ${yPx(0.58)} Q ${xPx(oceanX+0.05)} ${yPx(0.60)} ${xPx(oceanX+0.08)} ${yPx(0.58)}`}/>
        <path d={`M${xPx(oceanX+0.06)} ${yPx(0.78)} Q ${xPx(oceanX+0.09)} ${yPx(0.79)} ${xPx(oceanX+0.12)} ${yPx(0.78)}`}/>
      </g>

      {/* piers — wooden planks extending into ocean */}
      {showPiers && (
        <g>
          {[0.34, 0.72].map((py, i) => (
            <g key={'pier'+i}>
              <rect x={xPx(beachX-0.01)} y={yPx(py-0.008)} width={W*0.14} height={H*0.016} fill={C.pier}/>
              <rect x={xPx(beachX-0.01)} y={yPx(py-0.008)} width={W*0.14} height="1.5" fill={C.pierLn}/>
              <rect x={xPx(beachX-0.01)} y={yPx(py+0.008)-1.5} width={W*0.14} height="1.5" fill={C.pierLn}/>
            </g>
          ))}
        </g>
      )}

      {/* labels */}
      {showLabels && (
        <g fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight="600" fill={C.text}>
          {parallelXs.map((s, i) => (
            <text key={'pl'+i}
                  transform={`translate(${xPx(s.x)+10}, ${yPx(0.98)}) rotate(-90)`}
                  fontSize={s.kind === 'hwy' ? 16 : 14}
                  fill={s.kind === 'hwy' ? '#8A6500' : C.text}>
              {s.label}
            </text>
          ))}
          {aves.map((a, i) => (
            <text key={'al'+i} x={xPx(0.015)} y={yPx(a.y)-4} fontSize="12">
              {a.label}
            </text>
          ))}
          {/* Region labels */}
          <text x={xPx(0.12)} y={yPx(0.06)} fontSize="13" fill={C.textHi} fontWeight="700">N. MYRTLE BEACH</text>
          <text x={xPx(oceanX+0.02)} y={yPx(0.50)} fontSize="20" fill="#1F6E94" fontWeight="700" letterSpacing="0.04em">ATLANTIC</text>
          <text x={xPx(oceanX+0.025)} y={yPx(0.54)} fontSize="13" fill="#1F6E94" fontWeight="600" letterSpacing="0.04em">OCEAN</text>
          {/* pier labels */}
          <text x={xPx(beachX+0.07)} y={yPx(0.345)} fontSize="10" fill="#7A5C3A" fontWeight="600">17th Ave Pier</text>
          <text x={xPx(beachX+0.07)} y={yPx(0.725)} fontSize="10" fill="#7A5C3A" fontWeight="600">Pier 14</text>
        </g>
      )}

      {/* compass rose */}
      {showCompass && (
        <g transform={`translate(${xPx(0.06)}, ${yPx(0.92)})`}>
          <circle r="22" fill="#fff" opacity="0.92"/>
          <text y="-8" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1F6E94" fontFamily="ui-sans-serif">N</text>
          <path d="M0 -6 L 4 6 L 0 2 L -4 6 Z" fill="#1F6E94"/>
        </g>
      )}

      {/* PINS */}
      {pins.map((p, i) => {
        const color = p.status === 'open' ? '#1FB87A'
                    : p.status === 'limited' ? '#F59E0B'
                    : p.status === 'full' ? '#FF6B5C'
                    : '#6B7E92';
        return (
          <g key={'pin' + i} transform={`translate(${xPx(p.x)}, ${yPx(p.y)})`} style={{ cursor: 'pointer' }}>
            {p.status === 'open' && (
              <circle r="0" fill={color} opacity="0.22">
                <animate attributeName="r" values="14;28;14" dur="2.6s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.32;0;0.32" dur="2.6s" repeatCount="indefinite"/>
              </circle>
            )}
            <ellipse cx="0" cy="3" rx="12" ry="3" fill="#000" opacity="0.18"/>
            <path d="M0 14 L -13 -5 Q 0 -16 13 -5 Z" fill={color}/>
            <ellipse cx="0" cy="-4" rx="13" ry="3" fill={color}/>
            <circle cx="0" cy="-6" r="9" fill="#fff"/>
            <text y="-2" textAnchor="middle" fontSize="11" fontWeight="800" fill={color} fontFamily="ui-sans-serif, system-ui">P</text>
            {p.label && (
              <g transform="translate(16,-2)">
                <rect x="0" y="-9" width={(p.label.length * 6.5) + 12} height="18" rx="9" fill="#fff" stroke="rgba(11,39,64,0.1)"/>
                <text x="8" y="4" fontSize="11" fontWeight="600" fill={C.textHi} fontFamily="ui-sans-serif, system-ui">{p.label}</text>
              </g>
            )}
          </g>
        );
      })}

      {/* user blue dot */}
      {showUser && (
        <g transform={`translate(${xPx(userPos.x)}, ${yPx(userPos.y)})`}>
          <circle r="22" fill="#2EA3F2" opacity="0.18"/>
          <circle r="10" fill="#2EA3F2" stroke="#fff" strokeWidth="3"/>
        </g>
      )}
    </svg>
  );
};

Object.assign(window, { CoastalMap });
