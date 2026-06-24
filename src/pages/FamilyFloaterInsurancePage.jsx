import { Users, Shield, CheckCircle2, Clock, Award, Zap, Baby, Heart, FileText, Activity, Wallet } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function FamilyFloaterInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Family Floater Insurance"
      subtitle="Cover your entire family under one shared health plan."
      description="Family health insurance with shared sum insured, maternity benefits, and cashless hospitalization. Protect your loved ones starting at affordable premiums."
      heroIcon={Users}
      heroImage="/src/assets/insurance-banners/family-floater-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Health Insurance", href: "/health-insurance" }, { label: "Family Floater Insurance" }]}
      productName="Family Floater Insurance"
      introduction="Your family's health and well-being are priceless, and rising medical costs in India make it essential to have comprehensive health coverage for your entire family. At THIRU Insurance, our Family Floater Insurance plan is designed to cover your whole family under a single policy with a shared sum insured. This means your spouse, children, and sometimes even parents can be covered under one affordable plan, making it one of the most popular and cost-effective health insurance choices for Indian families."
      whatIs="Family Floater Insurance is a health insurance policy that covers all members of a family under a single sum insured. Unlike individual policies where each member has a separate cover, a family floater plan allows any family member to use the total sum insured as needed. For example, if you have a ₹10 lakh family floater plan covering four members, any one member can claim up to ₹10 lakh if required. This makes it more flexible and cost-effective than buying separate individual policies for each family member. In India, family floater plans are popular among nuclear families looking for comprehensive yet affordable health coverage."
      benefits={[
        { icon: Shield, title: "Whole Family Cover", desc: "Cover your spouse, children, and parents under a single health insurance plan." },
        { icon: Zap, title: "Shared Sum Insured", desc: "Any family member can use the total sum insured for maximum flexibility." },
        { icon: Clock, title: "Maternity Coverage", desc: "Coverage for maternity expenses including delivery and newborn care." },
        { icon: Award, title: "Newborn Auto-Cover", desc: "Newborn babies are automatically covered from day one of birth." },
        { icon: CheckCircle2, title: "Cashless Hospitalization", desc: "Admit at 10,000+ network hospitals without paying anything upfront." },
        { icon: Wallet, title: "Cost-Effective", desc: "Save up to 30% compared to buying individual policies for each member." },
        { icon: Baby, title: "Immunization Benefits", desc: "Coverage for child vaccination and immunization expenses." },
        { icon: Activity, title: "Annual Health Check-ups", desc: "Free preventive health check-ups for all covered family members." },
      ]}
      coverage={[
        { label: "Hospitalization Expenses", desc: "Room rent, ICU, surgeon fees, medicines for all family members" },
        { label: "Maternity & Newborn Cover", desc: "Delivery expenses, newborn care from day 1 of birth" },
        { label: "Pre & Post Hospitalization", desc: "30 days before and 60 days after hospitalization expenses" },
        { label: "Day Care Procedures", desc: "150+ day care surgeries covered without hospitalization" },
        { label: "Ambulance Charges", desc: "Emergency ambulance cover up to ₹5,000 per hospitalization" },
        { label: "Health Check-ups", desc: "Annual preventive check-ups for all covered members" },
        { label: "AYUSH Treatment", desc: "Coverage for Ayurveda, Yoga, Unani, Siddha, Homeopathy treatments" },
      ]}
      exclusions={[
        { label: "Pre-Existing Diseases", desc: "Covered after 2-4 years waiting period for all members" },
        { label: "Specific Waiting Period", desc: "Conditions like cataract, hernia have 2-year waiting period" },
        { label: "Cosmetic Treatments", desc: "Elective cosmetic or plastic surgeries not covered" },
        { label: "Dental Treatment", desc: "Routine dental检查和treatment not covered unless accidental" },
        { label: "War & Nuclear Risks", desc: "Injuries due to war, invasion, or nuclear incidents" },
        { label: "Self-Inflicted Injuries", desc: "Injuries from self-harm or suicide attempts" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All family floater plans from IRDAI-approved insurers." },
        { icon: Award, title: "2 Lakh+ Families Covered", desc: "Trusted by over 2 lakh families across India." },
        { icon: Zap, title: "Instant Policy Issuance", desc: "Get your family health policy in minutes online." },
        { icon: Users, title: "10,000+ Network Hospitals", desc: "Cashless treatment at top hospitals nationwide." },
        { icon: Clock, title: "24/7 Family Support", desc: "Dedicated claim manager for your family's needs." },
        { icon: FileText, title: "Paperless Process", desc: "100% digital documentation for the entire family." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Family Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Number of Family Members *</label>
              <input type="number" name="familyMembers" required placeholder="e.g. 4" min="2" max="10" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Adults Count *</label>
              <input type="number" name="adultsCount" required placeholder="e.g. 2" min="1" max="5" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Children Count *</label>
              <input type="number" name="childrenCount" required placeholder="e.g. 2" min="0" max="5" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Oldest Member Age *</label>
              <input type="number" name="oldestAge" required placeholder="e.g. 45" min="18" max="80" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
        </div>
      }
      faqs={[
        { question: "What is a family floater health insurance plan?", answer: "A family floater plan covers your entire family under a single sum insured. All members share the total coverage amount, and any member can use it as needed. It's more cost-effective than buying individual policies for each family member." },
        { question: "Who can be covered under a family floater plan?", answer: "Typically, the policyholder, spouse, children, and dependent parents can be covered. Some insurers also allow siblings and in-laws. Children are usually covered from 3 months to 25 years of age." },
        { question: "Is maternity coverage included in family floater plans?", answer: "Yes, most family floater plans offer maternity coverage after a waiting period of 9-24 months. This includes delivery expenses, pre and post-natal care, and newborn coverage from day one." },
        { question: "Can I add a newborn baby to my family floater plan?", answer: "Yes, most insurers automatically cover newborn babies from day one of birth. You need to inform the insurer within 30-90 days of birth to add the baby to your policy." },
        { question: "How is family floater different from individual health insurance?", answer: "In individual plans, each person has a dedicated sum insured. In a family floater, all members share one sum insured. A floater is cheaper but if one member uses a large portion, less cover remains for others. Individual plans cost more but give each person their own cover." },
      ]}
      ctaText="Protect Your Family Today!"
    />
  );
}