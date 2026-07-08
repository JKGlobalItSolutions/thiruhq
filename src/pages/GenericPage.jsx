import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function GenericPage({ title, subtitle, description, features, breadcrumbs, ctaText, ctaLink, icon: Icon, illustration }) {
  return (
    <div>
      <title>{title} — THIRU</title>
      <meta name="description" content={description} />

      <Breadcrumbs items={breadcrumbs} />

      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1433] via-[#14204A] to-[#1a2e5c] py-20 md:py-24 lg:py-28 min-h-[650px] flex items-center">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-10 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl animate-pulse" style={{ animationDuration: "6s" }} />
          <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#FFCD48]/10 blur-3xl animate-pulse" style={{ animationDuration: "8s", animationDelay: "2s" }} />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-px w-3/4 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute bottom-1/4 right-1/3 h-24 w-24 rounded-full bg-white/5 blur-xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* Category Icon */}
              {Icon && (
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#FFCD48]/10 text-[#FFCD48] mb-6 backdrop-blur-sm">
                  <Icon className="h-10 w-10" />
                </div>
              )}

              {/* Heading */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                {title}
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
                {subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {ctaText && ctaLink && (
                  <Link to={ctaLink}>
                    <Button variant="hero" size="xl" className="w-full sm:w-auto">
                      {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                )}
                <Button variant="outline" size="xl" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white">
                  Learn More
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative hidden lg:block"
            >
              {illustration && (
                <div className="relative">
                  {/* Glassmorphism card background */}
                  <div className="absolute -inset-4 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10"></div>
                  <div className="relative rounded-2xl overflow-hidden">
                    {illustration}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features && features.length > 0 && (
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="h-full border-0 bg-white p-6 shadow-sm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#14204A]/5 text-[#14204A]">
                      {f.icon ? <f.icon className="h-6 w-6" /> : <CheckCircle2 className="h-6 w-6" />}
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-[#14204A]">{f.title}</h3>
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