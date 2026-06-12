import { motion } from "motion/react";
import { Smartphone, CheckCircle2, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import appImg from "@/assets/app-mockup.jpg";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const FEATS = ["Buy Insurance", "Renew Policies", "File Claims", "Track Applications", "Manage Payments", "24/7 Support"];

export default function DownloadAppPage() {
  return (
    <div>
      <title>Download App — THIRU</title>
      <meta name="description" content="Download the THIRU app — buy insurance, renew policies, file claims, and track applications all from your phone." />
      <Toaster richColors position="top-center" />
      <Breadcrumbs items={[{ label: "Download App" }]} />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Mobile App</span>
              <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl text-[#042345]">
                Manage everything <br /><span className="text-gradient-brand">from your phone</span>
              </h1>
              <p className="mt-5 max-w-md text-lg text-muted-foreground">
                Buy, renew, claim and track — all in one beautifully designed app you'll actually enjoy using.
              </p>
              <ul className="mt-7 grid max-w-md grid-cols-2 gap-3">
                {FEATS.map((f) => (
                  <li key={f} className="flex items-center gap-2 rounded-xl bg-white/80 px-4 py-3 shadow-card">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm font-semibold">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="hero" size="xl" onClick={() => toast.info("Coming soon on Play Store")}>
                  Download on Play Store <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
                <Button variant="outlineBrand" size="xl" onClick={() => toast.info("Coming soon on App Store")}>
                  Download on App Store
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative flex justify-center">
              <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-brand opacity-20 blur-3xl" />
              <img src={appImg} alt="THIRU mobile app" width={896} height={1024} loading="lazy" className="mx-auto max-w-sm rounded-[2rem] shadow-elegant" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}