import Link from "next/link";

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
    <footer className="mt-10 border-t border-line bg-white">
      <div className="shell grid grid-cols-2 gap-8 py-10 md:grid-cols-5">
        <div className="col-span-2">
          <div className="font-display text-2xl font-bold text-brand">COLORS DRESS</div>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Ladies dresses, inners & lingerie for every day. Wide range, best quality,
            easy returns and secure payments.
          </p>
          <div className="mt-4 flex gap-3 text-xs text-muted">
            <span className="chip">UPI</span>
            <span className="chip">Cards</span>
            <span className="chip">COD</span>
            <span className="chip">Razorpay</span>
          </div>
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
