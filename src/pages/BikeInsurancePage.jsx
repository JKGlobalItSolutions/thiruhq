import { Bike, CheckCircle2, Zap, Shield, Clock, Award, Umbrella, DollarSign } from "lucide-react";
import { GenericPage } from "./GenericPage";

const features = [
  { icon: Shield, title: "Cashless Repairs", desc: "2000+ network garages for hassle-free repairs without upfront payment." },
  { icon: Zap, title: "Quick Claims", desc: "Digital claim settlement within 24 hours through our app." },
  { icon: Clock, title: "Roadside Assistance", desc: "24/7 support for breakdowns and emergencies on the road." },
  { icon: Award, title: "Personal Accident Cover", desc: "Coverage for rider up to ₹15 lakhs in case of accidents." },
  { icon: Umbrella, title: "Theft Protection", desc: "Full IDV coverage in case of theft of your two-wheeler." },
  { icon: DollarSign, title: "Affordable Premiums", desc: "Comprehensive bike insurance starting at just ₹537 per year." },
];

export default function BikeInsurancePage() {
  return (
    <GenericPage
      title="Bike Insurance"
      subtitle="Affordable two-wheeler protection with quick claim settlement. Comprehensive and third-party bike insurance plans."
      description="THIRU Bike Insurance — affordable two-wheeler protection with quick claim settlement and cashless repairs."
      features={features}
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Bike Insurance" }]}
      icon={Bike}
    />
  );
}