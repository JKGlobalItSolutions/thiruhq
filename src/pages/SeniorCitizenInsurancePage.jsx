import { Heart, Shield, CheckCircle2, Clock, Award, Users, FileText, Zap, HeartPulse, Home } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function SeniorCitizenInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Senior Citizen Health Insurance"
      subtitle="Specialized health coverage for seniors with no age limit."
      description="Comprehensive health insurance for ages 60+ with pre-existing disease cover, lifetime renewability, and cashless hospitalization. Secure your golden years."
      heroIcon={Heart}
      heroImage="/src/assets/insurance-banners/senior-citizen-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Health Insurance", href: "/health-insurance" }, { label: "Senior Citizen Health Insurance" }]}
      productName="Senior Citizen Health Insurance"
      introduction="As we age, healthcare needs increase and medical expenses can become a significant financial burden. Senior Citizen Health Insurance is specifically designed to address the unique healthcare challenges faced by individuals aged 60 years and above. At THIRU Insurance, we offer specialized health insurance plans for senior citizens that provide comprehensive coverage without upper age limits, ensuring you receive the medical care you deserve without worrying about costs."
      whatIs="Senior Citizen Health Insurance is a specialized health insurance policy designed for individuals aged 60 years and above. These plans address the specific healthcare needs of older adults, including coverage for pre-existing diseases, age-related ailments, hospitalization expenses, and home healthcare services. Unlike standard health insurance plans, senior citizen plans offer higher sum insured options, lower waiting periods for pre-existing conditions, and no upper age limit for entry or renewal. These plans are tailored to provide financial security during the golden years when medical expenses tend to increase significantly."
      benefits={[
        { icon: Shield, title: "No Upper Age Limit", desc: "Entry and renewal available without any upper age restrictions." },
        { icon: HeartPulse, title: "Pre-existing Disease Cover", desc: "Coverage for diabetes, hypertension, and other pre-existing conditions." },
        { icon: Clock, title: "Lifetime Renewability", desc: "Guaranteed lifetime renewal of your health insurance policy." },
        { icon: Award, title: "Cashless Hospitalization", desc: "Admit at 10,000+ network hospitals without any upfront payment." },
        { icon: Home, title: "Home Health Care", desc: "Coverage for home health care, nursing, and physiotherapy services." },
        { icon: CheckCircle2, title: "Domiciliary Hospitalization", desc: "Medical treatment at home when hospitalization is not possible." },
        { icon: Users, title: "Annual Check-ups", desc: "Free comprehensive health check-ups every policy year." },
        { icon: FileText, title: "Tax Benefits", desc: "Claim deductions under Section 80D for premiums paid." },
      ]}
      coverage={[
        { label: "Hospitalization Expenses", desc: "Room rent, ICU, surgery, medicines during hospitalization" },
        { label: "Pre & Post Hospitalization", desc: "Medical expenses 30 days before and 90 days after discharge" },
        { label: "Pre-existing Diseases", desc: "Diabetes, hypertension, heart disease after waiting period" },
        { label: "Home Health Care", desc: "Nursing, physiotherapy, and home health services covered" },
        { label: "Domiciliary Treatment", desc: "Medical treatment at home for specified conditions" },
        { label: "Day Care Procedures", desc: "150+ day care surgeries without 24-hour hospitalization" },
        { label: "Ambulance Cover", desc: "Emergency ambulance transport covered up to ₹5,000" },
        { label: "AYUSH Treatments", desc: "Ayurveda, Yoga, Unani, Siddha, Homeopathy treatment coverage" },
      ]}
      exclusions={[
        { label: "Pre-existing Disease Waiting", desc: "Covered after 1-2 years depending on the plan" },
        { label: "Cosmetic & Dental", desc: "Elective cosmetic surgery and routine dental care" },
        { label: "Experimental Treatment", desc: "Unproven or experimental medical procedures" },
        { label: "War & Nuclear Incidents", desc: "Injuries due to war, invasion, or nuclear risks" },
        { label: "Self-Inflicted Harm", desc: "Injuries caused by self-harm or suicide attempt" },
        { label: "Alcohol-Related", desc: "Treatment related to alcohol or substance abuse" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All senior citizen plans from IRDAI-approved insurers." },
        { icon: Award, title: "1 Lakh+ Senior Citizens Covered", desc: "Trusted by over 1 lakh senior citizens in India." },
        { icon: Zap, title: "Quick Claim Settlement", desc: "Claims settled within 24 hours for network hospitals." },
        { icon: Users, title: "Dedicated Senior Support", desc: "Specially trained support team for senior citizens." },
        { icon: Clock, title: "24/7 Helpline", desc: "Round-the-clock medical assistance and emergency support." },
        { icon: FileText, title: "Hassle-Free Renewal", desc: "Automatic renewal reminders and easy online renewal." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Personal Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Age *</label>
              <input type="number" name="age" required placeholder="e.g. 65" min="60" max="100" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Existing Illnesses *</label>
              <input type="text" name="existingIllnesses" required placeholder="e.g. Diabetes, BP, None" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-[#14204A]">Current Insurance Status *</label>
            <select name="currentInsuranceStatus" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
              <option value="">Select</option>
              <option value="yes-active">Yes, Active Policy</option>
              <option value="yes-expired">Yes, But Expired</option>
              <option value="no">No Current Insurance</option>
            </select>
          </div>
        </div>
      }
      faqs={[
        { question: "Is there an upper age limit for senior citizen health insurance?", answer: "No, THIRU Senior Citizen Health Insurance plans have no upper age limit for entry or renewal. You can buy a policy at age 80 or continue renewing it for life without any age restrictions." },
        { question: "Are pre-existing diseases covered in senior citizen plans?", answer: "Yes, pre-existing diseases like diabetes, hypertension, thyroid disorders, and heart conditions are covered after a waiting period of 1-2 years, depending on the specific plan and condition." },
        { question: "What is the waiting period for pre-existing conditions?", answer: "For senior citizen plans, the waiting period for pre-existing diseases is typically shorter — usually 1 to 2 years compared to 2-4 years for standard health insurance plans." },
        { question: "Does senior citizen insurance cover cataract surgery?", answer: "Yes, cataract surgery is covered as a day care procedure after the initial waiting period. Most senior citizen plans cover cataract surgery with minimal waiting." },
        { question: "Can I get health insurance for my 75-year-old parents?", answer: "Absolutely. THIRU offers senior citizen health insurance with no upper age limit. You can buy a policy for parents aged 75, 80, or even 85+ with comprehensive coverage for their healthcare needs." },
      ]}
      ctaText="Secure Your Golden Years!"
    />
  );
}