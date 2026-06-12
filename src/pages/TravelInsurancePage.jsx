import { Plane, CheckCircle2, Zap, Shield, Clock, Award, MapPin, DollarSign } from "lucide-react";
import { GenericPage } from "./GenericPage";

const features = [
  { icon: Shield, title: "Medical Cover", desc: "Coverage up to $500,000 for medical emergencies during international trips." },
  { icon: Zap, title: "Trip Cancellation", desc: "Get reimbursed for non-refundable trip costs due to covered reasons." },
  { icon: Plane, title: "Baggage Protection", desc: "Compensation for delayed, lost, or damaged baggage up to $1,000." },
  { icon: Clock, title: "Flight Delay Cover", desc: "Compensation for flight delays over 6 hours with meal and hotel allowance." },
  { icon: MapPin, title: "Worldwide Assistance", desc: "24/7 emergency helpline available in 100+ countries worldwide." },
  { icon: DollarSign, title: "Personal Liability", desc: "Coverage against third-party claims while traveling abroad." },
];

export default function TravelInsurancePage() {
  return (
    <GenericPage
      title="Travel Insurance"
      subtitle="Domestic and international travel insurance covering medical emergencies, trip cancellations, lost baggage, and 24/7 global assistance."
      description="THIRU Travel Insurance — worldwide travel coverage for medical emergencies, baggage, and cancellations."
      features={features}
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Travel Insurance" }]}
      icon={Plane}
    />
  );
}