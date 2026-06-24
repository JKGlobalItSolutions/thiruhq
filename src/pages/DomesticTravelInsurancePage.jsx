import { Plane, Shield, CheckCircle2, Clock, Award, Zap, MapPin, Luggage, Heart, Users } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function DomesticTravelInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Domestic Travel Insurance"
      subtitle="Complete travel protection for your trips within India."
      description="Travel insurance with trip cancellation, medical emergencies, baggage loss, and flight delay cover. Peace of mind starting from just ₹99/day."
      heroIcon={Plane}
      heroImage="/src/assets/insurance-banners/domestic-travel-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Travel Insurance", href: "/travel-insurance" }, { label: "Domestic Travel Insurance" }]}
      productName="Domestic Travel Insurance"
      introduction="Whether you're traveling for business or leisure, domestic travel within India comes with its own set of risks — flight delays, lost baggage, medical emergencies, and trip cancellations. Domestic Travel Insurance protects you against these unforeseen events, ensuring that your trip goes smoothly no matter what. At THIRU Insurance, we offer affordable domestic travel insurance plans that cover every aspect of your journey within India, giving you complete peace of mind."
      whatIs="Domestic Travel Insurance is a short-term insurance policy that covers you against financial losses and emergencies during your travel within India. It provides coverage for trip cancellation or interruption, loss of checked-in baggage, flight delays, medical emergencies, accidental death, and personal liability. Unlike international travel insurance, domestic plans are designed for travel within Indian borders and are typically available for single trips or annual multi-trip coverage. With the increasing frequency of domestic travel in India, having travel insurance has become essential for every traveler."
      benefits={[
        { icon: Shield, title: "Trip Cancellation Cover", desc: "Get reimbursed for non-refundable expenses if your trip is cancelled due to illness or emergency." },
        { icon: Heart, title: "Medical Emergency Cover", desc: "Coverage for medical emergencies, hospitalization, and doctor consultations during travel." },
        { icon: Zap, title: "Flight Delay Protection", desc: "Compensation for flight delays of 4+ hours with daily allowance." },
        { icon: Award, title: "Baggage Loss Cover", desc: "Coverage for lost, stolen, or damaged checked-in baggage up to ₹25,000." },
        { icon: Clock, title: "24/7 Travel Assistance", desc: "Round-the-clock helpline for medical, legal, and travel emergencies." },
        { icon: MapPin, title: "Multi-Trip Options", desc: "Annual multi-trip plans for frequent travelers at discounted rates." },
        { icon: CheckCircle2, title: "Personal Accident Cover", desc: "Coverage for accidental death or permanent disability during travel." },
        { icon: Users, title: "Family Coverage", desc: "Single plan can cover your entire family traveling together." },
      ]}
      coverage={[
        { label: "Trip Cancellation", desc: "Non-refundable travel expenses if trip cancelled due to covered reasons" },
        { label: "Trip Interruption", desc: "Additional expenses to return home or continue trip after interruption" },
        { label: "Medical Expenses", desc: "Hospitalization, doctor fees, and medicines during travel" },
        { label: "Baggage Loss", desc: "Loss, theft, or damage to checked-in baggage up to ₹25,000" },
        { label: "Flight Delay", desc: "Daily allowance for flight delays of 4 hours or more" },
        { label: "Personal Accident", desc: "Coverage for accidental death or permanent disability" },
        { label: "Personal Liability", desc: "Legal liability for accidental injury to others or property damage" },
      ]}
      exclusions={[
        { label: "Pre-Existing Conditions", desc: "Medical conditions existing before trip are not covered" },
        { label: "Reckless Behavior", desc: "Injuries due to reckless or illegal activities" },
        { label: "Adventure Sports", desc: "Injuries from high-risk adventure activities unless add-on purchased" },
        { label: "Alcohol & Drugs", desc: "Incidents related to alcohol or drug consumption" },
        { label: "War & Terrorism", desc: "Losses due to war, invasion, or terrorist acts" },
        { label: "Non-Refundable Items", desc: "Items left unattended or unclaimed baggage" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All travel plans from IRDAI-approved insurance companies." },
        { icon: Award, title: "1 Lakh+ Trips Covered", desc: "Trusted by over 1 lakh travelers across India." },
        { icon: Zap, title: "Instant Policy Issuance", desc: "Get your travel insurance in minutes — fully digital." },
        { icon: Users, title: "24/7 Helpline", desc: "Round-the-clock travel assistance helpline in India." },
        { icon: Clock, title: "Quick Claim Settlement", desc: "Claims processed within 48 hours with minimal docs." },
        { icon: MapPin, title: "Pan India Coverage", desc: "Coverage valid anywhere within Indian territory." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Travel Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Destination *</label>
              <input type="text" name="destination" required placeholder="e.g. Goa, Manali, Kerala" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Travel Date *</label>
              <input type="date" name="travelDate" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Return Date *</label>
              <input type="date" name="returnDate" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Number of Travellers *</label>
              <input type="number" name="travellers" required placeholder="e.g. 2" min="1" max="20" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
        </div>
      }
      faqs={[
        { question: "Do I need travel insurance for domestic travel in India?", answer: "While not mandatory, domestic travel insurance is highly recommended. It protects you against trip cancellations, flight delays, lost baggage, and medical emergencies during travel — all for a very small premium." },
        { question: "What does domestic travel insurance cover?", answer: "It covers trip cancellation or interruption, flight delays, loss of baggage, medical emergencies, personal accidents, and personal liability. Some plans also offer coverage for adventure activities." },
        { question: "How much does domestic travel insurance cost?", answer: "Domestic travel insurance is very affordable, starting from just ₹99 per day for basic coverage. Annual multi-trip plans are available for frequent travelers at discounted rates." },
        { question: "Can I buy travel insurance for a one-way trip?", answer: "Yes, domestic travel insurance can be purchased for one-way trips as well. The coverage typically starts from the time you begin your journey and ends when you reach your destination." },
        { question: "Does domestic travel insurance cover COVID-19?", answer: "Yes, most domestic travel insurance plans now offer coverage for COVID-19 related medical expenses and trip cancellations due to COVID-19 diagnosis." },
      ]}
      ctaText="Travel Worry-Free in India!"
    />
  );
}