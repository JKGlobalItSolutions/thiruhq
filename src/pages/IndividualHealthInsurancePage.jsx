import { Heart, Shield, CheckCircle2, Clock, Award, Zap, Users, FileText, Wallet, Activity } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function IndividualHealthInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Individual Health Insurance"
      subtitle="Personal health coverage with cashless hospitalization & 24/7 support."
      description="Individual health insurance plans with comprehensive medical coverage, pre-existing disease cover, and tax benefits. Secure your health starting at affordable premiums."
      heroIcon={Heart}
      heroImage="/src/assets/insurance-banners/individual-health-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Health Insurance", href: "/health-insurance" }, { label: "Individual Health Insurance" }]}
      productName="Individual Health Insurance"
      introduction="Your health is your most valuable asset, and having the right health insurance is essential to protect yourself and your savings from rising medical costs. At THIRU Insurance, we offer comprehensive individual health insurance plans designed specifically for your personal healthcare needs. Whether you're a young professional starting your career or someone looking for robust health coverage, our individual health insurance policies provide complete financial protection against medical emergencies, hospitalization expenses, and critical illnesses."
      whatIs="Individual Health Insurance is a health insurance policy that provides coverage for a single person against medical expenses incurred due to illnesses, accidents, or hospitalization. Unlike family floater plans, this policy is designed for one individual with a dedicated sum insured. It covers hospitalization expenses, pre and post-hospitalization costs, day care procedures, ambulance charges, and more. In India, individual health insurance plans also offer tax benefits under Section 80D of the Income Tax Act, making them a smart financial investment for your health and well-being."
      benefits={[
        { icon: Shield, title: "Dedicated Coverage", desc: "A dedicated sum insured just for you — no sharing with family members." },
        { icon: Zap, title: "Cashless Hospitalization", desc: "Admit at 10,000+ network hospitals without paying anything upfront." },
        { icon: Clock, title: "Lifetime Renewability", desc: "Keep your health coverage active for life with guaranteed renewability." },
        { icon: Award, title: "Pre-Existing Disease Cover", desc: "Coverage for pre-existing conditions after a defined waiting period." },
        { icon: CheckCircle2, title: "Tax Benefits", desc: "Claim tax deductions up to ₹25,000 under Section 80D of Income Tax Act." },
        { icon: Wallet, title: "Affordable Premiums", desc: "Health insurance starting from just ₹471/month with flexible payment options." },
        { icon: Users, title: "Day Care Procedures", desc: "Coverage for 150+ day care surgeries that don't require 24-hour hospitalization." },
        { icon: Activity, title: "Wellness Benefits", desc: "Free health check-ups, teleconsultation, and wellness programs included." },
      ]}
      coverage={[
        { label: "Hospitalization Expenses", desc: "Room rent, ICU charges, surgeon fees, medicines during hospitalization" },
        { label: "Pre & Post Hospitalization", desc: "Medical expenses 30 days before and 60 days after hospitalization" },
        { label: "Day Care Procedures", desc: "Coverage for 150+ day care surgeries without hospitalization" },
        { label: "Ambulance Charges", desc: "Coverage for emergency ambulance transport up to ₹5,000" },
        { label: "Health Check-ups", desc: "Free annual preventive health check-up at network diagnostic centers" },
        { label: "Organ Donor Cover", desc: "Medical expenses for organ donor during transplant surgery" },
        { label: "AYUSH Treatment", desc: "Coverage for Ayurveda, Yoga, Unani, Siddha, and Homeopathy treatments" },
      ]}
      exclusions={[
        { label: "Pre-Existing Diseases", desc: "Covered only after 2-4 years of continuous policy coverage" },
        { label: "Waiting Period Conditions", desc: "Specified conditions like hernia, cataract have 2-year waiting period" },
        { label: "Cosmetic Surgery", desc: "Elective cosmetic or plastic surgery not covered" },
        { label: "Self-Inflicted Injuries", desc: "Injuries caused by self-harm or suicide attempt" },
        { label: "War & Nuclear Risks", desc: "Injuries due to war, invasion, or nuclear incidents" },
        { label: "Alcohol & Drug Abuse", desc: "Treatment related to alcohol or drug abuse" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All policies from IRDAI-approved insurance companies." },
        { icon: Award, title: "10,000+ Network Hospitals", desc: "Cashless hospitalization at top hospitals across India." },
        { icon: Zap, title: "Instant Policy Issuance", desc: "Get your health policy in minutes with paperless process." },
        { icon: Clock, title: "24/7 Claim Support", desc: "Round-the-clock claim assistance with dedicated manager." },
        { icon: Users, title: "5 Lakh+ Happy Customers", desc: "Trusted by over 5 lakh individuals across India." },
        { icon: FileText, title: "Hassle-Free Claims", desc: "Claim settlement in under 3 hours for network hospitals." },
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
              <label className="text-sm font-semibold text-[#14204A]">Gender *</label>
              <select name="gender" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
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
                <option value="above-10-lakh">Above ₹10 Lakh</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Existing Medical Conditions</label>
              <input type="text" name="medicalConditions" placeholder="e.g. Diabetes, BP, None" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
        </div>
      }
      faqs={[
        { question: "What is individual health insurance and why do I need it?", answer: "Individual health insurance is a policy that covers medical expenses for a single person. It's essential because rising healthcare costs in India can deplete your savings. With individual health insurance, you get dedicated coverage, cashless hospitalization, and tax benefits." },
        { question: "Can I claim tax benefits on individual health insurance premiums?", answer: "Yes, under Section 80D of the Income Tax Act, you can claim deduction up to ₹25,000 for premiums paid for yourself and family. An additional ₹25,000 is available for premiums paid for parents." },
        { question: "What is the waiting period in health insurance?", answer: "The waiting period is the time you must wait before certain coverages become active. Pre-existing diseases typically have a 2-4 year waiting period, while specified conditions like hernia have a 2-year waiting period." },
        { question: "Does individual health insurance cover pre-existing diseases?", answer: "Yes, pre-existing diseases are covered after a waiting period of 2 to 4 years of continuous policy coverage, depending on the insurer and the specific condition." },
        { question: "What is cashless hospitalization and how does it work?", answer: "Cashless hospitalization allows you to get treated at network hospitals without paying anything upfront. The insurance company settles the bill directly with the hospital. You just need to show your health insurance card at admission." },
      ]}
      ctaText="Protect Your Health Today!"
    />
  );
}