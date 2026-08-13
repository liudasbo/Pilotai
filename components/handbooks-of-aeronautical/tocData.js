export const TOC = [
  {
    id: "structure",
    label: "Aircraft Structure",
    subs: [
      { id: "structure-components", label: "Major Components" },
      { id: "structure-axes", label: "Axes of an Aircraft" },
      { id: "structure-construction", label: "Construction Types" },
    ],
  },
  {
    id: "aerodynamics",
    label: "Aerodynamics of Flight",
    subs: [
      { id: "aero-forces", label: "The Four Forces" },
      { id: "aero-lift", label: "Angle of Attack & Lift" },
      { id: "aero-drag", label: "Drag" },
      { id: "aero-stability", label: "Stability" },
      { id: "aero-stalls", label: "Load Factors & Stalls" },
    ],
  },
  {
    id: "controls",
    label: "Flight Controls",
    subs: [
      { id: "controls-primary", label: "Primary Controls" },
      { id: "controls-secondary", label: "Secondary Controls" },
    ],
  },
  {
    id: "systems",
    label: "Aircraft Systems",
    subs: [
      { id: "systems-powerplant", label: "Powerplant & Propeller" },
      { id: "systems-fuel", label: "Induction & Fuel System" },
      { id: "systems-electrical", label: "Electrical & Landing Gear" },
    ],
  },
  {
    id: "instruments",
    label: "Flight Instruments",
    subs: [
      { id: "instruments-pitot", label: "Pitot-Static Instruments" },
      { id: "instruments-gyro", label: "Gyroscopic Instruments" },
      { id: "instruments-compass", label: "Compass Systems" },
    ],
  },
  {
    id: "weight-balance",
    label: "Weight & Balance",
    subs: [
      { id: "wb-why", label: "Why It Matters" },
      { id: "wb-cg", label: "CG & Moment" },
    ],
  },
];

export const ALL_IDS = TOC.flatMap((s) => [s.id, ...s.subs.map((sub) => sub.id)]);
