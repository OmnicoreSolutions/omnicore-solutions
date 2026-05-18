import ServiceCard from "./components/ServiceCard";

function App() {
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
          maxWidth: "1200px",
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
        The future of Universal Operation System
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
          <ServiceCard key={item} title={item} />
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

export default App;