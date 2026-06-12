import { Shield, CheckCircle2, Zap, Clock, Award, Umbrella, DollarSign, Heart } from "lucide-react";
import { GenericPage } from "./GenericPage";

const features = [
  { icon: Shield, title: "Accidental Death Benefit", desc: "Lump-sum payout to your family in case of accidental death." },
  { icon: Heart, title: "Disability Cover", desc: "Coverage for total and partial permanent disability from accidents." },
  { icon: Clock, title: "Weekly Income Replacement", desc: "Replacement income during temporary total disability recovery." },
  { icon: Umbrella, title: "Worldwide Coverage", desc: "Protection 24/7 across the globe, wherever you travel." },
  { icon: DollarSign, title: "Affordable Premium", desc: "Comprehensive personal accident coverage starting at just ₹350 per year." },
  { icon: Award, title: "Educational Fund", desc: "Additional coverage for children's education in case of fatal accident." },
];

export default function PersonalAccidentInsurancePage() {
  return (
    <GenericPage
      title="Personal Accident Insurance"
      subtitle="24/7 protection against accidental injuries and disabilities. Comprehensive personal accident cover with lump-sum payout and disability benefits."
      description="THIRU Personal Accident Insurance — financial protection against accidental injuries and disabilities with worldwide coverage."
      features={features}
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Personal Accident Insurance" }]}
      icon={Shield}
    />
  );
}