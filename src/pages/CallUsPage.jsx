import { motion } from "motion/react";
import { Phone, Mail, Clock, MapPin, ChevronDown, Search, MessageSquare, ArrowRight, Headphones, PhoneCall, Building2, Globe, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const REGIONAL_CONTACTS = [
  { region: "North India", phone: "+91-11-45678901", city: "Delhi NCR" },
  { region: "South India", phone: "+91-80-45678902", city: "Bangalore" },
  { region: "East India", phone: "+91-33-45678903", city: "Kolkata" },
  { region: "West India", phone: "+91-22-45678904", city: "Mumbai" },
  { region: "Central India", phone: "+91-731-456789", city: "Indore" },
  { region: "North-East", phone: "+91-361-456789", city: "Guwahati" },
];

const FAQS = [
  { q: "What are your support hours?", a: "Our customer support is available 24 hours a day, 7 days a week, 365 days a year." },
  { q: "Is there an emergency helpline?", a: "Yes, we have a dedicated 24/7 emergency helpline at +91-1800-123-4567 for urgent claims and assistance." },
  { q: "How can I get a callback?", a: "Simply fill out the contact form on this page, and our team will call you back within 2 hours during business hours." },
  { q: "Do you support regional languages?", a: "Yes, our support team can assist you in Hindi, English, Tamil, Telugu, Kannada, Malayalam, Bengali, and Marathi." },
];

export default function CallUsPage() {
  const [faqOpen, setFaqOpen] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0b1433] via-[#14204A] to-[#1a2e5c] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm mb-4">
              <Phone className="h-3.5 w-3.5 text-[#FFCD48]" />
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Call <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCD48] to-[#FFE085]">Us</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg max-w-xl">
              Our support team is available 24/7. Call us anytime for assistance with your policies, claims, or any queries.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: PhoneCall, value: "+91-1800-123-4567", label: "Toll Free Support", sub: "Available 24×7" },
            { icon: Headphones, value: "+91-987-654-3210", label: "Customer Care", sub: "24×7 Helpline" },
            { icon: MessageSquare, value: "support@thiru.com", label: "Email Support", sub: "We reply within 2 hrs" },
            { icon: Globe, value: "Live Chat", label: "Online Support", sub: "Chat with our team" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#14204A]/5 text-[#14204A] mx-auto mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <div className="text-lg font-bold text-[#14204A]">{item.value}</div>
              <div className="text-sm font-semibold text-gray-700 mt-1">{item.label}</div>
              <div className="text-xs text-gray-400 mt-1">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Regional Contacts */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#14204A] mb-8">Regional Contacts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {REGIONAL_CONTACTS.map((rc, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 flex items-center gap-4 hover:shadow-md transition-all duration-200">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#14204A]/5 text-[#14204A]">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#14204A]">{rc.region}</div>
                  <div className="text-xs text-gray-400">{rc.city}</div>
                  <a href={`tel:${rc.phone}`} className="text-sm font-medium text-[#FFCD48] hover:underline">{rc.phone}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours + Emergency */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#14204A]/5 text-[#14204A]">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-[#14204A]">Business Hours</h3>
            </div>
            <div className="space-y-3 text-sm">
              {[
                { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
                { day: "Saturday", time: "10:00 AM - 6:00 PM" },
                { day: "Sunday", time: "10:00 AM - 4:00 PM" },
                { day: "Emergency Helpline", time: "24×7 (365 days)" },
              ].map((h, i) => (
                <div key={i} className="flex justify-between items-center pb-2 border-b border-gray-50 last:border-0">
                  <span className="text-gray-600">{h.day}</span>
                  <span className="font-semibold text-[#14204A]">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#14204A] to-[#1a2e5c] rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#FFCD48]/20 text-[#FFCD48]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Emergency Assistance</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">For urgent claims, accidents, or medical emergencies, our team is available round the clock.</p>
            <a href="tel:+91-1800-123-4567">
              <Button className="bg-[#FFCD48] hover:bg-[#FFCD48]/90 text-[#14204A] font-bold rounded-xl w-full">
                <Phone className="mr-2 h-4 w-4" /> Call Emergency Helpline
              </Button>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-16">
          <h2 className="text-2xl font-bold text-[#14204A] mb-2">Send Us a Message</h2>
          <p className="text-gray-500 text-sm mb-6">Fill out the form and we'll get back to you within 2 hours.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#14204A] mb-1">Full Name</label>
              <input
                type="text"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD48]/50"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#14204A] mb-1">Email</label>
              <input
                type="email"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD48]/50"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#14204A] mb-1">Phone</label>
              <input
                type="tel"
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD48]/50"
                placeholder="+91 9876543210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#14204A] mb-1">Subject</label>
              <select className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD48]/50">
                <option>Policy Query</option>
                <option>Claim Assistance</option>
                <option>Premium Related</option>
                <option>Renewal</option>
                <option>Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#14204A] mb-1">Message</label>
              <textarea
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFCD48]/50"
                rows={4}
                placeholder="How can we help you?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <Button className="bg-[#FFCD48] hover:bg-[#FFCD48]/90 text-[#14204A] font-bold rounded-xl px-8">
                Send Message <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
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
      </div>
    </div>
  );
}