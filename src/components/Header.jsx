import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ShieldCheck, Car, Bike, Plane, Briefcase, Heart, ArrowRight, Building, Smartphone, Users, Ambulance, Store, Cog, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";

const NAV_ITEMS = [
  { label: "Insurance", href: "/insurance", hasMega: true },
  { label: "About Us", href: "/about-us" },
  { label: "Download App", href: "/download-app" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Agent Login", href: "/agent-login" },
];

const MEGA_COLUMNS = [
  {
    title: "Health & Life",
    icon: Heart,
    items: [
      { label: "Health Insurance", desc: "Cashless hospitalization", slug: "/insurance/health-insurance" },
      { label: "Personal Accident", desc: "Accident protection", slug: "/insurance/personal-accident-insurance" },
    ],
  },
  {
    title: "Motor Insurance",
    icon: Car,
    items: [
      { label: "Car Insurance", desc: "Comprehensive & third-party", slug: "/insurance/car-insurance" },
      { label: "Bike Insurance", desc: "Two-wheeler protection", slug: "/insurance/bike-insurance" },
      { label: "Motor Insurance", desc: "All vehicle protection", slug: "/insurance/motor-insurance" },
    ],
  },
  {
    title: "Travel & Device",
    icon: Plane,
    items: [
      { label: "Travel Insurance", desc: "Worldwide travel cover", slug: "/insurance/travel-insurance" },
      { label: "Device Insurance", desc: "Gadget protection", slug: "/insurance/device-insurance" },
    ],
  },
  {
    title: "Business",
    icon: Briefcase,
    items: [
      { label: "Shop Insurance", desc: "Retail shop protection", slug: "/insurance/shop-insurance" },
      { label: "View All Insurance", desc: "Browse all products", slug: "/insurance" },
    ],
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  const handleMegaEnter = () => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeoutRef.current = setTimeout(() => setMegaOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-20 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "bg-white",
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center shrink-0">
          <img src={logoImg} alt="THIRU" className="h-20 w-20 object-contain transition-all duration-300 group-hover:scale-105" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) =>
            item.hasMega ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={handleMegaEnter}
                onMouseLeave={handleMegaLeave}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#555555] hover:text-[#042345] rounded-lg transition-all duration-200 hover:bg-[#042345]/5"
                >
                  {item.label}
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", megaOpen && "rotate-180")} />
                </Link>
                {megaOpen && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[900px] rounded-2xl border border-gray-100 bg-white shadow-[0_20px_60px_-12px_rgba(0,0,0,0.2)] p-6 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={handleMegaEnter}
                    onMouseLeave={handleMegaLeave}
                  >
                    <div className="grid grid-cols-4 gap-5">
                      {MEGA_COLUMNS.map((col) => (
                        <div key={col.title}>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#042345]/10 text-[#042345]">
                              <col.icon className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#042345]">{col.title}</span>
                          </div>
                          <div className="space-y-1">
                            {col.items.map((prod) => (
                              <Link
                                key={prod.label}
                                to={prod.slug}
                                onClick={() => setMegaOpen(false)}
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-[#555555] hover:text-[#042345] hover:bg-[#042345]/5 transition-all duration-200 group/item"
                              >
                                <div className="flex items-center justify-between">
                                  <span>{prod.label}</span>
                                  <ArrowRight className="h-3 w-3 text-gray-300 transition-all duration-200 -translate-x-1 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100 group-hover/item:text-[#042345]" />
                                </div>
                                <div className="text-[11px] text-gray-400 font-normal mt-0.5">{prod.desc}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="px-4 py-2 text-sm font-medium text-[#555555] hover:text-[#042345] rounded-lg transition-all duration-200 hover:bg-[#042345]/5"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <Link to="/agent-login">
            <Button variant="ghost" size="default" className="font-semibold text-[#555555] hover:text-[#042345] hover:bg-[#042345]/5 rounded-lg">
              Login
            </Button>
          </Link>
          <Link to="/contact-us">
            <Button className="bg-[#042345] hover:bg-[#042345]/90 text-white shadow-sm hover:shadow-md rounded-lg px-5 font-semibold text-sm transition-all duration-200">
              Get Quote
            </Button>
          </Link>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg lg:hidden text-[#555555] hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden shadow-lg">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-[#555555] hover:text-[#042345] hover:bg-[#042345]/5 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <hr className="my-4 border-gray-100" />
            <div className="grid grid-cols-2 gap-2">
              <Link to="/agent-login" onClick={() => setMobileOpen(false)}>
                <Button variant="ghost" className="font-semibold text-[#555555] rounded-lg w-full">
                  Login
                </Button>
              </Link>
              <Link to="/contact-us" onClick={() => setMobileOpen(false)}>
                <Button className="bg-[#042345] hover:bg-[#042345]/90 text-white rounded-lg font-semibold w-full">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}