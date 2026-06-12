import { Car, CheckCircle2, Zap, Shield, Clock, Award, Umbrella, DollarSign } from "lucide-react";
import { GenericPage } from "./GenericPage";

const features = [
  { icon: Shield, title: "Cashless Repairs", desc: "Repair at 10,000+ network garages without paying upfront." },
  { icon: Zap, title: "Instant Claims", desc: "Claim approval in under 30 minutes with our digital process." },
  { icon: Clock, title: "24/7 Roadside Assistance", desc: "Flat tire, battery jump, fuel delivery — anytime, anywhere." },
  { icon: Award, title: "Zero Depreciation Cover", desc: "Full claim without depreciation deduction on parts." },
  { icon: Umbrella, title: "Natural Disaster Cover", desc: "Protected against floods, earthquakes, cyclones and more." },
  { icon: DollarSign, title: "Affordable Premiums", desc: "Comprehensive car insurance starting at just ₹5,244 per year." },
];

export default function CarInsurancePage() {
  return (
    <GenericPage
      title="Car Insurance"
      subtitle="Comprehensive & third-party car insurance with instant claim settlement. Cashless repairs at 10,000+ garages."
      description="THIRU Car Insurance — comprehensive car insurance with instant claim settlement and cashless repairs."
      features={features}
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Car Insurance" }]}
      icon={Car}
    />
  );
}