"use client";

import { useWishlist } from "./WishlistContext";
import { HeartIcon } from "./icons";

export default function WishlistButton({ slug, className = "", size = "h-4 w-4" }) {
  const { has, toggle } = useWishlist();
  const active = has(slug);
  return (
    <button
      type="button"
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={active}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      className={`grid place-items-center rounded-full bg-white/90 shadow-card transition-colors ${
        active ? "text-cta" : "text-muted hover:text-cta"
      } ${className}`}
    >
      <HeartIcon className={size} fill={active ? "currentColor" : "none"} />
    </button>
  );
}
