"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { name: "Math", path: "math" },
  { name: "Statistics", path: "statistics" },
  { name: "Calculus", path: "calculus" },
  { name: "Physics", path: "physics" },
  { name: "Chemistry", path: "chemistry" },
  { name: "Biology", path: "biology" },
  { name: "Economics", path: "economics" },
  { name: "Literature", path: "literature" },
  { name: "Business", path: "business" },
  { name: "Writing", path: "writing" },
];

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div style={{ display: "flex", minHeight: "100%" }}>
      {/* Category Sidebar */}
      <div
        style={{
          width: "200px",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          padding: "20px 0",
          flexShrink: 0,
        }}
      >
        {categories.map((cat) => {
          const catPath = `/dashboard/resources/${cat.path}`;
          // Make "math" active if we are on the base page
          const isActive = pathname === catPath || (pathname === "/dashboard/resources" && cat.path === "math");
          return (
            <Link
              key={cat.path}
              href={catPath}
              style={{
                display: "block",
                width: "100%",
                padding: "12px 24px",
                background: isActive ? "rgba(79,70,229,0.12)" : "transparent",
                borderLeft: isActive ? "3px solid #4F46E5" : "3px solid transparent",
                color: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
                fontSize: "14px",
                fontWeight: isActive ? 600 : 400,
                cursor: "pointer",
                textAlign: "left",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              {cat.name}
            </Link>
          );
        })}
      </div>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}
