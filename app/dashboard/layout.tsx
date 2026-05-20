"use client";
import { useState } from "react";
import Sidebar from "./_components/Sidebar";
import TopNavbar from "./_components/TopNavbar";
import LogoutModal from "./_components/LogoutModal";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#0A0A0F" }}>
      <Sidebar onLogout={() => setShowLogoutModal(true)} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <TopNavbar />
        <main style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
          {children}
        </main>
      </div>
      {showLogoutModal && (
        <LogoutModal onClose={() => setShowLogoutModal(false)} />
      )}
    </div>
  );
}
