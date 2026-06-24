import { Bike, Shield, CheckCircle2, Clock, Award, Zap, Users, FileText, Wallet, Headphones } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function ComprehensiveBikeInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Comprehensive Bike Insurance"
      subtitle="Full two-wheeler coverage — own damage, theft, fire & third-party."
      description="Complete bike protection with cashless repairs, zero depreciation option, and 24/7 assistance. Ride with confidence and total peace of mind."
      heroIcon={Bike}
      heroImage="/src/assets/insurance-banners/comprehensive-bike-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Bike Insurance", href: "/bike-insurance" }, { label: "Comprehensive Bike Insurance" }]}
      productName="Comprehensive Bike Insurance"
      introduction="Comprehensive bike insurance is the most complete protection plan for your two-wheeler, offering coverage against a wide range of risks including accidents, theft, fire, natural disasters, and third-party liabilities. Unlike a basic third-party policy, comprehensive insurance protects both your bike and your finances from unexpected expenses. At THIRU Insurance, we offer affordable comprehensive bike insurance plans that give you complete peace of mind on every ride."
      whatIs="Comprehensive Bike Insurance is a type of two-wheeler insurance policy that provides coverage for both own damage (damage to your bike) and third-party liabilities (damage to others). It covers accidents, theft, fire, explosions, natural calamities like floods and earthquakes, and man-made disasters. Additionally, it includes personal accident cover for the owner-rider. This is the most popular type of bike insurance in India as it offers complete financial protection for your two-wheeler."
      benefits={[
        { icon: Shield, title: "Complete Coverage", desc: "Own damage + theft + fire + third-party + natural calamities in one policy." },
        { icon: Wallet, title: "Starting at ₹999/year", desc: "Affordable comprehensive coverage starting from just ₹999 per year." },
        { icon: Zap, title: "Cashless Repairs", desc: "Get your bike repaired at 5,000+ network garages without paying upfront." },
        { icon: Clock, title: "24/7 Roadside Assistance", desc: "Emergency help including towing, flat tyre, and battery jump for your bike." },
        { icon: Award, title: "No Claim Bonus Up to 50%", desc: "Huge discounts on renewal premium for every claim-free year." },
        { icon: CheckCircle2, title: "Zero Depreciation Add-on", desc: "Claim full value without depreciation deduction on replaced parts." },
        { icon: Users, title: "Personal Accident Cover", desc: "Coverage for death or permanent disability of the owner-rider." },
        { icon: FileText, title: "Instant Policy Issuance", desc: "Paperless policy delivered to your email within minutes." },
      ]}
      coverage={[
        { label: "Own Damage Cover", desc: "Damage to your bike due to accident, fire, theft, or natural calamities" },
        { label: "Third-Party Liability", desc: "Legal liability for injury or damage to a third party" },
        { label: "Personal Accident Cover", desc: "Coverage for death or permanent disability of owner-rider" },
        { label: "Theft Protection", desc: "Full IDV paid if your bike is stolen and not recovered" },
        { label: "Fire & Explosion", desc: "Damage caused by fire, lightning, explosion, or self-ignition" },
        { label: "Natural Calamities", desc: "Coverage for floods, earthquakes, cyclones, and storms" },
      ]}
      exclusions={[
        { label: "Mechanical Breakdown", desc: "Normal wear and tear, engine breakdown, or mechanical failure" },
        { label: "Driving Under Influence", desc: "Accidents while under the influence of alcohol or drugs" },
        { label: "Without Valid License", desc: "Riding without a valid driving license" },
        { label: "Unauthorized Use", desc: "Vehicle used outside the geographical area specified in policy" },
        { label: "War & Nuclear Perils", desc: "Damage due to war, invasion, or nuclear incidents" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All policies from IRDAI-approved insurance companies." },
        { icon: Award, title: "2 Lakh+ Customers", desc: "Trusted by over 2 lakh two-wheeler owners across India." },
        { icon: Zap, title: "Instant Policy Issuance", desc: "Get comprehensive policy in just 5 minutes." },
        { icon: Users, title: "5,000+ Network Garages", desc: "Cashless repairs at authorized garages nationwide." },
        { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock customer support for claims and queries." },
        { icon: FileText, title: "Hassle-Free Claims", desc: "Dedicated claim manager handles everything for you." },
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
              <label className="text-sm font-semibold text-[#14204A]">Bike Model *</label>
              <input type="text" name="bikeModel" required placeholder="e.g. Honda Activa 6G" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Bike Age (Years) *</label>
              <input type="number" name="bikeAge" required placeholder="e.g. 2" min="0" max="20" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Current Insurer</label>
              <input type="text" name="currentInsurer" placeholder="e.g. Bajaj Allianz" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
        </div>
      }
      faqs={[
        { question: "What is the difference between comprehensive and third-party bike insurance?", answer: "Comprehensive insurance covers both your bike's damage and third-party liabilities, while third-party only covers damage to others. Comprehensive is more expensive but offers complete protection including theft, fire, and natural calamities." },
        { question: "Is comprehensive bike insurance worth it for old bikes?", answer: "For bikes older than 10 years, comprehensive coverage may be limited. However, if your bike is still in good condition and has valuable parts, comprehensive insurance can still be worthwhile." },
        { question: "Can I add zero depreciation to my comprehensive bike policy?", answer: "Yes, zero depreciation (Nil Depreciation) is a popular add-on for comprehensive bike insurance. It ensures you get full claim value without depreciation deduction on replaced parts." },
        { question: "How is the premium for comprehensive bike insurance calculated?", answer: "Premiums are calculated based on the bike's IDV (Insured Declared Value), which is the current market value of your bike. Factors like engine capacity, age, model, and NCB also affect the premium." },
        { question: "Does comprehensive insurance cover engine damage due to water?", answer: "Yes, comprehensive insurance covers engine damage caused by water ingression during floods or heavy rains, provided you have the engine protector add-on." },
      ]}
      ctaText="Get Complete Protection for Your Bike!"
    />
  );
}