"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SmartImage from "../../components/SmartImage";

const KEY = "colors-dress-orders";

const STATUS = {
  Processing: "bg-amber-100 text-amber-700",
  Shipped: "bg-blue-100 text-blue-700",
  Delivered: "bg-green-100 text-green-700",
};

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setOrders(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  if (ready && orders.length === 0) {
    return (
      <div className="shell py-16 text-center">
        <div className="mx-auto max-w-sm rounded-md bg-white p-10 shadow-card">
          <h1 className="font-display text-xl font-bold text-ink">No orders yet</h1>
          <p className="mt-2 text-sm text-muted">Your placed orders will appear here.</p>
          <Link href="/products?category=all-stock" className="btn-cta mt-6">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="shell py-4">
      <h1 className="mb-4 font-display text-xl font-bold text-ink">My Orders</h1>
      <div className="space-y-3">
        {orders.map((o) => (
          <div key={o.id} className="rounded-md bg-white p-4 shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
              <div>
                <div className="text-sm font-bold text-ink">Order #{o.id}</div>
                <div className="text-xs text-muted">{o.date}</div>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS[o.status] || STATUS.Processing}`}>
                {o.status}
              </span>
            </div>
            <div className="mt-3 space-y-2">
              {o.items.map((i, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-14 w-11 overflow-hidden rounded-sm bg-page">
                    <SmartImage src={i.image} alt={i.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 text-sm">
                    <div className="font-medium text-ink">{i.name}</div>
                    <div className="text-xs text-muted">Size {i.size} • Qty {i.qty}</div>
                  </div>
                  <div className="text-sm font-semibold text-ink">₹{i.price * i.qty}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
              <span className="text-sm text-muted">Total</span>
              <span className="text-base font-bold text-ink">₹{o.total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
