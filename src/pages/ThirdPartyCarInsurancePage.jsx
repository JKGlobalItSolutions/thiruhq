import { Car, Shield, CheckCircle2, Clock, Award, Users, FileText, Wallet, Zap, Headphones } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function ThirdPartyCarInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Third Party Car Insurance"
      subtitle="Essential third-party cover for legal compliance and protection."
      description="Affordable third-party car insurance meeting Motor Vehicles Act requirements. Protect against third-party liabilities starting at the best rates."
      heroIcon={Car}
      heroImage="/src/assets/insurance-banners/third-party-car-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Car Insurance", href: "/car-insurance" }, { label: "Third Party Car Insurance" }]}
      productName="Third Party Car Insurance"
      introduction="Third party car insurance is the minimum legal requirement for driving a vehicle on Indian roads as per the Motor Vehicles Act, 1988. This policy protects you from financial liabilities arising from damage caused to another person's property or injury caused to another person by your vehicle. At THIRU Insurance, we offer the most affordable third-party car insurance plans that keep you legally compliant without burning a hole in your pocket."
      whatIs="Third Party Car Insurance, also known as 'Act Only' policy, is a type of motor insurance that covers your legal liability for any damage or injury caused to a third party by your vehicle. It does not cover any damage to your own vehicle. This is the most basic and affordable type of car insurance mandated by Indian law. While it doesn't protect your own car, it protects you from potentially huge financial liabilities arising from legal claims by affected third parties."
      benefits={[
        { icon: Shield, title: "Legally Compliant", desc: "Meets all requirements under the Motor Vehicles Act, 1988 for driving in India." },
        { icon: Wallet, title: "Most Affordable", desc: "Starting from just ₹1,500/year — the cheapest way to stay legally compliant." },
        { icon: Award, title: "Unlimited Third-Party Liability", desc: "Coverage for unlimited third-party property damage and bodily injury." },
        { icon: Zap, title: "Instant Policy Issuance", desc: "Get your policy instantly with paperless digital documentation." },
        { icon: Users, title: "Quick Claim Settlement", desc: "Hassle-free claim process for third-party claims." },
        { icon: Clock, title: "Easy Renewal", desc: "Simple online renewal process with NCB benefits." },
      ]}
      coverage={[
        { label: "Third-Party Property Damage", desc: "Damage to third-party vehicle or property caused by your car" },
        { label: "Third-Party Bodily Injury", desc: "Injury or death caused to a third person by your vehicle" },
        { label: "Legal Liability", desc: "Legal costs and defense covered in third-party claims" },
        { label: "Personal Accident Cover", desc: "Coverage for death or permanent disability of owner-driver" },
      ]}
      exclusions={[
        { label: "Own Vehicle Damage", desc: "Damage to your own car is NOT covered" },
        { label: "Theft of Vehicle", desc: "Your car being stolen is NOT covered" },
        { label: "Fire & Natural Calamities", desc: "Damage from fire, flood, earthquake NOT covered" },
        { label: "Drunk Driving", desc: "Accidents under influence of alcohol or drugs" },
        { label: "Unauthorized Driver", desc: "Vehicle driven by person without valid license" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All policies from IRDAI-approved insurance companies." },
        { icon: Wallet, title: "Lowest Price Guarantee", desc: "We guarantee the best price for third-party insurance." },
        { icon: Zap, title: "Instant Policy", desc: "Get your policy document in your email within minutes." },
        { icon: Users, title: "100,000+ Customers", desc: "Trusted by over a lakh vehicle owners in India." },
        { icon: FileText, title: "Paperless Process", desc: "Complete digital process from quote to policy delivery." },
        { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock assistance for claims and queries." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Vehicle Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Vehicle Number *</label>
              <input type="text" name="vehicleNumber" required placeholder="e.g. KA 01 XY 5678" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Car Make & Model *</label>
              <input type="text" name="makeModel" required placeholder="e.g. Hyundai i10" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-[#14204A]">Registration Year *</label>
            <input type="number" name="regYear" required placeholder="e.g. 2022" min="1990" max="2026" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
          </div>
        </div>
      }
      faqs={[
        { question: "Is third-party car insurance mandatory in India?", answer: "Yes, as per Section 146 of the Motor Vehicles Act, 1988, every vehicle driven on Indian roads must have at least third-party insurance. Driving without it can result in fines up to ₹4,000 and/or imprisonment." },
        { question: "Does third-party insurance cover my car's damage?", answer: "No, third-party insurance only covers damage or injury caused to others by your vehicle. For your own car's damage, you need a comprehensive policy." },
        { question: "What is the premium for third-party car insurance in 2026?", answer: "The third-party premium is regulated by IRDAI. For 2026, it ranges from ₹1,500 to ₹6,500 depending on your car's engine capacity. An additional GST of 18% applies." },
        { question: "Can I upgrade from third-party to comprehensive insurance?", answer: "Yes, you can upgrade to a comprehensive policy at any renewal time. The additional premium for own damage cover will be calculated based on your car's IDV." },
        { question: "Does third-party insurance cover personal accident for the driver?", answer: "Yes, as per IRDAI regulations, all third-party policies include a personal accident cover of ₹15 lakhs for the owner-driver at no additional cost." },
      ]}
      ctaText="Stay Legal, Stay Protected!"
    />
  );
}