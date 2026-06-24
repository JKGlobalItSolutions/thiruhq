import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, XCircle, ChevronDown, Phone, Shield, Clock, Award, Users, FileText, HelpCircle, Send, Loader2, Zap, ShieldCheck, Star, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const defaultStyle = {
  input: "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none",
  label: "text-sm font-semibold text-[#14204A]",
  card: "border-0 bg-white p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 rounded-xl",
  iconBox: "grid h-12 w-12 place-items-center rounded-xl bg-[#14204A]/10 text-[#14204A]",
  section: "py-16 md:py-20",
};

export function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-5 py-4 text-left font-semibold text-[#222222] hover:text-[#14204A] transition-colors"
      >
        <span className="text-sm md:text-base">{question}</span>
        <ChevronDown className={cn("h-4 w-4 text-[#14204A] transition-transform duration-200 shrink-0", open && "rotate-180")} />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
          {answer}
        </div>
      )}
    </div>
  );
}

export function InsuranceEnquiryForm({ productName, children, productSpecific }) {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const mobile = String(fd.get("mobile") || "");
    const email = String(fd.get("email") || "");

    if (!/^[0-9+\-\s()]{7,15}$/.test(mobile)) {
      toast.error("Please enter a valid mobile number");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Thank you! Our insurance specialist will contact you within 30 minutes.");
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input type="hidden" name="product" value={productName} />
      <div className="rounded-xl bg-[#14204A]/5 px-4 py-3 text-sm font-semibold text-[#14204A] flex items-center gap-2">
        <Shield className="h-4 w-4" />
        {productName}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label className={defaultStyle.label}>Full Name *</Label>
          <input type="text" name="fullName" required placeholder="Your full name" className={defaultStyle.input} />
        </div>
        <div className="space-y-1.5">
          <Label className={defaultStyle.label}>Mobile Number *</Label>
          <input type="tel" name="mobile" required placeholder="+91 98765 43210" className={defaultStyle.input} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label className={defaultStyle.label}>Email Address *</Label>
          <input type="email" name="email" required placeholder="you@email.com" className={defaultStyle.input} />
        </div>
        <div className="space-y-1.5">
          <Label className={defaultStyle.label}>City *</Label>
          <input type="text" name="city" required placeholder="Your city" className={defaultStyle.input} />
        </div>
      </div>
      {productSpecific}
      {children}
      <Button type="submit" disabled={submitting} className="w-full bg-[#14204A] hover:bg-[#14204A]/90 text-white shadow-sm hover:shadow-md rounded-xl py-3.5 font-semibold text-sm transition-all duration-200">
        {submitting ? (
          <span className="flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</span>
        ) : (
          <span className="flex items-center gap-2"><Send className="h-4 w-4" /> Get Free Quote</span>
        )}
      </Button>
    </form>
  );
}

