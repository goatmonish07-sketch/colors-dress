"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SmartImage from "./SmartImage";
import { bannerImage } from "../lib/products";

const slides = [
  {
    tag: "NEW COLLECTION",
    title: "Stay Stylish\nEvery Day",
    subtitle: "Trendy outfits for every occasion",
    cta: "Shop Now",
    href: "/products?category=dresses",
    image: "https://loremflickr.com/900/700/dress,fashion?lock=801",
    fallback: bannerImage("dresses", "#EC407A", 0),
    from: "#FCE4EC",
    to: "#F8BBD0",
  },
  {
    tag: "FESTIVE EDIT",
    title: "Ethnic Kurtis\n& Gowns",
    subtitle: "Anarkalis, gowns & more",
    cta: "Explore",
    href: "/products?category=dresses",
    image: "https://loremflickr.com/900/700/gown,woman?lock=802",
    fallback: bannerImage("dresses", "#8E24AA", 1),
    from: "#F3E5F5",
    to: "#E1BEE7",
  },
  {
    tag: "EVERYDAY ESSENTIALS",
    title: "Inners &\nLoungewear",
    subtitle: "Soft, comfortable, all-day wear",
    cta: "Shop Inners",
    href: "/products?category=inners-lingerie",
    image: "https://loremflickr.com/900/700/clothing,cotton?lock=803",
    fallback: bannerImage("inners-lingerie", "#26A69A", 2),
    from: "#E0F2F1",
    to: "#B2DFDB",
  },
];

export default function HeroBanner() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  const s = slides[i];

  return (
    <section className="shell pt-4">
      <div
        className="relative overflow-hidden rounded-lg"
        style={{ background: `linear-gradient(120deg, ${s.from}, ${s.to})` }}
      >
        <div className="grid items-center gap-4 md:grid-cols-2">
          <div className="order-2 p-6 sm:p-10 md:order-1">
            <span className="text-xs font-bold tracking-[0.25em] text-brand-dark">
              {s.tag}
            </span>
            <h1 className="mt-3 whitespace-pre-line font-display text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
              {s.title}
            </h1>
            <p className="mt-3 text-sm text-ink/70 sm:text-base">{s.subtitle}</p>
            <Link href={s.href} className="btn-cta mt-6">
              {s.cta}
            </Link>
          </div>
          <div className="order-1 h-56 md:order-2 md:h-96">
            <SmartImage
              src={s.image}
              fallback={s.fallback}
              alt={s.title.replace("\n", " ")}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* dots */}
        <div className="absolute bottom-3 left-6 flex gap-2 md:left-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-6 bg-brand" : "w-2 bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
