"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthCard from "../_components/AuthCard";
import { AuthInput, AuthButton } from "../_components/AuthInput";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../_lib/api";
import { setPendingEmail } from "../_lib/authStorage";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  const signupMutation = useMutation({
    mutationFn: ({ email, password }) => signup(email, password),
    onSuccess: () => {
      setPendingEmail(form.email);
      router.push("/verify-otp");
    },
    onError: (err) => {
      setError(err?.message || "Signup failed.");
    },
  });

  const handleSubmit = () => {
    setError("");
    if (!form.email || !form.password || !form.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    signupMutation.mutate({ email: form.email, password: form.password });
  };

  return (
    <AuthCard>
      <h1 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, textAlign: "center", margin: 0 }}>
        Create your account
      </h1>

      <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />

      <div className="flex flex-col gap-5">
        <AuthInput
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <AuthInput
          label="Password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <AuthInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        />
      </div>

      {error && (
        <p style={{ color: "#ff6b6b", fontSize: "13px", margin: "-10px 0 0", textAlign: "center" }}>
          {error}
        </p>
      )}

      <AuthButton onClick={handleSubmit} disabled={signupMutation.isPending}>
        {signupMutation.isPending ? "Creating..." : "Create Account"}
      </AuthButton>

      <div className="text-center" style={{ marginTop: "-10px" }}>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px", margin: "0 0 8px" }}>or</p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", margin: 0 }}>
          Already have an account?{" "}
          <Link
            href="/signin"
            style={{ color: "#7b68ee", cursor: "pointer", fontWeight: 500, textDecoration: "none" }}
          >
            Sign In
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}