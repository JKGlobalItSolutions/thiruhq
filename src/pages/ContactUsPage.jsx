import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().regex(/^[0-9+\-\s()]{7,15}$/),
  email: z.string().trim().email().max(160),
  message: z.string().trim().min(5).max(1000),
});

function ContactRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 border-b border-border/70 py-3 last:border-0 last:pb-0 first:pt-0">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate font-semibold">{value}</div>
      </div>
    </div>
  );
}

export default function ContactUsPage() {
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      toast.error("Please complete all fields correctly.");
      return;
    }
    setBusy(true);
    await new Promise((r) => setTimeout(r, 600));
    setBusy(false);
    e.target.reset();
    toast.success("Thanks! We'll be in touch within 24 hours.");
  }

  return (
    <div>
      <title>Contact Us — THIRU</title>
      <meta name="description" content="Contact THIRU — get in touch with our team for insurance queries, partnerships, and support." />
      <Toaster richColors position="top-center" />
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl font-extrabold md:text-6xl text-[#042345]">
              Talk to a <span className="text-gradient-brand">real human</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">
              We typically respond within an hour during business days.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <Card className="border-0 p-7 shadow-card md:p-9">
              <form onSubmit={onSubmit} className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="cname">Name</Label>
                  <Input id="cname" name="name" placeholder="Your full name" required maxLength={80} />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="cphone">Phone</Label>
                    <Input id="cphone" name="phone" placeholder="+91 ..." required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cemail">Email</Label>
                    <Input id="cemail" name="email" type="email" placeholder="you@email.com" required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cmsg">Message</Label>
                  <Textarea id="cmsg" name="message" rows={5} placeholder="How can THIRU help you?" required maxLength={1000} />
                </div>
                <Button type="submit" variant="cta" size="lg" disabled={busy}>
                  {busy ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            <div className="space-y-5">
              <div className="overflow-hidden rounded-2xl border border-border shadow-card">
                <iframe
                  title="THIRU office map"
                  src="https://www.google.com/maps?q=Bangalore,India&output=embed"
                  width="100%"
                  height="260"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                />
              </div>
              <Card className="border-0 p-6 shadow-card">
                <ContactRow icon={Phone} label="Phone" value="+91 80 4567 8900" />
                <ContactRow icon={Mail} label="Email" value="hello@thiru.com" />
                <ContactRow icon={MapPin} label="Office" value="HSR Layout, Bengaluru 560102, India" />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}