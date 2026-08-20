"use client";

import { useState } from "react";
import { TruckIcon } from "../../components/icons";

const STEPS = ["Order Placed", "Packed", "Shipped", "Out for Delivery", "Delivered"];

export default function TrackPage() {
  const [id, setId] = useState("");
  const [tracked, setTracked] = useState(null);

  const track = () => {
    if (!id.trim()) return;
    // Demo: derive a deterministic progress from the order id.
    const n = id.replace(/\D/g, "").split("").reduce((a, c) => a + Number(c), 0);
    setTracked({ id: id.trim().toUpperCase(), step: n % STEPS.length });
  };

  return (
    <div className="shell py-8">
      <div className="mx-auto max-w-lg rounded-md bg-white p-6 shadow-card">
        <div className="mb-4 flex items-center gap-2">
          <TruckIcon className="h-6 w-6 text-brand" />
          <h1 className="font-display text-xl font-bold text-ink">Track Your Order</h1>
        </div>
        <div className="flex gap-2">
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter Order ID (e.g. COL12345)"
            className="flex-1 rounded-sm border border-line px-3 py-2.5 text-sm outline-none focus:border-brand"
          />
          <button onClick={track} className="btn-cta">Track</button>
        </div>

        {tracked && (
          <div className="mt-6">
            <div className="mb-4 text-sm text-muted">
              Order <span className="font-semibold text-ink">#{tracked.id}</span>
            </div>
            <ol className="relative ml-3 border-l-2 border-line">
              {STEPS.map((s, i) => {
                const done = i <= tracked.step;
                return (
                  <li key={s} className="mb-5 ml-5">
                    <span
                      className={`absolute -left-[9px] grid h-4 w-4 place-items-center rounded-full ${
                        done ? "bg-brand" : "bg-line"
                      }`}
                    >
                      {done && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                    </span>
                    <div className={`text-sm font-medium ${done ? "text-ink" : "text-muted"}`}>{s}</div>
                    {i === tracked.step && <div className="text-xs text-brand">Current status</div>}
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
