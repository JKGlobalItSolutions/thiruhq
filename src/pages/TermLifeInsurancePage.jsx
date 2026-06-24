import { Shield, CheckCircle2, Clock, Award, Zap, Users, FileText, Wallet, Heart, TrendingUp } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function TermLifeInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Term Life Insurance"
      subtitle="Secure your family's future with high coverage at low cost."
      description="Term life insurance with life cover up to ₹10 crore. Affordable premiums, instant issuance, tax benefits, and optional critical illness riders."
      heroIcon={Shield}
      heroImage="/src/assets/insurance-banners/term-life-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Life Insurance", href: "/life-insurance" }, { label: "Term Life Insurance" }]}
      productName="Term Life Insurance"
      introduction="Life is unpredictable, but your family's financial future doesn't have to be. Term Life Insurance is the simplest and most affordable way to ensure that your loved ones are financially protected in your absence. At THIRU Insurance, we offer high-coverage term plans with premiums starting as low as ₹499 per month, making it accessible for every Indian to secure their family's future. Whether you're a young professional or a seasoned earner, our term insurance plans provide the financial safety net your family deserves."
      whatIs="Term Life Insurance is a pure protection plan that provides financial security to your family in case of your untimely demise during the policy term. If the policyholder passes away within the policy period, the nominee receives the full sum assured as a lump sum payment. Unlike other life insurance products, term insurance has no maturity benefit — it is purely designed for protection. This makes it the most affordable type of life insurance, offering high coverage at very low premiums. In India, term insurance is recommended by financial experts as the foundation of any financial plan, with coverage ideally being 10-15 times your annual income."
      benefits={[
        { icon: Shield, title: "High Coverage, Low Premium", desc: "Get life cover up to ₹10 crore at premiums starting from just ₹499/month." },
        { icon: Zap, title: "Instant Policy Issuance", desc: "100% paperless policy issuance in minutes with instant e-policy delivery." },
        { icon: Clock, title: "Flexible Policy Tenure", desc: "Choose policy tenure from 10 to 40 years to match your financial goals." },
        { icon: Award, title: "Tax Benefits", desc: "Claim deductions under Section 80C and tax-free payout under 10(10D)." },
        { icon: CheckCircle2, title: "Critical Illness Rider", desc: "Add critical illness cover for enhanced protection against major diseases." },
        { icon: Wallet, title: "Affordable Premiums", desc: "Pure protection at lowest cost — the most affordable life insurance option." },
        { icon: Users, title: "Multiple Payout Options", desc: "Choose lump sum, monthly income, or combination payout for nominees." },
        { icon: Heart, title: "Accidental Death Benefit", desc: "Double coverage in case of accidental death with the accident rider." },
      ]}
      coverage={[
        { label: "Death Benefit", desc: "Full sum assured paid to nominee on policyholder's death during policy term" },
        { label: "Terminal Illness Benefit", desc: "Advanced payout if diagnosed with terminal illness with <12 months life expectancy" },
        { label: "Accidental Death Rider", desc: "Additional sum assured in case of accidental death" },
        { label: "Critical Illness Rider", desc: "Lump sum payout on diagnosis of covered critical illnesses" },
        { label: "Disability Waiver", desc: "Future premiums waived in case of total and permanent disability" },
        { label: "Income Benefit Option", desc: "Regular monthly income to family instead of lump sum payout" },
      ]}
      exclusions={[
        { label: "Suicide Clause", desc: "No claim payable if suicide occurs within 12 months of policy start" },
        { label: "Misrepresentation", desc: "Non-disclosure of health conditions or false information at application" },
        { label: "High-Risk Activities", desc: "Death during illegal activities or high-risk adventure sports" },
        { label: "War & Nuclear Risks", desc: "Death due to war, invasion, or nuclear incidents" },
        { label: "Alcohol & Substance Abuse", desc: "Death related to alcohol or drug abuse" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All term plans from IRDAI-approved life insurance companies." },
        { icon: Award, title: "5 Lakh+ Lives Covered", desc: "Trusted by over 5 lakh policyholders across India." },
        { icon: Zap, title: "5-Minute Issuance", desc: "Get your term life policy in just 5 minutes online." },
        { icon: Users, title: "Hassle-Free Claims", desc: "Claim settlement within 24 hours with minimal documentation." },
        { icon: Clock, title: "24/7 Customer Support", desc: "Round-the-clock support for policy and claim queries." },
        { icon: FileText, title: "Digital Dashboard", desc: "Manage your policy, view statements, and track claims online." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Personal Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Date of Birth *</label>
              <input type="date" name="dob" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Occupation *</label>
              <input type="text" name="occupation" required placeholder="e.g. Software Engineer" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Annual Income *</label>
              <select name="annualIncome" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="below-3-lakh">Below ₹3 Lakh</option>
                <option value="3-5-lakh">₹3 - ₹5 Lakh</option>
                <option value="5-10-lakh">₹5 - ₹10 Lakh</option>
                <option value="10-25-lakh">₹10 - ₹25 Lakh</option>
                <option value="above-25-lakh">Above ₹25 Lakh</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Smoking Status *</label>
              <select name="smokingStatus" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="non-smoker">Non-Smoker</option>
                <option value="smoker">Smoker</option>
                <option value="occasional">Occasional</option>
              </select>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-[#14204A]">Coverage Amount Required *</label>
            <select name="coverageAmount" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
              <option value="">Select</option>
              <option value="25-lakh">₹25 Lakh</option>
              <option value="50-lakh">₹50 Lakh</option>
              <option value="1-crore">₹1 Crore</option>
              <option value="2-crore">₹2 Crore</option>
              <option value="5-crore">₹5 Crore</option>
              <option value="10-crore">₹10 Crore</option>
            </select>
          </div>
        </div>
      }
      faqs={[
        { question: "What is term life insurance and how does it work?", answer: "Term life insurance is a pure protection plan where you pay premiums for a fixed term (e.g., 20-30 years). If you pass away during the term, your nominee gets the full sum assured. There's no maturity benefit, which keeps premiums very affordable." },
        { question: "How much term insurance cover do I need?", answer: "Financial experts recommend a cover of 10-15 times your annual income. For example, if you earn ₹10 lakh per year, you should have a cover of at least ₹1 crore. Consider your outstanding loans, children's education, and family's monthly expenses." },
        { question: "Can I claim tax benefits on term insurance premiums?", answer: "Yes, premiums paid for term insurance are eligible for deduction under Section 80C up to ₹1.5 lakh. The death benefit received by your nominee is completely tax-free under Section 10(10D)." },
        { question: "What happens if I stop paying premiums?", answer: "If you stop paying premiums after the first year, the policy enters a grace period of 30 days. If premiums are still not paid, the policy lapses. Some plans offer a revival period of 2-3 years where you can resume the policy by paying dues." },
        { question: "Is term insurance better than ULIP or endowment plans?", answer: "For pure protection, term insurance is the best choice as it offers the highest coverage at the lowest cost. ULIPs and endowment plans combine insurance with investment but have higher premiums. Many experts recommend buying term insurance separately and investing the difference." },
      ]}
      ctaText="Secure Your Family's Future!"
    />
  );
}