import { Briefcase, Shield, Zap, Clock, Award, Building } from "lucide-react";
import { GenericPage } from "./GenericPage";

const features = [
  { icon: Building, title: "Complete Business Cover", desc: "Comprehensive insurance coverage for all types of businesses." },
  { icon: Shield, title: "Asset Protection", desc: "Protect your business assets, inventory, and equipment." },
  { icon: Zap, title: "Liability Coverage", desc: "Covered against third-party liabilities and legal claims." },
  { icon: Clock, title: "Business Interruption", desc: "Coverage for loss of income due to business interruptions." },
  { icon: Award, title: "Customizable Plans", desc: "Tailored insurance solutions specific to your business needs." },
];

export default function BusinessInsurancePage() {
  return (
    <GenericPage
      title="Business Insurance"
      subtitle="Comprehensive insurance solutions for your business with asset protection, liability coverage, and customizable plans."
      description="THIRU Business Insurance — complete business protection with asset coverage, liability insurance, and tailored solutions."
      features={features}
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Business Insurance" }]}
      icon={Briefcase}
    />
  );
}