export function InsurancePageTemplate({
  title,
  subtitle,
  description,
  heroIcon: Icon,
  heroImage,
  breadcrumbs,
  introduction,
  whatIs,
  benefits,
  coverage,
  exclusions,
  whyChoose,
  faqs,
  ctaText,
  ctaLink,
  productName,
  enquiryFormChildren,
  enquiryFormSpecific,
}) {
  return (
    <div>
      <title>{title} — THIRU Insurance</title>
      <meta name="description" content={description} />
      <Breadcrumbs items={breadcrumbs} />

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-3 flex gap-3">
          <a href="#enquiry-form" className="flex-1">
            <Button className="w-full bg-[#14204A] hover:bg-[#14204A]/90 text-white rounded-xl font-semibold text-sm py-3">
              Get Free Quote
            </Button>
          </a>
          <a href="tel:+919876543210" className="flex items-center justify-center gap-2 px-4 rounded-xl border border-[#14204A] text-[#14204A] font-semibold text-sm hover:bg-[#14204A]/5 transition-colors">
            <Phone className="h-4 w-4" /> Call Us
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-primary/25 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur">
              <Zap className="h-3.5 w-3.5" /> Trusted by 1M+ Indians
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              {subtitle}
            </p>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#enquiry-form">
                <Button variant="hero" size="xl">Get Free Quote <ArrowRight className="ml-1 h-5 w-5" /></Button>
              </a>
              <Link to={ctaLink || "/contact-us"}>
                <Button variant="cta" size="xl">Talk to Expert</Button>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:max-w-md">
              {[
                { icon: Zap, t: "Fast Claims" },
                { icon: ShieldCheck, t: "Trusted Protection" },
                { icon: Clock, t: "24/7 Support" },
                { icon: Wallet, t: "Affordable Premiums" },
              ].map((f) => (
                <div key={f.t} className="glass flex items-center gap-2 rounded-xl px-3 py-2.5 shadow-card">
                  <f.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{f.t}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-brand opacity-30 blur-2xl" />
              {heroImage ? (
                <img src={heroImage} alt={title} width={1024} height={540} className="rounded-[2rem] shadow-elegant object-cover w-full" />
              ) : (
                <div className="grid h-64 w-full place-items-center rounded-[2rem] bg-white/60 shadow-elegant">
                  {Icon && <Icon className="h-20 w-20 text-primary/40" />}
                </div>
              )}
              <motion.div className="absolute -left-4 top-12 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-elegant" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary"><CheckCircle2 className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Claim Approved</div>
                  <div className="text-sm font-bold">in 12 minutes</div>
                </div>
              </motion.div>
              <motion.div className="absolute -right-4 bottom-10 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-elegant" animate={{ y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>
                <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-primary"><Star className="h-5 w-5 fill-current" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Rated</div>
                  <div className="text-sm font-bold">4.9 / 5 by 200k+ users</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="text-gray-500 leading-relaxed text-base md:text-lg">
                {introduction}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is this Insurance */}
      <section className="bg-[#F8F9FA] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#14204A]/10 text-[#14204A]">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#14204A]">What is {title}?</h2>
              </div>
              <p className="text-gray-500 leading-relaxed text-base md:text-lg">
                {whatIs}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#14204A]">Key Benefits</h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Why thousands of Indians choose THIRU Insurance</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Card className={defaultStyle.card}>
                  <div className={defaultStyle.iconBox}>
                    {b.icon ? <b.icon className="h-6 w-6" /> : <CheckCircle2 className="h-6 w-6" />}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-[#222222]">{b.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{b.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      {coverage && coverage.length > 0 && (
        <section className="bg-[#F8F9FA] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#14204A]">What's Covered?</h2>
              <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Comprehensive coverage designed to protect you</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4 sm:grid-cols-2">
                {coverage.map((c, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                    <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-green-50">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-semibold text-[#222222]">{c.label}</span>
                        {c.desc && <p className="text-xs text-gray-400 mt-0.5">{c.desc}</p>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Exclusions */}
      {exclusions && exclusions.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#14204A]">What's Not Covered?</h2>
              <p className="mt-3 text-gray-500 max-w-2xl mx-auto">Please review the standard exclusions for this policy</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-4 sm:grid-cols-2">
                {exclusions.map((e, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                    <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-red-50">
                      <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-semibold text-[#222222]">{e.label}</span>
                        {e.desc && <p className="text-xs text-gray-400 mt-0.5">{e.desc}</p>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Thiru Insurance */}
      <section className="bg-gradient-to-br from-[#14204A] to-[#1a2e5c] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Why Choose THIRU Insurance?</h2>
            <p className="mt-3 text-gray-300 max-w-2xl mx-auto">India's most trusted insurance partner</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {whyChoose.map((w, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Card className="border-0 bg-white/10 backdrop-blur-sm p-6 shadow-lg rounded-xl hover:bg-white/15 transition-all duration-300">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-[#FFCD48]">
                    {w.icon ? <w.icon className="h-6 w-6" /> : <Award className="h-6 w-6" />}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{w.title}</h3>
                  <p className="mt-2 text-sm text-gray-200">{w.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="bg-[#F8F9FA] py-16 md:py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#14204A]">Get a Free Quote</h2>
              <p className="mt-3 text-gray-500">Fill in your details and our insurance expert will call you back within 30 minutes</p>
            </div>
            <Card className="border border-gray-100 bg-white p-6 md:p-8 shadow-card rounded-xl">
              <InsuranceEnquiryForm productName={productName} productSpecific={enquiryFormSpecific}>
                {enquiryFormChildren}
              </InsuranceEnquiryForm>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#14204A]">Frequently Asked Questions</h2>
                <p className="mt-3 text-gray-500">Everything you need to know about {title.toLowerCase()}</p>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-[#14204A] to-[#1a2e5c] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Icon className="h-12 w-12 mx-auto text-[#FFCD48] mb-4" />
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white">{ctaText || "Ready to Get Started?"}</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
              Get your {title.toLowerCase()} quote in minutes. Our team is here to help you choose the best coverage.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#enquiry-form">
                <Button className="bg-[#FFCD48] hover:bg-[#FFCD48]/90 text-[#14204A] shadow-sm hover:shadow-md rounded-xl px-8 py-3.5 font-bold text-sm transition-all duration-200">
                  Get Free Quote <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
              <a href="tel:+919876543210">
                <Button variant="ghost" className="text-white border border-white/30 hover:bg-white/10 rounded-xl px-8 py-3.5 font-semibold text-sm transition-all duration-200">
                  <Phone className="mr-1 h-4 w-4" /> Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}