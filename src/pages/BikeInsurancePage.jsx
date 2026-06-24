import { Bike, Shield, CheckCircle2, Clock, Award, Zap, Users, FileText, Wallet, Headphones } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function BikeInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Bike Insurance"
      subtitle="Complete two-wheeler protection with own damage & theft cover."
      description="Comprehensive bike insurance with cashless repairs, instant claims, and 24/7 roadside assistance. Protect your ride starting at affordable premiums."
      heroIcon={Bike}
      heroImage="/src/assets/insurance-banners/bike-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Bike Insurance" }]}
      productName="Bike Insurance"
      introduction="Your bike or scooter is your daily companion for commuting, errands, and leisure rides. Protecting it with the right insurance is both a legal requirement and a smart financial decision. At THIRU Insurance, we offer comprehensive bike insurance plans that cover your two-wheeler against accidents, theft, natural disasters, and third-party liabilities at the most affordable premiums in India."
      whatIs="Bike insurance, also known as two-wheeler insurance, is a policy that protects your motorcycle or scooter against financial loss due to accidents, theft, fire, natural calamities, and third-party liabilities. In India, it is mandatory to have at least third-party bike insurance under the Motor Vehicles Act, 1988. A comprehensive bike insurance policy provides complete protection by covering both your vehicle and third-party damages."
      benefits={[
        { icon: Shield, title: "Complete Protection", desc: "Own damage + theft + third-party + fire + natural calamities coverage." },
        { icon: Wallet, title: "Starting at ₹500/year", desc: "Most affordable bike insurance premiums starting from just ₹500 per year." },
        { icon: Zap, title: "Instant Policy Issuance", desc: "Paperless policy delivered to your email within minutes." },
        { icon: Award, title: "No Claim Bonus Up to 50%", desc: "Earn discounts on renewal for every claim-free year." },
        { icon: Clock, title: "Quick Claim Settlement", desc: "Hassle-free claim process with cashless repairs." },
        { icon: CheckCircle2, title: "Cashless Repairs", desc: "Get your bike repaired at network garages without paying upfront." },
      ]}
      coverage={[
        { label: "Own Damage Cover", desc: "Damage to your bike due to accident, fire, theft, or natural calamities" },
        { label: "Third-Party Liability", desc: "Legal liability for damage to third-party property or person" },
        { label: "Personal Accident Cover", desc: "Coverage for death or permanent disability of owner-rider" },
        { label: "Theft Protection", desc: "Full IDV paid if your bike is stolen and not recovered" },
        { label: "Fire & Explosion", desc: "Damage caused by fire, lightning, or self-ignition" },
        { label: "Natural Calamities", desc: "Coverage for floods, earthquakes, cyclones, and storms" },
      ]}
      exclusions={[
        { label: "Wear & Tear", desc: "Normal depreciation and mechanical breakdown" },
        { label: "Drunk Driving", desc: "Accidents under influence of alcohol or drugs" },
        { label: "Without Valid License", desc: "Riding without a valid driving license" },
        { label: "War & Nuclear Risks", desc: "Damage due to war, invasion, or nuclear incidents" },
        { label: "Unauthorized Use", desc: "Using vehicle outside geographical limits" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All policies from IRDAI-approved insurers." },
        { icon: Wallet, title: "Lowest Price Guarantee", desc: "Best bike insurance rates in India." },
        { icon: Zap, title: "5-Minute Issuance", desc: "Get bike insurance in just 5 minutes." },
        { icon: Users, title: "2 Lakh+ Customers", desc: "Trusted by over 2 lakh two-wheeler owners." },
        { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock claim and policy assistance." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Vehicle Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Bike Registration Number *</label>
              <input type="text" name="regNumber" required placeholder="e.g. TN 07 AB 1234" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Bike Make & Model *</label>
              <input type="text" name="bikeModel" required placeholder="e.g. Honda Activa 6G" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-[#14204A]">Purchase Year *</label>
            <input type="number" name="purchaseYear" required placeholder="e.g. 2023" min="1990" max="2026" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
          </div>
        </div>
      }
      faqs={[
        { question: "Is bike insurance mandatory in India?", answer: "Yes, as per the Motor Vehicles Act, 1988, at least third-party insurance is mandatory for all two-wheelers. Driving without insurance can lead to fines up to ₹4,000." },
        { question: "What is the cheapest bike insurance in India?", answer: "Third-party bike insurance is the cheapest option, starting from just ₹500 per year for smaller engine capacity bikes." },
        { question: "Can I transfer my old NCB to a new bike?", answer: "Yes, the No Claim Bonus is transferable when you buy a new bike, provided you have proof of NCB from your previous insurer." },
        { question: "Does bike insurance cover pillion rider?", answer: "Yes, comprehensive bike insurance covers personal accident for the pillion rider as well as the owner-rider." },
        { question: "How do I renew my bike insurance online?", answer: "You can renew your bike insurance online through our website in minutes. Just enter your registration number and make the payment." },
      ]}
      ctaText="Protect Your Ride Today!"
    />
  );
}