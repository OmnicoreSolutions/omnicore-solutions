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
          "A hybrid armored three-wheel all-terrain vehicle concept featuring a two-person center cockpit, high-torque rear in-hub motor, and a modular passenger or cargo trailer-pod capability.",
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
        <StatusBar />
        <MenuButton />
        <MainHeader />
        <BranchSelector
          branch={activeBranch}
          branchIndex={branchIndex}
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

function StatusBar() {
  return (
    <div className="status-bar">
      <div className="status-time">9:41</div>

      <div className="status-icons">
        <div className="signal-bars">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="wifi-icon">
          <span />
          <span />
          <span />
        </div>

        <div className="battery-icon">
          <div />
        </div>
      </div>
    </div>
  );
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

function BranchSelector({ branch, branchIndex, onPrevious, onNext }) {
  return (
    <section className="branch-section">
      <div className="section-label">SELECT BRANCH</div>

      <div className="branch-row">
        <button className="arrow-button" onClick={onPrevious} aria-label="Previous branch">
          ‹
        </button>

        <h1 className="branch-title">{branch.title}</h1>

        <button className="arrow-button" onClick={onNext} aria-label="Next branch">
          ›
        </button>
      </div>

      <div className="branch-dots" aria-label="Branch position">
        {BRANCHES.map((branchItem, index) => (
          <button
            key={branchItem.title}
            className={index === branchIndex ? "dot active-dot" : "dot"}
            onClick={() => {
              const nextIndex = index;
              if (nextIndex !== branchIndex) {
                const event = new CustomEvent("branch-change");
                window.dispatchEvent(event);
              }
            }}
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
      <div className="service-button">{service.name}</div>
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
  --cyan-soft: rgba(0, 234, 255, 0.65);
  --cyan-glow: rgba(0, 234, 255, 0.55);
  --metal-light: #d5d5d5;
  --metal-mid: #9c9c9c;
  --metal-dark: #494949;
  --black-soft: #1d1d1d;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #060606;
}

button {
  font: inherit;
}

.page-shell {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background:
    radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 42%),
    linear-gradient(180deg, #020202 0%, #111111 100%);
  color: #191919;
  font-family: "Barlow Condensed", Arial, sans-serif;
}

.phone-frame {
  width: min(100vw, 520px);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 28px 36px 32px;
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

.status-bar,
.menu-button,
.main-header,
.branch-section,
.service-section,
.bottom-system-bar {
  position: relative;
  z-index: 1;
}

.status-bar {
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.status-time {
  font-family: Arial, sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #050505;
  letter-spacing: -0.5px;
}

.status-icons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.signal-bars {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 18px;
}

.signal-bars span {
  width: 5px;
  background: #050505;
  border-radius: 4px;
}

.signal-bars span:nth-child(1) { height: 7px; }
.signal-bars span:nth-child(2) { height: 10px; }
.signal-bars span:nth-child(3) { height: 14px; }
.signal-bars span:nth-child(4) { height: 18px; }

.wifi-icon {
  width: 24px;
  height: 18px;
  position: relative;
}

.wifi-icon span {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 3px solid #050505;
  border-bottom: 0;
  border-left-color: transparent;
  border-right-color: transparent;
  border-radius: 50% 50% 0 0;
}

.wifi-icon span:nth-child(1) {
  width: 24px;
  height: 14px;
  top: 0;
}

.wifi-icon span:nth-child(2) {
  width: 16px;
  height: 10px;
  top: 5px;
}

.wifi-icon span:nth-child(3) {
  width: 6px;
  height: 6px;
  top: 12px;
  background: #050505;
  border: 0;
  border-radius: 50%;
}

.battery-icon {
  width: 29px;
  height: 15px;
  border: 2px solid #050505;
  border-radius: 3px;
  padding: 2px;
  position: relative;
}

.battery-icon::after {
  content: "";
  width: 3px;
  height: 7px;
  background: #050505;
  position: absolute;
  right: -5px;
  top: 2px;
  border-radius: 0 2px 2px 0;
}

.battery-icon div {
  width: 100%;
  height: 100%;
  background: #050505;
}

.menu-button {
  width: 42px;
  margin-top: 52px;
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
  margin-top: 22px;
  text-align: center;
}

.cube-logo {
  width: 112px;
  height: 96px;
  margin: 0 auto 25px;
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
  width: 58px;
  height: 58px;
  left: 27px;
  top: 0;
  transform: rotate(45deg) skew(-8deg, -8deg);
}

.cube-left {
  width: 58px;
  height: 58px;
  left: 12px;
  top: 39px;
  transform: skewY(30deg);
  clip-path: polygon(0 0, 100% 24%, 100% 100%, 0 76%);
}

.cube-right {
  width: 58px;
  height: 58px;
  right: 12px;
  top: 39px;
  transform: skewY(-30deg);
  clip-path: polygon(0 24%, 100% 0, 100% 76%, 0 100%);
}

.brand-title {
  font-family: "Orbitron", Arial, sans-serif;
  font-size: clamp(42px, 10vw, 61px);
  letter-spacing: 15px;
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
  font-size: clamp(18px, 5vw, 27px);
  letter-spacing: 15px;
  color: #252525;
  text-shadow:
    0 1px 0 rgba(255,255,255,0.7),
    0 2px 4px rgba(0,0,0,0.2);
}

.branch-section {
  margin-top: 56px;
  text-align: center;
}

.section-label {
  font-family: "Orbitron", Arial, sans-serif;
  font-size: clamp(21px, 5vw, 29px);
  letter-spacing: 4px;
  color: #303030;
  text-shadow:
    0 1px 0 rgba(255,255,255,0.75),
    0 2px 4px rgba(0,0,0,0.18);
}

.branch-row {
  margin-top: 32px;
  display: grid;
  grid-template-columns: 44px 1fr 44px;
  align-items: center;
  gap: 14px;
}

.arrow-button {
  border: 0;
  background: transparent;
  color: var(--cyan);
  font-size: 56px;
  line-height: 1;
  font-weight: 300;
  cursor: pointer;
  text-shadow:
    0 0 8px var(--cyan-glow),
    0 2px 0 rgba(0,0,0,0.25);
}

.branch-title {
  margin: 0;
  font-family: "Orbitron", Arial, sans-serif;
  font-size: clamp(30px, 8vw, 43px);
  font-weight: 500;
  letter-spacing: 11px;
  color: var(--cyan);
  text-shadow:
    0 0 8px var(--cyan-glow),
    0 1px 0 #ffffff,
    0 3px 5px rgba(0,0,0,0.28);
}

.branch-dots {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 32px;
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
  margin-top: 52px;
}

.service-list {
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.service-row {
  width: 100%;
  min-height: 92px;
  display: grid;
  grid-template-columns: 44% 1fr;
  align-items: center;
  gap: 24px;
  border: 0;
  background: transparent;
  text-align: left;
  color: inherit;
  cursor: pointer;
}

.service-button {
  min-height: 72px;
  padding: 15px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(
    9% 0,
    91% 0,
    100% 22%,
    100% 78%,
    91% 100%,
    9% 100%,
    0 78%,
    0 22%
  );
  border: 2px solid var(--cyan);
  color: var(--cyan);
  font-family: "Orbitron", Arial, sans-serif;
  font-size: clamp(20px, 5.3vw, 31px);
  letter-spacing: 7px;
  text-align: center;
  text-shadow:
    0 0 8px var(--cyan-glow),
    0 1px 0 rgba(255,255,255,0.8);
  box-shadow:
    inset 0 0 13px rgba(255,255,255,0.1),
    0 0 7px rgba(0,234,255,0.28);
  background:
    linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0.025));
}

.service-description {
  margin: 0;
  color: #262626;
  font-size: clamp(19px, 4.6vw, 25px);
  line-height: 1.43;
  letter-spacing: 0.4px;
  font-weight: 400;
  text-shadow:
    0 1px 0 rgba(255,255,255,0.6),
    0 2px 3px rgba(0,0,0,0.12);
}

.bottom-system-bar {
  margin-top: 36px;
  min-height: 42px;
  padding: 10px 16px;
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
  font-size: clamp(12px, 3.2vw, 16px);
  letter-spacing: 5px;
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
    padding: 24px 24px 28px;
    border-radius: 0;
    border-left: 0;
    border-right: 0;
  }

  .menu-button {
    margin-top: 44px;
  }

  .main-header {
    margin-top: 18px;
  }

  .cube-logo {
    width: 92px;
    height: 80px;
    margin-bottom: 22px;
  }

  .cube-top {
    width: 48px;
    height: 48px;
    left: 22px;
  }

  .cube-left,
  .cube-right {
    width: 48px;
    height: 48px;
    top: 32px;
  }

  .cube-left {
    left: 10px;
  }

  .cube-right {
    right: 10px;
  }

  .brand-title {
    letter-spacing: 10px;
  }

  .brand-subtitle {
    letter-spacing: 11px;
  }

  .branch-section {
    margin-top: 48px;
  }

  .branch-title {
    letter-spacing: 7px;
  }

  .service-row {
    grid-template-columns: 42% 1fr;
    gap: 18px;
  }

  .service-button {
    min-height: 67px;
    letter-spacing: 4px;
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