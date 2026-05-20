"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

const chatData: Record<string, { tag: string; tagColor: string; title: string; messages: Array<{ role: "user" | "ai"; content: string }> }> = {
  "chat-1": {
    tag: "Math",
    tagColor: "#ef4444",
    title: "Solve for x: 3x + 7 = 22",
    messages: [
      { role: "user", content: "Solve for x: 3x + 7 = 22" },
      { role: "ai", content: "Let me solve this step by step:\n\n1. Start with: 3x + 7 = 22\n2. Subtract 7 from both sides: 3x = 15\n3. Divide both sides by 3: x = 5\n\nTherefore, x = 5\n\nVerification: 3(5) + 7 = 15 + 7 = 22 ✓" },
      { role: "user", content: "What about 2x + 5 = 15?" },
      { role: "ai", content: "Let me solve this step by step:\n\n1. Start with: 2x + 5 = 15\n2. Subtract 5 from both sides: 2x = 10\n3. Divide both sides by 2: x = 5\n\nTherefore, x = 5" },
    ],
  },
  "chat-2": {
    tag: "Math",
    tagColor: "#ef4444",
    title: "Quadratic Formula Application",
    messages: [
      { role: "user", content: "How do I use the quadratic formula?" },
      { role: "ai", content: "The quadratic formula is used to solve equations of the form ax² + bx + c = 0.\n\nThe formula is: x = (-b ± √(b² - 4ac)) / 2a\n\nSteps:\n1. Identify a, b, and c from your equation\n2. Calculate the discriminant: b² - 4ac\n3. Plug values into the formula\n4. Solve for both + and - cases" },
    ],
  },
  "chat-3": {
    tag: "Physics",
    tagColor: "#22c55e",
    title: "Kinetic Energy Calculation",
    messages: [
      { role: "user", content: "Calculate kinetic energy of a 5kg object moving at 10 m/s" },
      { role: "ai", content: "Using the kinetic energy formula:\n\nKE = ½mv²\nKE = ½ × 5 kg × (10 m/s)²\nKE = ½ × 5 × 100\nKE = 250 J\n\nThe kinetic energy is 250 Joules." },
    ],
  },
  "chat-4": {
    tag: "Chemistry",
    tagColor: "#eab308",
    title: "Balancing Chemical Equations",
    messages: [
      { role: "user", content: "Balance: Fe + O₂ → Fe₂O₃" },
      { role: "ai", content: "Let me balance this equation:\n\nUnbalanced: Fe + O₂ → Fe₂O₃\n\nStep 1: Count atoms\n- Left: 1 Fe, 2 O\n- Right: 2 Fe, 3 O\n\nStep 2: Balance Fe first → 2Fe\nStep 3: Balance O → need 3 O atoms, so 3/2 O₂\nStep 4: Multiply everything by 2 to remove fraction\n\nBalanced: 4Fe + 3O₂ → 2Fe₂O₃\n\nVerification:\n- Left: 4 Fe, 6 O ✓\n- Right: 4 Fe, 6 O ✓" },
    ],
  },
  "chat-5": {
    tag: "Math",
    tagColor: "#ef4444",
    title: "Logarithmic Equations",
    messages: [
      { role: "user", content: "Solve: ln(4-x) = y" },
      { role: "ai", content: "To solve ln(4-x) = y for x:\n\n1. Exponentiate both sides: e^(ln(4-x)) = e^y\n2. Simplify: 4 - x = e^y\n3. Solve for x: x = 4 - e^y\n\nTherefore, x = 4 - eʸ" },
    ],
  },
};

export default function ChatDetailPage() {
  const params = useParams();
  const router = useRouter();
  const chatId = String(params?.id || "chat-1");
  const chat = chatData[chatId] || chatData["chat-1"];
  const [message, setMessage] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: "calc(100vh - 56px)" }}>
      {/* Header */}
      <div
        style={{
          padding: "16px 32px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <button
          onClick={() => router.push("/dashboard/history")}
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            padding: "6px 10px",
            cursor: "pointer",
            color: "rgba(255,255,255,0.6)",
            display: "flex",
            alignItems: "center",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(79,70,229,0.4)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
          </svg>
        </button>
        <span
          style={{
            padding: "3px 10px",
            borderRadius: "12px",
            backgroundColor: `${chat.tagColor}20`,
            color: chat.tagColor,
            fontSize: "11px",
            fontWeight: 600,
          }}
        >
          {chat.tag}
        </span>
        <span style={{ color: "#ffffff", fontSize: "15px", fontWeight: 600 }}>{chat.title}</span>
      </div>

      {/* GPT-4o pill centered */}
      <div style={{ display: "flex", justifyContent: "center", padding: "16px 0 0" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "5px 12px",
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px",
          }}
        >
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#22c55e" }} />
          <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "12px" }}>GPT-4o</span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px" }}>˅</span>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, padding: "24px 32px", overflowY: "auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "760px" }}>
          {chat.messages.map((msg, i) => (
            <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
              {msg.role === "ai" && (
                <img
                  src="/images/ai-logo.png"
                  alt="AI"
                  style={{ width: "28px", height: "28px", borderRadius: "50%", marginRight: "10px", marginTop: "4px", flexShrink: 0 }}
                />
              )}
              <div
                style={{
                  maxWidth: "70%",
                  padding: "14px 18px",
                  borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  backgroundColor: msg.role === "user" ? "#4F46E5" : "#1a1a28",
                  color: "#ffffff",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                  border: msg.role === "ai" ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Input */}
      <div style={{ padding: "16px 32px 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#16161f",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "12px",
            padding: "10px 10px 10px 18px",
            maxWidth: "760px",
          }}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.3)" strokeWidth={1.8}>
            <rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8.5" cy="8.5" r="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
          </svg>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your question..."
            style={{
              flex: 1, background: "none", border: "none", outline: "none",
              color: "#ffffff", fontSize: "14px",
            }}
          />
          <button
            style={{
              width: "36px", height: "36px", borderRadius: "10px",
              background: "linear-gradient(135deg, #6c5ce7, #7b68ee)",
              border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
