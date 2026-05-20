"use client";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthCard from "../_components/AuthCard";
import { AuthInput, AuthButton } from "../_components/AuthInput";

export default function SignInPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = () => {
    // API call here
    router.push("/dashboard");
  };

  return (
    <AuthCard>
      <h1
        style={{
          color: "#ffffff",
          fontSize: "22px",
          fontWeight: 700,
          textAlign: "center",
          margin: 0,
        }}
      >
        Welcome back
      </h1>

      <div className="flex flex-col gap-5">
        <AuthInput
          label="Email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, email: e.target.value })}
        />

        <div className="flex flex-col gap-1">
          <AuthInput
            label="Password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, password: e.target.value })}
          />
          {/* Forgot Password - right aligned */}
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "13px",
                cursor: "pointer",
                marginTop: "6px",
                textDecoration: "underline",
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.color = "#7b68ee";
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.color = "rgba(255,255,255,0.4)";
              }}
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </div>

      <AuthButton onClick={handleSubmit}>Sign In</AuthButton>

      {/* Divider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          margin: "-10px 0",
        }}
      >
        <div
          style={{
            flex: 1,
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
        />
        <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px" }}>
          or
        </span>
        <div
          style={{
            flex: 1,
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.08)",
          }}
        />
      </div>

      <p
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.5)",
          fontSize: "13px",
          margin: 0,
        }}
      >
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          style={{ color: "#7b68ee", cursor: "pointer", fontWeight: 500, textDecoration: "none" }}
        >
          Sign Up
        </Link>
      </p>
    </AuthCard>
  );
}