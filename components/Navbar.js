"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import { categories } from "../lib/products";
import { SearchIcon, CartIcon, UserIcon, HeartIcon } from "./icons";

export default function Navbar() {
  const { count } = useCart();
  const { count: wish } = useWishlist();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-nav">
      {/* Top strip */}
      <div className="bg-brand text-white">
        <div className="shell flex h-8 items-center justify-between text-xs">
          <span className="hidden sm:block">Free shipping on orders above ₹999</span>
          <div className="flex items-center gap-4">
            <Link href="/track" className="hover:underline">Track Order</Link>
            <Link href="/help" className="hover:underline">Help</Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="shell flex h-16 items-center gap-3">
        {/* Mobile menu button */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md text-ink md:hidden"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </span>
        </button>

        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-bold text-brand">COLORS</span>
          <span className="text-[10px] font-semibold tracking-[0.35em] text-muted">DRESS</span>
        </Link>

        {/* Search */}
        <form
          action="/products"
          className="ml-2 hidden flex-1 items-center rounded-sm bg-page px-3 md:flex"
        >
          <SearchIcon className="h-4 w-4 text-muted" />
          <input
            name="q"
            placeholder="Search for dresses, tops, lingerie & more"
            className="w-full bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-muted"
          />
        </form>

        <div className="ml-auto flex items-center gap-1 sm:gap-4">
          <Link href="/account" className="hidden items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-ink hover:text-brand sm:flex">
            <UserIcon className="h-5 w-5" />
            <span>Sign In</span>
          </Link>
          <Link href="/wishlist" className="relative flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-ink hover:text-brand">
            <span className="relative">
              <HeartIcon className="h-6 w-6" />
              {wish > 0 && (
                <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-cta px-1 text-[10px] font-bold text-white">
                  {wish}
                </span>
              )}
            </span>
            <span className="hidden sm:block">Wishlist</span>
          </Link>
          <Link href="/cart" className="relative flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-ink hover:text-brand">
            <span className="relative">
              <CartIcon className="h-6 w-6" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-cta px-1 text-[10px] font-bold text-white">
                  {count}
                </span>
              )}
            </span>
            <span className="hidden sm:block">Cart</span>
          </Link>
        </div>
      </div>

      {/* Mobile search */}
      <div className="shell pb-3 md:hidden">
        <form action="/products" className="flex items-center rounded-sm bg-page px-3">
          <SearchIcon className="h-4 w-4 text-muted" />
          <input
            name="q"
            placeholder="Search for products"
            className="w-full bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-muted"
          />
        </form>
      </div>

      {/* Category strip */}
      <nav className="hidden border-t border-line bg-white md:block">
        <div className="shell flex items-center gap-6 overflow-x-auto no-scrollbar text-sm">
          <span className="py-2.5 font-semibold text-brand">All Categories</span>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products?category=${c.slug}`}
              className="whitespace-nowrap py-2.5 font-medium text-ink transition-colors hover:text-brand"
            >
              {c.name}
            </Link>
          ))}
          <Link href="/products?offers=1" className="whitespace-nowrap py-2.5 font-semibold text-cta">
            Offers
          </Link>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <nav className="border-t border-line bg-white md:hidden">
          <div className="shell flex flex-col py-2 text-sm">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/products?category=${c.slug}`}
                onClick={() => setOpen(false)}
                className="py-2.5 font-medium text-ink"
              >
                {c.name}
              </Link>
            ))}
            <Link href="/products?offers=1" onClick={() => setOpen(false)} className="py-2.5 font-semibold text-cta">
              Offers
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
