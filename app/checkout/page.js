"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "../../components/CartContext";
import { ShieldIcon, RefreshIcon, TruckIcon, WhatsAppIcon } from "../../components/icons";

// Replace with the shop's real WhatsApp business number (country code, no +).
const WHATSAPP_NUMBER = "919876543210";

const PAYMENTS = [
  ["upi", "UPI"],
  ["card", "Credit / Debit Card"],
  ["netbanking", "Net Banking"],
  ["razorpay", "Razorpay UPI"],
  ["cod", "Pay on Delivery"],
];

export default function CheckoutPage() {
  const { items, subtotal, discount, count, clear, ready } = useCart();
  const router = useRouter();
  const [pay, setPay] = useState("upi");
  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "", pincode: "" });

  const shipping = subtotal > 999 || subtotal === 0 ? 0 : 40;
  const total = subtotal + shipping;
  const filled = form.name && form.phone && form.address && form.pincode;

  if (ready && items.length === 0) {
    return (
      <div className="shell py-16 text-center">
        <div className="mx-auto max-w-sm rounded-md bg-white p-10 shadow-card">
          <h1 className="font-display text-xl font-bold text-ink">Nothing to checkout</h1>
          <Link href="/products?category=all-stock" className="btn-cta mt-6">Start Shopping</Link>
        </div>
      </div>
    );
  }

  const placeOrder = () => {
    if (!filled) return;
    const orderId = "COL" + Math.floor(10000 + Math.random() * 89999);
    clear();
    router.push(`/order-success?id=${orderId}`);
  };

  const orderOnWhatsApp = () => {
    if (!filled) return;
    const lines = items.map((i) => `• ${i.name} (${i.size}) x${i.qty} — ₹${i.price * i.qty}`);
    const msg =
      `*New Order — Colors Dress*%0A%0A` +
      lines.join("%0A") +
      `%0A%0A*Total: ₹${total}*` +
      `%0A%0A*Deliver to:*%0A${form.name}%0A${form.address}, ${form.city} - ${form.pincode}%0APhone: ${form.phone}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const field = (name, label, extra = {}) => (
    <div>
      <label className="mb-1 block text-xs font-semibold text-muted">{label}</label>
      <input
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        className="w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm outline-none focus:border-brand"
        {...extra}
      />
    </div>
  );

  return (
    <div className="shell py-4">
      <h1 className="mb-4 font-display text-xl font-bold text-ink">Checkout</h1>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {/* Address */}
          <section className="rounded-md bg-white p-4 shadow-card">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-muted">Delivery Address</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {field("name", "Full Name", { placeholder: "John Doe" })}
              {field("phone", "Mobile Number", { placeholder: "+91 98765 43210", type: "tel" })}
              <div className="sm:col-span-2">{field("address", "Address", { placeholder: "House no, street, area" })}</div>
              {field("city", "City", { placeholder: "Bangalore" })}
              {field("pincode", "Pincode", { placeholder: "560001", inputMode: "numeric" })}
            </div>
          </section>

          {/* Payment */}
          <section className="rounded-md bg-white p-4 shadow-card">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-muted">Payment Options</h2>
            <div className="divide-y divide-line">
              {PAYMENTS.map(([id, label]) => (
                <label key={id} className="flex cursor-pointer items-center gap-3 py-3">
                  <input
                    type="radio"
                    name="pay"
                    checked={pay === id}
                    onChange={() => setPay(id)}
                    className="h-4 w-4 accent-brand"
                  />
                  <span className="text-sm font-medium text-ink">{label}</span>
                  {id === "cod" && (
                    <span className="ml-auto rounded-sm bg-brand-light px-2 py-0.5 text-xs font-semibold text-brand">
                      No advance
                    </span>
                  )}
                </label>
              ))}
            </div>
          </section>

          {/* Assurances */}
          <div className="grid grid-cols-3 gap-2 rounded-md bg-white p-4 text-center text-xs text-muted shadow-card">
            <div className="flex flex-col items-center gap-1"><ShieldIcon className="h-5 w-5 text-brand" />100% Secure Payments</div>
            <div className="flex flex-col items-center gap-1"><RefreshIcon className="h-5 w-5 text-brand" />Easy Returns</div>
            <div className="flex flex-col items-center gap-1"><TruckIcon className="h-5 w-5 text-brand" />Your Data is Safe</div>
          </div>
        </div>

        {/* Summary */}
        <div className="h-fit rounded-md bg-white p-4 shadow-card lg:sticky lg:top-24">
          <h2 className="mb-3 border-b border-line pb-2 text-sm font-bold uppercase tracking-wide text-muted">
            Order Summary
          </h2>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between"><dt className="text-muted">{count} items</dt><dd>₹{subtotal + discount}</dd></div>
            <div className="flex justify-between"><dt className="text-muted">Discount</dt><dd className="text-success">− ₹{discount}</dd></div>
            <div className="flex justify-between"><dt className="text-muted">Delivery</dt><dd className={shipping === 0 ? "text-success" : ""}>{shipping === 0 ? "FREE" : `₹${shipping}`}</dd></div>
            <div className="flex justify-between border-t border-line pt-2 text-base font-bold text-ink"><dt>Total</dt><dd>₹{total}</dd></div>
          </dl>

          <button onClick={placeOrder} disabled={!filled} className="btn-cta mt-4 w-full disabled:cursor-not-allowed disabled:opacity-50">
            Pay ₹{total}
          </button>
          <button
            onClick={orderOnWhatsApp}
            disabled={!filled}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-sm bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <WhatsAppIcon className="h-5 w-5" /> Order on WhatsApp
          </button>
          {!filled && <p className="mt-2 text-center text-xs text-muted">Fill delivery details to continue</p>}
        </div>
      </div>
    </div>
  );
}
