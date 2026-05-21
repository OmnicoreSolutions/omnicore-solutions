import ServiceCard from "./components/ServiceCard";

function App() {
  const path = window.location.pathname;

  const mechanicalServices = [
    {
      title: "HVAC",
      route: "/mechanical/hvac",
    },
    {
      title: "Vehicle",
      route: "/mechanical/vehicle",
    },
    {
      title: "Automation Systems",
      route: "/mechanical/automation",
    },
    {
      title: "Construction",
      route: "/mechanical/construction",
    },
  ];

  if (path === "/mechanical") {
    return (
      <PageShell
        title="OMNICORE"
        subtitle="MECHANICAL SOLUTIONS"
      >
        <p
          style={{
            color: "#6ab7ff",
            marginTop: "-20px",
            marginBottom: "60px",
            letterSpacing: "4px",
            fontSize: "18px",
            fontWeight: "300",
          }}
        >
          PRECISE RESOURCE PRICING
        </p>

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

        <BackButton route="/" label="Back to OMNICORE" />
      </PageShell>
    );
  }

  if (path === "/mechanical/hvac") {
    return (
      <PageShell
        title="HVAC"
        subtitle="FULL SYSTEM DIAGNOSTIC"
      >
        <BackButton route="/mechanical" label="Back to Mechanical" />
      </PageShell>
    );
  }

  if (path === "/mechanical/vehicle") {
    return (
      <PageShell
        title="VEHICLE"
        subtitle="OBD2 DIAGNOSTICS"
      >
        <BackButton route="/mechanical" label="Back to Mechanical" />
      </PageShell>
    );
  }

  if (path === "/mechanical/automation") {
    return (
      <PageShell
        title="AUTOMATION"
        subtitle="SYSTEMS"
      >
        <BackButton route="/mechanical" label="Back to Mechanical" />
      </PageShell>
    );
  }

  if (path === "/mechanical/construction") {
    return (
      <PageShell
        title="CONSTRUCTION"
        subtitle="PROJECTS"
      >
        <BackButton route="/mechanical" label="Back to Mechanical" />
      </PageShell>
    );
  }

  const divisions = [
    {
      title: "Mechanical",
      route: "/mechanical",
    },
    {
      title: "Manufacturing",
      route: null,
    },
    {
      title: "Motors",
      route: null,
    },
    {
      title: "Medical",
      route: null,
    },
    {
      title: "Military",
      route: null,
    },
  ];

  return (
    <PageShell
      title="OMNICORE"
      subtitle="UNIVERSAL OPERATING SYSTEM"
    >
      <p
        style={{
          color: "#6ab7ff",
          marginTop: "-20px",
          marginBottom: "60px",
          letterSpacing: "4px",
          fontSize: "18px",
          fontWeight: "300",
        }}
      >
        PRECISE RESOURCE PRICING
      </p>

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
          letterSpacing: "2px",
          fontWeight: "300",
        }}
      >
        DON’T GET CHARGED WHAT YOU DON’T NEED TO PAY
      </p>
    </PageShell>
  );
}

function PageShell({ title, subtitle, children }) {
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
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "200",
          lineHeight: "1",
          marginBottom: "10px",
          letterSpacing: "6px",
          maxWidth: "1400px",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          color: "#6ab7ff",
          fontSize: "28px",
          fontWeight: "300",
          marginBottom: "20px",
          letterSpacing: "6px",
        }}
      >
        {subtitle}
      </p>

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
        letterSpacing: "2px",
        fontWeight: "300",
        fontSize: "14px",
      }}
    >
      {label}
    </button>
  );
}

export default App;