import { useState } from "react";
import { motion } from "motion/react";
import { Lock, User } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function AgentLoginPage() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    toast.success("Login functionality coming soon!");
  }

  return (
    <div>
      <title>Agent Login — THIRU</title>
      <meta name="description" content="THIRU Agent Login — access your agent dashboard to manage policies, claims, and commissions." />
      <Toaster richColors position="top-center" />
      <Breadcrumbs items={[{ label: "Agent Login" }]} />

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl font-extrabold md:text-6xl text-[#042345]">
              Agent <span className="text-gradient-brand">Login</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">
              Access your agent dashboard to manage policies, claims, and commissions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-md px-4 md:px-6">
          <Card className="border-0 p-7 shadow-elegant md:p-9">
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="agent-id">Agent ID / Email</Label>
                <div className="relative">
                  <User className="absolute left-33 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="agent-id" name="agentId" placeholder="Enter your agent ID or email" required className="pl-9" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="agent-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="agent-password" name="password" type="password" placeholder="Enter your password" required className="pl-9" />
                </div>
              </div>
              <Button type="submit" variant="hero" size="lg" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Don't have an account? <a href="#" className="text-primary font-semibold hover:underline">Contact us</a>
              </p>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}