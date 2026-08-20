import { SHOP } from "../lib/config";

const MESSAGE = "Hi Colors Dress! I'd like to know more about your products.";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-hover transition-transform hover:scale-105 md:bottom-6"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l2 1c.3.1.4.2.5.3.1.2.1.7-.1 1.2Z" />
      </svg>
      <span className="absolute right-0 top-0 h-3 w-3 animate-ping rounded-full bg-white/70" />
    </a>
  );
}
