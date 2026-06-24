import { Shield, Zap, Award, Clock, Users, FileText, CheckCircle, TrendingUp } from "lucide-react";

export default function WhyThiruInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-br from-[#14204A] to-[#1a2e5c] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl font-bold mb-4">Why Choose THIRU Insurance?</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Trusted by millions of Indians, we deliver excellence in insurance services with transparency, speed, and customer-first approach.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Trusted Partner", desc: "Years of excellence in insurance services with thousands of satisfied customers across India.", slug: "/why-thiru/trusted-partner" },
            { icon: Zap, title: "Quick Claims", desc: "Hassle-free and fast claim processing with most claims settled within 24-48 hours.", slug: "/why-thiru/quick-claim-settlement" },
            { icon: Award, title: "Best Rates", desc: "Competitive pricing with maximum coverage. We guarantee the best insurance rates in the market.", slug: "/why-thiru/best-premium-rates" },
            { icon: Clock, title: "24×7 Support", desc: "Round-the-clock assistance whenever you need. Our support team is always available.", slug: "/why-thiru/customer-support" },
            { icon: FileText, title: "Digital Platform", desc: "Manage all your policies online from a single dashboard. Paperless and convenient.", slug: "/why-thiru/digital-policy" },
            { icon: Users, title: "Customer First", desc: "Every decision we make is guided by what's best for our customers. Your trust is our priority.", slug: "/why-thiru/customer-first" },
          ].map((item, idx) => (
            <a key={idx} href={item.slug} className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#14204A]/5 text-[#14204A] mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#14204A] mb-2">{item.title}</h3>
              <p className="text-[#555555] text-sm">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}