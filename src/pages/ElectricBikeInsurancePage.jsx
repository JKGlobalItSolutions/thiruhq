import { Bike, Shield, CheckCircle2, Clock, Award, Zap, Battery, Users, FileText, Leaf } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function ElectricBikeInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Electric Bike Insurance"
      subtitle="Specialized EV insurance with battery & charging equipment cover."
      description="Comprehensive coverage for electric two-wheelers including battery, motor, and charger protection. Ride green with complete peace of mind."
      heroIcon={Bike}
      heroImage="/src/assets/insurance-banners/electric-bike-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Bike Insurance", href: "/bike-insurance" }, { label: "Electric Bike Insurance" }]}
      productName="Electric Bike Insurance"
      introduction="Electric bikes are the future of mobility in India, with their eco-friendly operation and low running costs. However, insuring an electric two-wheeler is different from insuring a conventional petrol or diesel bike. The battery pack, motor, and charging equipment require specialized coverage. At THIRU Insurance, we offer specialized electric bike insurance plans that cover the unique components of your EV, ensuring you're protected against all risks specific to electric two-wheelers."
      whatIs="Electric Bike Insurance is a specialized insurance policy designed specifically for electric two-wheelers. While it covers similar risks as conventional bike insurance (accidents, theft, third-party liability), it also includes coverage for EV-specific components like the lithium-ion battery pack, electric motor, controller unit, and charging equipment. Electric bikes have different risk profiles compared to ICE (Internal Combustion Engine) vehicles, with lower fire risk but higher battery replacement costs. In India, as EV adoption grows, specialized electric bike insurance plans are becoming essential for every EV owner."
      benefits={[
        { icon: Shield, title: "Battery Cover", desc: "Coverage for the lithium-ion battery pack against damage, fire, and theft." },
        { icon: Battery, title: "Motor Protection", desc: "Coverage for the electric motor, controller, and drivetrain components." },
        { icon: Leaf, title: "Charging Equipment", desc: "Protection for the charger, charging cable, and charging port." },
        { icon: Zap, title: "Fire & Short Circuit", desc: "Specialized cover for electrical fires and short circuit damage." },
        { icon: Award, title: "Lower Premiums", desc: "Electric bikes have lower insurance premiums due to lower fire risk." },
        { icon: Clock, title: "Roadside Assistance", desc: "24/7 roadside assistance including battery jump and towing." },
        { icon: CheckCircle2, title: "Zero Depreciation", desc: "Option for nil depreciation cover on battery and electrical parts." },
        { icon: Users, title: "Eco-Friendly Discount", desc: "Special discounts for EV owners promoting green mobility." },
      ]}
      coverage={[
        { label: "Battery Pack Cover", desc: "Coverage for lithium-ion battery against damage, theft, fire, and explosion" },
        { label: "Electric Motor Cover", desc: "Protection for the electric motor and controller unit" },
        { label: "Charging Equipment", desc: "Coverage for charger, charging cable, and charging port" },
        { label: "Own Damage Cover", desc: "Damage to the EV from accidents, theft, fire, or natural calamities" },
        { label: "Third-Party Liability", desc: "Legal liability for injury or damage to a third party" },
        { label: "Personal Accident Cover", desc: "Coverage for death or permanent disability of the owner-rider" },
        { label: "Theft Protection", desc: "Full IDV paid if the EV bike is stolen and not recovered" },
        { label: "Natural Calamities", desc: "Coverage for floods, earthquakes, cyclones, and storms" },
      ]}
      exclusions={[
        { label: "Battery Degradation", desc: "Normal battery capacity loss over time is not covered" },
        { label: "Mechanical Failure", desc: "Manufacturing defects or mechanical failure not caused by accident" },
        { label: "Unauthorized Modifications", desc: "Damage from unauthorized modifications to the EV" },
        { label: "Improper Charging", desc: "Damage due to use of non-standard or incompatible chargers" },
        { label: "War & Nuclear Perils", desc: "Damage due to war, invasion, or nuclear incidents" },
        { label: "Drunk Driving", desc: "Accidents under influence of alcohol or drugs" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All EV policies from IRDAI-approved insurance companies." },
        { icon: Award, title: "EV Specialists", desc: "Dedicated team with expertise in electric vehicle insurance." },
        { icon: Zap, title: "Instant Policy Issuance", desc: "Get your EV insurance policy in minutes online." },
        { icon: Users, title: "Battery Replacement Support", desc: "Assistance for battery replacement and claims." },
        { icon: Clock, title: "24/7 EV Support", desc: "Round-the-clock support for EV-specific claims." },
        { icon: FileText, title: "Green Discounts", desc: "Eco-friendly discounts and rewards for EV owners." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Electric Bike Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">EV Bike Model *</label>
              <input type="text" name="evBikeModel" required placeholder="e.g. Ola S1 Pro, Ather 450X" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Battery Type *</label>
              <select name="batteryType" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="lithium-ion">Lithium-Ion</option>
                <option value="lead-acid">Lead-Acid</option>
                <option value="lifepo4">LiFePO4</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Purchase Year *</label>
              <input type="number" name="purchaseYear" required placeholder="e.g. 2024" min="2020" max="2026" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Charging Type *</label>
              <select name="chargingType" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="portable">Portable Battery (Removable)</option>
                <option value="fixed">Fixed / Direct Charging</option>
                <option value="both">Both Options</option>
              </select>
            </div>
          </div>
        </div>
      }
      faqs={[
        { question: "Is electric bike insurance different from regular bike insurance?", answer: "Yes, electric bike insurance includes coverage for EV-specific components like the battery pack, electric motor, controller, and charging equipment that are not covered in standard bike insurance policies." },
        { question: "Does electric bike insurance cover battery replacement?", answer: "Yes, comprehensive electric bike insurance covers the battery pack against damage, fire, explosion, and theft. Battery replacement due to manufacturing defects or normal degradation may require additional warranty coverage." },
        { question: "Are electric bike insurance premiums lower than petrol bikes?", answer: "Yes, electric bike insurance premiums are generally lower because EVs have lower fire risk and fewer moving parts that can fail. Additionally, many insurers offer eco-friendly discounts for EV owners." },
        { question: "Does insurance cover the charging equipment and cable?", answer: "Yes, comprehensive electric bike insurance covers the charger, charging cable, and charging port against damage, theft, and short circuit." },
        { question: "What is the IDV for an electric bike?", answer: "The IDV for an electric bike is calculated based on the current market value of the vehicle including the battery pack. Since batteries have a separate depreciation rate, the IDV calculation may differ from conventional bikes." },
      ]}
      ctaText="Protect Your Electric Ride!"
    />
  );
}