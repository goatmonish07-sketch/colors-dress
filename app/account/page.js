"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { UserIcon } from "../../components/icons";

const KEY = "colors-dress-user";

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [tab, setTab] = useState("login");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  const login = () => {
    const u = { name: name || "Guest", phone };
    localStorage.setItem(KEY, JSON.stringify(u));
    setUser(u);
  };
  const logout = () => {
    localStorage.removeItem(KEY);
    setUser(null);
    setOtpSent(false);
    setPhone("");
    setOtp("");
  };

  if (!ready) return <div className="shell py-16 text-center text-muted">Loading…</div>;

  // Logged-in dashboard
  if (user) {
    const links = [
      ["My Orders", "/orders", "Track & manage your orders"],
      ["My Wishlist", "/wishlist", "Your saved products"],
      ["My Cart", "/cart", "Items ready to checkout"],
      ["Help & Support", "/help", "Returns, shipping & contact"],
    ];
    return (
      <div className="shell py-6">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-4 rounded-md bg-white p-5 shadow-card">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-light text-brand">
              <UserIcon className="h-7 w-7" />
            </div>
            <div>
              <div className="text-lg font-bold text-ink">Hello, {user.name}</div>
              <div className="text-sm text-muted">{user.phone || "Colors Dress member"}</div>
            </div>
            <button onClick={logout} className="ml-auto rounded-sm border border-line px-4 py-2 text-sm font-semibold text-ink hover:border-brand">
              Logout
            </button>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {links.map(([label, href, sub]) => (
              <Link key={label} href={href} className="rounded-md bg-white p-4 shadow-card transition-shadow hover:shadow-hover">
                <div className="font-semibold text-ink">{label}</div>
                <div className="text-sm text-muted">{sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Login / Signup form
  return (
    <div className="shell py-8">
      <div className="mx-auto max-w-sm overflow-hidden rounded-md bg-white shadow-card">
        <div className="grid grid-cols-2 text-center text-sm font-semibold">
          <button
            onClick={() => setTab("login")}
            className={`py-3 ${tab === "login" ? "border-b-2 border-brand text-brand" : "text-muted"}`}
          >
            Login
          </button>
          <button
            onClick={() => setTab("signup")}
            className={`py-3 ${tab === "signup" ? "border-b-2 border-brand text-brand" : "text-muted"}`}
          >
            Signup
          </button>
        </div>

        <div className="p-6">
          {tab === "signup" && (
            <div className="mb-3">
              <label className="mb-1 block text-xs font-semibold text-muted">Full Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-sm border border-line px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>
          )}

          <label className="mb-1 block text-xs font-semibold text-muted">Mobile Number</label>
          <div className="flex items-center rounded-sm border border-line focus-within:border-brand">
            <span className="px-3 text-sm text-muted">+91</span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
              inputMode="numeric"
              placeholder="98765 43210"
              className="w-full bg-transparent py-2.5 pr-3 text-sm outline-none"
            />
          </div>

          {!otpSent ? (
            <button
              onClick={() => phone.length === 10 && setOtpSent(true)}
              disabled={phone.length !== 10}
              className="btn-cta mt-4 w-full disabled:opacity-50"
            >
              Send OTP
            </button>
          ) : (
            <>
              <label className="mb-1 mt-4 block text-xs font-semibold text-muted">Enter OTP</label>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                inputMode="numeric"
                placeholder="Demo: type any 4–6 digits"
                className="w-full rounded-sm border border-line px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
              <button onClick={login} disabled={otp.length < 4} className="btn-cta mt-4 w-full disabled:opacity-50">
                Verify & Continue
              </button>
            </>
          )}

          <div className="my-5 flex items-center gap-3 text-xs text-muted">
            <span className="h-px flex-1 bg-line" /> or continue with <span className="h-px flex-1 bg-line" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={login} className="flex items-center justify-center gap-2 rounded-sm border border-line py-2.5 text-sm font-semibold hover:border-brand">
              <span className="text-base font-bold text-[#4285F4]">G</span> Google
            </button>
            <button onClick={login} className="flex items-center justify-center gap-2 rounded-sm border border-line py-2.5 text-sm font-semibold hover:border-brand">
              <span className="text-base font-bold text-[#1877F2]">f</span> Facebook
            </button>
          </div>

          <p className="mt-5 text-center text-[11px] text-muted">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="text-brand">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
