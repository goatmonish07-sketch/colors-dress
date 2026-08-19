# Colors Dress — E-commerce Storefront

A Flipkart/Myntra-style online store for **ladies dresses, inners, lingerie and general stock**,
built with **Next.js 14 (App Router)** and **Tailwind CSS**.

![Colors Dress](https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=60)

## Features

- 🏠 **Home** — rotating hero banner, feature badges, Shop by Category, Deals of the Day, Trending
- 🗂️ **Category / Listing** — sidebar filters (category, size, color, price), sorting, mobile filter sheet
- 👗 **Product Detail** — image gallery, color & size selectors, quantity, Add to Cart / Buy Now, delivery & assurances
- 🛒 **Cart** — quantity update, remove, live price breakdown (MRP, discount, delivery)
- 💳 **Checkout** — delivery address form, payment options (UPI, Card, Net Banking, Razorpay, COD)
- 🟢 **WhatsApp ordering** — one tap sends the full order to the shop's WhatsApp number
- ✅ **Order Success** — confirmation with generated order ID
- 📱 Fully responsive, mobile-first, accessible (semantic HTML, focus states, aria labels)

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| State | React Context + localStorage (cart) |
| Images | Unsplash (open source) |
| Fonts | Poppins + Inter (Google Fonts) |

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.js               # root layout, navbar + footer + cart provider
  page.js                 # home
  products/page.js        # listing + filters
  product/[slug]/page.js  # product detail
  cart/page.js            # cart
  checkout/page.js        # checkout + WhatsApp order
  order-success/page.js   # confirmation
components/                # Navbar, Footer, ProductCard, HeroBanner, CartContext, icons…
lib/products.js            # product catalog + helpers
```

## Configuration

- **WhatsApp number** — edit `WHATSAPP_NUMBER` in `app/checkout/page.js`
  (country code + number, no `+`, e.g. `919876543210`).
- **Products** — add/edit entries in `lib/products.js`.

## Roadmap (next phases)

- **Phase 2:** Razorpay payment gateway, user accounts & order history, real database (Postgres/Prisma), admin panel for stock
- **Phase 3:** Wishlist persistence, coupons, product reviews, search suggestions, inventory dashboard

## Deploy

Optimised for **Vercel** — push the repo and import it, or run `vercel`. No environment
variables required for the MVP.
