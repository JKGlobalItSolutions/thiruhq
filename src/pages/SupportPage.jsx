import { Phone, MessageSquare, Headphones, FileText, Mail, MapPin, Clock } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-br from-[#14204A] to-[#1a2e5c] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl font-bold mb-4">Support Center</h1>
          <p className="text-lg text-gray-200 max-w-2xl">We're here to help. Get in touch with our support team for any queries or assistance.</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Phone, title: "Call Us", desc: "24/7 customer support helpline", link: "/contact-us" },
            { icon: MessageSquare, title: "FAQs", desc: "Quick answers to common questions", link: "/faqs" },
            { icon: Headphones, title: "Claim Assistance", desc: "Help with your claims process", link: "/claim-assistance" },
            { icon: FileText, title: "Grievance Support", desc: "Raise and track grievances", link: "/grievance-support" },
          ].map((item, idx) => (
            <a key={idx} href={item.link} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#14204A]/5 text-[#14204A] mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#14204A] mb-2">{item.title}</h3>
              <p className="text-[#555555] text-sm mb-3">{item.desc}</p>
              <span className="text-sm font-semibold text-[#14204A] group-hover:underline">Learn More →</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}