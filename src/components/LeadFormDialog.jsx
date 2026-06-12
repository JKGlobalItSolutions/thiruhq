import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  mobile: z.string().trim().regex(/^[0-9+\-\s()]{7,15}$/, "Enter a valid mobile number"),
  email: z.string().trim().email("Enter a valid email").max(160),
  category: z.string().min(1),
  service: z.string().min(1),
  message: z.string().trim().max(600).optional(),
});

export function LeadFormDialog({ open, onOpenChange, category = "", service = "", title }) {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      mobile: String(fd.get("mobile") ?? ""),
      email: String(fd.get("email") ?? ""),
      category: String(fd.get("category") ?? category),
      service: String(fd.get("service") ?? service),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Inquiry submitted! Our team will reach out shortly.");
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{title ?? "Get a Free Quote"}</DialogTitle>
          <DialogDescription>
            Tell us a bit about you and our specialist will call you back within 30 minutes.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="Jane Doe" required maxLength={80} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" name="mobile" placeholder="+91 98765 43210" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="you@email.com" required />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="category">Service Category</Label>
              <Input id="category" name="category" defaultValue={category} placeholder="e.g. Insurance" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="service">Selected Service</Label>
              <Input id="service" name="service" defaultValue={service} placeholder="e.g. Health Insurance" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="How can we help?" rows={3} maxLength={600} />
          </div>
          <Button type="submit" variant="cta" size="lg" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Inquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}