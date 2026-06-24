import { Bike, Shield, CheckCircle2, Clock, Award, Users, FileText, Wallet, Zap, Headphones } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function ThirdPartyBikeInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Third Party Bike Insurance"
      subtitle="Essential third-party cover for legal compliance and protection."
      description="Affordable two-wheeler third-party insurance meeting Motor Vehicles Act requirements. Protect against third-party liabilities at the best rates."
      heroIcon={Bike}
      heroImage="/src/assets/insurance-banners/third-party-bike-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Bike Insurance", href: "/bike-insurance" }, { label: "Third Party Bike Insurance" }]}
      productName="Third Party Bike Insurance"
      introduction="Third party bike insurance is the minimum legal requirement for riding a two-wheeler on Indian roads as per the Motor Vehicles Act, 1988. This policy protects you from financial liabilities arising from damage caused to another person's property or injury caused to another person by your bike. At THIRU Insurance, we offer the most affordable third-party bike insurance plans that keep you legally compliant without burning a hole in your pocket."
      whatIs="Third Party Bike Insurance, also known as 'Act Only' policy, is a type of two-wheeler insurance that covers your legal liability for any damage or injury caused to a third party by your bike. It does not cover any damage to your own bike. This is the most basic and affordable type of bike insurance mandated by Indian law. While it doesn't protect your own vehicle, it protects you from potentially huge financial liabilities arising from legal claims by affected third parties. In India, riding a bike without at least third-party insurance is a punishable offense with fines up to ₹4,000."
      benefits={[
        { icon: Shield, title: "Legally Compliant", desc: "Meets all requirements under the Motor Vehicles Act, 1988 for riding in India." },
        { icon: Wallet, title: "Most Affordable", desc: "Starting from just ₹500/year — the cheapest way to stay legally compliant." },
        { icon: Award, title: "Unlimited Liability Cover", desc: "Coverage for third-party property damage and bodily injury legal liability." },
        { icon: Zap, title: "Instant Policy Issuance", desc: "Get your policy instantly with paperless digital documentation." },
        { icon: Users, title: "Personal Accident Cover", desc: "Coverage for death or permanent disability of owner-rider included." },
        { icon: Clock, title: "Easy Renewal", desc: "Simple online renewal process with NCB benefits." },
      ]}
      coverage={[
        { label: "Third-Party Property Damage", desc: "Damage to third-party vehicle or property caused by your bike" },
        { label: "Third-Party Bodily Injury", desc: "Injury or death caused to a third person by your vehicle" },
        { label: "Legal Liability", desc: "Legal costs and defense covered in third-party claims" },
        { label: "Personal Accident Cover", desc: "Coverage for death or permanent disability of owner-rider" },
      ]}
      exclusions={[
        { label: "Own Bike Damage", desc: "Damage to your own bike is NOT covered" },
        { label: "Theft of Bike", desc: "Your bike being stolen is NOT covered" },
        { label: "Fire & Natural Calamities", desc: "Damage from fire, flood, earthquake NOT covered" },
        { label: "Drunk Driving", desc: "Accidents under influence of alcohol or drugs" },
        { label: "Without Valid License", desc: "Riding without a valid driving license" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All policies from IRDAI-approved insurance companies." },
        { icon: Wallet, title: "Lowest Price Guarantee", desc: "We guarantee the best price for third-party insurance." },
        { icon: Zap, title: "Instant Policy", desc: "Get your policy document in your email within minutes." },
        { icon: Users, title: "1 Lakh+ Customers", desc: "Trusted by over 1 lakh two-wheeler owners in India." },
        { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock assistance for claims and queries." },
        { icon: FileText, title: "Paperless Process", desc: "Complete digital process from quote to policy delivery." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Vehicle Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Bike Registration Number *</label>
              <input type="text" name="regNumber" required placeholder="e.g. KA 01 XY 5678" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Bike Model *</label>
              <input type="text" name="bikeModel" required placeholder="e.g. Bajaj Pulsar 150" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-[#14204A]">Registration Year *</label>
            <input type="number" name="regYear" required placeholder="e.g. 2022" min="1990" max="2026" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
          </div>
        </div>
      }
      faqs={[
        { question: "Is third-party bike insurance mandatory in India?", answer: "Yes, as per Section 146 of the Motor Vehicles Act, 1988, every two-wheeler driven on Indian roads must have at least third-party insurance. Riding without insurance can result in fines up to ₹4,000 and/or imprisonment." },
        { question: "Does third-party bike insurance cover damage to my own bike?", answer: "No, third-party insurance only covers damage or injury caused to others by your bike. For your own bike's damage, you need a comprehensive policy." },
        { question: "What is the premium for third-party bike insurance in 2026?", answer: "The third-party premium is regulated by IRDAI. For 2026, it ranges from ₹500 to ₹2,000 depending on your bike's engine capacity. An additional GST of 18% applies." },
        { question: "Can I upgrade from third-party to comprehensive bike insurance?", answer: "Yes, you can upgrade to a comprehensive policy at any renewal time. The additional premium for own damage cover will be calculated based on your bike's IDV (Insured Declared Value) at that time." },
        { question: "Does third-party bike insurance cover personal accident for the rider?", answer: "Yes, as per IRDAI regulations, all third-party policies include a personal accident cover of ₹15 lakhs for the owner-rider at no additional cost." },
      ]}
      ctaText="Stay Legal, Ride Safe!"
    />
  );
}