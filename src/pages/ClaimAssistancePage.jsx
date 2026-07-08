import { useState } from "react";
import { FileText, ClipboardList, Upload, Search, ChevronDown, Headphones, Shield, ArrowRight, CheckCircle, Clock, Phone, MessageSquare, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CLAIM_STEPS = [
  { icon: FileText, title: "File a Claim", desc: "Submit your claim online through our portal, mobile app, or call our helpline." },
  { icon: ClipboardList, title: "Document Review", desc: "Our team reviews your documents and claim details within 24 hours." },
  { icon: Upload, title: "Assessment", desc: "We assess the claim through inspection, medical reports, or damage evaluation." },
  { icon: CheckCircle, title: "Settlement", desc: "Once approved, the claim amount is credited to your account within 48 hours." },
];

const REQUIRED_DOCS = [
  { name: "Claim Form", desc: "Duly filled and signed claim form" },
  { name: "Policy Document", desc: "Copy of your insurance policy" },
  { name: "ID Proof", desc: "Aadhaar, PAN, or valid government ID" },
  { name: "FIR / Police Report", desc: "For theft, accidents, or criminal cases" },
  { name: "Medical Reports", desc: "For health insurance claims" },
  { name: "Estimate / Invoice", desc: "Repair estimates or medical bills" },
  { name: "Bank Details", desc: "Cancelled cheque or bank statement" },
  { name: "Photos / Evidence", desc: "Relevant photographs or supporting documents" },
];

const FAQS = [
  { q: "How long does claim settlement take?", a: "Simple claims are settled within 24-48 hours. Complex claims take 7-15 working days." },
  { q: "Can I track my claim status?", a: "Yes, you can track your claim status online using your claim reference number." },
  { q: "What if my claim is rejected?", a: "If your claim is rejected, you will receive a detailed explanation and can appeal through our grievance process." },
  { q: "Is cashless claim available?", a: "Yes, we offer cashless claims at our network hospitals and garages." },
];

export default function ClaimAssistancePage() {
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0b1433] via-[#14204A] to-[#1a2e5c] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm mb-4">
              <Headphones className="h-3.5 w-3.5 text-[#FFCD48]" />
              Claim Assistance
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Claim <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCD48] to-[#FFE085]">Assistance</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg max-w-xl">
              We're here to help you through every step of the claims process. File, track, and settle your claims with ease.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/claims/file-claim">
                <Button className="bg-[#FFCD48] hover:bg-[#FFCD48]/90 text-[#14204A] font-bold rounded-xl px-6 sm:px-8">
                  File a Claim <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/claims/track-status">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-xl px-6 sm:px-8">
                  Track Claim Status
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        {/* Claim Process Steps */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#14204A] mb-8">How to File a Claim</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {CLAIM_STEPS.map((step, i) => (
              <div key={i} className="relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-3 -left-3 grid h-8 w-8 place-items-center rounded-full bg-[#FFCD48] text-[#14204A] font-bold text-sm">
                  {i + 1}
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#14204A]/5 text-[#14204A] mb-4">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#14204A] mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#14204A] mb-8">Required Documents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {REQUIRED_DOCS.map((doc, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 flex items-start gap-3 hover:shadow-md transition-all duration-200">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-amber-50 text-amber-600 mt-0.5">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold text-[#14204A] text-sm">{doc.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{doc.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Claim Status + Support */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-[#14204A] mb-4">Track Your Claim</h3>
            <p className="text-gray-500 text-sm mb-4">Enter your claim reference number to check the status.</p>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter claim reference number"
                className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD48]/50"
              />
              <Button className="bg-[#FFCD48] hover:bg-[#FFCD48]/90 text-[#14204A] font-bold rounded-xl">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <Link to="/claims/track-status">
              <span className="inline-block mt-3 text-sm font-medium text-[#FFCD48] hover:underline">Go to claim tracking page →</span>
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-[#14204A] mb-4">Need Help?</h3>
            <p className="text-gray-500 text-sm mb-4">Our claim support team is available 24/7 to assist you.</p>
            <div className="space-y-3">
              <a href="tel:+91-1800-123-4567" className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-green-100 text-green-600">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#14204A]">+91-1800-123-4567</div>
                  <div className="text-xs text-gray-400">Toll Free Helpline</div>
                </div>
              </a>
              <a href="mailto:claims@thiru.com" className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-blue-100 text-blue-600">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#14204A]">claims@thiru.com</div>
                  <div className="text-xs text-gray-400">Email Support</div>
                </div>
              </a>
            </div>
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