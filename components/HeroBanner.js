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
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
    fallbacks: ["https://loremflickr.com/900/700/dress,fashion?lock=801", bannerImage("dresses", "#EC407A", 0)],
    from: "#FCE4EC",
    to: "#F8BBD0",
  },
  {
    tag: "FESTIVE EDIT",
    title: "Ethnic Kurtis\n& Gowns",
    subtitle: "Anarkalis, gowns & more",
    cta: "Explore",
    href: "/products?category=dresses",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=80",
    fallbacks: ["https://loremflickr.com/900/700/gown,woman?lock=802", bannerImage("dresses", "#8E24AA", 1)],
    from: "#F3E5F5",
    to: "#E1BEE7",
  },
  {
    tag: "EVERYDAY ESSENTIALS",
    title: "Inners &\nLoungewear",
    subtitle: "Soft, comfortable, all-day wear",
    cta: "Shop Inners",
    href: "/products?category=inners-lingerie",
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&w=900&q=80",
    fallbacks: ["https://loremflickr.com/900/700/clothing,cotton?lock=803", bannerImage("inners-lingerie", "#26A69A", 2)],
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
      <div className="relative h-44 overflow-hidden rounded-lg sm:h-60 md:h-80">
        {/* background photo */}
        <SmartImage
          key={i}
          src={s.image}
          fallbacks={s.fallbacks}
          alt={s.title.replace("\n", " ")}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        {/* readability scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

        {/* content */}
        <div className="relative flex h-full max-w-[68%] flex-col justify-center px-5 sm:max-w-md sm:px-8">
          <span className="text-[10px] font-bold tracking-[0.25em] text-white/85 sm:text-xs">
            {s.tag}
          </span>
          <h1 className="mt-1.5 whitespace-pre-line font-display text-xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            {s.title}
          </h1>
          <p className="mt-1 hidden text-sm text-white/85 sm:block">{s.subtitle}</p>
          <Link href={s.href} className="btn-cta mt-3 w-fit px-4 py-2 text-xs sm:mt-5 sm:px-6 sm:py-3 sm:text-sm">
            {s.cta}
          </Link>
        </div>

        {/* dots */}
        <div className="absolute bottom-3 left-5 flex gap-2 sm:left-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
