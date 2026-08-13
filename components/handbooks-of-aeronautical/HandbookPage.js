"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { TOC, ALL_IDS } from "./tocData";
import {
  FourForcesDiagram,
  AxesDiagram,
  ComponentsDiagram,
  ConstructionDiagram,
  AirfoilDiagram,
  StabilityAxesDiagram,
  ControlSurfacesDiagram,
  FlapTypesDiagram,
  EngineCycleDiagram,
  PropellerPitchDiagram,
  PitotStaticDiagram,
  CGDiagram,
} from "./diagrams";

function Eyebrow({ children }) {
  return (
    <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-chocolate-100">
      {children}
    </div>
  );
}

function H2({ id, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-32 m-0 text-[26px] leading-[32px] desktop:text-[32px] desktop:leading-[38px] tracking-num-0_56 uppercase font-medium font-heading text-black"
    >
      {children}
    </h2>
  );
}

function H3({ id, children }) {
  return (
    <h3
      id={id}
      className="scroll-mt-32 m-0 text-[19px] leading-[26px] font-medium font-heading text-darkslategray-100"
    >
      {children}
    </h3>
  );
}

function P({ children }) {
  return <p className="m-0 text-section-body">{children}</p>;
}

function UL({ items }) {
  return (
    <ul className="m-0 pl-[21px] text-num-16 leading-num-24 text-darkslategray-100 font-jost list-disc flex flex-col gap-1.5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function DiagramCard({ children, caption }) {
  return (
    <div className="w-full bg-whitesmoke-100 p-5 sm:p-6 flex flex-col gap-3">
      {children}
      {caption ? (
        <p className="m-0 text-num-13 leading-num-22 text-darkslategray-100/80 italic">
          {caption}
        </p>
      ) : null}
    </div>
  );
}

function Sub({ id, title, children }) {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <H3 id={id}>{title}</H3>
      {children}
    </div>
  );
}

function Section({ id, title, eyebrow, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 w-full flex flex-col items-start gap-8 py-12 desktop:py-16 border-t border-darkslategray-100/10 first:border-t-0 first:pt-0"
    >
      <div className="flex flex-col items-start gap-3">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <H2 id={`${id}-heading`}>{title}</H2>
      </div>
      <div className="w-full flex flex-col items-start gap-10">{children}</div>
    </section>
  );
}

