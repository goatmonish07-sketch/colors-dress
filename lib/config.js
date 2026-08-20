// ⚙️  Colors Dress shop settings — edit these with your real details.
export const SHOP = {
  // WhatsApp business number in international format, digits only (no +, spaces or dashes).
  // Example for India: "91" + 10-digit number  ->  "919876543210"
  whatsapp: "919994774460",

  // Shown in the footer / contact pages.
  phone: "+91 99947 74460",
  email: "support@colorsdress.example",
  instagram: "https://instagram.com/",

  // UPI id customers can pay to (optional). Shown on checkout & in the WhatsApp order.
  upiId: "colorsdress@upi",

  // Free delivery above this amount (₹); flat fee below it.
  freeShippingAbove: 999,
  shippingFee: 40,
};

// Coupon codes customers can apply at checkout. Edit / add your own.
//  type "pct"  -> off is a percentage (e.g. 10 = 10% off, capped by `max`)
//  type "flat" -> off is a flat ₹ amount
//  min -> minimum cart subtotal (₹) required to use the coupon
export const COUPONS = {
  WELCOME10: { type: "pct", off: 10, max: 200, min: 499, label: "10% off (max ₹200)" },
  FLAT100: { type: "flat", off: 100, min: 799, label: "₹100 off" },
  COLORS50: { type: "flat", off: 50, min: 399, label: "₹50 off" },
};

export function applyCoupon(code, subtotal) {
  const c = COUPONS[(code || "").trim().toUpperCase()];
  if (!c) return { ok: false, amount: 0, message: "Invalid coupon code" };
  if (subtotal < c.min) return { ok: false, amount: 0, message: `Add ₹${c.min - subtotal} more to use this code` };
  const amount = c.type === "pct" ? Math.min(Math.round((subtotal * c.off) / 100), c.max || Infinity) : c.off;
  return { ok: true, amount, message: `Applied ${c.label}` };
}
