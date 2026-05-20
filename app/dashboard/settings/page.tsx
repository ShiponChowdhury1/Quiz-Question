"use client";
import { useState } from "react";
import Footer from "../_components/sections/Footer";

const aiModels = [
  { id: "gpt-4o", name: "GPT-4o", badge: "Default", badgeColor: "#22c55e", desc: "Best for complex reasoning & long answers", icon: "🤖" },
  { id: "gemini", name: "Gemini Pro", badge: "Smart", badgeColor: "#4285f4", desc: "Excellent for math, code, and multimodal tasks", icon: "💎" },
  { id: "claude", name: "Claude 3.5", badge: "Reliable", badgeColor: "#f59e0b", desc: "Great for writing, analysis & nuanced content", icon: "⚡" },
];

const responseStyles = [
  { id: "concise", name: "Concise", desc: "Straight to the point", icon: "⚡" },
  { id: "balanced", name: "Balanced", desc: "Clear with context", icon: "⚖️" },
  { id: "detailed", name: "Detailed", desc: "Full explanations", icon: "📖" },
  { id: "formal", name: "Formal", desc: "Academic style", icon: "🎓" },
];

const subjects = [
  { id: "mathematics", name: "Mathematics", icon: "📐" },
  { id: "physics", name: "Physics", icon: "⚛️" },
  { id: "chemistry", name: "Chemistry", icon: "⚗️" },
  { id: "biology", name: "Biology", icon: "🧬" },
  { id: "history", name: "History", icon: "📚" },
  { id: "cs", name: "CS", icon: "💻" },
  { id: "literature", name: "Literature", icon: "📝" },
  { id: "economics", name: "Economics", icon: "📊" },
];

