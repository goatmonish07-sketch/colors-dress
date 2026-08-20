import InfoPage from "../../components/InfoPage";

export const metadata = { title: "Help & Support — Colors Dress" };

export default function Help() {
  return (
    <InfoPage
      title="Help & Support"
      intro="We're here to help. Find answers to common questions below or reach out to us."
      sections={[
        { h: "Shipping", p: "Orders are delivered in 3–5 business days. Shipping is free on orders above ₹999; a flat ₹40 applies otherwise." },
        { h: "Returns & Exchange", p: "Easy 7-day returns and exchange on all eligible items. Products must be unused with tags intact." },
        { h: "Payments", p: "We accept UPI, credit/debit cards, net banking, Razorpay and Cash on Delivery." },
        { h: "Contact us", p: "WhatsApp or call us at +91 98765 43210, or email support@colorsdress.example. We reply within 24 hours." },
      ]}
    />
  );
}
