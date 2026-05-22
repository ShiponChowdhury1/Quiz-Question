"use client";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import AuthCard from "../_components/AuthCard";
import { AuthInput, AuthButton } from "../_components/AuthInput";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../_lib/api";
import {
  getPendingEmail,
  getResetSecret,
  clearPendingEmail,
  clearResetSecret,
  clearOtpFlow,
} from "../_lib/authStorage";

export default function SetNewPasswordPage() {
  const router = useRouter();
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  const resetMutation = useMutation({
    mutationFn: ({ email, secret, password }: { email: string; secret: string; password: string }) =>
      resetPassword(email, secret, password),
    onSuccess: () => {
      clearPendingEmail();
      clearResetSecret();
      clearOtpFlow();
      router.push("/password-changed");
    },
    onError: (err: Error) => {
      setError(err?.message || "Reset failed.");
    },
  });

  const handleSubmit = () => {
    setError("");
    if (!form.password || !form.confirmPassword) {
      setError("Please fill in both fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    const email = getPendingEmail();
    const secret = getResetSecret();
    if (!email || !secret) {
      setError("Reset session expired. Please try again.");
      return;
    }
    resetMutation.mutate({ email, secret, password: form.password });
  };

  return (
    <AuthCard>
      <h1 style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, textAlign: "center", margin: 0 }}>
        Set new password
      </h1>

      <div className="flex flex-col gap-5">
        <AuthInput
          label="New Password"
          type="password"
          placeholder="New Password"
          value={form.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, password: e.target.value })}
        />
        <AuthInput
          label="Confirm New Password"
          type="password"
          placeholder="Confirm New Password"
          value={form.confirmPassword}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, confirmPassword: e.target.value })}
        />
      </div>

      {error && (
        <p style={{ color: "#ff6b6b", fontSize: "13px", margin: "-10px 0 0", textAlign: "center" }}>
          {error}
        </p>
      )}

      <AuthButton onClick={handleSubmit} disabled={resetMutation.isPending}>
        {resetMutation.isPending ? "Changing..." : "Change Password"}
      </AuthButton>
    </AuthCard>
  );
}