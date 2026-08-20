"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "../../components/CartContext";
import { SHOP } from "../../lib/config";
import { ShieldIcon, RefreshIcon, TruckIcon, WhatsAppIcon } from "../../components/icons";

export default function CheckoutPage() {
  const { items, subtotal, discount, count, clear, ready } = useCart();
  const router = useRouter();
  const [pay, setPay] = useState("whatsapp");
  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "", pincode: "" });

  const shipping = subtotal > SHOP.freeShippingAbove || subtotal === 0 ? 0 : SHOP.shippingFee;
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

  const makeOrderId = () => "COL" + Math.floor(10000 + Math.random() * 89999);

  const saveOrder = (orderId, method) => {
    const order = {
      id: orderId,
      date: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
      status: "Processing",
      method,
      total,
      items: items.map((i) => ({ name: i.name, size: i.size, qty: i.qty, price: i.price, image: i.image })),
    };
    try {
      const raw = localStorage.getItem("colors-dress-orders");
      const list = raw ? JSON.parse(raw) : [];
      localStorage.setItem("colors-dress-orders", JSON.stringify([order, ...list]));
    } catch {}
  };

  const buildWhatsAppUrl = (orderId, method) => {
    const lines = items.map((i) => `• ${i.name} (${i.size}) x${i.qty} — ₹${i.price * i.qty}`);
    const payLine =
      method === "cod"
        ? "*Payment:* Cash on Delivery"
        : `*Payment:* UPI / WhatsApp Pay${SHOP.upiId ? ` (UPI: ${SHOP.upiId})` : ""}`;
    const text =
      `*New Order — Colors Dress*\nOrder ID: ${orderId}\n\n` +
      lines.join("\n") +
      `\n\n*Total: ₹${total}*\n${payLine}` +
      `\n\n*Deliver to:*\n${form.name}\n${form.address}, ${form.city} - ${form.pincode}\nPhone: ${form.phone}` +
      (method === "whatsapp" ? `\n\nPlease share the UPI ID / QR so I can pay. Thank you!` : "");
    return `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const placeOrder = () => {
    if (!filled) return;
    const orderId = makeOrderId();
    saveOrder(orderId, pay);
    // Always send the order to the shop's WhatsApp so you receive it instantly.
    window.open(buildWhatsAppUrl(orderId, pay), "_blank");
    clear();
    router.push(`/order-success?id=${orderId}&method=${pay}`);
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

  const methods = [
    {
      id: "whatsapp",
      title: "Pay on WhatsApp (UPI)",
      sub: "We'll share our UPI / QR on WhatsApp — pay instantly by UPI or WhatsApp Pay.",
      badge: "Recommended",
    },
    {
      id: "cod",
      title: "Cash on Delivery",
      sub: "Pay in cash when your order is delivered.",
      badge: "No advance",
    },
  ];

  return (
    <div className="shell py-4">
      <h1 className="mb-4 font-display text-xl font-bold text-ink">Checkout</h1>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {/* Address */}
          <section className="rounded-md bg-white p-4 shadow-card">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-muted">Delivery Address</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {field("name", "Full Name", { placeholder: "Your name" })}
              {field("phone", "Mobile Number", { placeholder: "+91 98765 43210", type: "tel" })}
              <div className="sm:col-span-2">{field("address", "Address", { placeholder: "House no, street, area" })}</div>
              {field("city", "City", { placeholder: "Bangalore" })}
              {field("pincode", "Pincode", { placeholder: "560001", inputMode: "numeric" })}
            </div>
          </section>

          {/* Payment */}
          <section className="rounded-md bg-white p-4 shadow-card">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-muted">Payment Method</h2>
            <div className="space-y-2">
              {methods.map((m) => (
                <label
                  key={m.id}
                  className={`flex cursor-pointer items-start gap-3 rounded-md border p-3 transition-colors ${
                    pay === m.id ? "border-brand bg-brand-light/40" : "border-line"
                  }`}
                >
                  <input
                    type="radio"
                    name="pay"
                    checked={pay === m.id}
                    onChange={() => setPay(m.id)}
                    className="mt-0.5 h-4 w-4 accent-brand"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-ink">{m.title}</span>
                      <span className="rounded-sm bg-brand-light px-2 py-0.5 text-[10px] font-semibold text-brand">{m.badge}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-muted">{m.sub}</p>
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* Assurances */}
          <div className="grid grid-cols-3 gap-2 rounded-md bg-white p-4 text-center text-xs text-muted shadow-card">
            <div className="flex flex-col items-center gap-1"><ShieldIcon className="h-5 w-5 text-brand" />Safe & Trusted</div>
            <div className="flex flex-col items-center gap-1"><RefreshIcon className="h-5 w-5 text-brand" />Easy Returns</div>
            <div className="flex flex-col items-center gap-1"><TruckIcon className="h-5 w-5 text-brand" />Fast Delivery</div>
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

          <button
            onClick={placeOrder}
            disabled={!filled}
            className={`mt-4 flex w-full items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 ${
              pay === "whatsapp" ? "bg-[#25D366]" : "bg-cta"
            }`}
          >
            {pay === "whatsapp" ? (
              <>
                <WhatsAppIcon className="h-5 w-5" /> Order &amp; Pay on WhatsApp
              </>
            ) : (
              <>Place Order · ₹{total}</>
            )}
          </button>

          <p className="mt-2 text-center text-xs text-muted">
            {!filled
              ? "Fill delivery details to continue"
              : pay === "whatsapp"
              ? "Your order opens in WhatsApp to confirm & pay."
              : "Pay in cash on delivery."}
          </p>
        </div>
      </div>
    </div>
  );
}
