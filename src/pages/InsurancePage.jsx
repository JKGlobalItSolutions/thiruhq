import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Heart, ShieldCheck, Car, Bike, Plane, Briefcase, Smartphone,
  CheckCircle2, Clock, Zap, ArrowRight, Shield, FileText,
  Headphones, Award, Globe, Phone, Star, ChevronRight, AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const INSURANCE_PRODUCTS = [
  { icon: Heart, title: "Health Insurance", desc: "Cashless hospitalization at 10,000+ hospitals with comprehensive medical coverage.", benefits: ["Cashless Claims", "No Claim Bonus", "Lifetime Renewability"], link: "/insurance/health-insurance", color: "from-[#042345] to-[#0a3a6b]" },
  { icon: Car, title: "Car Insurance", desc: "Comprehensive & third-party car insurance with instant claim settlement.", benefits: ["Zero Depreciation", "Roadside Assist", "Cashless Repairs"], link: "/insurance/car-insurance", color: "from-[#042345] to-[#0a3a6b]" },
  { icon: Bike, title: "Bike Insurance", desc: "Affordable two-wheeler protection with quick claim settlement.", benefits: ["Personal Accident", "Theft Protection", "Quick Claims"], link: "/insurance/bike-insurance", color: "from-[#042345] to-[#0a3a6b]" },
  { icon: ShieldCheck, title: "Motor Insurance", desc: "Complete vehicle protection covering car, bike, and commercial vehicles.", benefits: ["Multi-Vehicle", "Fleet Discount", "24/7 Support"], link: "/insurance/motor-insurance", color: "from-[#042345] to-[#0a3a6b]" },
  { icon: Briefcase, title: "Shop Insurance", desc: "Protect your retail shop, stock, and business assets against all risks.", benefits: ["Stock Cover", "Theft Protection", "Fire & Disaster"], link: "/insurance/shop-insurance", color: "from-[#042345] to-[#0a3a6b]" },
  { icon: Smartphone, title: "Device Insurance", desc: "Protection for laptops, tablets, and gadgets against damage and theft.", benefits: ["Screen Protection", "Theft Cover", "Extended Warranty"], link: "/insurance/device-insurance", color: "from-[#042345] to-[#0a3a6b]" },
  { icon: Plane, title: "Travel Insurance", desc: "Worldwide travel coverage for medical emergencies, baggage, and cancellations.", benefits: ["Medical Cover", "Baggage Loss", "Trip Cancel"], link: "/insurance/travel-insurance", color: "from-[#042345] to-[#0a3a6b]" },
  { icon: Shield, title: "Personal Accident", desc: "Financial protection against accidental injuries and disabilities.", benefits: ["Death Benefit", "Disability Cover", "Weekly Income"], link: "/insurance/personal-accident-insurance", color: "from-[#042345] to-[#0a3a6b]" },
];

const FEATURES = [
  { icon: Zap, title: "Instant Policy Issuance", desc: "Get your insurance policy issued in under 5 minutes with our digital-first process." },
  { icon: Headphones, title: "Quick Claim Support", desc: "Dedicated claim managers ensure your claims are processed within 24 hours." },
  { icon: Award, title: "Affordable Premiums", desc: "Competitive pricing with no hidden charges. Compare and choose the best plan." },
  { icon: Clock, title: "24/7 Customer Assistance", desc: "Round-the-clock support via phone, chat, and email for all your queries." },
  { icon: FileText, title: "Paperless Process", desc: "100% digital experience — buy, renew, and manage your policy online." },
  { icon: Globe, title: "Pan-India Network", desc: "Access 10,000+ cashless hospitals and garages across India." },
];

const WHY_CHOOSE = [
  { icon: Zap, title: "Fast Claim Assistance", desc: "Most claims approved within 30 minutes with our instant digital verification process." },
  { icon: ShieldCheck, title: "Trusted Insurance Partners", desc: "We partner with India's top insurance companies to bring you the best plans." },
  { icon: Award, title: "Competitive Pricing", desc: "Compare premiums across multiple insurers and choose the most affordable option." },
  { icon: FileText, title: "Easy Online Process", desc: "From quote to policy — everything happens online in just a few taps." },
  { icon: Headphones, title: "Dedicated Customer Support", desc: "Personal relationship managers for every policyholder with priority support." },
];

const STEPS = [
  { step: "01", title: "Choose Insurance", desc: "Select the type of insurance you need from our wide range of products." },
  { step: "02", title: "Fill Basic Details", desc: "Enter a few basic details to get personalized quote options." },
  { step: "03", title: "Get Instant Quote", desc: "Compare plans and premiums from multiple insurers in real-time." },
  { step: "04", title: "Purchase Policy Online", desc: "Complete your purchase digitally and receive your policy instantly." },
];

const INSURANCE_TYPES = ["Health Insurance", "Car Insurance", "Bike Insurance", "Motor Insurance", "Shop Insurance", "Device Insurance", "Travel Insurance", "Personal Accident Insurance"];

function SectionHead({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#042345]">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl text-[#042345]">{title}</h2>
      {subtitle && <p className="mt-4 text-gray-500">{subtitle}</p>}
    </div>
  );
}

