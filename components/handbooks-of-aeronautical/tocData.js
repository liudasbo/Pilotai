export const TOC = [
  {
    id: "intro",
    label: "Introduction to Flying",
    subs: [
      { id: "intro-overview", label: "What This Handbook Covers" },
      { id: "intro-training", label: "The Path to Becoming a Pilot" },
    ],
  },
  {
    id: "ground-ops",
    label: "Ground Operations",
    subs: [
      { id: "ground-preflight", label: "Preflight & Servicing" },
      { id: "ground-safety", label: "Ramp & Runway Safety" },
    ],
  },
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
    id: "principles",
    label: "Principles of Flight",
    subs: [
      { id: "principles-atmosphere", label: "The Atmosphere & Airflow" },
      { id: "principles-lift-theory", label: "How a Wing Produces Lift" },
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
    id: "manuals",
    label: "Flight Manuals & Documents",
    subs: [
      { id: "manuals-poh", label: "Pilot's Operating Handbook" },
      { id: "manuals-airworthiness", label: "Airworthiness & Required Documents" },
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
  {
    id: "performance",
    label: "Aircraft Performance",
    subs: [
      { id: "performance-factors", label: "Factors Affecting Performance" },
      { id: "performance-charts", label: "Using Performance Charts" },
    ],
  },
  {
    id: "weather-theory",
    label: "Weather Theory",
    subs: [
      { id: "weather-circulation", label: "Atmospheric Circulation & Fronts" },
      { id: "weather-hazards", label: "Thunderstorms, Icing & Turbulence" },
    ],
  },
  {
    id: "weather-services",
    label: "Aviation Weather Services",
    subs: [
      { id: "weather-reports", label: "METARs & TAFs" },
      { id: "weather-charts", label: "Charts & Briefings" },
    ],
  },
  {
    id: "airport-ops",
    label: "Airport Operations",
    subs: [
      { id: "airport-markings", label: "Runway & Taxiway Markings" },
      { id: "airport-comms", label: "Traffic Patterns & Communications" },
    ],
  },
  {
    id: "airspace",
    label: "Airspace",
    subs: [
      { id: "airspace-classes", label: "Controlled & Uncontrolled Airspace" },
      { id: "airspace-special", label: "Special Use Airspace" },
    ],
  },
  {
    id: "navigation",
    label: "Navigation",
    subs: [
      { id: "navigation-pilotage", label: "Pilotage & Dead Reckoning" },
      { id: "navigation-radio", label: "Radio Navigation & GPS" },
    ],
  },
  {
    id: "aeromedical",
    label: "Aeromedical Factors",
    subs: [
      { id: "aeromedical-hypoxia", label: "Hypoxia & Hyperventilation" },
      { id: "aeromedical-imsafe", label: "Fitness to Fly (IMSAFE)" },
    ],
  },
  {
    id: "adm",
    label: "Aeronautical Decision-Making",
    subs: [
      { id: "adm-process", label: "The Decision-Making Process" },
      { id: "adm-risk", label: "Risk Management & CFIT Avoidance" },
    ],
  },
];

export const ALL_IDS = TOC.flatMap((s) => [s.id, ...s.subs.map((sub) => sub.id)]);
