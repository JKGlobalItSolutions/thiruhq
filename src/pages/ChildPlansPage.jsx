import { GraduationCap, Shield, CheckCircle2, Clock, Award, Zap, Heart, PiggyBank, Baby, Users } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function ChildPlansPage() {
  return (
    <InsurancePageTemplate
      title="Child Plans"
      subtitle="Secure your child's future with education & financial protection."
      description="Child education and financial protection plans with guaranteed payouts, premium waiver, and maturity benefits. Invest in your child's dreams starting from just ₹1,500/month."
      heroIcon={GraduationCap}
      heroImage="/src/assets/insurance-banners/child-plans.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Life Insurance", href: "/life-insurance" }, { label: "Child Plans" }]}
      productName="Child Plans"
      introduction="Every parent dreams of giving their child the best education and a bright future. But with rising education costs in India — where a top MBA can cost ₹25 lakh and medical education can exceed ₹1 crore — it's never too early to start planning. At THIRU Insurance, our Child Plans are designed to ensure that your child's dreams are fulfilled no matter what life throws your way. These plans combine life insurance coverage for you as a parent with a savings component that grows into a substantial fund for your child's future milestones."
      whatIs="Child Plans are specialized life insurance policies designed to secure your child's financial future. Unlike regular life insurance, these plans focus on creating a corpus for your child's important life milestones — higher education, marriage, or starting a business. The plan provides life cover for the parent (policyholder), ensuring that if something happens to you, your child's future is still financially secure through the premium waiver benefit. Child plans offer a combination of guaranteed payouts at specific intervals (like for college admission or graduation) and a lump sum maturity benefit. In India, child plans are popular among parents who want a disciplined approach to saving for their children's future while ensuring financial protection."
      benefits={[
        { icon: Shield, title: "Premium Waiver Benefit", desc: "If something happens to you, all future premiums are waived and the policy continues." },
        { icon: GraduationCap, title: "Education Fund", desc: "Guaranteed payouts at key milestones like college admission and graduation." },
        { icon: Award, title: "Lump Sum at Maturity", desc: "Get full sum assured plus bonuses at policy maturity for your child." },
        { icon: Clock, title: "Regular Payouts", desc: "Receive periodic payouts at ages 18, 21, 25 for different education stages." },
        { icon: PiggyBank, title: "Guaranteed Returns", desc: "Enjoy guaranteed additions and bonuses that compound over time." },
        { icon: Zap, title: "Flexible Premium Terms", desc: "Choose premium payment terms from 5 to 15 years as per your capacity." },
        { icon: Heart, title: "Financial Protection", desc: "Your child's future is protected even in your absence." },
        { icon: Users, title: "Tax Benefits", desc: "Premium deductions under Section 80C and tax-free maturity under 10(10D)." },
      ]}
      coverage={[
        { label: "Death Benefit", desc: "Sum assured paid to the child's guardian if parent passes away during policy term" },
        { label: "Premium Waiver", desc: "All future premiums waived on parent's death, policy continues unchanged" },
        { label: "Maturity Benefit", desc: "Accumulated sum assured + bonuses paid to child at policy maturity" },
        { label: "Education Payouts", desc: "Periodic payouts at ages 18, 21, and 25 for education milestones" },
        { label: "Accidental Death Rider", desc: "Additional sum assured in case of accidental death of the parent" },
        { label: "Critical Illness Rider", desc: "Premium waiver if parent is diagnosed with a critical illness" },
      ]}
      exclusions={[
        { label: "Suicide Clause", desc: "No claim if suicide occurs within 12 months of policy commencement" },
        { label: "Misrepresentation", desc: "Non-disclosure of health conditions or false information" },
        { label: "High-Risk Activities", desc: "Death due to participation in hazardous activities" },
        { label: "War & Nuclear Incidents", desc: "Death due to war, invasion, or nuclear radiation" },
        { label: "Alcohol & Drug Abuse", desc: "Death related to alcohol or substance abuse" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All child plans from IRDAI-approved life insurance companies." },
        { icon: Award, title: "1 Lakh+ Children Covered", desc: "Trusted by over 1 lakh parents for their children's future." },
        { icon: Zap, title: "Online Purchase", desc: "Easy online purchase with instant policy issuance." },
        { icon: Users, title: "Premium Waiver Guarantee", desc: "Your child's future is protected no matter what." },
        { icon: Clock, title: "Dedicated Support", desc: "Relationship manager to help you through the policy term." },
        { icon: FileText, title: "Transparent Plans", desc: "Clear terms, guaranteed additions, and no hidden charges." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Child Plan Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Parent Name *</label>
              <input type="text" name="parentName" required placeholder="Your full name" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Child Name *</label>
              <input type="text" name="childName" required placeholder="Child's full name" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Child Age *</label>
              <input type="number" name="childAge" required placeholder="e.g. 5" min="0" max="21" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Education Goal *</label>
              <select name="educationGoal" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="higher-education">Higher Education (College)</option>
                <option value="professional-degree">Professional Degree (MBA/MD)</option>
                <option value="study-abroad">Study Abroad</option>
                <option value="marriage">Marriage</option>
                <option value="multiple">Multiple Goals</option>
              </select>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Investment Amount *</label>
              <select name="investmentAmount" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="1500-month">₹1,500/month</option>
                <option value="3000-month">₹3,000/month</option>
                <option value="5000-month">₹5,000/month</option>
                <option value="10000-month">₹10,000/month</option>
                <option value="above">Above ₹10,000/month</option>
              </select>
            </div>
          </div>
        </div>
      }
      faqs={[
        { question: "What is a child plan in insurance?", answer: "A child plan is a life insurance policy that helps you save for your child's future goals like education and marriage. It provides life cover for the parent and guarantees payouts to the child at important milestones, even if something happens to the parent." },
        { question: "What is the premium waiver benefit in child plans?", answer: "The premium waiver benefit ensures that if the parent (policyholder) passes away during the policy term, all future premiums are waived. The policy continues as normal, and all benefits are paid to the child at the scheduled times." },
        { question: "At what age does my child receive the payouts?", answer: "Payouts are typically scheduled at ages 18 (for college admission), 21 (for graduation), and 25 (for higher studies or marriage). The final lump sum maturity benefit is paid at policy maturity, usually when the child turns 25." },
        { question: "Can I invest more than the regular premium in child plans?", answer: "Some child plans allow top-up premiums or additional contributions to increase the corpus. Check with your advisor about the specific plan's flexibility for additional investments." },
        { question: "Are child plan returns taxable?", answer: "The maturity benefits received from a child plan are tax-free under Section 10(10D) of the Income Tax Act, provided the premium does not exceed 10% of the sum assured. Premiums paid are eligible for deduction under Section 80C." },
      ]}
      ctaText="Secure Your Child's Future Today!"
    />
  );
}