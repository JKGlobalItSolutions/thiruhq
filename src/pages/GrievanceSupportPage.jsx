import { useState } from "react";
import { FileText, AlertCircle, Search, ChevronDown, Shield, ArrowRight, CheckCircle, Clock, Phone, MessageSquare, Building2, Scale, FileWarning, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ESCALATION_MATRIX = [
  { level: 1, team: "Customer Support", response: "24 hours", resolution: "3-5 days", desc: "Initial complaint review and resolution by our support team." },
  { level: 2, team: "Senior Support Manager", response: "48 hours", resolution: "5-7 days", desc: "Escalated if not resolved at Level 1. Senior team investigates." },
  { level: 3, team: "Grievance Officer", response: "72 hours", resolution: "7-10 days", desc: "Final internal escalation. Grievance Officer reviews and resolves." },
  { level: 4, team: "Insurance Ombudsman", response: "1 month", resolution: "3 months", desc: "External regulatory body if not satisfied with internal resolution." },
];

const RESOLUTION_TIMELINE = [
  { stage: "Complaint Received", time: "Within 24 hours", icon: CheckCircle },
  { stage: "Acknowledgment Sent", time: "24-48 hours", icon: FileText },
  { stage: "Investigation", time: "3-5 days", icon: Search },
  { stage: "Resolution Proposed", time: "5-7 days", icon: FileWarning },
  { stage: "Complaint Closed", time: "7-10 days", icon: Shield },
];

const FAQS = [
  { q: "How do I raise a complaint?", a: "You can raise a complaint online through this page, call our helpline, email us, or visit a branch." },
  { q: "How long does it take to resolve a complaint?", a: "Most complaints are resolved within 7-10 working days. Complex issues may take longer." },
  { q: "What if I'm not satisfied with the resolution?", a: "You can escalate to the next level using our escalation matrix. If still not satisfied, you can approach the Insurance Ombudsman." },
  { q: "Can I track my complaint status?", a: "Yes, you can track your complaint using the reference number provided on acknowledgment." },
];

export default function GrievanceSupportPage() {
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0b1433] via-[#14204A] to-[#1a2e5c] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm mb-4">
              <AlertCircle className="h-3.5 w-3.5 text-[#FFCD48]" />
              Grievance Support
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Grievance <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCD48] to-[#FFE085]">Support</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg max-w-xl">
              We take your concerns seriously. Raise a complaint, track its progress, and get a fair resolution.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        {/* Raise Complaint + Track */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#14204A]/5 text-[#14204A]">
                <FileWarning className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-[#14204A]">Raise a Complaint</h3>
            </div>
            <p className="text-gray-500 text-sm mb-6">Have an issue? We're here to listen and resolve it fairly.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#14204A] mb-1">Full Name</label>
                <input type="text" className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD48]/50" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#14204A] mb-1">Email</label>
                <input type="email" className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD48]/50" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#14204A] mb-1">Policy Number (Optional)</label>
                <input type="text" className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD48]/50" placeholder="THI-2025-XXXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#14204A] mb-1">Subject</label>
                <select className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD48]/50">
                  <option>Claim Dispute</option>
                  <option>Policy Issue</option>
                  <option>Billing / Premium</option>
                  <option>Service Complaint</option>
                  <option>Agent Related</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#14204A] mb-1">Describe Your Issue</label>
                <textarea className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD48]/50" rows={4} placeholder="Please describe your complaint in detail..." />
              </div>
              <Button className="bg-[#FFCD48] hover:bg-[#FFCD48]/90 text-[#14204A] font-bold rounded-xl w-full">
                Submit Complaint <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#14204A]/5 text-[#14204A]">
                <Search className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-[#14204A]">Track Your Complaint</h3>
            </div>
            <p className="text-gray-500 text-sm mb-4">Enter your complaint reference number to check the status.</p>
            <div className="flex gap-3 mb-6">
              <input
                type="text"
                placeholder="Enter complaint reference number"
                className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD48]/50"
              />
              <Button className="bg-[#FFCD48] hover:bg-[#FFCD48]/90 text-[#14204A] font-bold rounded-xl">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="rounded-xl bg-gray-50 p-4">
              <h4 className="font-semibold text-[#14204A] text-sm mb-2">Your Complaint Status</h4>
              <div className="space-y-3">
                {RESOLUTION_TIMELINE.map((stage, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gray-200 text-gray-400">
                      <stage.icon className="h-3 w-3" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-500">{stage.stage}</div>
                      <div className="text-xs text-gray-400">{stage.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Escalation Matrix */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#14204A] mb-8">Escalation Matrix</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ESCALATION_MATRIX.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#FFCD48] text-[#14204A] font-bold text-xs">
                    L{i + 1}
                  </div>
                  <h3 className="font-bold text-[#14204A] text-sm">{item.team}</h3>
                </div>
                <p className="text-gray-500 text-xs mb-3">{item.desc}</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response:</span>
                    <span className="font-semibold text-[#14204A]">{item.response}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Resolution:</span>
                    <span className="font-semibold text-[#14204A]">{item.resolution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Team */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#14204A] mb-8">Contact Grievance Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-green-50 text-green-600 mx-auto mb-3">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-[#14204A] mb-1">Grievance Helpline</h3>
              <a href="tel:+91-1800-123-4567" className="text-sm text-[#FFCD48] font-semibold hover:underline">+91-1800-123-4567</a>
              <p className="text-xs text-gray-400 mt-1">Available Mon-Sat, 9 AM - 6 PM</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600 mx-auto mb-3">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-[#14204A] mb-1">Email Grievance</h3>
              <a href="mailto:grievance@thiru.com" className="text-sm text-[#FFCD48] font-semibold hover:underline">grievance@thiru.com</a>
              <p className="text-xs text-gray-400 mt-1">We respond within 24 hours</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-purple-50 text-purple-600 mx-auto mb-3">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-[#14204A] mb-1">Visit Branch</h3>
              <p className="text-sm text-gray-500">Visit your nearest branch</p>
              <p className="text-xs text-gray-400 mt-1">Mon-Sat, 9 AM - 6 PM</p>
            </div>
          </div>
        </div>

        {/* Regulatory Information */}
        <div className="mb-16 bg-gradient-to-br from-[#14204A] to-[#1a2e5c] rounded-2xl p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#FFCD48]/20 text-[#FFCD48]">
              <Scale className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold">Regulatory Information</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            If your grievance is not resolved to your satisfaction within 30 days, you may approach the Insurance Ombudsman as per IRDAI guidelines. The Ombudsman provides free and fair resolution of disputes between policyholders and insurers.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl bg-white/10 p-4">
              <div className="font-semibold text-[#FFCD48]">IRDAI</div>
              <p className="text-gray-300 text-xs mt-1">Insurance Regulatory and Development Authority of India</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <div className="font-semibold text-[#FFCD48]">Insurance Ombudsman</div>
              <p className="text-gray-300 text-xs mt-1">Free dispute resolution for policyholders</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <div className="font-semibold text-[#FFCD48]">Consumer Court</div>
              <p className="text-gray-300 text-xs mt-1">Final recourse for unresolved grievances</p>
            </div>
          </div>
          <div className="mt-4">
            <a href="https://www.irdai.gov.in" target="_blank" rel="noopener noreferrer" className="text-sm text-[#FFCD48] hover:underline">Visit IRDAI Website →</a>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-[#14204A] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  <span className="font-semibold text-[#14204A] text-sm">{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${faqOpen === i ? "rotate-180" : ""}`} />
                </button>
                {faqOpen === i && (
                  <div className="px-5 pb-4 text-sm text-gray-500">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Back to Support */}
        <div className="mt-12 text-center">
          <Link to="/support">
            <Button variant="outline" className="rounded-xl border-gray-200 text-[#14204A] px-8">← Back to Support</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}