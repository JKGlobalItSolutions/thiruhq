import { GraduationCap, Shield, CheckCircle2, Clock, Award, Zap, Globe, BookOpen, Heart, Users } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function StudentTravelInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Student Travel Insurance"
      subtitle="Complete protection for students studying abroad."
      description="Student travel insurance with medical coverage, emergency evacuation, study interruption, and baggage protection. Protect your education investment with worldwide coverage."
      heroIcon={GraduationCap}
      heroImage="/src/assets/insurance-banners/student-travel-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Travel Insurance", href: "/travel-insurance" }, { label: "Student Travel Insurance" }]}
      productName="Student Travel Insurance"
      introduction="Studying abroad is a dream for many Indian students, but it comes with significant financial investments and unique risks. From tuition fees to living expenses, the cost of international education can easily exceed ₹50 lakhs. Student Travel Insurance is specially designed to protect this investment and ensure that unexpected medical emergencies, trip interruptions, or other incidents don't derail your academic dreams. At THIRU Insurance, we offer comprehensive student travel insurance that covers everything from medical emergencies to study interruption, giving you and your parents complete peace of mind."
      whatIs="Student Travel Insurance is a specialized insurance policy designed for students traveling abroad for their education. Unlike regular travel insurance, student plans offer long-term coverage (typically from 1 to 5 years) tailored to the duration of a degree program. These policies provide comprehensive medical coverage including hospitalization, prescription drugs, and mental health services. They also offer unique benefits like study interruption coverage, tuition fee protection, and coverage for dependents (spouse/children) accompanying the student. Many universities abroad require international students to have valid health insurance as a condition of enrollment."
      benefits={[
        { icon: Shield, title: "Medical Coverage Abroad", desc: "Comprehensive medical insurance up to $500,000 including hospitalization and prescriptions." },
        { icon: BookOpen, title: "Study Interruption Cover", desc: "Tuition fee protection if you need to return home due to medical or family emergency." },
        { icon: Heart, title: "Emergency Evacuation", desc: "Medical evacuation to India or nearest adequate facility in case of serious emergency." },
        { icon: Award, title: "Mental Health Coverage", desc: "Coverage for mental health counseling and therapy sessions abroad." },
        { icon: Clock, title: "Visa Failure Cover", desc: "Reimbursement of tuition fees if student visa is rejected after enrollment." },
        { icon: Globe, title: "Multi-Year Coverage", desc: "Single policy covering the entire duration of your degree program." },
        { icon: Zap, title: "Dependent Coverage", desc: "Option to cover spouse and children accompanying the student." },
        { icon: Users, title: "24/7 Student Helpline", desc: "Dedicated helpline for students with multilingual support." },
      ]}
      coverage={[
        { label: "Medical Expenses", desc: "Hospitalization, outpatient care, prescription drugs, and dental emergencies" },
        { label: "Emergency Evacuation", desc: "Medical evacuation to India or nearest adequate medical facility" },
        { label: "Study Interruption", desc: "Tuition fee reimbursement if studies interrupted due to medical emergency" },
        { label: "Visa Rejection Cover", desc: "Tuition fee refund if student visa is rejected after enrollment" },
        { label: "Baggage & Documents", desc: "Loss of baggage, passport, laptop, and study documents" },
        { label: "Personal Liability", desc: "Legal liability for accidental injury or property damage" },
        { label: "Mental Health Cover", desc: "Counseling and mental health support services" },
        { label: "Repatriation", desc: "Return of mortal remains to India in case of unfortunate death" },
      ]}
      exclusions={[
        { label: "Pre-Existing Conditions", desc: "Medical conditions existing before policy purchase (except with add-on)" },
        { label: "Reckless Behavior", desc: "Injuries due to reckless or illegal activities" },
        { label: "Alcohol & Drugs", desc: "Incidents related to alcohol or substance abuse" },
        { label: "Routine Check-ups", desc: "Regular health check-ups and preventive care" },
        { label: "War & Terrorism", desc: "Losses due to war, invasion, or terrorist acts" },
        { label: "Self-Inflicted Harm", desc: "Injuries from self-harm or suicide attempts" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All student plans from IRDAI-approved insurance companies." },
        { icon: Award, title: "25,000+ Students Covered", desc: "Trusted by over 25,000 Indian students abroad." },
        { icon: Zap, title: "Instant Policy Issuance", desc: "Get your student insurance in minutes — visa-ready." },
        { icon: Users, title: "24/7 Student Support", desc: "Dedicated helpline for students with claim assistance." },
        { icon: Clock, title: "Quick Claim Settlement", desc: "Claims processed within 7 business days globally." },
        { icon: BookOpen, title: "University Compliant", desc: "Meets insurance requirements of top global universities." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Student Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Country of Study *</label>
              <select name="studyCountry" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">University Name *</label>
              <input type="text" name="universityName" required placeholder="e.g. University of Toronto" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Course Duration (Years) *</label>
              <select name="courseDuration" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="4">4 Years</option>
                <option value="5">5+ Years</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Travel Date *</label>
              <input type="date" name="travelDate" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
          </div>
        </div>
      }
      faqs={[
        { question: "Do I need student travel insurance if my university provides health coverage?", answer: "University-provided health coverage is often limited and may not cover all situations like study interruption, tuition fee protection, or repatriation. A dedicated student travel insurance plan offers comprehensive coverage beyond basic health insurance." },
        { question: "Does student insurance cover mental health services?", answer: "Yes, most student travel insurance plans include coverage for mental health counseling and therapy sessions. This is particularly important for students who may face stress, anxiety, or culture shock while studying abroad." },
        { question: "Can I get multi-year student insurance for my entire degree?", answer: "Yes, THIRU offers multi-year student insurance plans that cover the entire duration of your degree — from 1 year for master's programs to 4+ years for undergraduate programs." },
        { question: "What happens if my student visa is rejected?", answer: "Our student travel insurance includes visa rejection cover, which reimburses your tuition fees if your student visa is rejected after enrollment, subject to policy terms and conditions." },
        { question: "Does student insurance cover my parents if they visit me?", answer: "Standard student insurance covers only the student. However, we offer add-on coverage for visiting parents or family members during their stay abroad." },
      ]}
      ctaText="Secure Your Study Abroad Journey!"
    />
  );
}