export const API_BASE_URL = "https://api.quizquestion.ai";

export type ApiErrorDetails = Record<string, string[] | string> | null;

export class ApiError extends Error {
  details: ApiErrorDetails;

  constructor(message: string, details: ApiErrorDetails = null) {
    super(message);
    this.details = details;
  }
}

async function request<T>(path: string, body: Record<string, unknown>): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => null);
  if (!response.ok || data?.success === false) {
    throw new ApiError(data?.message || "Request failed", data?.data || null);
  }

  return data as T;
}

export type AuthTokens = {
  access: string;
  refresh?: string;
};

export type SignupResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data?: unknown;
};

export type VerifyOtpResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    access: string;
    refresh: string;
    user: {
      id: string;
      email: string;
      role?: string;
    };
  };
};

export type LoginResponse = VerifyOtpResponse;

export type ForgotPasswordResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data?: {
    email?: string;
  };
};

export type ResetVerifyOtpResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    secret_key: string;
  };
};

export type ResetPasswordResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data?: Record<string, never>;
};

export function signup(email: string, password: string) {
  return request<SignupResponse>("/auth/signup/", { email, password });
}

export function verifyOtp(email: string, otpCode: string) {
  return request<VerifyOtpResponse>("/auth/verify-otp/", {
    email,
    otp_code: otpCode,
  });
}

export function login(email: string, password: string) {
  return request<LoginResponse>("/auth/login/", { email, password });
}

export function forgotPassword(email: string) {
  return request<ForgotPasswordResponse>("/auth/forgot-password/", { email });
}

export function verifyResetOtp(email: string, otpCode: string) {
  return request<ResetVerifyOtpResponse>("/auth/new/verify-otp/", {
    email,
    otp_code: otpCode,
  });
}

export function resetPassword(email: string, secretKey: string, newPassword: string) {
  return request<ResetPasswordResponse>("/auth/new/reset-password/", {
    user_email: email,
    secret_key: secretKey,
    new_password: newPassword,
  });
}
