import { useState } from "react";

const BRANCHES = [
  {
    title: "MECHANICAL",
    services: [
      {
        name: "HVAC",
        description: "Diagnostics, maintenance, install, retrofit",
      },
      {
        name: "VEHICLE",
        description: "Diagnostics, maintenance, parts replacement",
      },
      {
        name: "AUTOMATION",
        description: "Security, audio/video, computers, servers",
      },
      {
        name: "CONSTRUCTION",
        description: "Decks, kitchens, bathrooms, garages",
      },
    ],
  },
  {
    title: "MANUFACTURING",
    services: [
      {
        name: "V.A.U.L.T",
        description:
          "A deployable armored living unit with integrated air, water, and power systems, built to connect directly into a property’s infrastructure.",
      },
      {
        name: "S.H.E.L.L",
        description:
          "A reinforced structural panel, built in multiple configurations for residential, vehicle, and personal-use applications.",
      },
      {
        name: "R.E.L.A.Y",
        description:
          "Low complexity analog systems to fit hydroponic, AC, and energy needs.",
      },
    ],
  },
  {
    title: "MOTORS",
    services: [
      {
        name: "RUMBLER",
        description:
          "A hybrid armored three-wheel all-terrain vehicle concept featuring a two-person center cockpit, high-torque rear in-hub motor, and modular passenger or cargo trailer-pod capability.",
      },
      {
        name: "LOCUST",
        description:
          "Armored drones designed for single-unit or coordinated swarm piloting, supporting home defense, search-and-rescue, and terrain mapping applications.",
      },
    ],
  },
];

function App() {
  const [branchIndex, setBranchIndex] = useState(0);
  const activeBranch = BRANCHES[branchIndex];

  function goPrevious() {
    setBranchIndex((current) =>
      current === 0 ? BRANCHES.length - 1 : current - 1
    );
  }

  function goNext() {
    setBranchIndex((current) =>
      current === BRANCHES.length - 1 ? 0 : current + 1
    );
  }

  return (
    <PageShell>
      <PhoneFrame>
        <MenuButton />
        <MainHeader />
        <BranchSelector
          branch={activeBranch}
          branchIndex={branchIndex}
          setBranchIndex={setBranchIndex}
          onPrevious={goPrevious}
          onNext={goNext}
        />
        <ServiceSection services={activeBranch.services} />
        <BottomSystemBar />
      </PhoneFrame>
    </PageShell>
  );
}

function PageShell({ children }) {
  return (
    <div className="page-shell">
      <style>{styles}</style>
      {children}
    </div>
  );
}

function PhoneFrame({ children }) {
  return <main className="phone-frame">{children}</main>;
}

function MenuButton() {
  return (
    <button className="menu-button" aria-label="Open menu">
      <span />
      <span />
      <span />
    </button>
  );
}

function MainHeader() {
  return (
    <header className="main-header">
      <CubeLogo />
      <div className="brand-title">OMNICORE</div>
      <div className="brand-subtitle">SOLUTIONS</div>
    </header>
  );
}

function CubeLogo() {
  return (
    <div className="cube-logo" aria-label="OMNICORE cube logo">
      <div className="cube-top" />
      <div className="cube-left" />
      <div className="cube-right" />
    </div>
  );
}

