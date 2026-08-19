"use client";

import Link from "next/link";
import { useCart } from "../../components/CartContext";
import SmartImage from "../../components/SmartImage";

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal, mrpTotal, discount, count, ready } = useCart();
  const shipping = subtotal > 999 || subtotal === 0 ? 0 : 40;
  const total = subtotal + shipping;

  if (ready && items.length === 0) {
    return (
      <div className="shell py-16 text-center">
        <div className="mx-auto max-w-sm rounded-md bg-white p-10 shadow-card">
          <h1 className="font-display text-xl font-bold text-ink">Your cart is empty</h1>
          <p className="mt-2 text-sm text-muted">Looks like you haven’t added anything yet.</p>
          <Link href="/products?category=all-stock" className="btn-cta mt-6">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="shell py-4">
      <h1 className="mb-4 font-display text-xl font-bold text-ink">
        My Cart <span className="text-sm font-normal text-muted">({count} items)</span>
      </h1>

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Items */}
        <div className="space-y-3 lg:col-span-2">
          {items.map((i) => (
            <div key={i.key} className="flex gap-3 rounded-md bg-white p-3 shadow-card">
              <Link href={`/product/${i.slug}`} className="h-28 w-20 shrink-0 overflow-hidden rounded-sm bg-page">
                <SmartImage src={i.image} alt={i.name} className="h-full w-full object-cover" />
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                  <Link href={`/product/${i.slug}`} className="text-sm font-medium text-ink hover:text-brand">
                    {i.name}
                  </Link>
                  <button onClick={() => removeItem(i.key)} className="text-xs font-semibold text-muted hover:text-cta">
                    Remove
                  </button>
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-muted">
                  <span
                    className="inline-block h-3 w-3 rounded-full border border-line"
                    style={{ background: i.color }}
                  />
                  Size: {i.size}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-base font-semibold text-ink">₹{i.price}</span>
                  <span className="text-xs text-muted line-through">₹{i.mrp}</span>
                </div>
                <div className="mt-auto flex items-center gap-3 pt-2">
                  <div className="inline-flex items-center rounded-sm border border-line">
                    <button onClick={() => updateQty(i.key, i.qty - 1)} className="px-2.5 py-1 text-muted">−</button>
                    <span className="w-8 text-center text-sm font-semibold">{i.qty}</span>
                    <button onClick={() => updateQty(i.key, i.qty + 1)} className="px-2.5 py-1 text-muted">+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Link href="/products?category=all-stock" className="inline-block text-sm font-semibold text-brand hover:underline">
            ← Continue Shopping
          </Link>
        </div>

        {/* Summary */}
        <div className="h-fit rounded-md bg-white p-4 shadow-card lg:sticky lg:top-24">
          <h2 className="mb-3 border-b border-line pb-2 text-sm font-bold uppercase tracking-wide text-muted">
            Price Details
          </h2>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Total MRP</dt>
              <dd className="text-ink">₹{mrpTotal}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Discount</dt>
              <dd className="text-success">− ₹{discount}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Delivery Charges</dt>
              <dd className={shipping === 0 ? "text-success" : "text-ink"}>
                {shipping === 0 ? "FREE" : `₹${shipping}`}
              </dd>
            </div>
            <div className="flex justify-between border-t border-line pt-2 text-base font-bold text-ink">
              <dt>Total Amount</dt>
              <dd>₹{total}</dd>
            </div>
          </dl>
          {discount > 0 && (
            <p className="mt-2 text-xs font-semibold text-success">
              You will save ₹{discount} on this order
            </p>
          )}
          <Link href="/checkout" className="btn-cta mt-4 w-full">Place Order</Link>
        </div>
      </div>
    </div>
  );
}
