import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Heart, ShieldCheck, Car, Bike, Plane, Briefcase,
  CheckCircle2, Clock, Zap, ChevronRight, ArrowRight,
  Smartphone, Wallet, Star,
} from "lucide-react";
import { LeadFormDialog } from "@/components/LeadFormDialog";
import { Counter } from "@/components/Counter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel, CarouselContent, CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImg from "@/assets/hero-family.jpg";
import { Toaster } from "@/components/ui/sonner";

const CATEGORIES = [
  { icon: Heart, title: "Health Insurance", desc: "100% cashless hospitalization support", link: "/insurance/health-insurance" },
  { icon: ShieldCheck, title: "Health Insurance", desc: "Secure your family's future", link: "/insurance/health-insurance" },
  { icon: Car, title: "Car Insurance", desc: "Fast and hassle-free claims", link: "/insurance/motor-insurance" },
  { icon: Bike, title: "Bike Insurance", desc: "Affordable protection for your ride", link: "/insurance/motor-insurance" },
  { icon: Plane, title: "Travel Insurance", desc: "Travel worldwide with confidence", link: "/insurance/travel-insurance" },
  { icon: Briefcase, title: "Shop Insurance", desc: "Protect your business from risks", link: "/insurance/shop-insurance" },
];

const STATS = [
  { value: 1_000_000, suffix: "+", label: "Happy Customers" },
  { value: 98, suffix: "%", label: "Claim Settlement Ratio" },
  { value: 24, suffix: "/7", label: "Customer Support" },
  { value: 5000, suffix: "+", label: "Partner Network" },
];

const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Health Insurance", quote: "Settled my hospital bill in under 24 hours. THIRU made an overwhelming moment feel easy.", img: "https://i.pravatar.cc/120?img=47" },
  { name: "Arjun Mehta", role: "Car Insurance", quote: "Filed a claim from the parking lot. By evening the garage had approval. Lightning fast.", img: "https://i.pravatar.cc/120?img=12" },
  { name: "Rohit Verma", role: "Life Insurance", quote: "Transparent pricing, no jargon, and the team explained every clause. Highly recommended.", img: "https://i.pravatar.cc/120?img=33" },
  { name: "Sneha Iyer", role: "Travel Insurance", quote: "Lost luggage in Europe and got reimbursed before I even flew home. Real peace of mind.", img: "https://i.pravatar.cc/120?img=49" },
  { name: "Karthik Rao", role: "Business Insurance", quote: "Onboarding our small business took a single call. The dashboard is genuinely premium.", img: "https://i.pravatar.cc/120?img=15" },
];

function SectionHead({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export default function HomePage() {
  const [lead, setLead] = useState({ open: false, category: undefined, service: undefined, title: undefined });
  const openLead = (category, service, title) =>
    setLead({ open: true, category, service, title });

  return (
    <div id="home">
      <Toaster richColors position="top-center" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-primary/25 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-primary/25 blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur">
              <Zap className="h-3.5 w-3.5" /> Trusted by 1M+ Indians
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Insurance Made <br className="hidden sm:block" />
              <span className="text-gradient-brand">Simple With THIRU</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              Protect your family, health, vehicle and business with trusted insurance solutions and lightning-fast claim support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/insurance">
                <Button variant="hero" size="xl">Explore Plans <ArrowRight className="ml-1 h-5 w-5" /></Button>
              </Link>
              <Button variant="cta" size="xl" onClick={() => openLead("Insurance", "General Quote", "Get a Free Quote")}>Get Free Quote</Button>
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
              <img src={heroImg} alt="Family protected by THIRU insurance" width={1024} height={1024} className="rounded-[2rem] shadow-elegant" />
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

      {/* CATEGORIES */}
      <section id="categories" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHead eyebrow="Insurance Categories" title={<>Coverage for <span className="text-gradient-brand">every part of life</span></>} subtitle="Pick a plan that fits your needs — fully customizable, instantly issued." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Link to={c.link}>
                  <Card className="group relative cursor-pointer overflow-hidden border-border/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-elegant">
                    <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-primary transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow transition-transform group-hover:scale-110">
                      <c.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                    <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Get a quote <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="about" className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHead eyebrow="Why Choose THIRU" title={<>Numbers that build <span className="text-gradient-brand">real trust</span></>} subtitle="Decades of insurance expertise, packaged into a delightfully modern experience." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <Card className="border-0 bg-white p-7 text-center shadow-card">
                  <div className="font-display text-5xl font-extrabold tracking-tight text-gradient-brand">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHead eyebrow="Testimonials" title={<>Loved by <span className="text-gradient-brand">a million Indians</span></>} subtitle="Real customers. Real stories. Real outcomes." />
          <div className="mt-12">
            <Carousel opts={{ loop: true, align: "start" }} plugins={[Autoplay({ delay: 4500, stopOnInteraction: false })]}>
              <CarouselContent>
                {TESTIMONIALS.map((t) => (
                  <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full border-border/60 p-7 shadow-card">
                      <div className="flex gap-1 text-primary">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="mt-4 text-base leading-relaxed text-foreground/90">"{t.quote}"</p>
                      <div className="mt-6 flex items-center gap-3">
                        <img src={t.img} alt={t.name} width={48} height={48} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20" />
                        <div>
                          <div className="font-display font-bold">{t.name}</div>
                          <div className="text-xs text-muted-foreground">{t.role}</div>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section id="partner" className="relative overflow-hidden bg-gradient-primary py-24 text-primary-foreground md:py-32">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#042345]/40 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 text-center">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold backdrop-blur">Become A Partner</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            Grow your business <br />with <span className="bg-gradient-primary bg-clip-text text-transparent">THIRU</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-lg text-primary-foreground/85">
            Join 5,000+ partners earning predictable, recurring commissions with India's fastest-growing digital insurance platform.
          </p>
          <Button variant="cta" size="xl" className="mt-8" onClick={() => openLead("Partnership", "Become Partner", "Become a THIRU Partner")}>
            Become A Partner <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-5xl text-[#042345]">
            Ready to get <span className="text-gradient-brand">protected?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Join over a million Indians who trust THIRU for their insurance needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/insurance">
              <Button variant="hero" size="xl">Explore Products <ArrowRight className="ml-1 h-5 w-5" /></Button>
            </Link>
            <Link to="/contact-us">
              <Button variant="outlineBrand" size="xl">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      <LeadFormDialog open={lead.open} onOpenChange={(o) => setLead((s) => ({ ...s, open: o }))} category={lead.category} service={lead.service} title={lead.title} />
    </div>
  );
}