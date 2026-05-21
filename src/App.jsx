function App() {
  const divisions = [
    { title: "MECHANICAL", route: "/mechanical" },
    { title: "MANUFACTURING", route: "/manufacturing" },
    { title: "MEDICAL", route: "/medical" },
    { title: "MILITARY", route: "/military" },
    { title: "MOTORS", route: "/motors" },
  ];

  return (
    <PageShell>
      <MainHeader />
      <DivisionGrid divisions={divisions} />
      <FooterBar />
    </PageShell>
  );
}

function PageShell({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at center top, #111111 0%, #050505 48%, #010101 100%)",
        color: "#d6d6d6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Montserrat, Arial, sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Orbitron:wght@400;500;600&display=swap');

          body {
            margin: 0;
            background: #050505;
          }
        `}
      </style>

      {children}
    </div>
  );
}

function MainHeader() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1100px",
        textAlign: "center",
        paddingTop: "70px",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontFamily: "Orbitron, Arial, sans-serif",
          fontSize: "76px",
          fontWeight: "500",
          letterSpacing: "18px",
          color: "#cfcfcf",
          textShadow: "0 0 18px rgba(255,255,255,0.10)",
        }}
      >
        OMNICORE
      </h1>

      <div
        style={{
          marginTop: "18px",
          color: "#00e5ff",
          fontSize: "26px",
          letterSpacing: "13px",
          fontWeight: "300",
        }}
      >
        UNIVERSAL OPERATING SYSTEM
      </div>

      <div
        style={{
          marginTop: "38px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "42px",
        }}
      >
        <Line />
        <div
          style={{
            color: "#00e5ff",
            fontSize: "18px",
            letterSpacing: "9px",
            fontWeight: "300",
          }}
        >
          PRECISE RESOURCE PRICING
        </div>
        <Line />
      </div>

      <div
        style={{
          marginTop: "55px",
          marginBottom: "36px",
          color: "#b8b8b8",
          fontSize: "16px",
          letterSpacing: "8px",
          fontWeight: "300",
        }}
      >
        SELECT DIVISION
      </div>
    </div>
  );
}

function Line() {
  return (
    <div
      style={{
        width: "160px",
        height: "1px",
        backgroundColor: "#00e5ff",
        opacity: 0.75,
      }}
    />
  );
}

function DivisionGrid({ divisions }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1180px",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "22px",
        padding: "0 38px 90px",
        boxSizing: "border-box",
      }}
    >
      {divisions.map((division) => (
        <button
          key={division.title}
          onClick={() => {
            window.location.href = division.route;
          }}
          style={{
            height: "150px",
            background:
              "linear-gradient(180deg, rgba(8,8,8,0.98) 0%, rgba(14,14,14,0.98) 100%)",
            border: "1px solid rgba(0,229,255,0.38)",
            borderRadius: "12px",
            color: "#d0d0d0",
            fontFamily: "Montserrat, Arial, sans-serif",
            fontSize: "15px",
            fontWeight: "400",
            letterSpacing: "2px",
            cursor: "pointer",
            boxShadow:
              "0 0 18px rgba(0,229,255,0.05), inset 0 0 18px rgba(255,255,255,0.025)",
          }}
        >
          {division.title}
        </button>
      ))}
    </div>
  );
}

function FooterBar() {
  return (
    <div
      style={{
        width: "100%",
        height: "72px",
        marginTop: "auto",
        background:
          "linear-gradient(90deg, #020202 0%, #071015 50%, #020202 100%)",
        borderTop: "1px solid rgba(0,229,255,0.22)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 36px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          color: "#d0d0d0",
          fontSize: "13px",
          letterSpacing: "4px",
          fontFamily: "Orbitron, Arial, sans-serif",
        }}
      >
        OMNICORE{" "}
        <span
          style={{
            color: "#00e5ff",
            fontFamily: "Montserrat, Arial, sans-serif",
          }}
        >
          SYSTEMS
        </span>
      </div>

      <div
        style={{
          color: "#00e5ff",
          fontSize: "18px",
          letterSpacing: "3px",
          fontWeight: "300",
        }}
      >
        786 516 7086
      </div>
    </div>
  );
}

export default App;