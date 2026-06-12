import { motion } from "motion/react";
import { ShieldCheck, Users, Award, Clock, Heart, Globe, Zap } from "lucide-react";
import { Counter } from "@/components/Counter";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const STATS = [
  { value: 1_000_000, suffix: "+", label: "Happy Customers" },
  { value: 98, suffix: "%", label: "Claim Settlement Ratio" },
  { value: 24, suffix: "/7", label: "Customer Support" },
  { value: 5000, suffix: "+", label: "Partner Network" },
];

const VALUES = [
  { icon: ShieldCheck, title: "Trust", desc: "We build trust through transparency, fair pricing, and hassle-free claim settlements." },
  { icon: Heart, title: "Customer First", desc: "Every decision we make is driven by what's best for our customers." },
  { icon: Zap, title: "Innovation", desc: "We leverage technology to make insurance simple, fast, and accessible." },
  { icon: Globe, title: "Accessibility", desc: "Insurance for everyone, everywhere — across 5000+ partner networks in India." },
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

export default function AboutUsPage() {
  return (
    <div>
      <title>About Us — THIRU</title>
      <meta name="description" content="Learn about THIRU — India's trusted insurance platform serving over a million customers with fast claims and transparent pricing." />
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl font-extrabold md:text-6xl text-[#042345]">
              About <span className="text-gradient-brand">THIRU</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">
              India's fastest-growing digital insurance platform, making insurance simple, transparent, and accessible for every Indian.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Our Story */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Our Story</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl text-[#042345]">Insurance Reimagined</h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                THIRU was founded with a simple mission — to make insurance accessible, transparent, and hassle-free for every Indian. We believed that getting insured shouldn't require navigating complex paperwork or dealing with pushy agents.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Today, we serve over a million customers with a 98% claim settlement ratio, a network of 10,000+ cashless hospitals and garages, and a 24/7 support team that truly cares. Our digital-first approach means you can compare, buy, and manage your insurance entirely from your phone.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[{ l: "Founded", v: "2020" }, { l: "Team Size", v: "500+" }, { l: "Cities", v: "100+" }, { l: "Partner Network", v: "5000+" }].map(s => (
                <div key={s.l} className="rounded-xl bg-[#042345]/5 p-5 text-center">
                  <div className="text-2xl font-extrabold text-[#042345]">{s.v}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8F9FA] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHead eyebrow="Our Values" title={<>What we <span className="text-gradient-brand">stand for</span></>} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Card className="h-full border-0 bg-white p-6 shadow-sm hover:shadow-elegant transition-all duration-300">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#042345]/10 text-[#042345]"><v.icon className="h-6 w-6" /></div>
                  <h3 className="mt-4 font-display text-lg font-bold text-[#042345]">{v.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{v.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}