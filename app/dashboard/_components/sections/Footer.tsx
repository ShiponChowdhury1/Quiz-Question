"use client";
import Link from "next/link";
const footerLinks: Record<string, string[]> = {
  Product: ["Features", "Pricing", "AI Models", "Mobile App"],
  Resources: ["Help Center", "Blog", "Tutorials", "API Docs"],
  Company: ["About Us", "Careers", "Contact", "Privacy Policy"],
};
export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "50px 40px 30px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px" }}>
        <div style={{ maxWidth: "280px" }}>
          <img src="/images/ai-logo.png" alt="Quiz Question AI" style={{ height: "38px", objectFit: "contain", marginBottom: "14px" }} />
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>Your AI-powered homework companion. Get instant help with any subject, anytime.</p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 style={{ color: "#ffffff", fontSize: "14px", fontWeight: 600, margin: "0 0 16px" }}>{title}</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {links.map((link) => (
                <Link key={link} href="#" style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", textDecoration: "none", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#ffffff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}>{link}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px", margin: 0 }}>© 2026 Quiz Question AI. All rights reserved.</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)" style={{ cursor: "pointer" }}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)" style={{ cursor: "pointer" }}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)" style={{ cursor: "pointer" }}><path d="M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.618-1.25.077.077 0 00-.079-.037A19.74 19.74 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.11 13.11 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.009c.12.099.246.198.373.292a.077.077 0 01-.006.127 12.3 12.3 0 01-1.873.892.076.076 0 00-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 00.084.028 19.84 19.84 0 006.002-3.03.077.077 0 00.031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" /></svg>
        </div>
      </div>
    </footer>
  );
}