export default function SettingsPage() {
  const [selectedModel, setSelectedModel] = useState("gpt-4o");
  const [responseStyle, setResponseStyle] = useState("balanced");
  const [difficulty, setDifficulty] = useState(50);
  const [selectedSubjects, setSelectedSubjects] = useState(["mathematics", "physics"]);
  const [parentalRole, setParentalRole] = useState("parent");
  const [email, setEmail] = useState("");
  const [chatHistoryExport, setChatHistoryExport] = useState(true);

  const toggleSubject = (id: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const getDiffLabel = () => {
    if (difficulty < 25) return "Beginner";
    if (difficulty < 50) return "Intermediate";
    if (difficulty < 75) return "Advanced";
    return "Expert";
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    backgroundColor: "#16161f",
    border: "1px solid rgba(255,255,255,0.09)",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "14px",
    outline: "none",
  };

  return (
    <div style={{ padding: "32px 40px", maxWidth: "1100px" }}>
      {/* Logo */}
      <div style={{ marginBottom: "24px" }}>
        <img src="/images/ai-logo.png" alt="Quiz Question AI" style={{ height: "38px", objectFit: "contain" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: "40px", alignItems: "flex-start" }}>
        {/* ===== LEFT COLUMN ===== */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Profile Settings */}
          <div>
            <h2 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, margin: "0 0 20px" }}>Profile Settings</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", marginBottom: "6px", display: "block" }}>Name</label>
                <input type="text" placeholder="Name" style={inputStyle} />
              </div>
              <div>
                <label style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", marginBottom: "6px", display: "block" }}>Email</label>
                <input type="email" placeholder="example@gmail.com" style={inputStyle} />
              </div>
            </div>
          </div>

          {/* Change Password */}
          <div>
            <h2 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, margin: "0 0 20px" }}>Change Password</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", marginBottom: "6px", display: "block" }}>Current Password</label>
                <div style={{ position: "relative" }}>
                  <input type="password" placeholder="Password" style={inputStyle} />
                  <span style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)", cursor: "pointer" }}>👁</span>
                </div>
              </div>
              <div>
                <label style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", marginBottom: "6px", display: "block" }}>Password</label>
                <div style={{ position: "relative" }}>
                  <input type="password" placeholder="Password" style={inputStyle} />
                  <span style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)", cursor: "pointer" }}>👁</span>
                </div>
              </div>
              <div>
                <label style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", marginBottom: "6px", display: "block" }}>Confirm Password</label>
                <div style={{ position: "relative" }}>
                  <input type="password" placeholder="Confirm Password" style={inputStyle} />
                  <span style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.3)", cursor: "pointer" }}>👁</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT COLUMN ===== */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* AI Personalization */}
          <div>
            <h2 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700, margin: "0 0 20px" }}>AI Personalization</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {aiModels.map((m) => {
                const isActive = m.id === selectedModel;
                return (
                  <div
                    key={m.id}
                    onClick={() => setSelectedModel(m.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "16px 18px",
                      backgroundColor: isActive ? "rgba(79,70,229,0.08)" : "#111118",
                      border: isActive ? "1px solid rgba(79,70,229,0.3)" : "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "12px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span style={{ fontSize: "22px" }}>{m.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>{m.name}</span>
                        <span style={{ padding: "2px 8px", borderRadius: "10px", backgroundColor: `${m.badgeColor}20`, color: m.badgeColor, fontSize: "10px", fontWeight: 600 }}>{m.badge}</span>
                      </div>
                      <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", margin: "2px 0 0" }}>{m.desc}</p>
                    </div>
                    {/* Radio */}
                    <div style={{ width: "20px", height: "20px", borderRadius: "50%", border: `2px solid ${isActive ? "#4F46E5" : "rgba(255,255,255,0.15)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {isActive && <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#4F46E5" }} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Response Style */}
          <div>
            <h2 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 700, margin: "0 0 16px" }}>Response Style</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {responseStyles.map((rs) => {
                const isActive = rs.id === responseStyle;
                return (
                  <div
                    key={rs.id}
                    onClick={() => setResponseStyle(rs.id)}
                    style={{
                      padding: "14px 16px",
                      backgroundColor: isActive ? "rgba(79,70,229,0.12)" : "#111118",
                      border: isActive ? "1px solid rgba(79,70,229,0.4)" : "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span>{rs.icon}</span>
                      <span style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 600 }}>{rs.name}</span>
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", margin: "4px 0 0 0", paddingLeft: "26px" }}>{rs.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Difficulty Level */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <h2 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 700, margin: 0 }}>Difficulty Level</h2>
              <span style={{ color: "#7b68ee", fontSize: "13px", fontWeight: 600 }}>{getDiffLabel()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={difficulty}
              onChange={(e) => setDifficulty(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#4F46E5", height: "6px" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
              {["Beginner", "Intermediate", "Advanced", "Expert"].map((l) => (
                <span key={l} style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>{l}</span>
              ))}
            </div>
          </div>

          {/* Subject Focus Area */}
          <div>
            <h2 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 700, margin: "0 0 16px" }}>Subject Focus Area</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
              {subjects.map((s) => {
                const isSelected = selectedSubjects.includes(s.id);
                return (
                  <div
                    key={s.id}
                    onClick={() => toggleSubject(s.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 14px",
                      borderRadius: "22px",
                      backgroundColor: isSelected ? "rgba(79,70,229,0.15)" : "rgba(255,255,255,0.04)",
                      border: isSelected ? "1px solid rgba(79,70,229,0.4)" : "1px solid rgba(255,255,255,0.06)",
                      color: isSelected ? "#ffffff" : "rgba(255,255,255,0.5)",
                      fontSize: "13px",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span>{s.icon}</span>
                    {s.name}
                    {isSelected && <span style={{ marginLeft: "auto", fontSize: "12px" }}>✓</span>}
                  </div>
                );
              })}
            </div>

            {/* Save Preferences */}
            <button
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "20px",
                background: "linear-gradient(135deg, #6c5ce7, #7b68ee)",
                border: "none",
                borderRadius: "12px",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "all 0.2s ease",
              }}
            >
              ✨ Save Preferences
            </button>
          </div>
        </div>
      </div>

      {/* ===== PARENTAL CONTROL ===== */}
      <div style={{ marginTop: "48px", maxWidth: "700px" }}>
        <h2 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, margin: "0 0 24px" }}>Parental Control</h2>

        {/* Parent toggle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", backgroundColor: "#111118", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)", marginBottom: "10px" }}>
          <div>
            <p style={{ color: "#fff", fontSize: "15px", fontWeight: 600, margin: 0 }}>Parent</p>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", margin: "2px 0 0" }}>Add managing abilities as parent</p>
          </div>
          <div
            onClick={() => setParentalRole("parent")}
            style={{
              width: "44px", height: "24px", borderRadius: "12px",
              backgroundColor: parentalRole === "parent" ? "#22c55e" : "rgba(255,255,255,0.15)",
              cursor: "pointer", position: "relative", transition: "all 0.2s ease",
            }}
          >
            <div style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "#fff", position: "absolute", top: "3px", left: parentalRole === "parent" ? "23px" : "3px", transition: "all 0.2s ease" }} />
          </div>
        </div>

        {/* Child toggle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", backgroundColor: "#111118", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)", marginBottom: "20px" }}>
          <div>
            <p style={{ color: "#fff", fontSize: "15px", fontWeight: 600, margin: 0 }}>Child</p>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", margin: "2px 0 0" }}>Add Your Child</p>
          </div>
          <div
            onClick={() => setParentalRole("child")}
            style={{
              width: "44px", height: "24px", borderRadius: "12px",
              backgroundColor: parentalRole === "child" ? "#22c55e" : "rgba(255,255,255,0.15)",
              cursor: "pointer", position: "relative", transition: "all 0.2s ease",
            }}
          >
            <div style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "#fff", position: "absolute", top: "3px", left: parentalRole === "child" ? "23px" : "3px", transition: "all 0.2s ease" }} />
          </div>
        </div>

        {/* Enter Email */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", fontWeight: 600, display: "block", marginBottom: "8px" }}>Enter Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            style={{ ...inputStyle }}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <button
            style={{
              padding: "14px",
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            See Child&apos;s Activity
          </button>
          <button
            style={{
              padding: "14px",
              background: "linear-gradient(135deg, #6c5ce7, #7b68ee)",
              border: "none",
              borderRadius: "12px",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Send Invite
          </button>
        </div>
      </div>

      {/* ===== EXPLORE YOUR DATA ===== */}
      <div style={{ marginTop: "48px", maxWidth: "700px", marginBottom: "40px" }}>
        <h2 style={{ color: "#ffffff", fontSize: "18px", fontWeight: 700, margin: "0 0 16px" }}>Explore your Data</h2>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", backgroundColor: "#111118", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)", marginBottom: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            <div>
              <span style={{ color: "#fff", fontSize: "14px", fontWeight: 500 }}>Chat History</span>
              <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", marginLeft: "8px" }}>156 conversations · 2.6 MB</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>~1.2 MB</span>
            <div
              onClick={() => setChatHistoryExport(!chatHistoryExport)}
              style={{
                width: "44px", height: "24px", borderRadius: "12px",
                backgroundColor: chatHistoryExport ? "#22c55e" : "rgba(255,255,255,0.15)",
                cursor: "pointer", position: "relative", transition: "all 0.2s ease",
              }}
            >
              <div style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: "#fff", position: "absolute", top: "3px", left: chatHistoryExport ? "23px" : "3px", transition: "all 0.2s ease" }} />
            </div>
          </div>
        </div>

        <button
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "12px",
            background: "linear-gradient(135deg, #6c5ce7, #7b68ee)",
            border: "none",
            borderRadius: "12px",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          ⬇ Export Selected Data
        </button>
      </div>

      <Footer />
    </div>
  );
}