function BranchSelector({
  branch,
  branchIndex,
  setBranchIndex,
  onPrevious,
  onNext,
}) {
  const isLongBranch = branch.title.length > 9;

  return (
    <section className="branch-section">
      <div className="section-label">SELECT BRANCH</div>

      <div className="branch-row">
        <button
          className="arrow-button"
          onClick={onPrevious}
          aria-label="Previous branch"
        >
          ‹
        </button>

        <h1
          className={
            isLongBranch ? "branch-title branch-title-long" : "branch-title"
          }
        >
          {branch.title}
        </h1>

        <button
          className="arrow-button"
          onClick={onNext}
          aria-label="Next branch"
        >
          ›
        </button>
      </div>

      <div className="branch-dots" aria-label="Branch position">
        {BRANCHES.map((branchItem, index) => (
          <button
            key={branchItem.title}
            className={index === branchIndex ? "dot active-dot" : "dot"}
            onClick={() => setBranchIndex(index)}
            aria-label={`Select ${branchItem.title}`}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceSection({ services }) {
  return (
    <section className="service-section">
      <div className="section-label">SELECT SERVICE</div>

      <div className="service-list">
        {services.map((service) => (
          <ServiceRow key={service.name} service={service} />
        ))}
      </div>
    </section>
  );
}

function ServiceRow({ service }) {
  const compactName = service.name.length >= 9;

  return (
    <button
      className="service-row"
      onClick={() => {
        window.location.href = `/${service.name
          .toLowerCase()
          .replaceAll(".", "")
          .replaceAll(" ", "-")}`;
      }}
    >
      <div
        className={
          compactName ? "service-button service-button-compact" : "service-button"
        }
      >
        {service.name}
      </div>
      <p className="service-description">{service.description}</p>
    </button>
  );
}

function BottomSystemBar() {
  return (
    <footer className="bottom-system-bar">
      POWERED BY THE UNIVERSAL OPERATING SYSTEM
    </footer>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600&family=Orbitron:wght@400;500;600&display=swap');

:root {
  --cyan: #00eaff;
  --cyan-glow: rgba(0, 234, 255, 0.55);
}

* {
  box-sizing: border-box;
}

html {
  width: 100%;
  min-height: 100%;
  background: #060606;
}

body {
  width: 100%;
  min-height: 100%;
  margin: 0;
  background: #060606;
  overflow-x: hidden;
}

button {
  font: inherit;
}

.page-shell {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background:
    radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 42%),
    linear-gradient(180deg, #020202 0%, #111111 100%);
  color: #191919;
  font-family: "Barlow Condensed", Arial, sans-serif;
  overflow-x: hidden;
}

.phone-frame {
  width: min(100%, 520px);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 34px 32px 88px;
  border-radius: 28px;
  border: 2px solid #1f1f1f;
  background:
    linear-gradient(90deg, rgba(255,255,255,0.14), rgba(255,255,255,0) 18%, rgba(255,255,255,0.13) 50%, rgba(0,0,0,0.06) 100%),
    repeating-linear-gradient(
      90deg,
      rgba(255,255,255,0.035) 0px,
      rgba(255,255,255,0.035) 1px,
      rgba(0,0,0,0.025) 2px,
      rgba(0,0,0,0.025) 4px
    ),
    linear-gradient(180deg, #d9d9d9 0%, #bdbdbd 48%, #9f9f9f 100%);
  box-shadow:
    inset 0 0 22px rgba(255,255,255,0.38),
    inset 0 0 70px rgba(0,0,0,0.16),
    0 0 40px rgba(0,0,0,0.7);
}

.phone-frame::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(255,255,255,0.22), transparent 12%, transparent 88%, rgba(0,0,0,0.18)),
    radial-gradient(circle at 50% 12%, rgba(255,255,255,0.16), transparent 34%);
  mix-blend-mode: overlay;
}

.menu-button,
.main-header,
.branch-section,
.service-section,
.bottom-system-bar {
  position: relative;
  z-index: 1;
}

.menu-button {
  width: 42px;
  margin-top: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 11px;
  cursor: pointer;
}

.menu-button span {
  display: block;
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, var(--cyan), #c8fbff 50%, var(--cyan));
  box-shadow:
    0 0 7px var(--cyan-glow),
    0 2px 0 rgba(0,0,0,0.48);
}

.main-header {
  margin-top: 24px;
  text-align: center;
}

.cube-logo {
  width: 104px;
  height: 90px;
  margin: 0 auto 24px;
  position: relative;
  filter:
    drop-shadow(0 0 8px var(--cyan-glow))
    drop-shadow(0 0 14px rgba(0, 234, 255, 0.25));
}

.cube-logo > div {
  position: absolute;
  border: 4px solid var(--cyan);
  background:
    linear-gradient(135deg, rgba(255,255,255,0.65), rgba(120,120,120,0.22));
  box-shadow:
    inset 0 0 8px rgba(0,0,0,0.28),
    0 0 9px var(--cyan-glow);
}

.cube-top {
  width: 54px;
  height: 54px;
  left: 25px;
  top: 0;
  transform: rotate(45deg) skew(-8deg, -8deg);
}

.cube-left {
  width: 54px;
  height: 54px;
  left: 11px;
  top: 36px;
  transform: skewY(30deg);
  clip-path: polygon(0 0, 100% 24%, 100% 100%, 0 76%);
}

.cube-right {
  width: 54px;
  height: 54px;
  right: 11px;
  top: 36px;
  transform: skewY(-30deg);
  clip-path: polygon(0 24%, 100% 0, 100% 76%, 0 100%);
}

.brand-title {
  font-family: "Orbitron", Arial, sans-serif;
  font-size: clamp(38px, 10vw, 58px);
  letter-spacing: clamp(7px, 2.8vw, 15px);
  line-height: 1;
  color: #101010;
  text-shadow:
    0 1px 0 #f3f3f3,
    0 -1px 0 #343434,
    1px 0 0 #777,
    -1px 0 0 #e7e7e7,
    0 4px 7px rgba(0,0,0,0.22);
}

.brand-subtitle {
  margin-top: 14px;
  font-family: "Orbitron", Arial, sans-serif;
  font-size: clamp(17px, 5vw, 26px);
  letter-spacing: clamp(8px, 3.2vw, 15px);
  color: #252525;
  text-shadow:
    0 1px 0 rgba(255,255,255,0.7),
    0 2px 4px rgba(0,0,0,0.2);
}

.branch-section {
  margin-top: 52px;
  text-align: center;
}

.section-label {
  font-family: "Orbitron", Arial, sans-serif;
  font-size: clamp(20px, 5vw, 29px);
  letter-spacing: clamp(3px, 1vw, 4px);
  color: #303030;
  text-shadow:
    0 1px 0 rgba(255,255,255,0.75),
    0 2px 4px rgba(0,0,0,0.18);
}

.branch-row {
  width: 100%;
  margin-top: 28px;
  display: grid;
  grid-template-columns: 26px minmax(0, 1fr) 26px;
  align-items: center;
  gap: 6px;
}

.arrow-button {
  border: 0;
  background: transparent;
  color: var(--cyan);
  font-size: 46px;
  line-height: 1;
  font-weight: 300;
  cursor: pointer;
  text-shadow:
    0 0 8px var(--cyan-glow),
    0 2px 0 rgba(0,0,0,0.25);
}

.branch-title {
  min-width: 0;
  margin: 0;
  font-family: "Orbitron", Arial, sans-serif;
  font-size: clamp(28px, 8vw, 43px);
  font-weight: 500;
  letter-spacing: clamp(4px, 2vw, 9px);
  color: var(--cyan);
  white-space: nowrap;
  text-align: center;
  text-shadow:
    0 0 8px var(--cyan-glow),
    0 1px 0 #ffffff,
    0 3px 5px rgba(0,0,0,0.28);
}

.branch-title-long {
  font-size: clamp(22px, 6.5vw, 34px);
  letter-spacing: clamp(2px, 1.2vw, 5px);
}

.branch-dots {
  margin-top: 22px;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.dot {
  width: 16px;
  height: 16px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.52);
  background: #777;
  box-shadow:
    inset 0 1px 1px rgba(255,255,255,0.65),
    0 1px 1px rgba(0,0,0,0.35);
  cursor: pointer;
}

.active-dot {
  background: var(--cyan);
  border-color: var(--cyan);
  box-shadow:
    0 0 9px var(--cyan-glow),
    inset 0 1px 1px rgba(255,255,255,0.75);
}

.service-section {
  margin-top: 50px;
}

.service-list {
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.service-row {
  width: 100%;
  min-height: 92px;
  display: grid;
  grid-template-columns: minmax(128px, 40%) minmax(0, 1fr);
  align-items: center;
  gap: 24px;
  border: 0;
  background: transparent;
  text-align: left;
  color: inherit;
  cursor: pointer;
}

.service-button {
  width: 100%;
  min-height: 72px;
  padding: 14px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(
    7% 0,
    93% 0,
    100% 22%,
    100% 78%,
    93% 100%,
    7% 100%,
    0 78%,
    0 22%
  );
  border: 2px solid var(--cyan);
  color: var(--cyan);
  font-family: "Orbitron", Arial, sans-serif;
  font-size: clamp(16px, 4.4vw, 27px);
  letter-spacing: clamp(2px, 1.1vw, 5px);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-shadow:
    0 0 8px var(--cyan-glow),
    0 1px 0 rgba(255,255,255,0.8);
  box-shadow:
    inset 0 0 13px rgba(255,255,255,0.1),
    0 0 7px rgba(0,234,255,0.28);
  background:
    linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0.025));
}

.service-button-compact {
  font-size: clamp(12px, 3.45vw, 18px);
  letter-spacing: clamp(1px, 0.8vw, 3px);
}

.service-description {
  min-width: 0;
  margin: 0;
  color: #262626;
  font-size: clamp(19px, 4.6vw, 25px);
  line-height: 1.38;
  letter-spacing: 0.3px;
  font-weight: 400;
  text-shadow:
    0 1px 0 rgba(255,255,255,0.6),
    0 2px 3px rgba(0,0,0,0.12);
}

.bottom-system-bar {
  margin-top: 44px;
  min-height: 48px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(
    2% 0,
    98% 0,
    100% 35%,
    100% 65%,
    98% 100%,
    2% 100%,
    0 65%,
    0 35%
  );
  border: 1px solid rgba(0,0,0,0.55);
  color: #303030;
  font-family: "Orbitron", Arial, sans-serif;
  font-size: clamp(12px, 3vw, 16px);
  letter-spacing: clamp(3px, 1vw, 5px);
  line-height: 1.65;
  text-align: center;
  text-shadow:
    0 1px 0 rgba(255,255,255,0.62),
    0 2px 3px rgba(0,0,0,0.15);
  background:
    linear-gradient(180deg, rgba(255,255,255,0.14), rgba(0,0,0,0.05));
  box-shadow:
    inset 0 1px 1px rgba(255,255,255,0.42),
    inset 0 -1px 1px rgba(0,0,0,0.16);
}

@media (max-width: 430px) {
  .phone-frame {
    width: 100%;
    min-height: 100vh;
    padding: 28px 18px 110px;
    border-radius: 0;
    border-left: 0;
    border-right: 0;
  }

  .menu-button {
    width: 38px;
    margin-top: 18px;
    gap: 9px;
  }

  .main-header {
    margin-top: 22px;
  }

  .cube-logo {
    width: 84px;
    height: 74px;
    margin-bottom: 22px;
  }

  .cube-top {
    width: 44px;
    height: 44px;
    left: 20px;
  }

  .cube-left,
  .cube-right {
    width: 44px;
    height: 44px;
    top: 30px;
  }

  .cube-left {
    left: 8px;
  }

  .cube-right {
    right: 8px;
  }

  .brand-title {
    font-size: 40px;
    letter-spacing: 7px;
  }

  .brand-subtitle {
    font-size: 19px;
    letter-spacing: 9px;
  }

  .branch-section {
    margin-top: 48px;
  }

  .section-label {
    font-size: 22px;
    letter-spacing: 3px;
  }

  .branch-row {
    margin-top: 28px;
    grid-template-columns: 24px minmax(0, 1fr) 24px;
    gap: 4px;
  }

  .arrow-button {
    font-size: 40px;
  }

  .branch-title {
    font-size: clamp(27px, 8.3vw, 34px);
    letter-spacing: clamp(3px, 1.5vw, 5px);
  }

  .branch-title-long {
    font-size: clamp(21px, 6.3vw, 27px);
    letter-spacing: clamp(1px, 0.75vw, 3px);
  }

  .branch-dots {
    margin-top: 22px;
    gap: 26px;
  }

  .dot {
    width: 15px;
    height: 15px;
  }

  .service-section {
    margin-top: 48px;
  }

  .service-list {
    margin-top: 34px;
    gap: 26px;
  }

  .service-row {
    grid-template-columns: minmax(134px, 41%) minmax(0, 1fr);
    gap: 16px;
    min-height: 92px;
  }

  .service-button {
    min-height: 66px;
    font-size: clamp(16px, 4.3vw, 19px);
    letter-spacing: clamp(2px, 1vw, 3px);
    padding: 12px 7px;
  }

  .service-button-compact {
    font-size: clamp(11px, 3.1vw, 15px);
    letter-spacing: clamp(1px, 0.55vw, 2px);
  }

  .service-description {
    font-size: 21px;
    line-height: 1.36;
  }

  .bottom-system-bar {
    margin-top: 44px;
    padding: 12px 14px;
    font-size: 13px;
    letter-spacing: 4px;
    line-height: 1.75;
  }
}

@media (max-width: 390px) {
  .phone-frame {
    padding-left: 14px;
    padding-right: 14px;
  }

  .brand-title {
    font-size: 37px;
    letter-spacing: 6px;
  }

  .brand-subtitle {
    font-size: 18px;
    letter-spacing: 8px;
  }

  .branch-title {
    font-size: 30px;
    letter-spacing: 4px;
  }

  .branch-title-long {
    font-size: 23px;
    letter-spacing: 2px;
  }

  .service-row {
    grid-template-columns: minmax(126px, 40%) minmax(0, 1fr);
    gap: 13px;
  }

  .service-button {
    font-size: 16px;
    letter-spacing: 2px;
  }

  .service-button-compact {
    font-size: 11px;
    letter-spacing: 1px;
  }

  .service-description {
    font-size: 20px;
  }
}

@media (min-width: 760px) {
  .page-shell {
    padding: 28px 0;
  }

  .phone-frame {
    min-height: calc(100vh - 56px);
  }
}
`;

export default App;