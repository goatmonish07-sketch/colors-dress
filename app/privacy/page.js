import InfoPage from "../../components/InfoPage";

export const metadata = { title: "Privacy Policy — Colors Dress" };

export default function Privacy() {
  return (
    <InfoPage
      title="Privacy Policy"
      intro="Your privacy matters to us. This policy explains how we handle your information."
      sections={[
        { h: "Information we collect", p: "We collect details you provide such as name, phone, address and order history to process and deliver your orders." },
        { h: "How we use it", p: "Your information is used only to fulfil orders, provide support and improve your shopping experience. We never sell your data." },
        { h: "Security", p: "Payments are processed through secure, PCI-compliant gateways. We do not store your card details on our servers." },
      ]}
    />
  );
}
