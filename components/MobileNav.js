"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
import { CartIcon, UserIcon, HeartIcon, SearchIcon } from "./icons";

function HomeIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h14V10" />
    </svg>
  );
}

export default function MobileNav() {
  const path = usePathname();
  const { count } = useCart();
  const { count: wish } = useWishlist();

  const items = [
    { href: "/", label: "Home", Icon: HomeIcon, match: (p) => p === "/" },
    { href: "/products?category=all-stock", label: "Categories", Icon: SearchIcon, match: (p) => p.startsWith("/products") },
    { href: "/wishlist", label: "Wishlist", Icon: HeartIcon, badge: wish, match: (p) => p === "/wishlist" },
    { href: "/cart", label: "Cart", Icon: CartIcon, badge: count, match: (p) => p === "/cart" },
    { href: "/account", label: "Account", Icon: UserIcon, match: (p) => p === "/account" || p === "/orders" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-white pb-[env(safe-area-inset-bottom)] md:hidden">
      <ul className="grid grid-cols-5">
        {items.map(({ href, label, Icon, badge, match }) => {
          const active = match(path);
          return (
            <li key={label}>
              <Link
                href={href}
                className={`flex flex-col items-center gap-0.5 py-2 text-[10px] font-medium ${
                  active ? "text-brand" : "text-muted"
                }`}
              >
                <span className="relative">
                  <Icon className="h-5 w-5" />
                  {badge > 0 && (
                    <span className="absolute -right-2 -top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-cta px-1 text-[9px] font-bold text-white">
                      {badge}
                    </span>
                  )}
                </span>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
