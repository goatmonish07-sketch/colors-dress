"use client";

import Link from "next/link";
import { useWishlist } from "../../components/WishlistContext";
import ProductCard from "../../components/ProductCard";
import { products } from "../../lib/products";

export default function WishlistPage() {
  const { slugs, ready } = useWishlist();
  const items = products.filter((p) => slugs.includes(p.slug));

  return (
    <div className="shell py-4">
      <h1 className="mb-4 font-display text-xl font-bold text-ink">
        My Wishlist <span className="text-sm font-normal text-muted">({items.length})</span>
      </h1>

      {ready && items.length === 0 ? (
        <div className="mx-auto max-w-sm rounded-md bg-white p-10 text-center shadow-card">
          <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-brand-light text-brand">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />
            </svg>
          </div>
          <h2 className="font-display text-lg font-bold text-ink">Your wishlist is empty</h2>
          <p className="mt-1 text-sm text-muted">Tap the heart on any product to save it here.</p>
          <Link href="/products?category=all-stock" className="btn-cta mt-5">Start Shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
