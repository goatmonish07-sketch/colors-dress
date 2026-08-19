"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import { products, categories, categoryName } from "../lib/products";

const ALL_SIZES = ["S", "M", "L", "XL", "XXL"];
const ALL_COLORS = [
  ["#212121", "Black"],
  ["#C2185B", "Pink"],
  ["#8E24AA", "Purple"],
  ["#26A69A", "Teal"],
  ["#FBC02D", "Yellow"],
  ["#F57C00", "Orange"],
  ["#1565C0", "Blue"],
];

export default function ProductsClient() {
  const params = useSearchParams();
  const category = params.get("category") || "all-stock";
  const offers = params.get("offers");
  const q = (params.get("q") || "").toLowerCase();

  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [sort, setSort] = useState("popular");
  const [mobileFilters, setMobileFilters] = useState(false);

  const toggle = (val, list, setList) =>
    setList(list.includes(val) ? list.filter((v) => v !== val) : [...list, val]);

  const results = useMemo(() => {
    let list = products.filter((p) => {
      if (category !== "all-stock" && p.category !== category) return false;
      if (q && !p.name.toLowerCase().includes(q) && !p.category.includes(q)) return false;
      if (offers && (p.mrp - p.price) / p.mrp < 0.35) return false;
      if (sizes.length && !p.sizes.some((s) => sizes.includes(s))) return false;
      if (colors.length && !p.colors.some((c) => colors.includes(c))) return false;
      if (p.price > maxPrice) return false;
      return true;
    });
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, q, offers, sizes, colors, maxPrice, sort]);

  const title = q ? `Results for "${q}"` : offers ? "Offers" : categoryName(category);

  const Filters = () => (
    <div className="space-y-6">
      <div>
        <h4 className="mb-2 text-sm font-semibold text-ink">Category</h4>
        <ul className="space-y-1.5 text-sm">
          {categories.map((c) => (
            <li key={c.slug}>
              <a
                href={`/products?category=${c.slug}`}
                className={`hover:text-brand ${category === c.slug ? "font-semibold text-brand" : "text-ink"}`}
              >
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-semibold text-ink">Size</h4>
        <div className="flex flex-wrap gap-2">
          {ALL_SIZES.map((s) => (
            <button
              key={s}
              onClick={() => toggle(s, sizes, setSizes)}
              className={`h-8 min-w-8 rounded-sm border px-2 text-xs font-medium transition-colors ${
                sizes.includes(s) ? "border-brand bg-brand text-white" : "border-line bg-white text-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-semibold text-ink">Color</h4>
        <div className="flex flex-wrap gap-2">
          {ALL_COLORS.map(([hex, name]) => (
            <button
              key={hex}
              title={name}
              aria-label={name}
              onClick={() => toggle(hex, colors, setColors)}
              className={`h-7 w-7 rounded-full border-2 transition ${
                colors.includes(hex) ? "border-brand ring-2 ring-brand/30" : "border-white shadow-card"
              }`}
              style={{ background: hex }}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-semibold text-ink">Price</h4>
        <input
          type="range"
          min="0"
          max="3000"
          step="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-brand"
        />
        <div className="mt-1 flex justify-between text-xs text-muted">
          <span>₹0</span>
          <span>Up to ₹{maxPrice}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="shell py-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h1 className="font-display text-xl font-bold text-ink">{title}</h1>
          <p className="text-xs text-muted">{results.length} items</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileFilters(true)}
            className="rounded-sm border border-line bg-white px-3 py-2 text-sm font-medium md:hidden"
          >
            Filter
          </button>
          <label className="flex items-center gap-2 text-sm text-muted">
            Sort by
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-sm border border-line bg-white px-2 py-2 text-sm text-ink outline-none"
            >
              <option value="popular">Popular</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </label>
        </div>
      </div>

      <div className="flex gap-5">
        {/* Sidebar */}
        <aside className="hidden w-56 shrink-0 rounded-md bg-white p-4 shadow-card md:block">
          <h3 className="mb-4 border-b border-line pb-2 text-sm font-bold uppercase tracking-wide text-muted">
            Filter By
          </h3>
          <Filters />
        </aside>

        {/* Grid */}
        <div className="flex-1">
          {results.length === 0 ? (
            <div className="rounded-md bg-white p-12 text-center text-muted shadow-card">
              No products match your filters.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {results.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter sheet */}
      {mobileFilters && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFilters(false)} />
          <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto rounded-t-xl bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-bold text-ink">Filters</h3>
              <button onClick={() => setMobileFilters(false)} className="text-sm font-semibold text-brand">
                Done
              </button>
            </div>
            <Filters />
            <button
              onClick={() => setMobileFilters(false)}
              className="btn-cta mt-6 w-full"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
