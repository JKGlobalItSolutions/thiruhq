import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Building2, Users, Briefcase, Shield, ArrowRight, CheckCircle2, Star, Zap, Clock, ShieldCheck, Phone, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const SOLUTIONS = [
  {
    icon: Users,
    title: "Group Health Insurance",
    desc: "Comprehensive health coverage for your entire team with cashless hospitalization and no medical check-ups.",
    link: "/enterprise/group-health-insurance",
  },
  {
    icon: Briefcase,
    title: "Employee Benefits",
    desc: "Tailored benefits packages to attract and retain top talent while maximizing tax savings.",
    link: "/enterprise/employee-benefits",
  },
  {
    icon: Shield,
    title: "SME Insurance",
    desc: "Protection designed specifically for small and medium enterprises with flexible coverage options.",
    link: "/enterprise/sme-insurance",
  },
  {
    icon: Building2,
    title: "Corporate Risk Coverage",
    desc: "End-to-end risk management solutions for large corporations and enterprise clients.",
    link: "/enterprise/corporate-risk-coverage",
  },
];

export default function EnterprisePage() {
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm mb-6">
                <ShieldCheck className="h-3.5 w-3.5 text-[#FFCD48]" />
                Trusted by 500+ Corporate Clients
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
                Enterprise
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCD48] to-[#FFE085]">Insurance</span> Solutions
              </h1>

              <p className="mt-5 max-w-xl text-base md:text-lg text-gray-300 leading-relaxed">
                Comprehensive enterprise insurance solutions for businesses of all sizes. From group health to corporate risk coverage, we protect what you build.
              </p>

              {/* Feature Chips */}
              <div className="mt-8 flex flex-wrap gap-3">
                {SOLUTIONS.map((s, i) => (
                  <Link
                    key={i}
                    to={s.link}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-white/90 backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition-all duration-200"
                  >
                    <s.icon className="h-3.5 w-3.5 text-[#FFCD48]" />
                    {s.title}
                  </Link>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="#solutions">
                  <Button className="bg-[#FFCD48] hover:bg-[#FFCD48]/90 text-[#14204A] shadow-lg shadow-[#FFCD48]/25 rounded-xl px-6 sm:px-8 py-3.5 font-bold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-[#FFCD48]/30 hover:scale-[1.02]">
                    Explore Solutions <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </Link>
                <a href="tel:+919876543210">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-xl px-6 sm:px-8 py-3.5 font-semibold text-sm transition-all duration-200">
                    <Phone className="mr-1.5 h-4 w-4" /> Talk to Expert
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right Column - Floating Statistics Cards */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="relative">
                {/* Statistics grid */}
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "500+", label: "Corporate Clients", icon: Building2 },
                      { value: "50,000+", label: "Employees Covered", icon: Users },
                      { value: "98.7%", label: "Claim Settlement Rate", icon: ShieldCheck },
                      { value: "4.9/5", label: "Client Rating", icon: Star },
                    ].map((stat, i) => (
                      <div key={i} className="rounded-xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-sm">
                        <stat.icon className="h-5 w-5 text-[#FFCD48] mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-gray-300 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating card 1 */}
                <motion.div
                  className="absolute -left-6 top-6 rounded-xl border border-white/10 bg-white/95 backdrop-blur-sm px-4 py-3 shadow-xl flex items-center gap-3"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Claim Approved</div>
                    <div className="text-sm font-bold text-[#14204A]">in 24 hours</div>
                  </div>
                </motion.div>

                {/* Floating card 2 */}
                <motion.div
                  className="absolute -right-4 bottom-10 rounded-xl border border-white/10 bg-white/95 backdrop-blur-sm px-4 py-3 shadow-xl flex items-center gap-3"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-blue-100 text-blue-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Policy Issuance</div>
                    <div className="text-sm font-bold text-[#14204A]">in under 24 hrs</div>
                  </div>
                </motion.div>

                {/* Floating card 3 */}
                <motion.div
                  className="absolute -right-2 -top-4 rounded-xl border border-white/10 bg-white/95 backdrop-blur-sm px-4 py-3 shadow-xl flex items-center gap-3"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-amber-100 text-amber-600">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Avg. Savings</div>
                    <div className="text-sm font-bold text-[#14204A]">up to 30%</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid Section */}
      <div id="solutions" className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#14204A]">Enterprise Solutions</h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Comprehensive protection tailored to your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {SOLUTIONS.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="group bg-white rounded-2xl border border-gray-100 p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#14204A]/5 text-[#14204A] group-hover:bg-[#14204A] group-hover:text-white transition-all duration-300">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-[#14204A]">{item.title}</h3>
              </div>
              <p className="text-[#555555] mb-4 leading-relaxed">{item.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#14204A] group-hover:gap-3 transition-all duration-200">
                Learn More <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}