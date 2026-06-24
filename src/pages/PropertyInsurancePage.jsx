import { Building, Shield, CheckCircle2, Clock, Award, Zap, Users, FileText, Home, Flame } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function PropertyInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Property Insurance"
      subtitle="Protect your property against fire, theft & natural disasters."
      description="Comprehensive property insurance for homes and businesses. Coverage against fire, theft, floods, earthquakes, and more. Starting from just ₹3,999/year."
      heroIcon={Building}
      heroImage="/src/assets/insurance-banners/property-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Business Insurance", href: "/business-insurance" }, { label: "Property Insurance" }]}
      productName="Property Insurance"
      introduction="Your property is one of your most significant investments, whether it's a commercial building, office space, warehouse, or residential apartment. Property Insurance protects this valuable asset against unforeseen events like fire, theft, natural disasters, and structural damage. At THIRU Insurance, we offer comprehensive property insurance solutions that give you complete peace of mind, knowing that your property — and the assets within it — are financially protected."
      whatIs="Property Insurance is a type of insurance policy that provides financial protection for physical assets including buildings, structures, and their contents against risks such as fire, theft, burglary, natural calamities, and malicious damage. Property insurance can cover commercial properties (offices, factories, warehouses, shopping malls) as well as residential properties (apartments, independent houses, villas). In addition to the building structure, property insurance can also cover contents like furniture, equipment, machinery, and inventory. In India, property insurance is often required by banks and financial institutions when providing loans against property."
      benefits={[
        { icon: Shield, title: "Building Structure Cover", desc: "Comprehensive coverage for the physical structure of your property against all risks." },
        { icon: Flame, title: "Fire & Allied Perils", desc: "Protection against fire, lightning, explosion, short circuit, and bursting of pipes." },
        { icon: Award, title: "Theft & Burglary", desc: "Coverage for theft, burglary, and malicious damage to property and contents." },
        { icon: Zap, title: "Natural Disaster Cover", desc: "Protection against floods, earthquakes, cyclones, storms, and landslides." },
        { icon: Clock, title: "Equipment Breakdown", desc: "Coverage for breakdown of electrical, electronic, and mechanical equipment." },
        { icon: Users, title: "Public Liability", desc: "Legal liability for injury to visitors or damage to third-party property." },
        { icon: CheckCircle2, title: "Flexible Tenure", desc: "Choose policy tenure from 1 to 5 years with multi-year discounts." },
        { icon: FileText, title: "Contents Cover", desc: "Coverage for furniture, fixtures, machinery, and equipment inside the property." },
      ]}
      coverage={[
        { label: "Building Structure", desc: "Walls, roof, floors, ceilings, staircases, and permanent structural elements" },
        { label: "Fire & Explosion", desc: "Damage from fire, lightning, explosion, implosion, and aircraft damage" },
        { label: "Theft & Burglary", desc: "Loss due to burglary, housebreaking, theft, or attempt thereat" },
        { label: "Natural Calamities", desc: "Floods, earthquakes, cyclones, typhoons, storms, and landslides" },
        { label: "Equipment Breakdown", desc: "Electrical, electronic, and mechanical equipment failure" },
        { label: "Contents Protection", desc: "Furniture, fixtures, fittings, machinery, and movable assets" },
        { label: "Public Liability", desc: "Third-party injury or property damage on the premises" },
        { label: "Malicious Damage", desc: "Damage caused by malicious acts, riots, strikes, and vandalism" },
      ]}
      exclusions={[
        { label: "Wear & Tear", desc: "Normal depreciation, aging, and gradual deterioration of the property" },
        { label: "Intentional Damage", desc: "Loss caused intentionally by the insured or authorized persons" },
        { label: "War & Terrorism", desc: "Losses due to war, invasion, rebellion, or terrorist acts" },
        { label: "Nuclear Risks", desc: "Damage due to nuclear reaction, radiation, or radioactive contamination" },
        { label: "Pollution", desc: "Gradually operating pollution or contamination unless sudden and accidental" },
        { label: "Construction Defects", desc: "Damage due to faulty design, materials, or workmanship" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All property policies from IRDAI-approved insurance companies." },
        { icon: Award, title: "25,000+ Properties Covered", desc: "Trusted by over 25,000 property owners across India." },
        { icon: Zap, title: "Instant Quotation", desc: "Get a property insurance quote in under 5 minutes." },
        { icon: Users, title: "Flexible Coverage", desc: "Customizable coverage options tailored to your property." },
        { icon: Clock, title: "Quick Claim Settlement", desc: "Claims processed within 7 days for property damage." },
        { icon: FileText, title: "Digital Management", desc: "Manage your property policy online anytime." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Property Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Property Type *</label>
              <select name="propertyType" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="commercial">Commercial (Office / Shop)</option>
                <option value="industrial">Industrial (Factory / Warehouse)</option>
                <option value="residential">Residential (Apartment / House)</option>
                <option value="mixed">Mixed Use Property</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Property Value (₹) *</label>
              <select name="propertyValue" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="under-10lakh">Under ₹10 Lakh</option>
                <option value="10-25lakh">₹10 - ₹25 Lakh</option>
                <option value="25-50lakh">₹25 - ₹50 Lakh</option>
                <option value="50lakh-1cr">₹50 Lakh - ₹1 Crore</option>
                <option value="1-5cr">₹1 - ₹5 Crore</option>
                <option value="above-5cr">Above ₹5 Crore</option>
              </select>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-[#14204A]">Property Location *</label>
            <input type="text" name="propertyLocation" required placeholder="City / Area where property is located" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
          </div>
        </div>
      }
      faqs={[
        { question: "What is property insurance and why do I need it?", answer: "Property insurance protects your building and its contents against financial loss from fire, theft, natural disasters, and other covered perils. It's essential because property damage can cost lakhs or crores to repair, and insurance ensures you don't have to bear this burden alone." },
        { question: "Does property insurance cover natural disasters like floods and earthquakes?", answer: "Yes, comprehensive property insurance covers natural calamities including floods, earthquakes, cyclones, storms, and landslides. However, coverage for certain perils like floods may have specific terms and deductibles." },
        { question: "Can I insure both the building and its contents?", answer: "Yes, property insurance can cover both the building structure and its contents including furniture, equipment, machinery, and inventory. You can choose to insure one or both depending on your needs." },
        { question: "What is the difference between property insurance and home insurance?", answer: "Property insurance is a broader term that covers commercial and residential properties. Home insurance is specifically for residential properties and typically includes coverage for household contents, while commercial property insurance covers business assets." },
        { question: "How is the premium for property insurance calculated?", answer: "Premiums are calculated based on the property's value, location, construction type (RCC vs non-RCC), age of the building, occupancy type, and coverage options selected. Properties in high-risk areas may have higher premiums." },
      ]}
      ctaText="Protect Your Property Today!"
    />
  );
}