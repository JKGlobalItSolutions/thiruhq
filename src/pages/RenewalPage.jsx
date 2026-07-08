import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { useParams } from "react-router-dom";
import { RefreshCw, Car, Bike, Heart, ShieldCheck, ArrowRight, CheckCircle, Clock, FileText, CreditCard, Phone, X, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const RENEWAL_DATA = {
  car: {
    id: "car",
    icon: Car,
    title: "Renew Car Insurance",
    subtitle: "Continue your car's protection with seamless renewal. Get NCB benefits and instant policy.",
    description: "Renew your car insurance instantly with no paperwork. Enjoy cashless repairs at 10,000+ network garages and get your policy in minutes.",
    features: [
      { icon: Zap, title: "Instant Renewal", desc: "Get your policy renewed in under 5 minutes with our digital process." },
      { icon: Shield, title: "NCB Protection", desc: "Save up to 50% on premiums with No Claim Bonus protection." },
      { icon: FileText, title: "Zero Paperwork", desc: "100% digital renewal process with no physical documents required." },
      { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance for all your renewal queries." },
    ],
    fields: [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "John Doe", required: true },
      { name: "mobile", label: "Mobile Number", type: "tel", placeholder: "+91 9876543210", required: true, validate: (v) => /^\+?[0-9\s\-]{10,15}$/.test(v) },
      { name: "email", label: "Email", type: "email", placeholder: "john@example.com", required: true, validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { name: "vehicleNumber", label: "Vehicle Number", type: "text", placeholder: "KA-01-AB-1234", required: true },
      { name: "policyNumber", label: "Policy Number", type: "text", placeholder: "THI-CAR-2025-XXXXX", required: true },
      { name: "renewalDate", label: "Renewal Date", type: "date", required: true },
    ],
    illustration: Car,
  },
  bike: {
    id: "bike",
    icon: Bike,
    title: "Renew Bike Insurance",
    subtitle: "Keep your two-wheeler insured with quick renewal. No paperwork, instant digital policy.",
    description: "Renew your bike insurance in minutes. Affordable premiums starting at ₹500/year with instant policy delivery.",
    features: [
      { icon: Zap, title: "5-Minute Issuance", desc: "Get your bike insurance renewed in just 5 minutes online." },
      { icon: Shield, title: "Instant Policy", desc: "Receive your policy document instantly via email and WhatsApp." },
      { icon: FileText, title: "No Documentation", desc: "Renew without any paperwork or physical verification." },
      { icon: Clock, title: "24/7 Assistance", desc: "Dedicated support team available round the clock." },
    ],
    fields: [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "John Doe", required: true },
      { name: "mobile", label: "Mobile Number", type: "tel", placeholder: "+91 9876543210", required: true, validate: (v) => /^\+?[0-9\s\-]{10,15}$/.test(v) },
      { name: "email", label: "Email", type: "email", placeholder: "john@example.com", required: true, validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { name: "regNumber", label: "Bike Registration Number", type: "text", placeholder: "KA-01-AB-1234", required: true },
      { name: "policyNumber", label: "Policy Number", type: "text", placeholder: "THI-BIKE-2025-XXXXX", required: true },
      { name: "renewalDate", label: "Renewal Date", type: "date", required: true },
    ],
    illustration: Bike,
  },
  health: {
    id: "health",
    icon: Heart,
    title: "Renew Health Insurance",
    subtitle: "Renew your health policy without losing benefits. Lifetime renewability available.",
    description: "Continue your health coverage without losing benefits. Lifetime renewability option available with no claim bonus benefits.",
    features: [
      { icon: Shield, title: "Lifetime Renewability", desc: "Renew your policy for life without any age limit restrictions." },
      { icon: Zap, title: "No Medical Checkup", desc: "Skip medical tests for renewals if no claims were made." },
      { icon: FileText, title: "Portability Option", desc: "Switch to better plans while retaining benefits." },
      { icon: Clock, title: "Quick Processing", desc: "Get renewal confirmation within 24 hours." },
    ],
    fields: [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "John Doe", required: true },
      { name: "mobile", label: "Mobile Number", type: "tel", placeholder: "+91 9876543210", required: true, validate: (v) => /^\+?[0-9\s\-]{10,15}$/.test(v) },
      { name: "email", label: "Email", type: "email", placeholder: "john@example.com", required: true, validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { name: "policyNumber", label: "Policy Number", type: "text", placeholder: "THI-HEALTH-2025-XXXXX", required: true },
      { name: "members", label: "Number of Members", type: "number", placeholder: "4", required: true },
      { name: "renewalDate", label: "Renewal Date", type: "date", required: true },
    ],
    illustration: Heart,
  },
  life: {
    id: "life",
    icon: ShieldCheck,
    title: "Renew Life Insurance",
    subtitle: "Continue your life protection. Renew term or whole life policies with ease.",
    description: "Secure your family's future with life insurance renewal. Tax benefits under Section 80C and 10(10D) available.",
    features: [
      { icon: Shield, title: "Continued Coverage", desc: "Uninterrupted life cover for your loved ones." },
      { icon: Clock, title: "Flexible Tenure", desc: "Choose tenures from 10 to 40 years as per your needs." },
      { icon: FileText, title: "Tax Benefits", desc: "Claim deductions under Section 80C and 10(10D)." },
      { icon: Zap, title: "Easy Renewal", desc: "Renew online in minutes with auto-debit facility." },
    ],
    fields: [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "John Doe", required: true },
      { name: "mobile", label: "Mobile Number", type: "tel", placeholder: "+91 9876543210", required: true, validate: (v) => /^\+?[0-9\s\-]{10,15}$/.test(v) },
      { name: "email", label: "Email", type: "email", placeholder: "john@example.com", required: true, validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { name: "policyNumber", label: "Policy Number", type: "text", placeholder: "THI-LIFE-2025-XXXXX", required: true },
      { name: "sumAssured", label: "Sum Assured (₹)", type: "text", placeholder: "₹ 10,00,000", required: true },
      { name: "renewalDate", label: "Renewal Date", type: "date", required: true },
    ],
    illustration: ShieldCheck,
  },
};

const initialFormState = (fields) => {
  const state = {};
  fields.forEach((f) => (state[f.name] = ""));
  return state;
};

const initialErrorsState = (fields) => {
  const state = {};
  fields.forEach((f) => (state[f.name] = ""));
  return state;
};

function RenewalForm({ renewal, onClose }) {
  const [form, setForm] = useState(initialFormState(renewal.fields));
  const [errors, setErrors] = useState(initialErrorsState(renewal.fields));
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState("");

  const validate = () => {
    const newErrors = {};
    let valid = true;
    renewal.fields.forEach((field) => {
      const val = form[field.name]?.trim() || "";
      if (field.required && !val) {
        newErrors[field.name] = `${field.label} is required`;
        valid = false;
      } else if (field.validate && val && !field.validate(val)) {
        newErrors[field.name] = `Invalid ${field.label.toLowerCase()}`;
        valid = false;
      }
    });
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const id = `REN-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    setRefNumber(id);
    setSubmitted(true);
  };

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
        <div className="bg-white rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl text-center" onClick={(e) => e.stopPropagation()}>
          <div className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600 mx-auto mb-4">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-[#14204A] mb-2">Renewal Request Submitted Successfully</h3>
          <p className="text-gray-500 text-sm mb-4">
            Thank you for your interest. Our team will reach you shortly regarding your renewal request.
          </p>
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="text-xs text-gray-400 mb-1">Reference Number</div>
            <div className="text-lg font-bold text-[#14204A] tracking-wider">{refNumber}</div>
          </div>
          <Button className="bg-[#FFCD48] hover:bg-[#FFCD48]/90 text-[#14204A] font-bold rounded-xl w-full" onClick={onClose}>
            Back To Renewals
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#14204A]/5 text-[#14204A]">
              <renewal.icon className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-[#14204A]">{renewal.title}</h3>
          </div>
          <button onClick={onClose} className="grid h-8 w-8 place-items-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {renewal.fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-[#14204A] mb-1">
                {field.label} {field.required && <span className="text-red-400">*</span>}
              </label>
              <input
                type={field.type}
                className={`w-full rounded-xl border ${errors[field.name] ? "border-red-300 bg-red-50" : "border-gray-200"} px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD48]/50 transition-colors`}
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
              {errors[field.name] && <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>}
            </div>
          ))}
          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" className="flex-1 rounded-xl border-gray-200 text-[#14204A]" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-[#FFCD48] hover:bg-[#FFCD48]/90 text-[#14204A] font-bold rounded-xl">
              Submit Renewal Request <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function RenewalPage() {
  const { type } = useParams();
  const [activeForm, setActiveForm] = useState(null);

  const renewalData = useMemo(() => RENEWAL_DATA[type] || RENEWAL_DATA.car, [type]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1433] via-[#14204A] to-[#1a2e5c] pt-28 pb-32 md:pt-36 md:pb-40">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute -left-40 top-10 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#FFCD48]/10 blur-3xl animate-pulse" style={{ animationDuration: "8s", animationDelay: "2s" }} />
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-px w-3/4 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="pointer-events-none absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/3 h-24 w-24 rounded-full bg-white/5 blur-xl" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex justify-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-4xl text-center lg:text-left">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm mb-6">
                <RefreshCw className="h-3.5 w-3.5 text-[#FFCD48]" />
                Quick & Easy Policy Renewal
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
                {renewalData.title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCD48] to-[#FFE085]">Online</span>
              </h1>

              <p className="mt-5 mx-auto lg:mx-0 max-w-2xl text-base md:text-lg text-gray-300 leading-relaxed">
                {renewalData.subtitle}
              </p>

              <div className="mt-6 mx-auto lg:mx-0 max-w-2xl rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-white/90 backdrop-blur-sm">
                <div className="flex items-center gap-2 font-semibold">
                  <ShieldCheck className="h-4 w-4 text-[#FFCD48]" />
                  {type === "car" && "Trusted for car renewals with cashless repair support"}
                  {type === "bike" && "Built for quick bike renewals and instant document delivery"}
                  {type === "health" && "Ideal for uninterrupted family health benefits"}
                  {type === "life" && "Designed for uninterrupted family financial protection"}
                </div>
              </div>

              {/* Feature Chips */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                {renewalData.features.slice(0, 4).map((feature, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-white/90 backdrop-blur-sm"
                  >
                    <feature.icon className="h-3.5 w-3.5 text-[#FFCD48]" />
                    {feature.title}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setActiveForm(renewalData)}
                  className="bg-[#FFCD48] hover:bg-[#FFCD48]/90 text-[#14204A] shadow-lg shadow-[#FFCD48]/25 rounded-xl px-6 sm:px-8 py-3.5 font-bold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-[#FFCD48]/30 hover:scale-[1.02] inline-flex items-center"
                >
                  Renew Now <ArrowRight className="ml-1.5 h-4 w-4" />
                </button>
                <a href="tel:+919876543210">
                  <button className="border border-white/30 text-white hover:bg-white/10 rounded-xl px-6 sm:px-8 py-3.5 font-semibold text-sm transition-all duration-200 inline-flex items-center">
                    <Phone className="mr-1.5 h-4 w-4" /> Talk To Advisor
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Right Column - Illustration */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {renewalData.features.map((feature, i) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#14204A]/5 text-[#14204A]">
                      <FeatureIcon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-[#14204A]">{feature.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Renewal Form Modal */}
      {activeForm && <RenewalForm renewal={activeForm} onClose={() => setActiveForm(null)} />}
    </div>
  );
}