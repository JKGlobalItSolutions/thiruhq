import { Heart, CheckCircle2, Zap, Shield, Clock, Award, Umbrella, DollarSign } from "lucide-react";
import { GenericPage } from "./GenericPage";

const features = [
  { icon: Shield, title: "Cashless Hospitalization", desc: "Admit at 10,000+ network hospitals without paying upfront." },
  { icon: Zap, title: "Instant Claim Approval", desc: "Pre-authorization in under 15 minutes for cashless treatment." },
  { icon: Clock, title: "24/7 Health Support", desc: "Round-the-clock medical assistance and teleconsultation services." },
  { icon: Award, title: "Lifetime Renewability", desc: "Keep your coverage active for life with continuous renewals." },
  { icon: Umbrella, title: "Daycare Coverage", desc: "190+ daycare procedures covered without hospitalization." },
  { icon: DollarSign, title: "No Claim Bonus", desc: "10% increase in sum insured for every claim-free year." },
];

export default function HealthInsurancePage() {
  return (
    <GenericPage
      title="Health Insurance"
      subtitle="Cashless hospitalization at 10,000+ hospitals. Comprehensive health coverage and instant claim approval for you and your family."
      description="THIRU Health Insurance — comprehensive medical coverage with cashless hospitalization at India's largest hospital network."
      features={features}
breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Health Insurance" }]}
      icon={Heart}
    />
  );
}