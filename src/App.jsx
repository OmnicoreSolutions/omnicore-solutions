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
        title="OMNICORE MECHANICAL SOLUTIONS"
        subtitle="Select service"
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

        <BackButton route="/" label="Back to OMNICORE" />
      </PageShell>
    );
  }

  if (path === "/mechanical/hvac") {
    return (
      <PageShell
        title="HVAC"
        subtitle="Full system diagnostic"
      >
        <BackButton
          route="/mechanical"
          label="Back to Mechanical"
        />
      </PageShell>
    );
  }

  if (path === "/mechanical/vehicle") {
    return (
      <PageShell
        title="VEHICLE"
        subtitle="OBD2 diagnostics, maintenance, parts replacement"
      >
        <BackButton
          route="/mechanical"
          label="Back to Mechanical"
        />
      </PageShell>
    );
  }

  if (path === "/mechanical/automation") {
    return (
      <PageShell
        title="AUTOMATION SYSTEMS"
        subtitle="Security, hydroponics, servers, UPS systems, audio and video"
      >
        <BackButton
          route="/mechanical"
          label="Back to Mechanical"
        />
      </PageShell>
    );
  }

  if (path === "/mechanical/construction") {
    return (
      <PageShell
        title="CONSTRUCTION"
        subtitle="Decks, kitchens, baths, outdoors"
      >
        <BackButton
          route="/mechanical"
          label="Back to Mechanical"
        />
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
      subtitle="Powered by the UOS"
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
              opacity: division.route ? 1 : 0.45,
            }}
          >
            <ServiceCard title={division.title} />
          </div>
        ))}
      </CardGrid>

      <p
        style={{
          marginTop: "60px",
          color: "#888",
          fontSize: "14px",
          letterSpacing: "1px",
        }}
      >
        Don’t get charged what you don’t need to pay.
      </p>
    </PageShell>
  );
}

function PageShell({ title, subtitle, children }) {
  return (
    <div
      style={{
        backgroundColor: "#0a0f1c",
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
          fontSize: "40px",
          marginBottom: "10px",
          letterSpacing: "4px",
          maxWidth: "1200px",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          color: "#6ab7ff",
          fontSize: "22px",
          marginBottom: "50px",
          letterSpacing: "2px",
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
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "1200px",
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
        marginTop: "50px",
        backgroundColor: "transparent",
        color: "#6ab7ff",
        border: "1px solid #6ab7ff",
        borderRadius: "12px",
        padding: "12px 24px",
        cursor: "pointer",
        letterSpacing: "1px",
      }}
    >
      {label}
    </button>
  );
}

export default App;