import { Building2, Users, Briefcase, Shield, ArrowRight } from "lucide-react";

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-br from-[#14204A] to-[#1a2e5c] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-8 w-8 text-[#FFCD48]" />
            <h1 className="text-4xl font-bold">Enterprise Solutions</h1>
          </div>
          <p className="text-lg text-gray-200 max-w-2xl">
            Comprehensive insurance solutions for businesses of all sizes. From group health insurance to corporate risk coverage, we've got you covered.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Users,
              title: "Group Health Insurance",
              desc: "Comprehensive health coverage for your entire team with cashless hospitalization and no medical check-ups.",
              link: "/enterprise/group-health-insurance",
            },
            {
              icon: Briefcase,
              title: "Employee Benefits",
              desc: "Tailored benefits packages to attract and retain top talent while maximizing tax savings.",
              link: "/enterprise/employee-benefits",
            },
            {
              icon: Shield,
              title: "SME Insurance",
              desc: "Protection designed specifically for small and medium enterprises with flexible coverage options.",
              link: "/enterprise/sme-insurance",
            },
            {
              icon: Building2,
              title: "Corporate Risk Coverage",
              desc: "End-to-end risk management solutions for large corporations and enterprise clients.",
              link: "/enterprise/corporate-risk-coverage",
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
            >
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