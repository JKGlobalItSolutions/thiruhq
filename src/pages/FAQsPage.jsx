import { useState } from "react";
import { Search, ChevronDown, HelpCircle, FileText, DollarSign, RefreshCw, Shield, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQ_CATEGORIES = [
  {
    icon: FileText,
    name: "Policy Questions",
    questions: [
      { q: "How do I purchase a policy?", a: "You can purchase a policy online through our website, mobile app, or visit our nearest branch. Our team will guide you through the process." },
      { q: "What documents do I need to buy insurance?", a: "Typically you need identity proof (Aadhaar/PAN), address proof, and relevant documents depending on the policy type (e.g., vehicle RC for car insurance)." },
      { q: "Can I modify my policy after purchase?", a: "Yes, you can make modifications to your policy during the free-look period. For changes after that, please contact our support team." },
      { q: "How long does it take to get a policy issued?", a: "Most policies are issued instantly online. For policies requiring verification, it typically takes 24-48 hours." },
    ],
  },
  {
    icon: MessageSquare,
    name: "Claims Questions",
    questions: [
      { q: "How do I file a claim?", a: "You can file a claim online through our portal, mobile app, or call our 24/7 claim support helpline. Our team will assist you step by step." },
      { q: "What is the claim settlement process?", a: "Once you file a claim, our team reviews the documents, assesses the damage/loss, and processes the settlement. Most claims are settled within 48 hours." },
      { q: "What documents are required for a claim?", a: "You need the policy document, claim form, ID proof, and relevant documents depending on claim type (FIR for theft, medical reports for health claims, etc.)." },
      { q: "How long does claim settlement take?", a: "Simple claims are settled within 24-48 hours. Complex claims may take 7-15 working days depending on the assessment." },
    ],
  },
  {
    icon: DollarSign,
    name: "Premium Questions",
    questions: [
      { q: "How are premiums calculated?", a: "Premiums are calculated based on coverage amount, policy type, age, health (for health insurance), vehicle model (for car insurance), and other risk factors." },
      { q: "Can I pay my premium in installments?", a: "Yes, we offer monthly, quarterly, half-yearly, and annual payment options for most policies." },
      { q: "Is there a grace period for premium payment?", a: "Yes, most policies have a grace period of 15-30 days from the due date for premium payment." },
      { q: "Will my premium increase at renewal?", a: "Premiums may change at renewal based on claim history, age, and other factors. We strive to keep increases minimal." },
    ],
  },
  {
    icon: RefreshCw,
    name: "Renewals",
    questions: [
      { q: "How do I renew my policy?", a: "You can renew online through our website, mobile app, or visit a branch. We also send renewal reminders via email and SMS." },
      { q: "What happens if I miss the renewal date?", a: "You have a grace period after expiry. However, coverage is not active during this period. It's best to renew before expiry." },
      { q: "Can I get a discount on early renewal?", a: "Yes, we offer discounts for renewing before the expiry date. Early renewal also ensures continuous coverage." },
      { q: "Will my NCB be protected at renewal?", a: "Yes, your No Claim Bonus is protected if you renew without a break. Switching insurers may affect NCB." },
    ],
  },
  {
    icon: Shield,
    name: "Coverage Questions",
    questions: [
      { q: "What is covered under comprehensive insurance?", a: "Comprehensive insurance covers damage to your vehicle, theft, fire, natural disasters, and third-party liability." },
      { q: "Does health insurance cover pre-existing diseases?", a: "Most health insurance plans cover pre-existing diseases after a waiting period, typically 2-4 years." },
      { q: "Are there any exclusions I should know about?", a: "Common exclusions include war, nuclear risks, intentional damage, and specific conditions mentioned in the policy document." },
      { q: "Can I enhance my coverage mid-term?", a: "Yes, you can add riders or increase coverage at renewal. Some changes can be made mid-term by paying additional premium." },
    ],
  },
];

const POPULAR_QUESTIONS = [
  "How do I file a claim online?",
  "What is the free-look period?",
  "How do I download policy documents?",
  "How to change my address on policy?",
  "What is NCB and how does it work?",
  "Can I transfer my policy to another vehicle?",
];

export default function FAQsPage() {
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);

  const filteredFaqs = FAQ_CATEGORIES.map((cat) => ({
    ...cat,
    questions: cat.questions.filter(
      (f) => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0b1433] via-[#14204A] to-[#1a2e5c] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm mb-4">
              <HelpCircle className="h-3.5 w-3.5 text-[#FFCD48]" />
              Frequently Asked Questions
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCD48] to-[#FFE085]">FAQs</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg max-w-xl">
              Find quick answers to common questions about policies, claims, premiums, and more.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        {/* Search */}
        <div className="mb-12">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full rounded-xl border border-gray-200 pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD48]/50 shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Popular Questions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#14204A] mb-6">Popular Questions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {POPULAR_QUESTIONS.map((q, i) => (
              <button
                key={i}
                className="bg-white rounded-xl border border-gray-100 px-5 py-3.5 text-sm font-medium text-[#14204A] text-left hover:border-[#FFCD48]/50 hover:shadow-md transition-all duration-200"
                onClick={() => {
                  setSearch(q);
                  setOpenCategory(0);
                }}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFaqs.map((category, catIdx) => (
            <div key={catIdx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5"
                onClick={() => setOpenCategory(openCategory === catIdx ? null : catIdx)}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#14204A]/5 text-[#14204A]">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#14204A]">{category.name}</h3>
                  <span className="text-xs text-gray-400">({category.questions.length})</span>
                </div>
                <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${openCategory === catIdx ? "rotate-180" : ""}`} />
              </button>
              {openCategory === catIdx && (
                <div className="px-6 pb-5 space-y-2">
                  {category.questions.map((faq, faqIdx) => (
                    <div key={faqIdx} className="border border-gray-50 rounded-xl overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between px-4 py-3.5 text-left"
                        onClick={() => setOpenFaq(openFaq === `${catIdx}-${faqIdx}` ? null : `${catIdx}-${faqIdx}`)}
                      >
                        <span className="font-medium text-[#14204A] text-sm">{faq.q}</span>
                        <ChevronDown className={`shrink-0 h-4 w-4 text-gray-400 ml-2 transition-transform duration-200 ${openFaq === `${catIdx}-${faqIdx}` ? "rotate-180" : ""}`} />
                      </button>
                      {openFaq === `${catIdx}-${faqIdx}` && (
                        <div className="px-4 pb-3.5 text-sm text-gray-500 leading-relaxed">{faq.a}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Need Help */}
        <div className="mt-16 bg-gradient-to-br from-[#14204A] to-[#1a2e5c] rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Still Have Questions?</h2>
          <p className="text-gray-300 max-w-lg mx-auto mb-6">Our support team is ready to help you with any questions not covered here.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/support/call-us">
              <Button className="bg-[#FFCD48] hover:bg-[#FFCD48]/90 text-[#14204A] font-bold rounded-xl px-6">Contact Support</Button>
            </a>
            <a href="/support">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl px-6">Back to Support</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}