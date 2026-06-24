import { AlertTriangle, Shield, CheckCircle2, Clock, Award, Zap, Heart, Users, FileText, Activity } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function CriticalIllnessInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Critical Illness Insurance"
      subtitle="Lump sum payout on diagnosis of cancer, heart attack & stroke."
      description="Get financial protection against 30+ critical illnesses with lump sum payouts. No hospitalization required. Claim benefits and tax savings under Section 80D."
      heroIcon={AlertTriangle}
      heroImage="/src/assets/insurance-banners/critical-illness-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Health Insurance", href: "/health-insurance" }, { label: "Critical Illness Insurance" }]}
      productName="Critical Illness Insurance"
      introduction="A critical illness diagnosis can turn your life upside down — not just emotionally but financially as well. Medical treatments for conditions like cancer, heart attack, or stroke can cost lakhs of rupees. Critical Illness Insurance provides a lump sum payout upon diagnosis of a covered illness, giving you the financial freedom to focus on recovery without worrying about expenses. At THIRU Insurance, we offer comprehensive critical illness coverage that ensures you and your family are protected when it matters most."
      whatIs="Critical Illness Insurance is a specialized health insurance policy that pays a lump sum amount if you are diagnosed with one of the covered critical illnesses specified in the policy. Unlike regular health insurance that pays for hospitalization expenses, critical illness insurance provides a direct lump sum payment regardless of your actual treatment costs. You can use this money for medical treatment, debt repayment, household expenses, or any other purpose. Common covered illnesses include cancer, heart attack, stroke, kidney failure, organ transplant, paralysis, and multiple sclerosis. In India, critical illness insurance is gaining popularity as a crucial financial safety net against catastrophic health events."
      benefits={[
        { icon: Shield, title: "Lump Sum Payout", desc: "Get the full sum insured immediately upon diagnosis — no receipts needed." },
        { icon: Heart, title: "30+ Illnesses Covered", desc: "Cancer, heart attack, stroke, kidney failure, organ transplant, and more." },
        { icon: Zap, title: "No Hospitalization Required", desc: "Payout is made on diagnosis alone, no need for hospitalization." },
        { icon: Clock, title: "Quick Claim Settlement", desc: "Claims processed within 7-14 days of diagnosis confirmation." },
        { icon: Award, title: "Multiple Illness Cover", desc: "Coverage for multiple critical illnesses under a single policy." },
        { icon: CheckCircle2, title: "Use Funds Freely", desc: "Use the payout for treatment, debt, household expenses — any purpose." },
        { icon: Users, title: "Affordable Premiums", desc: "Critical illness cover starting from just ₹499/month." },
        { icon: FileText, title: "Tax Benefits", desc: "Claim premium deductions under Section 80D of Income Tax Act." },
      ]}
      coverage={[
        { label: "Cancer (All Stages)", desc: "Lump sum payout on diagnosis of malignant cancer of any stage" },
        { label: "Heart Attack", desc: "First heart attack with specified severity criteria" },
        { label: "Stroke", desc: "Cerebrovascular accident causing neurological deficit" },
        { label: "Kidney Failure", desc: "End-stage renal disease requiring regular dialysis" },
        { label: "Organ Transplant", desc: "Major organ transplant or bone marrow transplant" },
        { label: "Coronary Artery Bypass", desc: "Open-chest CABG surgery for coronary artery disease" },
        { label: "Paralysis", desc: "Complete and irreversible paralysis of two or more limbs" },
        { label: "Multiple Sclerosis", desc: "Diagnosis of definite multiple sclerosis with neurological damage" },
      ]}
      exclusions={[
        { label: "Pre-Existing Conditions", desc: "Critical illnesses existing before policy purchase are not covered" },
        { label: "Waiting Period", desc: "No claims payable during the initial 90-day waiting period" },
        { label: "HIV/AIDS", desc: "Conditions arising from HIV or AIDS are excluded" },
        { label: "Self-Inflicted", desc: "Injuries from self-harm, suicide, or attempted suicide" },
        { label: "Alcohol & Drug Abuse", desc: "Illnesses resulting from alcohol or drug abuse" },
        { label: "Congenital Conditions", desc: "Congenital or hereditary conditions are not covered" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All critical illness plans from IRDAI-approved insurers." },
        { icon: Award, title: "50,000+ Claims Settled", desc: "Proven track record of quick claim settlements." },
        { icon: Zap, title: "Instant Policy Issuance", desc: "Get your critical illness policy in minutes online." },
        { icon: Users, title: "Expert Claim Support", desc: "Dedicated claim manager assists throughout the process." },
        { icon: Clock, title: "24/7 Medical Helpline", desc: "Round-the-clock medical assistance for policyholders." },
        { icon: FileText, title: "Paperless Process", desc: "100% digital documentation and claim submission." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Personal Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Age *</label>
              <input type="number" name="age" required placeholder="e.g. 35" min="18" max="65" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Occupation *</label>
              <input type="text" name="occupation" required placeholder="e.g. Software Engineer" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Existing Medical Conditions</label>
              <input type="text" name="medicalConditions" placeholder="e.g. Diabetes, BP, None" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Coverage Amount Required *</label>
              <select name="coverageAmount" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="10-lakh">₹10 Lakh</option>
                <option value="25-lakh">₹25 Lakh</option>
                <option value="50-lakh">₹50 Lakh</option>
                <option value="1-crore">₹1 Crore</option>
              </select>
            </div>
          </div>
        </div>
      }
      faqs={[
        { question: "What is the difference between critical illness insurance and regular health insurance?", answer: "Regular health insurance pays for hospitalization expenses as they occur. Critical illness insurance gives you a lump sum payout immediately upon diagnosis of a covered illness, regardless of actual treatment costs. You can use the money for any purpose." },
        { question: "How many critical illnesses are covered?", answer: "Our critical illness plans cover 30+ major illnesses including cancer, heart attack, stroke, kidney failure, organ transplant, paralysis, multiple sclerosis, and many more. The exact list varies by plan." },
        { question: "Can I get multiple payouts for different illnesses?", answer: "It depends on the plan. Some plans offer coverage for multiple illnesses where each illness has its own sum insured. Others provide a single payout, after which the policy terminates." },
        { question: "Is there a waiting period for critical illness insurance?", answer: "Yes, most plans have an initial waiting period of 90 days from the policy start date during which no claims are payable. Pre-existing conditions have a longer waiting period of 1-2 years." },
        { question: "Does critical illness cover all types of cancer?", answer: "Yes, most plans cover all stages of malignant cancer. However, early-stage cancers that are fully curable with minor treatment may have different coverage terms. Some plans offer a separate Early Stage Cancer benefit." },
      ]}
      ctaText="Protect Against Life's Unexpected!"
    />
  );
}