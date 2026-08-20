import "./globals.css";
import { CartProvider } from "../components/CartContext";
import { WishlistProvider } from "../components/WishlistContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export const metadata = {
  title: "Colors Dress — Ladies Dresses, Inners & Lingerie Online",
  description:
    "Shop the latest ladies dresses, kurtis, gowns, inners and lingerie at Colors Dress. Wide range, best quality, easy returns and secure payments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <main className="min-h-screen pb-16 md:pb-0">{children}</main>
            <Footer />
            <FloatingWhatsApp />
            <MobileNav />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
