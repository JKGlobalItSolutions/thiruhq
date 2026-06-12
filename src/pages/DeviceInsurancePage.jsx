import { Smartphone, CheckCircle2, Zap, Shield, Clock, Award, Umbrella, DollarSign } from "lucide-react";
import { GenericPage } from "./GenericPage";

const features = [
  { icon: Shield, title: "Screen Protection", desc: "Coverage for accidental screen damage, cracks, and liquid damage." },
  { icon: Zap, title: "Theft Protection", desc: "Full coverage against theft and robbery of your devices." },
  { icon: Clock, title: "Quick Claims", desc: "File and settle claims within 24 hours through our app." },
  { icon: Award, title: "Extended Warranty", desc: "Extend manufacturer warranty for up to 3 years." },
  { icon: Umbrella, title: "Accidental Damage", desc: "Protection against drops, spills, and accidental damage." },
  { icon: DollarSign, title: "Affordable Plans", desc: "Device protectioning starting at just ₹99 per month." },
];

export default function DeviceInsurancePage() {
  return (
    <GenericPage
      title="Device Insurance"
      subtitle="Protection for laptops, tablets, and gadgets. Screen damage, theft, and liquid damage cover with quick claim settlement."
      description="THIRU Device Insurance — protection for laptops, tablets, and gadgets with screen damage, theft, and liquid damage cover."
      features={features}
breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Device Insurance" }]}
      icon={Smartphone}
    />
  );
}