function TocLink({ item, activeId, onNavigate, mobile }) {
  const isActiveTop = activeId === item.id || item.subs.some((s) => s.id === activeId);
  return (
    <div className="flex flex-col items-start gap-1.5 w-full">
      <a
        href={`#${item.id}`}
        onClick={onNavigate}
        className={`block w-full text-num-13 uppercase tracking-[0.3px] font-medium py-1 transition-colors ${
          isActiveTop ? "text-chocolate-100" : "text-darkslategray-100 hover:text-black"
        }`}
      >
        {item.label}
      </a>
      {(isActiveTop || mobile) && (
        <div className="flex flex-col items-start gap-1 pl-3 border-l border-darkslategray-100/15 w-full">
          {item.subs.map((sub) => (
            <a
              key={sub.id}
              href={`#${sub.id}`}
              onClick={onNavigate}
              className={`block w-full text-[13px] leading-[20px] py-0.5 transition-colors ${
                activeId === sub.id
                  ? "text-chocolate-100 font-medium"
                  : "text-darkslategray-100/75 hover:text-black"
              }`}
            >
              {sub.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function HandbookHero() {
  return (
    <section className="relative w-full min-h-[380px] desktop:min-h-[440px] overflow-hidden bg-darkslategray-200 isolate flex flex-col">
      <Header textColor="white" />
      <div className="relative z-[1] flex-1 flex flex-col items-center justify-center px-4 pb-10 pt-32 text-center gap-4">
        <div className="text-num-13 tracking-[0.46px] leading-num-26 uppercase font-medium text-white/70">
          Pilotai Program &middot; Pre-Course Reading
        </div>
        <h1 className="m-0 max-w-[820px] text-white text-[32px] leading-[38px] desktop:text-[47px] desktop:leading-[52px] tracking-[0.7px] uppercase font-medium">
          Pilot&apos;s Handbook of Aeronautical Knowledge
        </h1>
        <p className="m-0 max-w-[600px] text-white/75 text-num-16 leading-num-24 font-jost">
          The essentials about the aircraft you will fly — structure,
          aerodynamics, controls, systems, instruments, and weight &amp;
          balance — condensed for students arriving at our course.
        </p>
      </div>
    </section>
  );
}

export default function HandbookPage() {
  const [activeId, setActiveId] = useState(TOC[0].id);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const elements = ALL_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="w-full relative bg-white flex flex-col items-stretch justify-start leading-[normal] tracking-[normal] text-left font-jost motion-scope">
      <HandbookHero />

      <main className="w-full bg-white">
        <Container className="px-4 sm:px-6 xl:px-num-119">
          {/* Mobile TOC toggle */}
          <div className="desktop:hidden w-full py-5 border-b border-darkslategray-100/10">
            <button
              type="button"
              onClick={() => setMobileTocOpen((v) => !v)}
              aria-expanded={mobileTocOpen}
              className="w-full min-h-[44px] flex items-center justify-between text-num-13 uppercase tracking-[0.3px] font-medium text-black"
            >
              On this page
              <span className="text-chocolate-100">{mobileTocOpen ? "−" : "+"}</span>
            </button>
            {mobileTocOpen && (
              <nav className="flex flex-col gap-4 pt-4">
                {TOC.map((item) => (
                  <TocLink
                    key={item.id}
                    item={item}
                    activeId={activeId}
                    mobile
                    onNavigate={() => setMobileTocOpen(false)}
                  />
                ))}
              </nav>
            )}
          </div>

          <div className="w-full grid grid-cols-1 desktop:grid-cols-[240px_minmax(0,1fr)] gap-10 desktop:gap-16 py-10 desktop:py-16">
            {/* Desktop sticky TOC */}
            <nav className="hidden desktop:flex flex-col gap-5 sticky top-[140px] self-start max-h-[calc(100vh-160px)] overflow-y-auto pr-2">
              {TOC.map((item) => (
                <TocLink key={item.id} item={item} activeId={activeId} />
              ))}
            </nav>

            {/* Content */}
            <article className="w-full min-w-0 flex flex-col items-stretch">
              <Section
                id="structure"
                eyebrow="Chapter 3"
                title="Aircraft Structure"
              >
                <Sub id="structure-components" title="Major Components">
                  <P>
                    Most airplanes share the same basic structure: a{" "}
                    <strong>fuselage</strong> (the central body carrying crew,
                    passengers, and cargo, and tying the wings and tail
                    together), <strong>wings</strong> (the airfoils that
                    generate lift), an <strong>empennage</strong> (the tail
                    group — fixed vertical/horizontal stabilizers plus the
                    movable rudder and elevator), <strong>landing gear</strong>{" "}
                    (wheels, floats, or skis supporting the aircraft on the
                    ground), and the <strong>powerplant</strong> (engine and
                    propeller, producing thrust).
                  </P>
                  <DiagramCard caption="Figure — Major airplane components.">
                    <ComponentsDiagram />
                  </DiagramCard>
                  <P>
                    The wing&apos;s <strong>spars, ribs, and stringers</strong>{" "}
                    form its internal skeleton and set its airfoil shape; fuel
                    is usually carried inside the wing structure itself.
                    Ailerons and flaps hinge from the wing&apos;s trailing
                    edge. The <strong>center of gravity (CG)</strong> — the
                    point around which the aircraft would balance — is one of
                    the most important design and loading considerations: as
                    the CG shifts aft, the aircraft becomes progressively less
                    stable.
                  </P>
                </Sub>

                <Sub id="structure-axes" title="Axes of an Aircraft">
                  <P>
                    Every aircraft rotates about three imaginary lines that
                    cross at the CG, each at 90° to the others. The{" "}
                    <strong>longitudinal axis</strong> (nose to tail) governs{" "}
                    <strong>roll</strong>, controlled by the ailerons. The{" "}
                    <strong>lateral axis</strong> (wingtip to wingtip) governs{" "}
                    <strong>pitch</strong>, controlled by the elevator. The{" "}
                    <strong>vertical axis</strong> governs <strong>yaw</strong>
                    , controlled by the rudder.
                  </P>
                  <DiagramCard caption="Figure — Roll, pitch, and yaw about the three axes.">
                    <AxesDiagram />
                  </DiagramCard>
                </Sub>

                <Sub id="structure-construction" title="Construction Types">
                  <P>
                    Fuselage construction evolved from open{" "}
                    <strong>truss</strong> frameworks of welded tubing, to{" "}
                    <strong>monocoque</strong> shells where the stressed skin
                    itself carries almost all the load, to today&apos;s{" "}
                    <strong>semimonocoque</strong> design, which reinforces
                    the skin with bulkheads, formers, and stringers for a
                    strong, light, and repairable structure.
                  </P>
                  <DiagramCard caption="Figure — Truss, monocoque, and semimonocoque construction.">
                    <ConstructionDiagram />
                  </DiagramCard>
                  <P>
                    Modern light aircraft — including the Bristell you will
                    train on — increasingly use <strong>composite</strong>{" "}
                    construction (fiberglass and carbon fiber in an epoxy
                    matrix). Composites give a very smooth, aerodynamically
                    efficient airframe, resist corrosion, and can be lighter
                    than an equivalent metal structure. The trade-off:
                    low-energy impact damage can be invisible from the
                    outside, so any suspected impact should be inspected by
                    someone trained on composite structures.
                  </P>
                </Sub>
              </Section>

              <Section
                id="aerodynamics"
                eyebrow="Chapter 5"
                title="Aerodynamics of Flight"
              >
                <Sub id="aero-forces" title="The Four Forces">
                  <P>
                    Four forces act on every aircraft in flight:{" "}
                    <strong>thrust</strong> (forward, from the engine/propeller),{" "}
                    <strong>drag</strong> (rearward, resisting motion through
                    the air), <strong>lift</strong> (upward, generated by the
                    wing), and <strong>weight</strong> (downward, acting
                    through the CG). In steady, unaccelerated flight the
                    opposing forces balance: thrust equals drag, and lift
                    equals weight.
                  </P>
                  <DiagramCard caption="Figure — The four forces acting on an aircraft in level flight.">
                    <FourForcesDiagram />
                  </DiagramCard>
                </Sub>

                <Sub id="aero-lift" title="Angle of Attack & Lift">
                  <P>
                    <strong>Angle of attack (AOA)</strong> is the angle
                    between the wing&apos;s chord line and the oncoming
                    relative wind. Lift increases with AOA — up to a{" "}
                    <strong>critical AOA</strong>, beyond which the airflow
                    separates from the upper surface and lift drops sharply:
                    this is a <strong>stall</strong>. Crucially, a given wing
                    always stalls at the same critical AOA, regardless of
                    airspeed, weight, or bank angle.
                  </P>
                  <DiagramCard caption="Figure — Angle of attack, chord line, and the lift/drag reaction.">
                    <AirfoilDiagram />
                  </DiagramCard>
                  <P>
                    Lift also grows with the square of airspeed and with air
                    density, wing area, and the wing&apos;s coefficient of
                    lift. In practice, a pilot manages lift mainly through two
                    controllable variables: <strong>AOA</strong> (pitch
                    attitude, via the elevator) and{" "}
                    <strong>airspeed</strong> (via power).
                  </P>
                </Sub>

                <Sub id="aero-drag" title="Drag">
                  <P>
                    <strong>Parasite drag</strong> comes from anything that
                    resists motion without producing lift — the aircraft&apos;s
                    shape (form drag), the merging of airflows where
                    components meet (interference drag), and surface texture
                    (skin friction). It increases with the square of airspeed.{" "}
                    <strong>Induced drag</strong> is the unavoidable
                    by-product of producing lift, caused by wingtip vortices
                    and downwash; it is greatest at low airspeed/high AOA and
                    decreases as airspeed increases.
                  </P>
                  <UL
                    items={[
                      "Total drag is lowest at one specific airspeed (L/DMAX) — the best glide/best range speed.",
                      "Wingtip vortices are strongest when an aircraft is heavy, clean, and slow — typically just after takeoff and just before landing, which is when wake turbulence is most hazardous.",
                      "Ground effect (flying within about one wingspan of the surface) reduces induced drag and can cause an aircraft to lift off below normal speed, or to float during landing.",
                    ]}
                  />
                </Sub>

                <Sub id="aero-stability" title="Stability">
                  <P>
                    <strong>Stability</strong> is the aircraft&apos;s inherent
                    tendency to return to its original flight path after
                    being disturbed. <strong>Static stability</strong>{" "}
                    describes the initial tendency (toward, away from, or
                    remaining at the disturbed state); <strong>dynamic
                    stability</strong> describes what happens over time
                    (oscillations damping out, staying constant, or
                    growing). Each axis has its own named stability:
                  </P>
                  <DiagramCard>
                    <StabilityAxesDiagram />
                  </DiagramCard>
                  <P>
                    Longitudinal stability depends mainly on the relationship
                    between the wing and the horizontal tail; lateral
                    stability comes largely from wing dihedral and wing
                    placement; directional stability comes from the vertical
                    fin and fuselage acting like the feather on an arrow.
                  </P>
                </Sub>

                <Sub id="aero-stalls" title="Load Factors & Stalls">
                  <P>
                    <strong>Load factor</strong> is the ratio of the load
                    supported by the wings to the aircraft&apos;s actual
                    weight, expressed in “G.” In a level, coordinated turn,
                    load factor increases with bank angle — at 60° of bank it
                    reaches 2G, meaning the wing must produce twice the lift
                    and the stall speed rises by about 40%. This is why{" "}
                    <strong>steep turns increase stall speed</strong>, even
                    though the aircraft&apos;s weight has not changed.
                  </P>
                  <UL
                    items={[
                      "A stall is always the result of exceeding the critical AOA — it can happen at any airspeed or attitude, not just “slow and nose-high.”",
                      "The wing never fully stops producing lift in a stall; it simply cannot produce enough to sustain level flight.",
                      "Ice, frost, or snow on the wing disrupts airflow and can trigger a stall at a lower AOA than normal — even a thin layer noticeably reduces lift.",
                    ]}
                  />
                </Sub>
              </Section>

              <Section
                id="controls"
                eyebrow="Chapter 6"
                title="Flight Controls"
              >
                <Sub id="controls-primary" title="Primary Controls">
                  <P>
                    The three primary flight controls move the aircraft about
                    its three axes: <strong>ailerons</strong> (roll, via the
                    control stick/wheel moved left-right),{" "}
                    <strong>elevator</strong> (pitch, via fore-aft
                    stick/wheel movement), and <strong>rudder</strong> (yaw,
                    via the rudder pedals). All three are used together in a
                    coordinated turn: aileron to bank, rudder to counter{" "}
                    <strong>adverse yaw</strong> from the down-going aileron,
                    and elevator back-pressure to hold altitude as more lift
                    is needed.
                  </P>
                  <DiagramCard caption="Figure — Primary control surfaces and the axis each one governs.">
                    <ControlSurfacesDiagram />
                  </DiagramCard>
                </Sub>

                <Sub id="controls-secondary" title="Secondary Controls">
                  <P>
                    <strong>Flaps</strong> extend from the wing&apos;s
                    trailing edge to increase lift and drag for takeoff and
                    landing, allowing lower approach speeds. Common types —
                    plain, split, slotted, and Fowler — trade off complexity
                    for how much extra lift and drag they generate.
                  </P>
                  <DiagramCard caption="Figure — Common flap types.">
                    <FlapTypesDiagram />
                  </DiagramCard>
                  <P>
                    <strong>Trim tabs</strong> relieve control pressure so
                    the pilot doesn&apos;t have to hold constant force on the
                    stick — the pilot sets the desired attitude, then trims
                    until the pressure disappears. Other secondary systems
                    include leading-edge slats/cuffs (delay the stall to a
                    higher AOA) and spoilers (reduce lift and add drag for
                    descent control or roll assistance).
                  </P>
                </Sub>
              </Section>

              <Section id="systems" eyebrow="Chapter 7" title="Aircraft Systems">
                <Sub id="systems-powerplant" title="Powerplant & Propeller">
                  <P>
                    Most light aircraft use a{" "}
                    <strong>horizontally-opposed, four-stroke reciprocating
                    engine</strong>: intake draws in the fuel-air mixture,
                    compression squeezes it, ignition drives the power
                    stroke, and exhaust clears the cylinder — repeated
                    hundreds of times per minute.
                  </P>
                  <DiagramCard caption="Figure — The four-stroke cycle.">
                    <EngineCycleDiagram />
                  </DiagramCard>
                  <P>
                    The <strong>propeller</strong> is a rotating airfoil that
                    converts engine power into thrust. A{" "}
                    <strong>fixed-pitch propeller</strong> is simple and
                    light but efficient at only one rpm/airspeed combination.
                    A <strong>constant-speed propeller</strong> uses a
                    governor to vary blade angle automatically, holding a
                    selected rpm across a wide range of airspeeds — more
                    efficient, at the cost of an extra control (the
                    propeller/rpm lever) for the pilot to manage.
                  </P>
                  <DiagramCard caption="Figure — Fixed-pitch versus constant-speed propeller behavior.">
                    <PropellerPitchDiagram />
                  </DiagramCard>
                </Sub>

                <Sub id="systems-fuel" title="Induction & Fuel System">
                  <P>
                    The <strong>induction system</strong> mixes fuel and air
                    before combustion, either in a carburetor or via fuel
                    injection. <strong>Carburetor icing</strong> is a key
                    hazard: the pressure drop and fuel vaporization inside
                    the carburetor cool the air sharply, and ice can form on
                    the throttle valve even in above-freezing outside air
                    temperatures — restricting airflow and reducing power,
                    sometimes to the point of engine stoppage. Carburetor
                    heat is the standard remedy.
                  </P>
                  <P>
                    The <strong>fuel system</strong> stores, filters, and
                    delivers fuel from the tanks to the engine, with fuel
                    gauges, selectors, and strainers/sumps used to check for
                    water or sediment contamination before every flight.
                  </P>
                </Sub>

                <Sub id="systems-electrical" title="Electrical & Landing Gear">
                  <P>
                    The <strong>electrical system</strong> — battery plus an
                    engine-driven alternator/generator — powers flight
                    instruments, lighting, and avionics, and is essential for
                    starting the engine and running anti-icing equipment.
                  </P>
                  <P>
                    <strong>Landing gear</strong> is either{" "}
                    <strong>tricycle</strong> (a nosewheel plus two main
                    wheels — the most common, forgiving arrangement) or{" "}
                    <strong>conventional/tailwheel</strong> (two main wheels
                    plus a tailwheel, requiring more precise ground handling,
                    especially in crosswinds). Most aircraft brakes use
                    hydraulically actuated pads squeezing a rotating disk on
                    each main wheel; life is measured in landings, not miles.
                  </P>
                </Sub>
              </Section>

              <Section
                id="instruments"
                eyebrow="Chapter 8"
                title="Flight Instruments"
              >
                <Sub id="instruments-pitot" title="Pitot-Static Instruments">
                  <P>
                    Three instruments run off the <strong>pitot-static
                    system</strong>. The <strong>pitot tube</strong> captures
                    dynamic (ram-air) pressure for the{" "}
                    <strong>airspeed indicator</strong>. The{" "}
                    <strong>static port</strong> supplies ambient pressure to
                    the <strong>altimeter</strong> (height above a reference
                    pressure level) and the <strong>vertical speed
                    indicator</strong> (rate of climb/descent).
                  </P>
                  <DiagramCard caption="Figure — Pitot-static system feeding the ASI, altimeter, and VSI.">
                    <PitotStaticDiagram />
                  </DiagramCard>
                  <P>
                    Because the altimeter reads pressure, not true height, it
                    must be set to a current local altimeter setting — flying
                    from high to low pressure (or from warm to cold air)
                    without resetting means the true altitude is lower than
                    indicated: “from a high to a low, look out below.”
                  </P>
                </Sub>

                <Sub id="instruments-gyro" title="Gyroscopic Instruments">
                  <P>
                    Gyroscopic instruments use the properties of a spinning
                    gyroscope — <strong>rigidity in space</strong> and{" "}
                    <strong>precession</strong> — to sense attitude and
                    direction. The <strong>attitude indicator</strong> shows
                    pitch and bank relative to the horizon; the{" "}
                    <strong>heading indicator</strong> shows aircraft
                    heading without the lag and turning errors of a magnetic
                    compass; the <strong>turn coordinator</strong> shows rate
                    and quality (coordination) of turns.
                  </P>
                </Sub>

                <Sub id="instruments-compass" title="Compass Systems">
                  <P>
                    The <strong>magnetic compass</strong> is simple, reliable,
                    and requires no power — but it is affected by predictable
                    errors: it leads or lags during turns through north/south
                    headings, and it briefly speeds up or slows down its
                    indication during acceleration/deceleration on east/west
                    headings. Pilots cross-check it against the heading
                    indicator, which must itself be periodically re-aligned
                    to the compass.
                  </P>
                </Sub>
              </Section>

              <Section
                id="weight-balance"
                eyebrow="Chapter 10"
                title="Weight & Balance"
              >
                <Sub id="wb-why" title="Why It Matters">
                  <P>
                    Every aircraft has certified limits for total weight and
                    for how far forward or aft the CG may sit. Flying outside
                    those limits degrades performance and can make the
                    aircraft difficult — or in a stall, impossible — to
                    control: an excessively aft CG can leave too little
                    elevator authority to lower the nose and recover, while
                    an excessively forward CG can make it hard to flare for
                    landing.
                  </P>
                </Sub>

                <Sub id="wb-cg" title="CG & Moment">
                  <P>
                    The CG is found from <strong>moments</strong> — each
                    item&apos;s weight multiplied by its arm (distance from a
                    reference datum). Total moment divided by total weight
                    gives the CG location, which must fall within the
                    manufacturer&apos;s approved range for the aircraft&apos;s
                    actual weight.
                  </P>
                  <DiagramCard caption="Figure — Moment is weight multiplied by arm; CG is where these balance.">
                    <CGDiagram />
                  </DiagramCard>
                  <P>
                    In practice, this means every seat, item of baggage, and
                    amount of fuel on board shifts the CG — which is exactly
                    why your instructor will calculate weight and balance
                    before each training flight.
                  </P>
                </Sub>
              </Section>

              <div className="w-full pt-4 pb-2">
                <p className="m-0 text-num-13 leading-num-22 text-darkslategray-100/70 italic">
                  Condensed for Pilotai Program students from the U.S.
                  Federal Aviation Administration&apos;s{" "}
                  <em>Pilot&apos;s Handbook of Aeronautical Knowledge</em>{" "}
                  (FAA-H-8083-25C, 2023) — a public-domain reference covering
                  aircraft structure, aerodynamics, flight controls, systems,
                  instruments, and weight &amp; balance.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
