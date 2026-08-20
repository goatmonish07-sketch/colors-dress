import InfoPage from "../../components/InfoPage";

export const metadata = { title: "About — Colors Dress" };

export default function About() {
  return (
    <InfoPage
      title="About Colors Dress"
      intro="Colors Dress is your everyday destination for ladies dresses, inners, lingerie and general stock — bringing you a wide range at the best prices."
      sections={[
        { h: "Our Story", p: "Started as a neighbourhood ladies-wear shop, Colors Dress now brings the same trusted collection online — kurtis, gowns, frocks, inners, leggings and accessories for every occasion." },
        { h: "Why shop with us", p: "Wide range of trendy collections, premium fabrics, easy returns and 100% secure payments including UPI, cards, Razorpay and Cash on Delivery." },
        { h: "Our promise", p: "Quality you can trust, prices you'll love, and delivery to your doorstep across India." },
      ]}
    />
  );
}
