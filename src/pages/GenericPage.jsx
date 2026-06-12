import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function GenericPage({ title, subtitle, description, features, breadcrumbs, ctaText, ctaLink, icon: Icon }) {
  return (
    <div>
      <title>{title} — THIRU</title>
      <meta name="description" content={description} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {Icon && <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-2xl bg-[#042345]/10 text-[#042345]"><Icon className="h-10 w-10" /></div>}
            <h1 className="font-display text-4xl font-extrabold md:text-6xl text-[#042345]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">
              {subtitle}
            </p>
            {ctaText && ctaLink && (
              <div className="mt-8">
                <Link to={ctaLink}>
                  <Button variant="hero" size="xl">{ctaText} <ArrowRight className="ml-1 h-5 w-5" /></Button>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {features && features.length > 0 && (
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                  <Card className="h-full border-0 bg-white p-6 shadow-sm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#042345]/10 text-[#042345]">
                      {f.icon ? <f.icon className="h-6 w-6" /> : <CheckCircle2 className="h-6 w-6" />}
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-[#042345]">{f.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{f.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}