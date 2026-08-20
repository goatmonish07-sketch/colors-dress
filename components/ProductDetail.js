"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "./CartContext";
import { discountPct } from "../lib/products";
import { StarIcon, TruckIcon, ShieldIcon, RefreshIcon } from "./icons";
import SmartImage from "./SmartImage";
import WishlistButton from "./WishlistButton";

export default function ProductDetail({ product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [qty, setQty] = useState(1);
  const off = discountPct(product);

  const add = () => addItem(product, { size, color, qty });
  const buyNow = () => {
    add();
    router.push("/checkout");
  };

  return (
    <div className="shell py-4">
      {/* Breadcrumb */}
      <nav className="mb-3 flex items-center gap-1.5 text-xs text-muted">
        <Link href="/" className="hover:text-brand">Home</Link>
        <span>/</span>
        <Link href={`/products?category=${product.category}`} className="hover:text-brand capitalize">
          {product.category.replace("-", " ")}
        </Link>
        <span>/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Gallery */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-2">
            {product.images.map((src, i) => (
              <button
                key={i}
                onMouseEnter={() => setActiveImg(i)}
                onClick={() => setActiveImg(i)}
                className={`h-16 w-14 overflow-hidden rounded-sm border ${
                  activeImg === i ? "border-brand" : "border-line"
                }`}
              >
                <SmartImage src={src} alt={`${product.name} view ${i + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <div className="relative flex-1 overflow-hidden rounded-md bg-page">
            <SmartImage
              src={product.images[activeImg]}
              alt={product.name}
              className="aspect-[3/4] w-full object-cover"
            />
            <WishlistButton slug={product.slug} className="absolute right-3 top-3 h-9 w-9" size="h-5 w-5" />
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">{product.name}</h1>

          <div className="mt-2 flex items-center gap-2">
            <span className="flex items-center gap-1 rounded-sm bg-success px-1.5 py-0.5 text-xs font-semibold text-white">
              {product.rating.toFixed(1)} <StarIcon className="h-3 w-3" />
            </span>
            <span className="text-sm text-muted">{product.ratingCount} Ratings</span>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <span className="text-2xl font-bold text-ink">₹{product.price}</span>
            <span className="text-base text-muted line-through">₹{product.mrp}</span>
            <span className="text-base font-semibold text-success">{off}% OFF</span>
          </div>
          <p className="text-xs text-muted">Inclusive of all taxes</p>

          {/* Color */}
          <div className="mt-5">
            <div className="mb-2 text-sm font-semibold text-ink">
              Color: <span className="font-normal text-muted">Selected</span>
            </div>
            <div className="flex gap-2">
              {product.colors.map((c) => (
                <button
                  key={c}
                  aria-label={`Color ${c}`}
                  onClick={() => setColor(c)}
                  className={`h-8 w-8 rounded-full border-2 ${
                    color === c ? "border-brand ring-2 ring-brand/30" : "border-white shadow-card"
                  }`}
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-ink">Size</span>
              <button className="text-xs font-semibold text-brand">Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-10 min-w-10 rounded-sm border px-3 text-sm font-medium transition-colors ${
                    size === s ? "border-brand bg-brand-light text-brand" : "border-line bg-white text-ink"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Qty */}
          <div className="mt-5">
            <div className="mb-2 text-sm font-semibold text-ink">Quantity</div>
            <div className="inline-flex items-center rounded-sm border border-line">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2 text-lg text-muted">−</button>
              <span className="w-10 text-center text-sm font-semibold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2 text-lg text-muted">+</button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <button onClick={add} className="btn-outline flex-1">Add to Cart</button>
            <button onClick={buyNow} className="btn-cta flex-1">Buy Now</button>
          </div>

          {/* Delivery */}
          <div className="mt-5 rounded-md border border-line p-3 text-sm">
            <div className="flex items-center gap-2 text-ink">
              <TruckIcon className="h-5 w-5 text-brand" />
              Deliver to <span className="font-semibold">560001</span>
              <button className="ml-auto text-xs font-semibold text-brand">Change</button>
            </div>
            <p className="mt-1 text-xs text-muted">Delivery by 3–5 days • Free above ₹999</p>
          </div>

          {/* Assurances */}
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-muted">
            <div className="flex flex-col items-center gap-1">
              <ShieldIcon className="h-5 w-5 text-brand" />100% Original
            </div>
            <div className="flex flex-col items-center gap-1">
              <RefreshIcon className="h-5 w-5 text-brand" />Easy Returns
            </div>
            <div className="flex flex-col items-center gap-1">
              <TruckIcon className="h-5 w-5 text-brand" />Secure Payments
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mt-8 rounded-md bg-white p-5 shadow-card">
        <h2 className="mb-2 font-display text-lg font-bold text-ink">Product Details</h2>
        <p className="text-sm text-ink/80">{product.description}</p>
        <ul className="mt-3 grid gap-1.5 text-sm text-ink/80 sm:grid-cols-2">
          {product.details.map((d) => (
            <li key={d} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
