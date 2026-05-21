import ServiceCard from "./components/ServiceCard";

function App() {
  const path = window.location.pathname;

  const mechanicalServices = [
    { title: "HVAC", route: "/mechanical/hvac" },
    { title: "Vehicle", route: "/mechanical/vehicle" },
    { title: "Automation Systems", route: "/mechanical/automation" },
    { title: "Construction", route: "/mechanical/construction" },
  ];

  if (path === "/mechanical") {
    return (
      <PageShell
        version="VERSION 1"
        title="OMNICORE"
        subtitle="MECHANICAL SOLUTIONS"
        accent="PRECISE RESOURCE PRICING"
      >
        <CardGrid>
          {mechanicalServices.map((service) => (
            <div
              key={service.title}
              onClick={() => {
                window.location.href = service.route;
              }}
              style={{ cursor: "pointer" }}
            >
              <ServiceCard title={service.title} />
            </div>
          ))}
        </CardGrid>

        <BackButton route="/" label="BACK TO OMNICORE" />
      </PageShell>
    );
  }

  if (path === "/mechanical/hvac") {
    return <ServicePage title="HVAC" subtitle="FULL SYSTEM DIAGNOSTIC" />;
  }

  if (path === "/mechanical/vehicle") {
    return <ServicePage title="VEHICLE" subtitle="OBD2 DIAGNOSTICS" />;
  }

  if (path === "/mechanical/automation") {
    return <ServicePage title="AUTOMATION" subtitle="SYSTEMS" />;
  }

  if (path === "/mechanical/construction") {
    return <ServicePage title="CONSTRUCTION" subtitle="PROJECTS" />;
  }

  const divisions = [
    { title: "Mechanical", route: "/mechanical" },
    { title: "Manufacturing", route: null },
    { title: "Motors", route: null },
    { title: "Medical", route: null },
    { title: "Military", route: null },
  ];

  return (
    <PageShell
      version="VERSION 1"
      title="OMNICORE"
      subtitle="UNIVERSAL OPERATING SYSTEM"
      accent="PRECISE RESOURCE PRICING"
    >
      <CardGrid>
        {divisions.map((division) => (
          <div
            key={division.title}
            onClick={() => {
              if (division.route) {
                window.location.href = division.route;
              }
            }}
            style={{
              cursor: division.route ? "pointer" : "default",
              opacity: division.route ? 1 : 0.35,
            }}
          >
            <ServiceCard title={division.title} />
          </div>
        ))}
      </CardGrid>

      <p
        style={{
          marginTop: "70px",
          color: "#7d8797",
          fontSize: "14px",
          letterSpacing: "3px",
          fontWeight: "300",
          fontFamily: "Montserrat, Arial, sans-serif",
        }}
      >
        DON’T GET CHARGED WHAT YOU DON’T NEED TO PAY
      </p>
    </PageShell>
  );
}

function ServicePage({ title, subtitle }) {
  return (
    <PageShell
      version="VERSION 1"
      title={title}
      subtitle={subtitle}
      accent="PRECISE RESOURCE PRICING"
    >
      <BackButton route="/mechanical" label="BACK TO MECHANICAL" />
    </PageShell>
  );
}

function PageShell({ version, title, subtitle, accent, children }) {
  return (
    <div
      style={{
        backgroundColor: "#050816",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
        fontFamily: "Montserrat, Arial, sans-serif",
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Orbitron:wght@400;500;600&display=swap');

          body {
            margin: 0;
          }
        `}
      </style>

      <div
        style={{
          position: "absolute",
          top: "24px",
          right: "32px",
          color: "#6ab7ff",
          fontSize: "11px",
          letterSpacing: "3px",
          fontFamily: "Orbitron, Arial, sans-serif",
          opacity: 0.65,
        }}
      >
        {version}
      </div>

      <h1
        style={{
          fontFamily: "Orbitron, Arial, sans-serif",
          fontSize: "68px",
          fontWeight: "500",
          lineHeight: "1",
          marginBottom: "18px",
          letterSpacing: "18px",
          maxWidth: "1400px",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          color: "#6ab7ff",
          fontFamily: "Montserrat, Arial, sans-serif",
          fontSize: "26px",
          fontWeight: "300",
          marginBottom: "26px",
          letterSpacing: "12px",
        }}
      >
        {subtitle}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          marginBottom: "58px",
        }}
      >
        <div style={{ width: "140px", height: "1px", backgroundColor: "#6ab7ff" }} />
        <p
          style={{
            color: "#6ab7ff",
            fontFamily: "Montserrat, Arial, sans-serif",
            fontSize: "18px",
            fontWeight: "300",
            letterSpacing: "8px",
            margin: 0,
          }}
        >
          {accent}
        </p>
        <div style={{ width: "140px", height: "1px", backgroundColor: "#6ab7ff" }} />
      </div>

      {children}
    </div>
  );
}

function CardGrid({ children }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "28px",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "1300px",
      }}
    >
      {children}
    </div>
  );
}

function BackButton({ route, label }) {
  return (
    <button
      onClick={() => {
        window.location.href = route;
      }}
      style={{
        marginTop: "60px",
        backgroundColor: "transparent",
        color: "#6ab7ff",
        border: "1px solid #6ab7ff",
        borderRadius: "14px",
        padding: "14px 30px",
        cursor: "pointer",
        letterSpacing: "3px",
        fontWeight: "300",
        fontSize: "13px",
        fontFamily: "Montserrat, Arial, sans-serif",
      }}
    >
      {label}
    </button>
  );
}

export default App;