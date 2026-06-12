import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logoImg from "@/assets/logo.png";

const cols = [
  { title: "Company", links: [
    { label: "About Us", href: "/about-us" },
    { label: "Careers", href: "/about-us" },
    { label: "Newsroom", href: "/about-us" },
    { label: "Investor Relations", href: "/about-us" },
  ]},
  { title: "Insurance", links: [
    { label: "All Insurance", href: "/insurance" },
    { label: "Health", href: "/insurance/health-insurance" },
    { label: "Car", href: "/insurance/car-insurance" },
    { label: "Bike", href: "/insurance/bike-insurance" },
    { label: "Travel", href: "/insurance/travel-insurance" },
    { label: "Shop", href: "/insurance/shop-insurance" },
  ]},
  { title: "Services", links: [
    { label: "Claims", href: "/about-us" },
    { label: "Partner Program", href: "/about-us" },
    { label: "App", href: "/download-app" },
  ]},
  { title: "Support", links: [
    { label: "Help Center", href: "/contact-us" },
    { label: "Contact", href: "/contact-us" },
    { label: "Track Claim", href: "/about-us" },
  ]},
  { title: "Legal", links: [
    { label: "Terms", href: "/about-us" },
    { label: "Privacy", href: "/about-us" },
    { label: "IRDAI Disclosure", href: "/about-us" },
  ]},
];

export function Footer() {
  return (
    <footer className="bg-white text-[#042345]">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoImg} alt="THIRU" className="h-10 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-[#555555]">
              Insurance made simple. Trusted by over a million Indians for fast, transparent and human-friendly protection.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-full bg-[#042345]/10 text-[#042345] transition-colors hover:bg-[#042345] hover:text-white">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="font-display text-sm font-bold uppercase tracking-wider text-[#042345]">{c.title}</div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.href} className="text-sm text-[#555555] transition-colors hover:text-[#042345]">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#042345]/15 pt-6 text-xs text-[#555555] sm:flex-row">
          <div>&copy; 2026 THIRU. All Rights Reserved.</div>
          <div>Made with care in Bengaluru, India.</div>
        </div>
      </div>
    </footer>
  );
}