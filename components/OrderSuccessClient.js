"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function OrderSuccessClient() {
  const params = useSearchParams();
  const id = params.get("id") || "COL00000";
  const method = params.get("method");

  return (
    <div className="shell py-16 text-center">
      <div className="mx-auto max-w-md rounded-md bg-white p-10 shadow-card">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-success/10">
          <svg viewBox="0 0 24 24" className="h-9 w-9 text-success" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m8 12 3 3 5-6" />
          </svg>
        </div>
        <h1 className="mt-5 font-display text-2xl font-bold text-ink">Order Placed Successfully!</h1>
        <p className="mt-2 text-sm text-muted">Thank you for shopping with Colors Dress.</p>

        <div className="mt-5 rounded-md border border-dashed border-brand/40 bg-brand-light/50 p-4">
          <div className="text-xs text-muted">Order ID</div>
          <div className="text-lg font-bold text-brand">#{id}</div>
        </div>

        <p className="mt-4 text-sm text-ink/80">
          {method === "cod"
            ? "Your order is confirmed. Please keep the amount ready — pay in cash on delivery."
            : "Your order has opened in WhatsApp. Send us the message to confirm, and we'll share our UPI / QR to complete payment."}
        </p>

        <div className="mt-6 flex flex-col gap-2">
          <Link href="/products?category=all-stock" className="btn-cta w-full">Continue Shopping</Link>
          <Link href="/orders" className="btn-outline w-full">View My Orders</Link>
        </div>
      </div>
    </div>
  );
}
