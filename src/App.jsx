import ServiceCard from "./components/ServiceCard";

function App() {
  const path = window.location.pathname;

  const divisions = [
    {
      title: "MECHANICAL",
      route: "/mechanical",
    },
    {
      title: "MANUFACTURING",
      route: "/manufacturing",
    },
    {
      title: "MEDICAL",
      route: "/medical",
    },
    {
      title: "MILITARY",
      route: "/military",
    },
    {
      title: "MOTORS",
      route: "/motors",
    },
  ];

  if (path === "/mechanical") {
    return (
      <PageShell>
        <TopVersion />

        <MainLogo />

        <SubText />

        <DivisionLabel />

        <CardContainer>
          {divisions.map((division) => (
            <div
              key={division.title}
              onClick={() => {
                if (division.route) {
                  window.location.href = division.route;
                }
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <ServiceCard title={division.title} />
            </div>
          ))}
        </CardContainer>

        <FooterBar />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <TopVersion />

      <MainLogo />

      <SubText />

      <DivisionLabel />

      <CardContainer>
        {divisions.map((division) => (
          <div
            key={division.title}
            onClick={() => {
              if (division.route) {
                window.location.href = division.route;
              }
            }}
            style={{
              cursor: "pointer",
            }}
          >
            <ServiceCard title={division.title} />
          </div>
        ))}
      </CardContainer>

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
          "linear-gradient(180deg, #020202 0%, #050505 40%, #090909 100%)",

        color: "#d4d4d4",

        display: "flex",
        flexDirection: "column",

        alignItems: "center",

        paddingTop: "40px",

        fontFamily: "Montserrat, Arial, sans-serif",

        overflowX: "hidden",
      }}
    >
      {children}
    </div>
  );
}

function TopVersion() {
  return (
    <div
      style={{
        position: "absolute",
        top: "30px",
        right: "40px",

        color: "#00e5ff",

        letterSpacing: "4px",

        fontSize: "14px",

        fontWeight: "300",
      }}
    >
      VERSION 2
    </div>
  );
}

function MainLogo() {
  return (
    <>
      <img
        src="/logo.png"
        alt="OMNICORE"
        style={{
          width: "150px",
          marginTop: "30px",
          marginBottom: "25px",
        }}
      />

      <h1
        style={{
          margin: 0,

          fontSize: "84px",

          fontWeight: "300",

          letterSpacing: "18px",

          color: "#d9d9d9",

          textAlign: "center",
        }}
      >
        OMNICORE
      </h1>

      <div
        style={{
          marginTop: "14px",

          color: "#00e5ff",

          fontSize: "28px",

          letterSpacing: "12px",

          fontWeight: "300",
        }}
      >
        MECHANICAL SOLUTIONS
      </div>

      <div
        style={{
          width: "420px",
          height: "1px",

          background: "#00e5ff",

          marginTop: "24px",

          opacity: 0.6,
        }}
      />

      <div
        style={{
          marginTop: "30px",

          color: "#cfcfcf",

          fontSize: "24px",

          fontWeight: "300",
        }}
      >
        Only pay for what your job actually requires.
      </div>

      <div
        style={{
          marginTop: "14px",

          color: "#00e5ff",

          fontSize: "15px",

          letterSpacing: "3px",

          fontWeight: "500",
        }}
      >
        VERIFIED. TRANSPARENT. PRECISE.
      </div>
    </>
  );
}

function SubText() {
  return null;
}

function DivisionLabel() {
  return (
    <div
      style={{
        marginTop: "70px",
        marginBottom: "36px",

        color: "#bdbdbd",

        letterSpacing: "8px",

        fontSize: "20px",

        fontWeight: "300",
      }}
    >
      SELECT DIVISION
    </div>
  );
}

function CardContainer({ children }) {
  return (
    <div
      style={{
        width: "100%",

        display: "flex",

        justifyContent: "center",

        flexWrap: "wrap",

        gap: "28px",

        paddingBottom: "120px",

        maxWidth: "1500px",
      }}
    >
      {children}
    </div>
  );
}

function FooterBar() {
  return (
    <div
      style={{
        width: "100%",

        height: "78px",

        marginTop: "auto",

        borderTop: "1px solid rgba(0,229,255,0.18)",

        background:
          "linear-gradient(90deg, #050505 0%, #081018 50%, #050505 100%)",

        display: "flex",

        alignItems: "center",

        justifyContent: "space-between",

        paddingLeft: "34px",

        paddingRight: "34px",

        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <img
          src="/logo.png"
          alt="OMNICORE"
          style={{
            width: "28px",
          }}
        />

        <div
          style={{
            color: "#d4d4d4",

            letterSpacing: "4px",

            fontSize: "14px",
          }}
        >
          OMNICORE
          <span
            style={{
              color: "#00e5ff",
              marginLeft: "10px",
            }}
          >
            MECHANICAL SOLUTIONS
          </span>
        </div>
      </div>

      <div
        style={{
          color: "#00e5ff",

          fontSize: "28px",

          fontWeight: "300",

          letterSpacing: "3px",
        }}
      >
        786 516 7086
      </div>
    </div>
  );
}

export default App;