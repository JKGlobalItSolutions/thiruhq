import { FileText, Clock, CheckCircle, Phone, ArrowRight } from "lucide-react";

export default function ClaimsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-br from-[#14204A] to-[#1a2e5c] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl font-bold mb-4">Claims Center</h1>
          <p className="text-lg text-gray-200 max-w-2xl">File and track your insurance claims with ease. Our dedicated team ensures quick and hassle-free claim settlement.</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: FileText, title: "File a New Claim", desc: "Submit your insurance claim online with our simple, step-by-step process. Get approval in minutes.", link: "/claims/file-claim" },
            { icon: Clock, title: "Track Claim Status", desc: "Monitor your claim progress in real-time. Get instant updates on your claim status.", link: "/claims/track-status" },
            { icon: Phone, title: "24/7 Claims Helpline", desc: "Need help? Call our dedicated claims support team anytime for assistance.", link: "/contact-us" },
            { icon: CheckCircle, title: "Fast Settlement", desc: "Most claims settled within 24-48 hours. Quick, transparent, and hassle-free process.", link: "/claims/file-claim" },
          ].map((item, idx) => (
            <a key={idx} href={item.link} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#14204A]/5 text-[#14204A]">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#14204A]">{item.title}</h3>
              </div>
              <p className="text-[#555555] mb-4">{item.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#14204A] group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}