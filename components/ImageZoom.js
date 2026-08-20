"use client";

import { useState } from "react";
import SmartImage from "./SmartImage";

// Fullscreen lightbox with click-to-zoom + move-to-pan. Elegant and reliable.
export default function ImageZoom({ images, fallbacks, name, index = 0, onClose }) {
  const [i, setI] = useState(index);
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  const move = (e) => {
    if (!zoom) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-black/90" onClick={onClose}>
      {/* top bar */}
      <div className="flex items-center justify-between p-4 text-white" onClick={(e) => e.stopPropagation()}>
        <span className="text-sm font-medium">{name}</span>
        <button onClick={onClose} aria-label="Close" className="grid h-9 w-9 place-items-center rounded-full bg-white/15 hover:bg-white/25">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>

      {/* image */}
      <div className="flex flex-1 items-center justify-center overflow-hidden px-4" onClick={(e) => e.stopPropagation()}>
        <div
          className={`relative max-h-[75vh] w-full max-w-lg overflow-hidden ${zoom ? "cursor-zoom-out" : "cursor-zoom-in"}`}
          onClick={() => setZoom((z) => !z)}
          onMouseMove={move}
          onMouseLeave={() => setOrigin("50% 50%")}
        >
          <SmartImage
            key={i}
            src={images[i]}
            fallbacks={fallbacks?.[i]}
            alt={name}
            className="mx-auto max-h-[75vh] w-auto select-none object-contain transition-transform duration-200"
            style={{ transform: zoom ? "scale(2.4)" : "scale(1)", transformOrigin: origin }}
          />
        </div>
      </div>

      {/* thumbnails */}
      <div className="flex justify-center gap-2 p-4" onClick={(e) => e.stopPropagation()}>
        {images.map((src, idx) => (
          <button
            key={idx}
            onClick={() => { setI(idx); setZoom(false); }}
            className={`h-14 w-11 overflow-hidden rounded-sm border-2 ${idx === i ? "border-white" : "border-white/30"}`}
          >
            <SmartImage src={src} fallbacks={fallbacks?.[idx]} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
      <p className="pb-4 text-center text-xs text-white/60">Tap image to zoom · move to pan</p>
    </div>
  );
}
