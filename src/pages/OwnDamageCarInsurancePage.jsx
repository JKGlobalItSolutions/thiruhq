import { Shield, Car, CheckCircle2, Clock, Award, Zap, Users, FileText, Wallet, Headphones } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function OwnDamageCarInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Own Damage Car Insurance"
      subtitle="Protect your car from accidents, theft, fire & natural disasters."
      description="Comprehensive own damage coverage for your vehicle. Get financial protection against unexpected damage with affordable premiums."
      heroIcon={Shield}
      heroImage="/src/assets/insurance-banners/own-damage-car-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Car Insurance", href: "/car-insurance" }, { label: "Own Damage Insurance" }]}
      productName="Own Damage Car Insurance"
      introduction="Own Damage Car Insurance is a critical component of a comprehensive car insurance policy that specifically covers damage to your own vehicle. Whether it's an accident, theft, fire, flood, or vandalism, this coverage ensures that your car's repair or replacement costs are taken care of. At THIRU Insurance, we offer affordable own damage cover that gives you complete financial protection for your vehicle."
      whatIs="Own Damage Car Insurance covers the cost of repairing or replacing your own vehicle in case of damage caused by accidents, theft, fire, explosion, natural calamities like floods and earthquakes, or man-made events like riots and strikes. This is the part of comprehensive insurance that protects your car itself, as opposed to third-party insurance which only covers damage to others. The premium for own damage cover is calculated based on the Insured Declared Value (IDV) of your vehicle."
      benefits={[
        { icon: Shield, title: "Vehicle Protection", desc: "Covers damage to your car from accidents, theft, fire, and disasters." },
        { icon: Zap, title: "Cashless Repairs", desc: "Get your car repaired at network garages without upfront payment." },
        { icon: Award, title: "IDV Protection", desc: "Get the insured value of your car in case of total loss or theft." },
        { icon: Clock, title: "24/7 Claim Support", desc: "Round-the-clock claim assistance with fast processing." },
        { icon: Wallet, title: "Affordable Premium", desc: "Own damage cover at competitive rates with flexible payment options." },
        { icon: CheckCircle2, title: "Add-on Flexibility", desc: "Add zero depreciation, engine protect, and other covers." },
      ]}
      coverage={[
        { label: "Accident Damage", desc: "Damage caused by collision or accident to your vehicle" },
        { label: "Theft of Vehicle", desc: "Full IDV paid if your car is stolen and not recovered" },
        { label: "Fire & Explosion", desc: "Damage caused by fire, lightning, or explosion" },
        { label: "Natural Calamities", desc: "Floods, earthquakes, cyclones, landslides, and storms" },
        { label: "Malicious Acts", desc: "Damage from riots, strikes, terrorism, or vandalism" },
        { label: "Transit Risks", desc: "Damage during transit by rail, road, air, or water" },
      ]}
      exclusions={[
        { label: "Mechanical Failure", desc: "Engine or mechanical breakdown not caused by accident" },
        { label: "Normal Wear & Tear", desc: "Depreciation and regular wear and tear of parts" },
        { label: "Drunk Driving", desc: "Accidents under influence of alcohol or drugs" },
        { label: "Unauthorized Driver", desc: "Vehicle driven without valid license or permit" },
        { label: "Contractual Liability", desc: "Liability assumed under any contract or agreement" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All policies from authorized insurance companies." },
        { icon: Award, title: "50,000+ Claims Settled", desc: "Proven track record of quick claim settlements." },
        { icon: Users, title: "5000+ Network Garages", desc: "Cashless repairs at authorized garages across India." },
        { icon: FileText, title: "Digital Process", desc: "100% paperless from quote to claim settlement." },
        { icon: Headphones, title: "24/7 Support", desc: "Dedicated claim manager available around the clock." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Vehicle Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Vehicle Number *</label>
              <input type="text" name="vehicleNumber" required placeholder="e.g. DL 03 EF 4567" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Car Make & Model *</label>
              <input type="text" name="makeModel" required placeholder="e.g. Toyota Fortuner" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Vehicle Age (Years) *</label>
              <input type="number" name="vehicleAge" required placeholder="e.g. 3" min="0" max="15" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Existing Insurer</label>
              <input type="text" name="existingInsurer" placeholder="e.g. HDFC Ergo" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
        </div>
      }
      faqs={[
        { question: "What is own damage cover in car insurance?", answer: "Own damage cover is the part of comprehensive insurance that covers damage to your own vehicle due to accidents, theft, fire, natural calamities, and other covered events. It's the main component that protects your car." },
        { question: "Is own damage cover mandatory?", answer: "No, only third-party insurance is legally mandatory. However, if you take a loan to buy your car, the bank will require comprehensive insurance which includes own damage cover." },
        { question: "How is own damage premium calculated?", answer: "The premium is calculated as a percentage of your car's Insured Declared Value (IDV), which is approximately the current market value of your vehicle." },
        { question: "Can I buy only own damage cover without third-party?", answer: "No, own damage cover is always bundled with third-party cover in a comprehensive policy. You cannot buy own damage cover as a standalone policy." },
        { question: "Does own damage cover engine damage from water?", answer: "Standard own damage cover does not include water ingression to engine. You need an 'Engine Protector' add-on for that specific coverage." },
      ]}
      ctaText="Protect Your Car Today!"
    />
  );
}