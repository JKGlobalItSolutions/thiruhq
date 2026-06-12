import { Store, CheckCircle2, Zap, Shield, Clock, Umbrella, DollarSign, Award } from "lucide-react";
import { GenericPage } from "./GenericPage";

const features = [
  { icon: Shield, title: "Stock Cover", desc: "Protection for inventory and merchandise against theft and damage." },
  { icon: Store, title: "Premises Cover", desc: "Building and shop fittings protection against fire, theft, and natural disasters." },
  { icon: Zap, title: "Theft Protection", desc: "Coverage against burglary, robbery, and employee theft." },
  { icon: Umbrella, title: "Public Liability", desc: "Cover for customer injuries on your business premises." },
  { icon: DollarSign, title: "Cash Cover", desc: "In-shop cash and daily remittance protection up to ₹50,000." },
  { icon: Clock, title: "Quick Settlement", desc: "Claims processed within 48 hours for shops." },
];

export default function ShopInsurancePage() {
  return (
    <GenericPage
      title="Shop Insurance"
      subtitle="Comprehensive insurance for retail shops covering stock, premises, theft, fire, and public liability at affordable premiums."
      description="THIRU Shop Insurance — comprehensive coverage for retail shops, showrooms, and small businesses."
      features={features}
breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Shop Insurance" }]}
      icon={Store}
    />
  );
}