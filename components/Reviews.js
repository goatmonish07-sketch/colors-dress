"use client";

import { useEffect, useMemo, useState } from "react";
import { StarIcon } from "./icons";

const SEED = [
  { name: "Priya S.", rating: 5, text: "Loved the fabric and fit! True to size and the colour is exactly like the photo.", ago: "1 week ago" },
  { name: "Anjali M.", rating: 5, text: "Beautiful piece, got so many compliments. Delivery was quick too.", ago: "2 weeks ago" },
  { name: "Deepa R.", rating: 4, text: "Good quality for the price. Stitching is neat, just a little loose so size down if unsure.", ago: "3 weeks ago" },
  { name: "Sneha K.", rating: 5, text: "Very comfortable and the material is soft. Totally worth it.", ago: "1 month ago" },
  { name: "Meena T.", rating: 4, text: "Nice product and value for money. Will order again.", ago: "1 month ago" },
  { name: "Kavya P.", rating: 5, text: "Perfect for festive wear. The colour is rich and premium looking.", ago: "2 months ago" },
];

function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function Stars({ value, size = "h-3.5 w-3.5" }) {
  return (
    <span className="inline-flex">
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon key={n} className={`${size} ${n <= value ? "text-amber-400" : "text-line"}`} />
      ))}
    </span>
  );
}

export default function Reviews({ product }) {
  const key = `colors-dress-reviews-${product.slug}`;
  const [userReviews, setUserReviews] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", rating: 5, text: "" });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) setUserReviews(JSON.parse(raw));
    } catch {}
  }, [key]);

  // Stable 3 seeded reviews for this product.
  const seeded = useMemo(() => {
    const start = hash(product.slug) % SEED.length;
    return [0, 1, 2].map((i) => SEED[(start + i) % SEED.length]);
  }, [product.slug]);

  const all = [...userReviews, ...seeded];

  // Rating distribution (approximate, based on the product's average).
  const dist = useMemo(() => {
    const total = product.ratingCount;
    const pct = product.rating >= 4.5 ? [70, 20, 6, 2, 2] : [55, 27, 10, 5, 3];
    return [5, 4, 3, 2, 1].map((star, i) => ({ star, count: Math.round((pct[i] / 100) * total), pct: pct[i] }));
  }, [product]);

  const submit = () => {
    if (!form.name.trim() || !form.text.trim()) return;
    const review = { name: form.name.trim(), rating: form.rating, text: form.text.trim(), ago: "Just now" };
    const next = [review, ...userReviews];
    setUserReviews(next);
    try { localStorage.setItem(key, JSON.stringify(next)); } catch {}
    setForm({ name: "", rating: 5, text: "" });
    setOpen(false);
  };

  return (
    <section className="shell mt-8">
      <div className="rounded-md bg-white p-5 shadow-card">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-bold text-ink">Ratings &amp; Reviews</h2>
          <button onClick={() => setOpen((v) => !v)} className="btn-outline px-4 py-2 text-xs">
            Write a Review
          </button>
        </div>

        {/* Summary */}
        <div className="flex flex-col gap-5 border-b border-line pb-5 sm:flex-row sm:items-center">
          <div className="flex flex-col items-center justify-center sm:w-40">
            <div className="text-4xl font-bold text-ink">{product.rating.toFixed(1)}</div>
            <Stars value={Math.round(product.rating)} size="h-4 w-4" />
            <div className="mt-1 text-xs text-muted">{product.ratingCount.toLocaleString("en-IN")} ratings</div>
          </div>
          <div className="flex-1 space-y-1.5">
            {dist.map((d) => (
              <div key={d.star} className="flex items-center gap-2 text-xs">
                <span className="flex w-6 items-center gap-0.5 text-muted">{d.star}<StarIcon className="h-3 w-3 text-amber-400" /></span>
                <span className="h-2 flex-1 overflow-hidden rounded-full bg-page">
                  <span className="block h-full rounded-full bg-amber-400" style={{ width: `${d.pct}%` }} />
                </span>
                <span className="w-10 text-right text-muted">{d.count.toLocaleString("en-IN")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Write form */}
        {open && (
          <div className="mt-4 rounded-md border border-line p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-sm font-semibold text-ink">Your rating:</span>
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} onClick={() => setForm({ ...form, rating: n })} aria-label={`${n} star`}>
                  <StarIcon className={`h-6 w-6 ${n <= form.rating ? "text-amber-400" : "text-line"}`} />
                </button>
              ))}
            </div>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="mb-2 w-full rounded-sm border border-line px-3 py-2 text-sm outline-none focus:border-brand"
            />
            <textarea
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
              placeholder="Share your experience with this product…"
              rows={3}
              className="w-full rounded-sm border border-line px-3 py-2 text-sm outline-none focus:border-brand"
            />
            <div className="mt-2 flex gap-2">
              <button onClick={submit} className="btn-cta px-5 py-2 text-xs">Submit Review</button>
              <button onClick={() => setOpen(false)} className="btn-outline px-5 py-2 text-xs">Cancel</button>
            </div>
          </div>
        )}

        {/* List */}
        <div className="mt-4 divide-y divide-line">
          {all.map((r, i) => (
            <div key={i} className="py-4">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-sm bg-success px-1.5 py-0.5 text-[11px] font-semibold text-white">
                  {r.rating}.0 <StarIcon className="h-2.5 w-2.5" />
                </span>
                <span className="text-sm font-semibold text-ink">{r.name}</span>
                <span className="ml-auto text-xs text-muted">{r.ago}</span>
              </div>
              <p className="mt-1.5 text-sm text-ink/80">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
