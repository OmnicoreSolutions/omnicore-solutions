function ServiceCard({ title }) {
  return (
    <div
      style={{
        border: "1px solid #6ab7ff",
        borderRadius: "12px",
        padding: "20px 40px",
        minWidth: "220px",
        backgroundColor: "#111827",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontWeight: "normal",
          letterSpacing: "1px",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function ServiceCard({ title }) {
  return (
    <div
      style={{
        width: "360px",
        height: "92px",

        background:
          "linear-gradient(180deg, rgba(10,10,10,0.95) 0%, rgba(18,18,18,0.98) 100%)",

        border: "1px solid rgba(0, 255, 255, 0.45)",

        borderRadius: "18px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        color: "#cfcfcf",

        fontSize: "24px",
        fontWeight: "300",

        letterSpacing: "3px",

        fontFamily: "Montserrat, Arial, sans-serif",

        boxShadow:
          "0px 0px 18px rgba(0,255,255,0.05), inset 0px 0px 18px rgba(255,255,255,0.015)",

        transition: "0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border =
          "1px solid rgba(0,255,255,0.9)";

        e.currentTarget.style.color = "#ffffff";

        e.currentTarget.style.boxShadow =
          "0px 0px 28px rgba(0,255,255,0.18), inset 0px 0px 24px rgba(255,255,255,0.02)";

        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border =
          "1px solid rgba(0, 255, 255, 0.45)";

        e.currentTarget.style.color = "#cfcfcf";

        e.currentTarget.style.boxShadow =
          "0px 0px 18px rgba(0,255,255,0.05), inset 0px 0px 18px rgba(255,255,255,0.015)";

        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      {title}
    </div>
  );
}

export default ServiceCard;