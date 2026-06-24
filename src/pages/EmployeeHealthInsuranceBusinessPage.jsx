import { Users, Shield, CheckCircle2, Clock, Award, Zap, Heart, FileText, Building, Activity } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function EmployeeHealthInsuranceBusinessPage() {
  return (
    <InsurancePageTemplate
      title="Employee Health Insurance"
      subtitle="Group health coverage for your team with cashless hospitalization."
      description="Employee health insurance with cashless hospitalization, maternity benefits, and wellness programs. Tax benefits under Section 80D. Starting from ₹499/employee/month."
      heroIcon={Users}
      heroImage="/src/assets/insurance-banners/employee-health-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Business Insurance", href: "/business-insurance" }, { label: "Employee Health Insurance" }]}
      productName="Employee Health Insurance"
      introduction="Your employees are your most valuable asset, and their health and well-being directly impact your business's success. Group Employee Health Insurance is one of the most sought-after employee benefits in India today. At THIRU Insurance, we offer comprehensive group health insurance plans that provide your team with access to quality healthcare, while giving your business significant tax advantages. Our plans are designed to boost employee satisfaction, reduce attrition, and create a healthier, more productive workforce."
      whatIs="Employee Health Insurance, also known as Group Health Insurance, is a health insurance policy that covers a group of employees working for the same employer. Under this plan, the employer pays the premium (partially or fully) and all covered employees receive health insurance benefits. Group health insurance offers several advantages over individual policies including lower premiums, no medical check-ups required for enrollment, coverage for pre-existing conditions from day one, and coverage for employees' family members including spouse, children, and parents. In India, group health insurance is becoming a standard employee benefit, with startups and SMEs increasingly adopting it to attract and retain talent."
      benefits={[
        { icon: Shield, title: "Group Coverage", desc: "Cover your entire team under a single group health insurance policy." },
        { icon: Zap, title: "No Medical Check-up", desc: "Employees are covered without any pre-purchase medical examinations." },
        { icon: Heart, title: "Pre-Existing Cover Day 1", desc: "Pre-existing diseases covered from day one of the policy — no waiting period." },
        { icon: Award, title: "Family Coverage", desc: "Option to extend coverage to employees' spouse, children, and parents." },
        { icon: Clock, title: "Cashless Hospitalization", desc: "Employees can admit at 10,000+ network hospitals without upfront payment." },
        { icon: Activity, title: "Wellness Programs", desc: "Free health check-ups, teleconsultation, and wellness initiatives." },
        { icon: Users, title: "Attract & Retain Talent", desc: "Health insurance is a top employee benefit that boosts retention." },
        { icon: FileText, title: "Tax Benefits", desc: "Claim premium deductions under Section 80D — saving up to 30% on tax." },
      ]}
      coverage={[
        { label: "Hospitalization Expenses", desc: "Room, ICU, surgery, medicines during hospitalization for employees" },
        { label: "Maternity & Newborn", desc: "Delivery expenses and newborn care for covered female employees" },
        { label: "Pre & Post Hospitalization", desc: "30 days before and 60 days after hospitalization expenses" },
        { label: "Day Care Procedures", desc: "150+ day care surgeries without 24-hour hospitalization" },
        { label: "OPD Benefits", desc: "Outpatient consultation and diagnostic test coverage (optional)" },
        { label: "Health Check-ups", desc: "Annual preventive health check-ups for all covered employees" },
        { label: "COVID-19 Cover", desc: "Coverage for COVID-19 related hospitalization and treatment" },
        { label: "Pre-Existing Diseases", desc: "Covered from day one with no waiting period in group plans" },
      ]}
      exclusions={[
        { label: "Non-Disclosure", desc: "Claims arising from non-disclosed information during enrollment" },
        { label: "Cosmetic Surgery", desc: "Elective cosmetic or plastic surgery procedures" },
        { label: "Dental Treatment", desc: "Routine dental procedures unless accidental" },
        { label: "War & Nuclear", desc: "Injuries due to war, invasion, or nuclear incidents" },
        { label: "Self-Inflicted", desc: "Injuries from self-harm or suicide attempts" },
        { label: "Employee Fraud", desc: "Fraudulent claims by employees or dependents" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All group health plans from IRDAI-approved insurers." },
        { icon: Award, title: "1,000+ Companies Served", desc: "Trusted by over 1,000 businesses from startups to enterprises." },
        { icon: Zap, title: "Easy Online Enrollment", desc: "Add or remove employees with a single click." },
        { icon: Users, title: "Customizable Plans", desc: "Tailor coverage, sum insured, and benefits to your team." },
        { icon: Clock, title: "24/7 Claim Support", desc: "Dedicated claim manager for your company's employees." },
        { icon: FileText, title: "Tax Savings Calculator", desc: "Calculate your tax savings under Section 80D instantly." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Company Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Company Name *</label>
              <input type="text" name="companyName" required placeholder="Your company name" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Contact Person *</label>
              <input type="text" name="contactPerson" required placeholder="HR / Manager name" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Number of Employees *</label>
              <input type="number" name="employeeCount" required placeholder="e.g. 50" min="5" max="10000" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Business Type *</label>
              <select name="businessType" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="it">IT / Software</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="retail">Retail / E-commerce</option>
                <option value="services">Services / Consulting</option>
                <option value="startup">Startup</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
      }
      faqs={[
        { question: "What is group health insurance and how does it work?", answer: "Group health insurance covers all employees of a company under a single policy. The employer pays the premium and employees get health coverage without any medical check-up. Pre-existing diseases are covered from day one, making it a valuable employee benefit." },
        { question: "How many employees do I need to start a group health plan?", answer: "Most insurers require a minimum of 5-7 employees to start a group health insurance plan. Small businesses and startups with fewer employees can also opt for micro-group plans specially designed for small teams." },
        { question: "Can I cover employees' families under the group plan?", answer: "Yes, most group health insurance plans offer the option to extend coverage to employees' spouses, children, and parents. The additional premium for family coverage is typically very affordable." },
        { question: "Are pre-existing diseases covered in group health insurance?", answer: "Yes, one of the biggest advantages of group health insurance is that pre-existing diseases are covered from day one with no waiting period. This applies to all employees enrolled in the policy." },
        { question: "What tax benefits are available for employee health insurance?", answer: "Under Section 80D of the Income Tax Act, the premium paid for employee health insurance is deductible from business income. Additionally, employees can claim deductions for premiums paid towards family coverage." },
      ]}
      ctaText="Cover Your Team Today!"
    />
  );
}