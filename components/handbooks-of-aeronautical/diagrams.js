function Frame({ viewBox, children, className = "" }) {
  return (
    <svg
      viewBox={viewBox}
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

const LINE = "#474747";
const ACCENT = "#cc6e36";
const MUTE = "#b2bdc2";
const BG = "#f1f2f3";

function ArrowDefs({ id, color = ACCENT }) {
  return (
    <defs>
      <marker id={id} markerWidth="9" markerHeight="9" refX="6.5" refY="4.5" orient="auto">
        <path d="M0,0 L9,4.5 L0,9 Z" fill={color} />
      </marker>
    </defs>
  );
}

function Arrow({ x1, y1, x2, y2, color = ACCENT, width = 3, markerId }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      markerEnd={`url(#${markerId})`}
    />
  );
}

function Label({ x, y, children, color = LINE, size = 14, weight = 600, anchor = "start" }) {
  return (
    <text x={x} y={y} fontSize={size} fill={color} fontWeight={weight} textAnchor={anchor}>
      {children}
    </text>
  );
}

/* ---------------------------------------------------------------------- */
/* Shared top-down airplane silhouette — nose points right (+x).           */
/* Local coordinate box: 320 wide x 300 tall. Centerline (longitudinal     */
/* axis) sits at y=150. Wingspan is drawn slightly shorter than fuselage   */
/* length, matching a real trainer's proportions.                         */
/* ---------------------------------------------------------------------- */

export const PLANE_POINTS = {
  nose: [300, 150],
  tailTip: [20, 150],
  wingTipUpper: [205, 20],
  wingTipLower: [205, 280],
  wingRootUpper: [270, 138],
  wingRootLower: [270, 162],
  wingMidUpper: [225, 100],
  wingMidLower: [225, 200],
  stabTipUpper: [56, 95],
  stabTipLower: [56, 205],
  finApex: [20, 128],
  fuselageMid: [155, 150],
  noseGear: [285, 163],
  mainGear: [232, 171],
};

/** Maps a local Plane-space point through translate(tx,ty) scale(s). */
export function mapPoint([x, y], tx, ty, s) {
  return [tx + x * s, ty + y * s];
}

function Plane({ color = LINE, showGear = false, showFin = false }) {
  const fuselage = "M300,150 L268,136 L72,140 L20,150 L72,160 L268,164 Z";
  const wingUpper = "M270,138 L238,138 L205,20 L228,20 Z";
  const wingLower = "M270,162 L238,162 L205,280 L228,280 Z";
  const stabUpper = "M80,140 L60,140 L48,95 L66,95 Z";
  const stabLower = "M80,160 L60,160 L48,205 L66,205 Z";

  return (
    <g>
      <path d={wingUpper} fill={BG} stroke={color} strokeWidth="3" strokeLinejoin="round" />
      <path d={wingLower} fill={BG} stroke={color} strokeWidth="3" strokeLinejoin="round" />
      <path d={stabUpper} fill={BG} stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <path d={stabLower} fill={BG} stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <path d={fuselage} fill={BG} stroke={color} strokeWidth="3" strokeLinejoin="round" />
      {showFin ? <path d="M20,150 L4,150 L20,124 Z" fill={color} opacity="0.92" /> : null}
      {showGear ? (
        <g stroke={color} strokeWidth="2">
          <line x1="285" y1="153" x2="285" y2="163" />
          <circle cx="285" cy="166" r="4" fill="#fff" />
          <line x1="232" y1="162" x2="232" y2="171" />
          <circle cx="232" cy="174" r="4" fill="#fff" />
        </g>
      ) : null}
    </g>
  );
}

/* Standard placement used by every plane-based diagram: translate(110,26) scale(0.42) */
const T = { tx: 110, ty: 26, s: 0.42 };
const P = (key) => mapPoint(PLANE_POINTS[key], T.tx, T.ty, T.s);

/* ---------------------------------------------------------------------- */

export function FourForcesDiagram() {
  const nose = P("nose");
  const tail = P("tailTip");
  const wingUp = P("wingMidUpper");
  const wingDown = P("wingMidLower");
  return (
    <Frame viewBox="0 0 460 180">
      <ArrowDefs id="ff-arrow" color={ACCENT} />
      <g transform={`translate(${T.tx},${T.ty}) scale(${T.s})`}>
        <Plane />
      </g>
      <Arrow x1={nose[0] + 8} y1={nose[1]} x2={nose[0] + 55} y2={nose[1]} markerId="ff-arrow" />
      <Label x={nose[0] + 32} y={nose[1] - 12} color={ACCENT} anchor="middle">Thrust</Label>

      <Arrow x1={tail[0] - 8} y1={tail[1]} x2={tail[0] - 55} y2={tail[1]} markerId="ff-arrow" />
      <Label x={tail[0] - 32} y={tail[1] - 12} color={ACCENT} anchor="middle">Drag</Label>

      <Arrow x1={wingDown[0]} y1={wingDown[1] + 34} x2={wingDown[0]} y2={wingDown[1] + 6} markerId="ff-arrow" />
      <Label x={wingDown[0]} y={wingDown[1] + 50} color={ACCENT} anchor="middle">Lift</Label>

      <Arrow x1={wingUp[0]} y1={wingUp[1] - 34} x2={wingUp[0]} y2={wingUp[1] - 6} markerId="ff-arrow" />
      <Label x={wingUp[0]} y={wingUp[1] - 42} color={ACCENT} anchor="middle">Weight</Label>
    </Frame>
  );
}

export function AxesDiagram() {
  const nose = P("nose");
  const tail = P("tailTip");
  const wingUp = P("wingTipUpper");
  const wingDown = P("wingTipLower");
  const cg = P("fuselageMid");
  return (
    <Frame viewBox="0 0 460 225">
      <g transform={`translate(${T.tx},${T.ty}) scale(${T.s})`}>
        <Plane />
      </g>
      {/* Longitudinal axis — nose to tail, label sits clear of the airframe */}
      <line x1={tail[0] - 14} y1={cg[1]} x2={nose[0] + 14} y2={cg[1]} stroke={LINE} strokeDasharray="1 5" strokeWidth="1.75" strokeLinecap="round" />
      <Label x={nose[0] + 22} y={cg[1] - 30} anchor="start" size={12.5}>Longitudinal</Label>
      <Label x={nose[0] + 22} y={cg[1] - 15} anchor="start" size={12.5}>axis</Label>
      <Label x={nose[0] + 22} y={cg[1] + 4} color={MUTE} weight={500} anchor="start" size={11}>roll ·</Label>
      <Label x={nose[0] + 22} y={cg[1] + 18} color={MUTE} weight={500} anchor="start" size={11}>ailerons</Label>
      {/* Lateral axis — through the wingtips */}
      <line x1={cg[0]} y1={wingUp[1] - 12} x2={cg[0]} y2={wingDown[1] + 12} stroke={LINE} strokeDasharray="1 5" strokeWidth="1.75" strokeLinecap="round" />
      <Label x={cg[0] + 10} y={wingUp[1] - 16} size={12.5}>Lateral axis</Label>
      <Label x={cg[0] + 10} y={wingDown[1] + 26} color={MUTE} weight={500} size={11}>pitch · elevator</Label>
      {/* Vertical axis marker */}
      <circle cx={cg[0]} cy={cg[1]} r="5" fill={ACCENT} />
      <Label x={cg[0]} y={wingDown[1] + 50} color={ACCENT} size={12} anchor="middle">
        Vertical axis (yaw · rudder)
      </Label>
      <Label x={cg[0]} y={wingDown[1] + 66} color={MUTE} weight={500} size={11} anchor="middle">
        through the CG, perpendicular to the page
      </Label>
    </Frame>
  );
}

export function ComponentsDiagram() {
  const wingTip = P("wingTipUpper");
  const gearFront = P("noseGear");
  const stabTip = P("stabTipUpper");
  const fuselageMid = P("fuselageMid");
  const nose = P("nose");
  return (
    <Frame viewBox="0 0 460 220">
      <g transform={`translate(${T.tx},${T.ty}) scale(${T.s})`}>
        <Plane showGear />
      </g>
      <g stroke={MUTE} strokeWidth="1.25">
        <line x1={wingTip[0]} y1={wingTip[1] + 4} x2={wingTip[0]} y2={22} />
        <line x1={stabTip[0]} y1={stabTip[1]} x2={80} y2={34} />
        <line x1={fuselageMid[0]} y1={fuselageMid[1]} x2={fuselageMid[0] - 30} y2={fuselageMid[1] + 30} />
        <line x1={gearFront[0]} y1={gearFront[1] + 10} x2={gearFront[0] + 20} y2={198} />
        <line x1={nose[0]} y1={nose[1]} x2={nose[0] + 30} y2={nose[1] - 20} />
      </g>
      <Label x={wingTip[0]} y={16} anchor="middle">Wing</Label>
      <Label x={78} y={30} anchor="end">Empennage</Label>
      <Label x={fuselageMid[0] - 34} y={fuselageMid[1] + 44} anchor="middle">Fuselage</Label>
      <Label x={gearFront[0] + 22} y={212} anchor="middle">Landing gear</Label>
      <Label x={nose[0] + 32} y={nose[1] - 24} anchor="start">Powerplant</Label>
    </Frame>
  );
}

export function ControlSurfacesDiagram() {
  const wingTipU = P("wingTipUpper");
  const wingTipL = P("wingTipLower");
  const stabTipU = P("stabTipUpper");
  const finApex = P("finApex");
  return (
    <Frame viewBox="0 0 460 220">
      <g transform={`translate(${T.tx},${T.ty}) scale(${T.s})`}>
        <Plane showFin />
        <path d="M238,138 L228,20 L234,20 L244,138 Z" fill={ACCENT} opacity="0.85" />
        <path d="M238,162 L228,280 L234,280 L244,162 Z" fill={ACCENT} opacity="0.85" />
        <path d="M60,140 L48,95 L54,95 L66,140 Z" fill={ACCENT} opacity="0.85" />
        <path d="M60,160 L48,205 L54,205 L66,160 Z" fill={ACCENT} opacity="0.85" />
        <path d="M20,150 L4,150 L20,124 Z" fill={ACCENT} opacity="0.95" />
      </g>
      <g stroke={MUTE} strokeWidth="1.25">
        <line x1={wingTipU[0]} y1={wingTipU[1] + 6} x2={wingTipU[0]} y2={26} />
        <line x1={wingTipL[0]} y1={wingTipL[1] - 6} x2={wingTipL[0]} y2={196} />
        <line x1={stabTipU[0]} y1={stabTipU[1]} x2={82} y2={40} />
        <line x1={finApex[0]} y1={finApex[1]} x2={82} y2={158} />
      </g>
      <Label x={wingTipU[0]} y={20} anchor="middle" color={ACCENT}>Aileron</Label>
      <Label x={wingTipU[0]} y={34} anchor="middle" color={MUTE} weight={500} size={11}>roll</Label>
      <Label x={wingTipL[0]} y={210} anchor="middle" color={ACCENT}>Aileron</Label>
      <Label x={wingTipL[0]} y={196} anchor="middle" color={MUTE} weight={500} size={11}>roll</Label>
      <Label x={80} y={36} anchor="end" color={ACCENT}>Elevator</Label>
      <Label x={80} y={50} anchor="end" color={MUTE} weight={500} size={11}>pitch</Label>
      <Label x={80} y={162} anchor="end" color={ACCENT}>Rudder</Label>
      <Label x={80} y={176} anchor="end" color={MUTE} weight={500} size={11}>yaw</Label>
    </Frame>
  );
}

/* ---------------------------------------------------------------------- */

export function ConstructionDiagram() {
  const trussTop = 14;
  const trussBottom = 84;
  const trussSpan = [0, 32, 64, 96, 128];
  return (
    <Frame viewBox="0 0 480 190">
      {/* Truss */}
      <g transform="translate(20,30)">
        <Label x={64} y={-10} anchor="middle">Truss</Label>
        <line x1={0} y1={trussTop} x2={128} y2={trussTop} stroke={LINE} strokeWidth="2.5" />
        <line x1={0} y1={trussBottom} x2={128} y2={trussBottom} stroke={LINE} strokeWidth="2.5" />
        {trussSpan.slice(0, -1).map((x, i) => (
          <line key={x} x1={x} y1={i % 2 === 0 ? trussTop : trussBottom} x2={x + 32} y2={i % 2 === 0 ? trussBottom : trussTop} stroke={MUTE} strokeWidth="1.75" />
        ))}
        {trussSpan.map((x) => (
          <line key={`v-${x}`} x1={x} y1={trussTop} x2={x} y2={trussBottom} stroke={LINE} strokeWidth="2" />
        ))}
        <Label x={64} y={112} anchor="middle" size={11} color={MUTE} weight={500}>
          Welded tubing + struts
        </Label>
      </g>
      {/* Monocoque */}
      <g transform="translate(186,30)">
        <Label x={62} y={-10} anchor="middle">Monocoque</Label>
        <ellipse cx="62" cy="49" rx="58" ry="42" fill={BG} stroke={LINE} strokeWidth="2.75" />
        <path d="M62,7 A42,42 0 0 1 62,91" fill="none" stroke={MUTE} strokeWidth="1.5" strokeDasharray="2 4" />
        <Label x={62} y={112} anchor="middle" size={11} color={MUTE} weight={500}>
          Stressed skin only
        </Label>
      </g>
      {/* Semimonocoque */}
      <g transform="translate(336,30)">
        <Label x={62} y={-10} anchor="middle">Semimonocoque</Label>
        <ellipse cx="62" cy="49" rx="58" ry="42" fill={BG} stroke={LINE} strokeWidth="2.75" />
        {[16, 39, 62, 85, 108].map((x) => (
          <line key={x} x1={x} y1={x < 25 || x > 100 ? 22 : 8} x2={x} y2={x < 25 || x > 100 ? 76 : 90} stroke={MUTE} strokeWidth="1.25" />
        ))}
        <ellipse cx="62" cy="49" rx="24" ry="38" fill="none" stroke={ACCENT} strokeWidth="1.75" strokeDasharray="2 4" />
        <ellipse cx="62" cy="49" rx="58" ry="42" fill="none" stroke={LINE} strokeWidth="2.75" />
        <Label x={62} y={112} anchor="middle" size={11} color={MUTE} weight={500}>
          + bulkheads &amp; stringers
        </Label>
      </g>
    </Frame>
  );
}

export function AirfoilDiagram() {
  return (
    <Frame viewBox="0 0 420 220">
      <ArrowDefs id="af-lift" color={ACCENT} />
      <ArrowDefs id="af-wind" color={LINE} />
      <path
        d="M30,110 C68,80 160,68 300,94 C232,108 150,120 30,110 Z"
        fill={BG}
        stroke={LINE}
        strokeWidth="2.75"
        strokeLinejoin="round"
      />
      <line x1="32" y1="109" x2="300" y2="94" stroke={LINE} strokeDasharray="1 5" strokeWidth="1.5" strokeLinecap="round" />
      <Label x={165} y={148} color={MUTE} weight={500} size={12.5} anchor="middle">Chord line</Label>

      <Arrow x1="10" y1="168" x2="95" y2="138" markerId="af-wind" color={LINE} width={2.25} />
      <Label x={8} y={186} size={13}>Relative wind</Label>

      <path d="M75,132 A 34,34 0 0 1 78,110" fill="none" stroke={ACCENT} strokeWidth="1.75" />
      <Label x={92} y={122} color={ACCENT} size={13}>AOA</Label>

      <Arrow x1="230" y1="180" x2="257" y2="60" markerId="af-lift" />
      <Label x={266} y={70} color={ACCENT} size={14}>Lift</Label>

      <Arrow x1="230" y1="180" x2="330" y2="163" markerId="af-lift" />
      <Label x={335} y={172} color={ACCENT} size={14}>Drag</Label>
    </Frame>
  );
}

export function StabilityAxesDiagram() {
  const rows = [
    { label: "Longitudinal stability", axis: "Lateral axis", motion: "Pitching", control: "Elevator / stabilator" },
    { label: "Lateral stability", axis: "Longitudinal axis", motion: "Rolling", control: "Ailerons" },
    { label: "Directional stability", axis: "Vertical axis", motion: "Yawing", control: "Rudder" },
  ];
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-left text-num-16">
        <thead>
          <tr className="border-b border-darkslategray-100/20">
            <th className="py-3 pr-4 font-medium text-darkslategray-100">Stability type</th>
            <th className="py-3 pr-4 font-medium text-darkslategray-100">Axis</th>
            <th className="py-3 pr-4 font-medium text-darkslategray-100">Motion</th>
            <th className="py-3 font-medium text-darkslategray-100">Primary control</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-b border-darkslategray-100/10">
              <td className="py-3 pr-4 text-darkslategray-100">{r.label}</td>
              <td className="py-3 pr-4 text-darkslategray-100">{r.axis}</td>
              <td className="py-3 pr-4 text-darkslategray-100">{r.motion}</td>
              <td className="py-3 text-darkslategray-100">{r.control}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FlapBase({ children }) {
  return (
    <>
      <path d="M4,58 C24,38 66,32 108,44" fill="none" stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M4,58 C30,66 70,64 100,58" fill="none" stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />
      {children}
    </>
  );
}

export function FlapTypesDiagram() {
  return (
    <Frame viewBox="0 0 500 150">
      <ArrowDefs id="flap-arrow" color={ACCENT} />
      {/* Plain — whole trailing edge hinges down as one piece */}
      <g transform="translate(10,20)">
        <FlapBase>
          <path d="M100,58 L142,86" stroke={ACCENT} strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="100" cy="58" r="3" fill={LINE} />
        </FlapBase>
        <Label x={60} y={112} anchor="middle">Plain</Label>
      </g>
      {/* Split — the upper surface stays fixed; only a flat lower panel hinges down */}
      <g transform="translate(130,20)">
        <path d="M4,58 C24,38 66,32 108,44 C118,46 124,48 128,50" fill="none" stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M4,58 C30,66 70,64 96,59" fill="none" stroke={LINE} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M100,62 L134,78" stroke={ACCENT} strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="98" cy="60" r="3" fill={LINE} />
        <Label x={60} y={112} anchor="middle">Split</Label>
      </g>
      {/* Slotted — flap deflects with a visible gap (slot) ahead of it */}
      <g transform="translate(250,20)">
        <FlapBase>
          <path d="M108,50 L146,80" stroke={ACCENT} strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M100,52 A10,10 0 0 0 106,65" fill="none" stroke={MUTE} strokeWidth="1.5" strokeDasharray="2 3" />
        </FlapBase>
        <Label x={65} y={112} anchor="middle">Slotted</Label>
      </g>
      {/* Fowler — flap slides aft and down on a track, adding wing area */}
      <g transform="translate(345,20)">
        <FlapBase>
          <line x1="98" y1="50" x2="140" y2="66" stroke={MUTE} strokeWidth="1.25" strokeDasharray="2 3" />
          <path d="M112,62 L150,84" stroke={ACCENT} strokeWidth="3" fill="none" strokeLinecap="round" />
          <Arrow x1={100} y1={52} x2={122} y2={64} markerId="flap-arrow" width={2} />
        </FlapBase>
        <Label x={65} y={112} anchor="middle">Fowler</Label>
      </g>
    </Frame>
  );
}

function CylinderStroke({ label, piston, valves, spark }) {
  return (
    <g>
      <rect x="0" y="0" width="76" height="104" rx="8" fill="none" stroke={LINE} strokeWidth="2.5" />
      <rect x="10" y="6" width="16" height="8" rx="2" fill={valves === "intake" ? ACCENT : "#fff"} stroke={LINE} strokeWidth="1.5" />
      <rect x="50" y="6" width="16" height="8" rx="2" fill={valves === "exhaust" ? ACCENT : "#fff"} stroke={LINE} strokeWidth="1.5" />
      {spark ? <path d="M38,10 l3,7 l-2,0 l3,7 l-6,-9 l2,0 Z" fill={ACCENT} /> : null}
      <rect x="8" y={piston} width="60" height="26" fill={BG} stroke={LINE} strokeWidth="2.25" />
      <line x1="38" y1={piston + 26} x2="38" y2="96" stroke={LINE} strokeWidth="3.5" />
      <Label x={38} y={124} anchor="middle" size={13}>{label}</Label>
    </g>
  );
}

export function EngineCycleDiagram() {
  return (
    <Frame viewBox="0 0 460 150">
      <g transform="translate(10,8)"><CylinderStroke label="1. Intake" piston={62} valves="intake" /></g>
      <g transform="translate(126,8)"><CylinderStroke label="2. Compression" piston={20} valves="closed" /></g>
      <g transform="translate(242,8)"><CylinderStroke label="3. Power" piston={62} valves="closed" spark /></g>
      <g transform="translate(358,8)"><CylinderStroke label="4. Exhaust" piston={20} valves="exhaust" /></g>
    </Frame>
  );
}

function PropellerBlade({ angle, color = LINE, dashed = false }) {
  return (
    <g transform={`rotate(${angle} 60 50)`}>
      <path
        d="M8,50 C10,32 55,26 108,50 C55,74 10,68 8,50 Z"
        fill={dashed ? "none" : BG}
        stroke={color}
        strokeWidth="2.5"
        strokeDasharray={dashed ? "3 4" : undefined}
      />
    </g>
  );
}

export function PropellerPitchDiagram() {
  return (
    <Frame viewBox="0 0 460 195">
      <ArrowDefs id="pp-arrow" color={ACCENT} />
      {/* Fixed-pitch */}
      <g transform="translate(15,12)">
        <Label x={60} y={0} anchor="middle">Fixed-pitch</Label>
        <line x1="60" y1="15" x2="60" y2="85" stroke={MUTE} strokeWidth="1.25" strokeDasharray="2 4" />
        <PropellerBlade angle={-18} />
        <Label x={60} y={122} anchor="middle" size={11.5} color={MUTE} weight={500}>One blade angle, set on</Label>
        <Label x={60} y={138} anchor="middle" size={11.5} color={MUTE} weight={500}>the ground — efficient at</Label>
        <Label x={60} y={154} anchor="middle" size={11.5} color={MUTE} weight={500}>only one rpm/airspeed</Label>
      </g>
      {/* Constant-speed */}
      <g transform="translate(255,12)">
        <Label x={90} y={0} anchor="middle" color={ACCENT}>Constant-speed</Label>
        <line x1="90" y1="15" x2="90" y2="85" stroke={MUTE} strokeWidth="1.25" strokeDasharray="2 4" />
        <g transform="translate(30,0)">
          <PropellerBlade angle={-38} color={MUTE} dashed />
        </g>
        <g transform="translate(30,0)">
          <PropellerBlade angle={-10} color={ACCENT} />
        </g>
        <path d="M155,30 A40,40 0 0 1 158,68" fill="none" stroke={ACCENT} strokeWidth="1.75" markerEnd="url(#pp-arrow)" />
        <Label x={90} y={122} anchor="middle" size={11.5} color={MUTE} weight={500}>Governor varies blade</Label>
        <Label x={90} y={138} anchor="middle" size={11.5} color={MUTE} weight={500}>angle in flight to hold</Label>
        <Label x={90} y={154} anchor="middle" size={11.5} color={MUTE} weight={500}>the selected rpm</Label>
      </g>
    </Frame>
  );
}

export function PitotStaticDiagram() {
  return (
    <Frame viewBox="0 0 460 210">
      <path d="M10,96 L18,90 L74,90 L74,102 L18,102 Z" fill={BG} stroke={LINE} strokeWidth="2.5" strokeLinejoin="round" />
      <Label x={14} y={122} size={13}>Pitot tube</Label>
      <Label x={14} y={137} size={11} color={MUTE} weight={500}>ram (dynamic) + static air</Label>

      <line x1="10" y1="150" x2="120" y2="150" stroke={MUTE} strokeWidth="2" />
      <circle cx="70" cy="150" r="3.5" fill={LINE} />
      <Label x={14} y={172} size={13}>Static port</Label>
      <Label x={14} y={187} size={11} color={MUTE} weight={500}>still air pressure only</Label>

      <path d="M74,94 L150,94 L150,40 L210,40" fill="none" stroke={ACCENT} strokeWidth="2.25" />
      <path d="M70,150 L190,150 L190,105 L210,105" fill="none" stroke={LINE} strokeWidth="2.25" />
      <path d="M190,150 L190,168 L210,168" fill="none" stroke={LINE} strokeWidth="2.25" />
      <circle cx="190" cy="150" r="3" fill={LINE} />

      <circle cx="240" cy="40" r="30" fill={BG} stroke={ACCENT} strokeWidth="2.75" />
      <Label x={240} y={46} anchor="middle" color={ACCENT} size={14}>ASI</Label>

      <circle cx="240" cy="105" r="30" fill={BG} stroke={LINE} strokeWidth="2.75" />
      <Label x={240} y={111} anchor="middle" size={13}>Altimeter</Label>

      <circle cx="240" cy="168" r="30" fill={BG} stroke={LINE} strokeWidth="2.75" />
      <Label x={240} y={174} anchor="middle" size={14}>VSI</Label>

      <Label x={340} y={45} size={11.5} color={MUTE} weight={500}>dynamic + static</Label>
      <Label x={340} y={110} size={11.5} color={MUTE} weight={500}>static only</Label>
      <Label x={340} y={173} size={11.5} color={MUTE} weight={500}>static only</Label>
    </Frame>
  );
}

export function CGDiagram() {
  return (
    <Frame viewBox="0 0 460 190">
      <ArrowDefs id="cg-tick" color={MUTE} />
      <line x1="40" y1="30" x2="40" y2="120" stroke={MUTE} strokeWidth="1.25" strokeDasharray="2 4" />
      <Label x={40} y={22} anchor="middle" size={11} color={MUTE} weight={500}>Datum</Label>

      <line x1="40" y1="100" x2="420" y2="100" stroke={LINE} strokeWidth="4.5" strokeLinecap="round" />
      <polygon points="255,100 240,132 270,132" fill={ACCENT} />
      <Label x={255} y={150} anchor="middle" color={ACCENT}>CG</Label>

      <rect x="88" y="66" width="30" height="30" fill={BG} stroke={LINE} strokeWidth="2.25" />
      <Label x={103} y={86} anchor="middle" size={13}>W₁</Label>
      <path d="M40,50 L255,50" stroke={MUTE} strokeWidth="1.25" markerEnd="url(#cg-tick)" />
      <line x1="103" y1="42" x2="103" y2="58" stroke={MUTE} strokeWidth="1.25" />
      <Label x={172} y={44} anchor="middle" size={11.5} color={MUTE} weight={500}>arm₁</Label>

      <rect x="345" y="66" width="30" height="30" fill={BG} stroke={LINE} strokeWidth="2.25" />
      <Label x={360} y={86} anchor="middle" size={13}>W₂</Label>
      <line x1="360" y1="150" x2="360" y2="166" stroke={MUTE} strokeWidth="1.25" />
      <line x1="255" y1="158" x2="255" y2="166" stroke={MUTE} strokeWidth="1.25" />
      <path d="M255,163 L360,163" stroke={MUTE} strokeWidth="1.25" markerEnd="url(#cg-tick)" />
      <Label x={308} y={180} anchor="middle" size={11.5} color={MUTE} weight={500}>arm₂</Label>

      <Label x={430} y={20} anchor="end" size={13} color={MUTE} weight={500}>Moment = Weight × Arm</Label>
    </Frame>
  );
}
