import { Truck, Shield, CheckCircle2, Clock, Award, Zap, Users, FileText, Warehouse, Activity } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function CommercialVehicleInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Commercial Vehicle Insurance"
      subtitle="Complete fleet protection for trucks, vans & commercial vehicles."
      description="Commercial vehicle insurance with own damage, third-party coverage, fleet discounts, and 24/7 roadside assistance. Cover your business vehicles starting from just ₹5,000/year."
      heroIcon={Truck}
      heroImage="/src/assets/insurance-banners/commercial-vehicle-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Business Insurance", href: "/business-insurance" }, { label: "Commercial Vehicle Insurance" }]}
      productName="Commercial Vehicle Insurance"
      introduction="If your business relies on commercial vehicles — whether it's a single delivery van or a fleet of trucks — protecting those vehicles is essential for business continuity. Commercial Vehicle Insurance is specifically designed to meet the unique needs of businesses that operate vehicles for commercial purposes. At THIRU Insurance, we offer comprehensive commercial vehicle insurance plans that cover goods carriers, passenger vehicles, and fleet operations with tailored coverage options."
      whatIs="Commercial Vehicle Insurance is a specialized motor insurance policy designed for vehicles used for commercial purposes such as goods carriage, passenger transport, or business operations. Unlike personal vehicle insurance, commercial vehicle policies cover higher risks due to increased mileage, usage, and exposure. In India, it is mandatory for all commercial vehicles to have at least third-party insurance under the Motor Vehicles Act, 1988. Commercial vehicle insurance can cover trucks, tempos, vans, buses, taxis, auto-rickshaws, and other vehicles used for business purposes."
      benefits={[
        { icon: Shield, title: "Fleet Discounts", desc: "Special discounted premiums for businesses with 5+ commercial vehicles." },
        { icon: Award, title: "Third-Party Cover", desc: "Comprehensive liability coverage against third-party property damage and injury." },
        { icon: Zap, title: "Own Damage Cover", desc: "Protection for your commercial vehicles against accidents, theft, and fire." },
        { icon: Clock, title: "24/7 Roadside Assistance", desc: "Round-the-clock breakdown assistance including towing and spot repairs." },
        { icon: CheckCircle2, title: "Goods in Transit", desc: "Coverage for goods and cargo being transported in the vehicle." },
        { icon: Warehouse, title: "Driver Cover", desc: "Personal accident cover for the driver and cleaner of the vehicle." },
        { icon: Users, title: "Cashless Repairs", desc: "Repairs at 5,000+ network garages across India with cashless facility." },
        { icon: Activity, title: "NCB Benefits", desc: "No Claim Bonus up to 20% for claim-free years on commercial vehicles." },
      ]}
      coverage={[
        { label: "Own Damage Cover", desc: "Damage to commercial vehicle from accident, fire, theft, or natural calamities" },
        { label: "Third-Party Liability", desc: "Legal liability for injury or property damage to third parties" },
        { label: "Goods in Transit", desc: "Loss or damage to goods and cargo being transported" },
        { label: "Personal Accident Cover", desc: "Coverage for driver, cleaner, and passengers for accidental death/disability" },
        { label: "Fire & Explosion", desc: "Damage caused by fire, lightning, self-ignition, or explosion" },
        { label: "Theft Protection", desc: "Full IDV paid if the commercial vehicle is stolen and not recovered" },
        { label: "Natural Calamities", desc: "Coverage for floods, earthquakes, cyclones, and storms" },
      ]}
      exclusions={[
        { label: "Overloading", desc: "Vehicle operated beyond permitted load capacity" },
        { label: "Unauthorized Use", desc: "Vehicle used outside the permitted area or for unauthorized purposes" },
        { label: "Driver Without License", desc: "Vehicle driven by person without valid commercial driving license" },
        { label: "Mechanical Breakdown", desc: "Normal wear and tear, engine breakdown, or mechanical failure" },
        { label: "War & Nuclear Risks", desc: "Damage due to war, invasion, or nuclear incidents" },
        { label: "Permit Violation", desc: "Operating without valid permits or beyond permitted routes" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All commercial vehicle policies from IRDAI-approved insurers." },
        { icon: Award, title: "5,000+ Fleet Owners", desc: "Trusted by over 5,000 commercial vehicle owners in India." },
        { icon: Zap, title: "Fleet Management Portal", desc: "Dedicated portal to manage all your vehicles in one place." },
        { icon: Users, title: "Quick Claim Settlement", desc: "Claims processed within 48 hours for fleet customers." },
        { icon: Clock, title: "24/7 Support", desc: "Dedicated support team for commercial vehicle policyholders." },
        { icon: FileText, title: "Bulk Policy Renewal", desc: "Easy renewal for entire fleet with single payment." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Business Vehicle Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Vehicle Type *</label>
              <select name="vehicleType" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="truck">Truck / Lorry</option>
                <option value="van">Delivery Van</option>
                <option value="tempo">Tempo / Loader</option>
                <option value="bus">Bus / Minibus</option>
                <option value="taxi">Taxi / Cab</option>
                <option value="other">Other Commercial</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Registration Number *</label>
              <input type="text" name="regNumber" required placeholder="e.g. TN 01 AB 1234" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Fleet Size (Total Vehicles) *</label>
              <input type="number" name="fleetSize" required placeholder="e.g. 1" min="1" max="500" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Business Name *</label>
              <input type="text" name="businessName" required placeholder="Your business name" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
        </div>
      }
      faqs={[
        { question: "Is commercial vehicle insurance mandatory?", answer: "Yes, as per the Motor Vehicles Act, 1988, all commercial vehicles must have at least third-party insurance. Driving a commercial vehicle without insurance can result in fines, impoundment, and legal action." },
        { question: "What is the difference between commercial and personal vehicle insurance?", answer: "Commercial vehicle insurance covers higher risks due to more frequent usage, higher mileage, and cargo transportation. Premiums are higher for commercial vehicles, but the coverage includes goods in transit and driver cover." },
        { question: "Can I get fleet insurance for my business?", answer: "Yes, if you have 5 or more commercial vehicles, you can opt for a fleet insurance policy that covers all vehicles under a single plan with discounted premiums." },
        { question: "Does commercial vehicle insurance cover goods in transit?", answer: "Yes, comprehensive commercial vehicle insurance includes coverage for goods and cargo being transported. However, you may need to declare the value of goods for adequate coverage." },
        { question: "What is the No Claim Bonus (NCB) for commercial vehicles?", answer: "Unlike personal vehicles (up to 50%), commercial vehicles typically earn up to 20% NCB for claim-free years. The bonus is applicable on the own damage premium only." },
      ]}
      ctaText="Protect Your Commercial Fleet!"
    />
  );
}