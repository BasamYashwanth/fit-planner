"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter an email address.");
      return;
    }
    if (!password) {
      setError("Please enter a password.");
      return;
    }
    // For now, just navigate to dashboard on submit
    router.push("/dashboard");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff" }}>
      <div style={{ width: "100%", maxWidth: 520, padding: "48px 36px", boxSizing: "border-box" }}>
        <div style={{ background: "#fff", borderRadius: 12, padding: "36px 32px", boxShadow: "0 6px 30px rgba(0,0,0,0.06)" }}>
          <h1 style={{ textAlign: "center", fontSize: 28, margin: 0, fontWeight: 600, marginBottom: 24 }}>Login to Fit Planner</h1>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 18 }}>
            <button
              type="button"
              onClick={() => {
                // Use next-auth to initiate the Google sign-in flow. Make sure server env vars are set:
                // GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET (and NEXTAUTH_URL if deploying).
                signIn('google', { callbackUrl: '/dashboard' });
              }}
              style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 18px", borderRadius: 9999, background: "#fff", border: "1px solid #e6e6e6", fontWeight: 500, cursor: "pointer" }}
            >
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" style={{ width: 18, height: 18 }} />
              <span>Continue with Google</span>
            </button>

            <button type="button" style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 18px", borderRadius: 9999, background: "#fff", border: "1px solid #e6e6e6", fontWeight: 500, cursor: "pointer" }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" style={{ width: 18, height: 18 }} />
              <span>Continue with Apple</span>
            </button>

            <button type="button" style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 18px", borderRadius: 9999, background: "#fff", border: "1px solid #e6e6e6", fontWeight: 500, cursor: "pointer" }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" style={{ width: 18, height: 18 }} />
              <span>Continue with Microsoft</span>
            </button>

            <button type="button" style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 18px", borderRadius: 9999, background: "#fff", border: "1px solid #e6e6e6", fontWeight: 500, cursor: "pointer" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.05.34 2.07.66 3.04a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.04-1.04a2 2 0 0 1 2.11-.45c.97.32 1.99.54 3.04.66A2 2 0 0 1 22 16.92z" fill="#000"/></svg>
              <span>Continue with phone</span>
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "18px 0", color: "#9ca3af" }}>
            <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
            <div style={{ whiteSpace: "nowrap", fontSize: 13 }}>OR</div>
            <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: 9999,
                  border: "2px solid #e5e7eb",
                  outline: "none",
                  fontSize: 15,
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.currentTarget.style.border = "2px solid #3b82f6")}
                onBlur={(e) => (e.currentTarget.style.border = "2px solid #e5e7eb")}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: 9999,
                  border: "2px solid #e5e7eb",
                  outline: "none",
                  fontSize: 15,
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.currentTarget.style.border = "2px solid #3b82f6")}
                onBlur={(e) => (e.currentTarget.style.border = "2px solid #e5e7eb")}
              />
            </div>
            {error && <div style={{ color: "#ef4444", marginBottom: 12 }}>{error}</div>}

            <button type="submit" style={{ width: "100%", background: "#0b0b0b", color: "#fff", padding: "12px 16px", borderRadius: 9999, border: "none", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Continue</button>
          </form>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 20, color: "#6b7280", fontSize: 13 }}>
            <a href="#" style={{ color: "#6b7280", textDecoration: "underline" }}>Terms of Use</a>
            <span style={{ color: "#d1d5db" }}>|</span>
            <a href="#" style={{ color: "#6b7280", textDecoration: "underline" }}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
