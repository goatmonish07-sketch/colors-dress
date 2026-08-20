import InfoPage from "../../components/InfoPage";

export const metadata = { title: "Terms & Conditions — Colors Dress" };

export default function Terms() {
  return (
    <InfoPage
      title="Terms & Conditions"
      intro="Please read these terms carefully before using Colors Dress."
      sections={[
        { h: "Use of the site", p: "By accessing Colors Dress you agree to use it for lawful purposes only and not to misuse the platform or its content." },
        { h: "Pricing & availability", p: "All prices are in INR and inclusive of taxes. Products are subject to availability; we reserve the right to update prices and offers." },
        { h: "Orders", p: "An order is confirmed once payment is authorised or a Cash on Delivery order is placed. We may cancel orders in case of stock or pricing errors." },
      ]}
    />
  );
}
