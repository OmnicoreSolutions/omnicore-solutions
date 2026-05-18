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

export default ServiceCard;