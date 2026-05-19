import ServiceCard from "./components/ServiceCard";

function App() {
  const path = window.location.pathname;

  // HVAC PAGE
  if (path === "/mechanical/hvac") {
    return (
      <PageLayout
        title="HVAC"
        subtitle="Drain pan cleaning • Drain line flush • Full system diagnostic"
      />
    );
  }

  // VEHICLE PAGE
  if (path === "/mechanical/vehicle") {
    return (
      <PageLayout
        title="VEHICLE"
        subtitle="Brake changes • Oil changes • OBD2 diagnostics"
      />
    );
  }

  // AUTOMATION PAGE
  if (path === "/mechanical/automation") {
    return (
      <PageLayout
        title="AUTOMATION SYSTEMS"
        subtitle="Security • Cameras • Smart systems"
      />
    );
  }

  // CONSTRUCTION PAGE
  if (path === "/mechanical/construction") {
    return (
      <PageLayout
        title="CONSTRUCTION"
        subtitle="Onsite estimates • Structural work • Installations"
      />
    );
  }

  // MECHANICAL MAIN PAGE
  if (path === "/mechanical") {
    const services = [
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

    return (
      <div
        style={{
          backgroundColor: "#0a0f1c",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            marginTop: "40px",
            marginBottom: "10px",
            letterSpacing: "3px",
          }}
        >
          OMNICORE MECHANICAL SOLUTIONS
        </h1>

        <p
          style={{
            color: "#6ab7ff",
            fontSize: "24px",
            marginBottom: "60px",
          }}
        >
          Precise Resource Pricing
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "1200px",
          }}
        >
          {services.map((item) => (
            <div
              key={item.title}
              onClick={() => {
                window.location.href = item.route;
              }}
              style={{ cursor: "pointer" }}
            >
              <ServiceCard title={item.title} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // MAIN OMNICORE PAGE
  const divisions = [
    "Mechanical",
    "Manufacturing",
    "Motors",
    "Medical",
    "Military",
  ];

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
        }}
      >
        OMNICORE
      </h1>

      <p
        style={{
          color: "#6ab7ff",
          fontSize: "22px",
          marginBottom: "50px",
          letterSpacing: "2px",
        }}
      >
        Powered by the UOS
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "1200px",
        }}
      >
        {divisions.map((item) => (
          <div
            key={item}
            onClick={() => {
              if (item === "Mechanical") {
                window.location.href = "/mechanical";
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <ServiceCard title={item} />
          </div>
        ))}
      </div>

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
    </div>
  );
}

// REUSABLE PAGE LAYOUT
function PageLayout({ title, subtitle }) {
  return (
    <div
      style={{
        backgroundColor: "#0a0f1c",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          marginTop: "80px",
          marginBottom: "20px",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          color: "#6ab7ff",
          fontSize: "24px",
          marginBottom: "60px",
        }}
      >
        {subtitle}
      </p>

      <button
        onClick={() => {
          window.location.href = "/mechanical";
        }}
        style={{
          backgroundColor: "transparent",
          border: "1px solid #6ab7ff",
          color: "white",
          padding: "14px 28px",
          borderRadius: "12px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Back
      </button>
    </div>
  );
}

export default App;