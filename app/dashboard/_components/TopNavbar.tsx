"use client";

export default function TopNavbar() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "10px 24px",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        backgroundColor: "#0A0A0F",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "#1a1a28",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "6px 14px 6px 6px",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7b68ee, #e040fb)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: 700,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          A
        </div>
        <div>
          <p style={{ color: "#fff", fontSize: "13px", fontWeight: 600, margin: 0, lineHeight: 1.3 }}>
            Angelina jolley
          </p>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", margin: 0 }}>
            example@gmail.com
          </p>
        </div>
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", marginLeft: "4px" }}>˅</span>
      </div>
    </header>
  );
}
