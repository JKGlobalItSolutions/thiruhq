import { RefreshCw, Car, Bike, Heart, ShieldCheck, ArrowRight } from "lucide-react";

export default function RenewalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-br from-[#14204A] to-[#1a2e5c] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h1 className="text-4xl font-bold mb-4">Renew Your Insurance</h1>
          <p className="text-lg text-gray-200 max-w-2xl">Renew your existing policies quickly and easily. Continue your coverage without any break.</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Car, title: "Renew Car Insurance", desc: "Continue your car's protection with seamless renewal. Get NCB benefits and instant policy.", link: "/renew/car-insurance" },
            { icon: Bike, title: "Renew Bike Insurance", desc: "Keep your two-wheeler insured with quick renewal. No paperwork, instant digital policy.", link: "/renew/bike-insurance" },
            { icon: Heart, title: "Renew Health Insurance", desc: "Renew your health policy without losing benefits. Lifetime renewability available.", link: "/renew/health-insurance" },
            { icon: ShieldCheck, title: "Renew Life Insurance", desc: "Continue your life protection. Renew term or whole life policies with ease.", link: "/renew/life-insurance" },
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
                Renew Now <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}