export default function InsurancePage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", city: "", type: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.city || !formData.type) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Thank you! Our expert will contact you within 30 minutes.");
    setFormData({ name: "", phone: "", email: "", city: "", type: "" });
  };

  return (
    <div>
      <title>Thiru Insurance — Protect What Matters Most</title>
      <meta name="description" content="Thiru Insurance — comprehensive insurance plans for health, motor, travel, shop, and devices. Instant policy issuance, quick claims, and affordable premiums." />
      <Toaster richColors position="top-center" />
      <Breadcrumbs items={[{ label: "Insurance" }]} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero pt-8 pb-20 md:pt-12 md:pb-28">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#042345]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-[#042345]/8 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#042345]/20 bg-white/70 px-4 py-1.5 text-xs font-semibold text-[#042345] backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> Trusted by 1M+ Indians
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-[#042345]">
              Protect What <br className="hidden sm:block" />
              <span className="text-gradient-brand">Matters Most</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-gray-500 md:text-lg">
              Choose from a wide range of insurance plans — health, motor, travel, shop, and device protection. Instant policy issuance with hassle-free claims.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#lead-form">
                <Button variant="hero" size="xl">Get Free Quote <ArrowRight className="ml-1 h-5 w-5" /></Button>
              </a>
              <Link to="/contact-us">
                <Button variant="outlineBrand" size="xl">Talk to Expert</Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500">
              {[
                { icon: CheckCircle2, t: "100% Digital" },
                { icon: ShieldCheck, t: "RBI Compliant" },
                { icon: Clock, t: "Instant Quotes" },
              ].map((f) => (
                <div key={f.t} className="flex items-center gap-2">
                  <f.icon className="h-4 w-4 text-[#042345]" />
                  <span className="font-medium">{f.t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="relative flex justify-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="grid grid-cols-2 gap-4">
              {INSURANCE_PRODUCTS.slice(0, 4).map((p, i) => (
                <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}>
                  <Link to={p.link}>
                    <Card className="group p-5 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white/80 backdrop-blur">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#042345]/10 text-[#042345] transition-transform group-hover:scale-110">
                        <p.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-3 font-display text-sm font-bold text-[#042345]">{p.title}</h3>
                      <p className="mt-1 text-[11px] text-gray-400">{p.benefits[0]}</p>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* INSURANCE PRODUCT GRID */}
      <section id="products" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHead eyebrow="Our Products" title={<>Insurance plans for <span className="text-gradient-brand">every need</span></>} subtitle="Comprehensive coverage options designed to protect you, your family, and your business." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INSURANCE_PRODUCTS.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Card className="group h-full overflow-hidden border-0 bg-white shadow-sm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1.5">
                  <div className={`bg-gradient-to-r ${p.color} p-6`}>
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 text-white backdrop-blur-sm">
                      <p.icon className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-[#042345]">{p.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {p.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#042345] shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link to={p.link} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#042345] hover:gap-2.5 transition-all duration-200">
                      Explore More <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#F8F9FA] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHead eyebrow="Why Thiru" title={<>Built for <span className="text-gradient-brand">modern India</span></>} subtitle="We leverage technology to make insurance accessible, affordable, and hassle-free for every Indian." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Card className="h-full border-0 bg-white p-8 shadow-sm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#042345]/10 text-[#042345]">
                    <f.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-[#042345]">{f.title}</h3>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <SectionHead eyebrow="Why Choose Thiru Insurance" title={<>Trusted by <span className="text-gradient-brand">a million Indians</span></>} subtitle="Our commitment to transparency, speed, and customer satisfaction sets us apart." />
            </div>
            <div className="space-y-5">
              {WHY_CHOOSE.map((w, i) => (
                <motion.div key={w.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                  <Card className="flex items-start gap-4 border-0 bg-[#F8F9FA] p-5 shadow-sm hover:shadow-card transition-all duration-300">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#042345]/10 text-[#042345]">
                      <w.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#042345]">{w.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{w.desc}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gradient-primary py-20 md:py-28 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">How It Works</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
              Get insured in <span className="text-white/80">4 simple steps</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-white/20" />
            {STEPS.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="relative text-center">
                <div className="relative z-10 mx-auto grid h-24 w-24 place-items-center rounded-full bg-white text-[#042345] shadow-elegant">
                  <span className="text-3xl font-extrabold">{s.step}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70 max-w-[200px] mx-auto">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD GENERATION FORM */}
      <section id="lead-form" className="bg-[#F8F9FA] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <SectionHead eyebrow="Get Started" title={<>Get a free <span className="text-gradient-brand">insurance quote</span></>} subtitle="Fill in your details and our insurance expert will call you within 30 minutes with the best plans." />
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {["https://i.pravatar.cc/40?img=1", "https://i.pravatar.cc/40?img=5", "https://i.pravatar.cc/40?img=8", "https://i.pravatar.cc/40?img=11"].map((img, i) => (
                    <img key={i} src={img} alt="" className="h-10 w-10 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 text-[#042345]">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">Trusted by 1,000,000+ customers</p>
                </div>
              </div>
            </div>
            <Card className="border-0 p-7 shadow-elegant md:p-9 bg-white">
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="ins-name">Full Name *</Label>
                  <Input id="ins-name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="ins-phone">Mobile Number *</Label>
                    <Input id="ins-phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="ins-email">Email Address *</Label>
                    <Input id="ins-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="ins-city">City *</Label>
                    <Input id="ins-city" name="city" value={formData.city} onChange={handleChange} placeholder="Your city" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="ins-type">Insurance Type *</Label>
                    <select id="ins-type" name="type" value={formData.type} onChange={handleChange} required className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-base shadow-sm md:text-sm">
                      <option value="">Select insurance type</option>
                      {INSURANCE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <Button type="submit" variant="cta" size="lg" disabled={submitting} className="mt-2">
                  {submitting ? "Submitting..." : "Get Free Quote"} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "10L+", label: "Policies Issued" },
              { value: "98%", label: "Claim Settlement" },
              { value: "10,000+", label: "Cashless Hospitals" },
              { value: "4.8/5", label: "Customer Rating" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-extrabold text-[#042345] md:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}