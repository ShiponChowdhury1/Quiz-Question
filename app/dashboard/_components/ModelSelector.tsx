"use client";
import { useState, useRef, useEffect } from "react";

const models = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    desc: "General",
    color: "#22c55e",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1a1a28" />
        <circle cx="12" cy="8" r="3" fill="#10a37f" />
        <path d="M8 18c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#10a37f" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "gemini-pro",
    name: "Gemini Pro",
    desc: "Research",
    color: "#4285f4",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1a1a28" />
        <path d="M12 4l-2 6H4l5 4-2 6 5-4 5 4-2-6 5-4h-6z" fill="#4285f4" />
      </svg>
    ),
  },
  {
    id: "claude-3",
    name: "Claude 3",
    desc: "Math",
    color: "#f59e0b",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1a1a28" />
        <path d="M13 3l-1.5 9L18 9l-7 12 1.5-9L6 15z" fill="#f59e0b" />
      </svg>
    ),
  },
];

interface ModelSelectorProps {
  size?: "sm" | "md";
}

export default function ModelSelector({ size = "sm" }: ModelSelectorProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(models[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      {/* Pill Trigger */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: size === "sm" ? "5px 12px" : "7px 14px",
          backgroundColor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        <span
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            backgroundColor: selected.color,
            display: "inline-block",
          }}
        />
        <span style={{ color: "rgba(255,255,255,0.75)", fontSize: size === "sm" ? "12px" : "13px", fontWeight: 500 }}>
          {selected.name}
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "10px",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          ˅
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: "0",
            backgroundColor: "#16161f",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "14px",
            padding: "8px",
            minWidth: "220px",
            zIndex: 999,
            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            animation: "fadeIn 0.15s ease",
          }}
        >
          {models.map((m) => {
            const isActive = m.id === selected.id;
            return (
              <button
                key={m.id}
                onClick={() => {
                  setSelected(m);
                  setOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "none",
                  backgroundColor: isActive ? "rgba(79,70,229,0.1)" : "transparent",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {m.icon}
                <div style={{ flex: 1, textAlign: "left" }}>
                  <p style={{ color: "#ffffff", fontSize: "14px", fontWeight: 600, margin: 0 }}>{m.name}</p>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "11px", margin: 0 }}>{m.desc}</p>
                </div>
                {isActive && (
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22c55e" }} />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
