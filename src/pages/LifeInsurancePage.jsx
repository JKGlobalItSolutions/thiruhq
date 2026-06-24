import { Heart, Shield, Zap, Clock, Award, CheckCircle2 } from "lucide-react";
import { GenericPage } from "./GenericPage";

const features = [
  { icon: Shield, title: "Comprehensive Life Cover", desc: "Financial protection for your loved ones with flexible coverage options." },
  { icon: Zap, title: "Multiple Plan Options", desc: "Choose from term plans, savings plans, ULIPs, and more." },
  { icon: Clock, title: "Flexible Tenure", desc: "Policy tenures ranging from 10 to 40 years to suit your needs." },
  { icon: Award, title: "Tax Benefits", desc: "Claim tax deductions under Section 80C and 10(10D)." },
  { icon: CheckCircle2, title: "Rider Add-ons", desc: "Enhance coverage with critical illness and accident riders." },
];

export default function LifeInsurancePage() {
  return (
    <GenericPage
      title="Life Insurance"
      subtitle="Secure your family's financial future with comprehensive life insurance plans tailored to your needs."
      description="THIRU Life Insurance — comprehensive life coverage with flexible plans, tax benefits, and rider options."
      features={features}
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Life Insurance" }]}
      icon={Heart}
    />
  );
}