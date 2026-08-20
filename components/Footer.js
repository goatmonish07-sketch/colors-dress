import Link from "next/link";
import { SHOP } from "../lib/config";

const cols = [
  {
    title: "Shop",
    links: [
      ["Dresses", "/products?category=dresses"],
      ["Inners & Lingerie", "/products?category=inners-lingerie"],
      ["Bottoms", "/products?category=bottoms"],
      ["Accessories", "/products?category=accessories"],
      ["All Stock", "/products?category=all-stock"],
    ],
  },
  {
    title: "Help",
    links: [
      ["Track Order", "/track"],
      ["Returns & Exchange", "/help"],
      ["Shipping Info", "/help"],
      ["Contact Us", "/help"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Colors Dress", "/about"],
      ["Terms & Conditions", "/terms"],
      ["Privacy Policy", "/privacy"],
      ["Careers", "/about"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-line bg-white pb-16 md:pb-0">
      <div className="shell grid grid-cols-2 gap-8 py-10 md:grid-cols-5">
        <div className="col-span-2">
          <div className="font-display text-2xl font-bold text-brand">COLORS DRESS</div>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Ladies dresses, inners & lingerie for every day. Wide range, best quality,
            easy returns and secure payments.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
            <span className="chip">WhatsApp Pay</span>
            <span className="chip">UPI</span>
            <span className="chip">Cash on Delivery</span>
          </div>
          <a
            href={`https://wa.me/${SHOP.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l2 1c.3.1.4.2.5.3.1.2.1.7-.1 1.2Z" /></svg>
            Chat &amp; Order on WhatsApp
          </a>
        </div>
        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
              {col.title}
            </h4>
            <ul className="space-y-2 text-sm text-ink">
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="hover:text-brand">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Colors Dress. All rights reserved.
      </div>
    </footer>
  );
}
