"use client";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthCard from "../_components/AuthCard";
import { AuthInput, AuthButton } from "../_components/AuthInput";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../_lib/api";
import { setPendingEmail, setOtpFlow } from "../_lib/authStorage";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const forgotMutation = useMutation({
    mutationFn: (value: string) => forgotPassword(value),
    onSuccess: () => {
      setPendingEmail(email);
      setOtpFlow("reset");
      router.push("/verify-otp");
    },
    onError: (err: Error) => {
      setError(err?.message || "Failed to send code.");
    },
  });

  const handleSubmit = () => {
    setError("");
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    forgotMutation.mutate(email);
  };

  return (
    <AuthCard>
      <div className="text-center flex flex-col gap-2">
        <h1 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, margin: 0 }}>
          Forgot Password
        </h1>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", margin: 0 }}>
          Enter your email address to receive a verification code.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
      </div>

      {error && (
        <p style={{ color: "#ff6b6b", fontSize: "13px", margin: "-10px 0 0", textAlign: "center" }}>
          {error}
        </p>
      )}

      <AuthButton onClick={handleSubmit} disabled={forgotMutation.isPending}>
        {forgotMutation.isPending ? "Sending..." : "Send Code"}
      </AuthButton>

      <p
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.5)",
          fontSize: "13px",
          margin: 0,
        }}
      >
        Remembered your password?{" "}
        <Link
          href="/signin"
          style={{ color: "#7b68ee", cursor: "pointer", fontWeight: 500, textDecoration: "none" }}
        >
          Sign In
        </Link>
      </p>
    </AuthCard>
  );
}
