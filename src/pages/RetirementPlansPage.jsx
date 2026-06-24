import { Wallet, Shield, CheckCircle2, Clock, Award, Zap, TrendingUp, PiggyBank, Users, FileText } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function RetirementPlansPage() {
  return (
    <InsurancePageTemplate
      title="Retirement Plans"
      subtitle="Build your retirement corpus with guaranteed pension & returns."
      description="Retirement and pension plans with guaranteed returns, regular income, tax benefits. Start planning from ₹2,000/month. Secure your golden years with financial freedom."
      heroIcon={Wallet}
      heroImage="/src/assets/insurance-banners/retirement-plans.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Life Insurance", href: "/life-insurance" }, { label: "Retirement Plans" }]}
      productName="Retirement Plans"
      introduction="Retirement may seem far away, but the earlier you start planning, the more comfortable your golden years will be. With increasing life expectancy and rising healthcare costs in India, having a robust retirement plan is no longer a luxury — it's a necessity. At THIRU Insurance, our Retirement Plans help you build a substantial corpus through systematic savings, guaranteed returns, and regular pension payouts, ensuring that you can retire with dignity and financial independence."
      whatIs="Retirement Plans, also known as pension plans, are long-term insurance-cum-investment products designed to help you accumulate a retirement corpus during your working years and provide a regular income after retirement. These plans combine life insurance coverage with systematic savings, offering guaranteed additions and bonuses that grow your corpus over time. Upon retirement, you can receive a lump sum amount or convert your corpus into a regular pension (annuity) that provides monthly income for life. In India, retirement plans offer significant tax benefits under Section 80C, 80CCC, and 80CCD of the Income Tax Act, making them an essential part of retirement planning."
      benefits={[
        { icon: Shield, title: "Guaranteed Returns", desc: "Enjoy guaranteed additions and bonuses that grow your retirement corpus." },
        { icon: Wallet, title: "Regular Pension", desc: "Convert your corpus into a regular monthly pension after retirement." },
        { icon: PiggyBank, title: "Disciplined Savings", desc: "Build a substantial corpus through systematic long-term savings." },
        { icon: Zap, title: "Flexible Contribution", desc: "Choose contribution amount, frequency, and premium payment term." },
        { icon: Award, title: "Life Cover Included", desc: "Life insurance coverage throughout the policy term for financial protection." },
        { icon: Clock, title: "Partial Withdrawals", desc: "Access a portion of your corpus for emergencies before retirement." },
        { icon: TrendingUp, title: "Wealth Accumulation", desc: "Benefit from compounding returns over the long policy term." },
        { icon: Users, title: "Tax Benefits", desc: "Claim deductions under Section 80C, 80CCC, and 80CCD up to ₹2 lakh." },
      ]}
      coverage={[
        { label: "Maturity Benefit", desc: "Accumulated corpus paid as lump sum or converted to annuity at retirement" },
        { label: "Death Benefit", desc: "Sum assured + accumulated corpus paid to nominee if policyholder passes away" },
        { label: "Regular Pension", desc: "Monthly, quarterly, half-yearly, or yearly pension payments after retirement" },
        { label: "Guaranteed Additions", desc: "Annual guaranteed additions at a fixed percentage of sum assured" },
        { label: "Vesting Bonus", desc: "Additional bonus at retirement based on accumulated corpus" },
        { label: "Partial Withdrawal", desc: "Withdraw up to 25% of corpus for emergencies after 3 years" },
      ]}
      exclusions={[
        { label: "Suicide Clause", desc: "No claim if suicide occurs within 12 months of policy commencement" },
        { label: "Misrepresentation", desc: "Non-disclosure of material facts or false information" },
        { label: "Loans Not Available", desc: "Most retirement plans do not offer loan facilities" },
        { label: "War & Nuclear", desc: "Death due to war, invasion, or nuclear incidents" },
        { label: "Alcohol & Drug Abuse", desc: "Death related to alcohol or substance abuse" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All retirement plans from IRDAI-approved life insurers." },
        { icon: Award, title: "50,000+ Retirees Served", desc: "Trusted by over 50,000 retired individuals in India." },
        { icon: Zap, title: "Easy Online Setup", desc: "Start your retirement plan in minutes online." },
        { icon: Users, title: "Flexible Annuity Options", desc: "Choose from multiple pension payout options." },
        { icon: Clock, title: "Dedicated Advisor", desc: "Personal retirement advisor to help plan your future." },
        { icon: FileText, title: "Tax-Advantaged", desc: "Maximize your retirement savings with tax benefits." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Retirement Planning Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Current Age *</label>
              <input type="number" name="currentAge" required placeholder="e.g. 35" min="18" max="65" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Retirement Age *</label>
              <input type="number" name="retirementAge" required placeholder="e.g. 60" min="45" max="70" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Monthly Income (Current) *</label>
              <select name="monthlyIncome" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="below-25000">Below ₹25,000</option>
                <option value="25000-50000">₹25,000 - ₹50,000</option>
                <option value="50000-1lakh">₹50,000 - ₹1 Lakh</option>
                <option value="1-2lakh">₹1 Lakh - ₹2 Lakh</option>
                <option value="above-2lakh">Above ₹2 Lakh</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Retirement Corpus Goal *</label>
              <select name="corpusGoal" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="10-lakh">₹10 Lakh</option>
                <option value="25-lakh">₹25 Lakh</option>
                <option value="50-lakh">₹50 Lakh</option>
                <option value="1-crore">₹1 Crore</option>
                <option value="2-crore">₹2 Crore</option>
                <option value="5-crore">₹5 Crore+</option>
              </select>
            </div>
          </div>
        </div>
      }
      faqs={[
        { question: "When should I start planning for retirement?", answer: "The ideal time to start retirement planning is in your 20s or early 30s. The earlier you start, the more time your money has to grow through compounding. Even starting at age 35 can build a significant corpus by retirement age 60." },
        { question: "How much corpus do I need for a comfortable retirement?", answer: "A general rule is to aim for a corpus that is 20-30 times your annual expenses at retirement. For example, if your monthly expenses are ₹50,000 (₹6 lakh/year), target a corpus of ₹1.2-1.8 crore to maintain your lifestyle." },
        { question: "What is the difference between NPS and a retirement plan?", answer: "NPS is a government-backed pension scheme with market-linked returns and partial taxability on withdrawal. Retirement plans from insurance companies offer guaranteed returns, life cover, and completely tax-free maturity under Section 10(10D)." },
        { question: "Can I withdraw money from my retirement plan before retirement?", answer: "Yes, after paying premiums for at least 3 years, you can typically withdraw up to 25% of your accumulated corpus for specific emergencies like critical illness, higher education, or marriage of children." },
        { question: "What happens to my retirement plan if I die before retirement?", answer: "If the policyholder passes away before retirement, the nominee receives the full accumulated corpus plus the sum assured. The nominee can choose to take the lump sum or convert it into a regular pension." },
      ]}
      ctaText="Start Planning Your Retirement!"
    />
  );
}