import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ShieldCheck, Car, Bike, Plane, Briefcase, Heart, ArrowRight, Building, Smartphone, Users, Ambulance, Store, Cog, Wallet, Globe, CheckCircle, Headphones, FileText, LifeBuoy, RefreshCw, Phone, MessageSquare, Clock, Award, TrendingUp, Percent, Truck, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";

const CATEGORIES = [
  { id: "motor", label: "Motor Insurance", icon: Car, slug: "/insurance/motor-insurance" },
  { id: "health", label: "Health Insurance", icon: Heart, slug: "/insurance/health-insurance" },
  { id: "life", label: "Life Insurance", icon: ShieldCheck, slug: "/life-insurance" },
  { id: "travel", label: "Travel Insurance", icon: Plane, slug: "/insurance/travel-insurance" },
  { id: "business", label: "Business Insurance", icon: Briefcase, slug: "/business-insurance" },
];

const SUBCATEGORIES = {
  motor: {
    title: "Motor Insurance",
    groups: [
      {
        label: "Car Insurance",
        icon: Car,
        slug: "/insurance/car-insurance",
        items: [
          { label: "Comprehensive Car Insurance", slug: "/comprehensive-car-insurance" },
          { label: "Third Party Car Insurance", slug: "/third-party-car-insurance" },
          { label: "Zero Depreciation Insurance", slug: "/zero-depreciation-insurance" },
          { label: "Own Damage Insurance", slug: "/own-damage-car-insurance" },
        ],
      },
      {
        label: "Bike Insurance",
        icon: Bike,
        slug: "/insurance/bike-insurance",
        items: [
          { label: "Comprehensive Bike Insurance", slug: "/insurance/bike-insurance" },
          { label: "Third Party Bike Insurance", slug: "/insurance/bike-insurance" },
          { label: "Electric Bike Insurance", slug: "/insurance/bike-insurance" },
        ],
      },
    ],
  },
  health: {
    title: "Health Insurance",
    icon: Heart,
    slug: "/insurance/health-insurance",
    items: [
      { label: "Individual Health Insurance", slug: "/individual-health-insurance" },
      { label: "Family Floater Insurance", slug: "/family-floater-insurance" },
      { label: "Senior Citizen Health Insurance", slug: "/senior-citizen-insurance" },
      { label: "Critical Illness Insurance", slug: "/critical-illness-insurance" },
    ],
  },
  life: {
    title: "Life Insurance",
    icon: ShieldCheck,
    slug: "/life-insurance",
    items: [
      { label: "Term Life Insurance", slug: "/term-insurance" },
      { label: "Whole Life Insurance", slug: "/whole-life-insurance" },
      { label: "Child Plans", slug: "/child-plans" },
      { label: "Retirement Plans", slug: "/retirement-plans" },
    ],
  },
  travel: {
    title: "Travel Insurance",
    icon: Plane,
    slug: "/insurance/travel-insurance",
    items: [
      { label: "Domestic Travel Insurance", slug: "/domestic-travel-insurance" },
      { label: "International Travel Insurance", slug: "/international-travel-insurance" },
      { label: "Student Travel Insurance", slug: "/student-travel-insurance" },
    ],
  },
  business: {
    title: "Business Insurance",
    icon: Briefcase,
    slug: "/business-insurance",
    items: [
      { label: "Commercial Vehicle Insurance", slug: "/commercial-vehicle-insurance" },
      { label: "Shop Insurance", slug: "/insurance/shop-insurance" },
      { label: "Property Insurance", slug: "/property-insurance" },
      { label: "Employee Health Insurance", slug: "/employee-health-insurance" },
    ],
  },
};

const ENTERPRISE_ITEMS = [
  { label: "Group Health Insurance", slug: "/enterprise/group-health-insurance", desc: "Comprehensive health coverage for your team" },
  { label: "Employee Benefits", slug: "/enterprise/employee-benefits", desc: "Tailored benefits package for employees" },
  { label: "SME Insurance", slug: "/enterprise/sme-insurance", desc: "Protection designed for small businesses" },
  { label: "Corporate Risk Coverage", slug: "/enterprise/corporate-risk-coverage", desc: "End-to-end risk management solutions" },
];

const WHY_THIRU_ITEMS = [
  { label: "Trusted Insurance Partner", slug: "/why-thiru/trusted-partner", desc: "Years of excellence in insurance services" },
  { label: "Quick Claim Settlement", slug: "/why-thiru/quick-claim-settlement", desc: "Hassle-free and fast claim processing" },
  { label: "Best Premium Rates", slug: "/why-thiru/best-premium-rates", desc: "Competitive pricing with maximum coverage" },
  { label: "24×7 Customer Support", slug: "/why-thiru/customer-support", desc: "Round-the-clock assistance whenever you need" },
  { label: "Digital Policy Management", slug: "/why-thiru/digital-policy", desc: "Manage all policies from one dashboard" },
];

const SUPPORT_ITEMS = [
  { label: "Contact Us", slug: "/contact-us", desc: "Get in touch with our team", icon: Phone },
  { label: "FAQs", slug: "/faqs", desc: "Find answers to common questions", icon: MessageSquare },
  { label: "Claim Assistance", slug: "/claim-assistance", desc: "Help with your claims process", icon: Headphones },
  { label: "Grievance Support", slug: "/grievance-support", desc: "Raise and track grievances", icon: FileText },
];

const RENEWALS_ITEMS = [
  { label: "Renew Car Insurance", slug: "/renew/car-insurance", icon: Car },
  { label: "Renew Bike Insurance", slug: "/renew/bike-insurance", icon: Bike },
  { label: "Renew Health Insurance", slug: "/renew/health-insurance", icon: Heart },
  { label: "Renew Life Insurance", slug: "/renew/life-insurance", icon: ShieldCheck },
];

const CLAIMS_ITEMS = [
  { label: "File a Claim", slug: "/claims/file-claim", icon: FileText },
  { label: "Track Claim Status", slug: "/claims/track-status", icon: Clock },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("motor");
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
    setMobileCategory(null);
    setOpenDropdown(null);
    setSelectedCategory("motor");
  }, [location.pathname]);

  const handleDropdownEnter = (name) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const renderMegaMenu = () => {
    const cat = SUBCATEGORIES[selectedCategory];
    return (
      <div
        className="fixed left-0 w-screen z-[9999] top-[80px] border-b border-gray-100 bg-white shadow-[0_20px_60px_-12px_rgba(0,0,0,0.2)] py-5 animate-in fade-in slide-in-from-top-2 duration-200"
        onMouseEnter={() => handleDropdownEnter("products")}
        onMouseLeave={handleDropdownLeave}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 flex gap-5">
          {/* LEFT COLUMN: Categories */}
          <div className="w-[220px] shrink-0">
            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#14204A] mb-3 px-3">Categories</div>
            <div className="space-y-1">
              {CATEGORIES.map((catItem) => (
                <Link
                  key={catItem.id}
                  to={catItem.slug}
                  onClick={() => setOpenDropdown(null)}
                  onMouseEnter={() => setSelectedCategory(catItem.id)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    selectedCategory === catItem.id
                      ? "bg-[#14204A] text-white shadow-sm"
                      : "text-[#555555] hover:text-[#14204A] hover:bg-[#14204A]/5"
                  )}
                >
                  <span className={cn(
                    "grid h-7 w-7 shrink-0 place-items-center rounded-lg",
                    selectedCategory === catItem.id ? "bg-white/15" : "bg-[#14204A]/10"
                  )}>
                    <catItem.icon className={cn("h-3.5 w-3.5", selectedCategory === catItem.id ? "text-white" : "text-[#14204A]")} />
                  </span>
                  <span>{catItem.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* MIDDLE COLUMN: Dynamic Subcategories */}
          <div className="flex-1 border-l border-gray-100 pl-5">
            <Link
              to={cat.slug}
              onClick={() => setOpenDropdown(null)}
              className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#14204A] mb-3 block hover:underline"
            >
              {cat.title}
            </Link>
            {cat.groups ? (
              <div className="space-y-4">
                {cat.groups.map((group, gIdx) => (
                  <div key={gIdx}>
                    <Link
                      to={group.slug}
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center gap-2 mb-2 text-[13px] font-semibold text-[#222222] hover:text-[#14204A]"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-gray-100 text-[#555555]">
                        <group.icon className="h-3 w-3" />
                      </span>
                      <span>{group.label}</span>
                    </Link>
                    <div className="space-y-0.5 ml-7">
                      {group.items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.slug}
                          onClick={() => setOpenDropdown(null)}
                          className="block rounded-lg px-2.5 py-1.5 text-[13px] font-medium text-[#555555] hover:text-[#14204A] hover:bg-[#14204A]/5 transition-all duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-0.5">
                {cat.items.map((item) => (
                  <Link
                    key={item.label}
                    to={item.slug}
                    onClick={() => setOpenDropdown(null)}
                    className="block rounded-lg px-2.5 py-2 text-[13px] font-medium text-[#555555] hover:text-[#14204A] hover:bg-[#14204A]/5 transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Promotional Banner */}
          <div className="w-[240px] shrink-0 rounded-xl bg-gradient-to-br from-[#14204A] to-[#1a2e5c] p-5 text-white flex flex-col relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFCD48]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#FFCD48]/10 rounded-full blur-xl" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="h-5 w-5 text-[#FFCD48]" />
                <span className="text-sm font-bold tracking-wide">THIRU INSURE PLUS</span>
              </div>
              <p className="text-[13px] text-gray-200 mb-3 font-medium">Protect What Matters Most</p>
              <div className="space-y-1.5 mb-4">
                {["Instant Policy Issuance", "Fast Claim Processing", "Affordable Premiums", "100% Digital Experience"].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-[12px] text-gray-200">
                    <CheckCircle className="h-3.5 w-3.5 text-[#FFCD48] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                <Link
                  to="/plus"
                  onClick={() => setOpenDropdown(null)}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#FFCD48] hover:text-white transition-colors group"
                >
                  Know More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDropdown = (items, isEnterpriseStyle = false, isIconStyle = false) => (
    <div
      className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-gray-100 bg-white shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] p-3 animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseEnter={() => {
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
      }}
      onMouseLeave={handleDropdownLeave}
    >
      <div className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.slug}
            onClick={() => setOpenDropdown(null)}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#555555] hover:text-[#14204A] hover:bg-[#14204A]/5 transition-all duration-200",
              isIconStyle && "gap-3"
            )}
          >
            {item.icon && (
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#14204A]/5 text-[#14204A]">
                <item.icon className="h-3.5 w-3.5" />
              </span>
            )}
            <div>
              <div className="text-[13px] font-medium">{item.label}</div>
              {item.desc && <div className="text-[11px] text-gray-400 font-normal mt-0.5">{item.desc}</div>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  const navItems = [
    { label: "Products", id: "products", hasMega: true },
    { label: "Enterprise", id: "enterprise", href: "/enterprise" },
    { label: "Why Thiru Insurance", id: "why-thiru", href: "/why-thiru" },
    { label: "Support", id: "support", href: "/support" },
  ];

  const rightItems = [
    { label: "Renewals", id: "renewals", href: "/renewals" },
    { label: "Claims", id: "claims", href: "/claims" },
  ];

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
        <div className="flex items-center gap-1">
          <Link to="/" className="flex items-center shrink-0">
            <img src={logoImg} alt="THIRU INSURANCE" className="h-20 w-20 object-contain transition-all duration-300 group-hover:scale-105" />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5 ml-2">
            {navItems.map((item) =>
              item.hasMega ? (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.id)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#555555] hover:text-[#14204A] rounded-lg transition-all duration-200 hover:bg-[#14204A]/5",
                      openDropdown === item.id && "text-[#14204A] bg-[#14204A]/5"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", openDropdown === item.id && "rotate-180")} />
                  </button>
                  {openDropdown === item.id && renderMegaMenu()}
                </div>
              ) : (
                <Link
                  key={item.id}
                  to={item.href || "/"}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#555555] hover:text-[#14204A] rounded-lg transition-all duration-200 hover:bg-[#14204A]/5",
                    openDropdown === item.id && "text-[#14204A] bg-[#14204A]/5"
                  )}
                  onMouseEnter={() => handleDropdownEnter(item.id)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.label}
                  {item.href && <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", openDropdown === item.id && "rotate-180")} />}
                </Link>
              )
            )}
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 shrink-0">
          {rightItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => handleDropdownEnter(item.id)}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                to={item.href || "/"}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#555555] hover:text-[#14204A] rounded-lg transition-all duration-200 hover:bg-[#14204A]/5",
                  openDropdown === item.id && "text-[#14204A] bg-[#14204A]/5"
                )}
              >
                {item.label}
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", openDropdown === item.id && "rotate-180")} />
              </Link>
              {openDropdown === item.id && (
                item.id === "renewals" ? renderDropdown(RENEWALS_ITEMS, false, true) :
                item.id === "claims" ? renderDropdown(CLAIMS_ITEMS, false, true) :
                null
              )}
            </div>
          ))}

          <Link to="/get-quote">
            <Button className="bg-[#14204A] hover:bg-[#14204A]/90 text-white shadow-sm hover:shadow-md rounded-xl px-5 font-semibold text-sm transition-all duration-200">
              Get Quote
            </Button>
          </Link>

          <Link to="/login">
            <Button variant="ghost" size="default" className="font-semibold text-[#555555] hover:text-[#14204A] hover:bg-[#14204A]/5 rounded-lg">
              Login
            </Button>
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#555555] hover:text-[#14204A] rounded-lg transition-all duration-200 hover:bg-[#14204A]/5">
              <Globe className="h-4 w-4" />
              <span>English</span>
            </button>
          </div>
        </div>

        <div className="hidden md:flex lg:hidden items-center gap-2.5 shrink-0">
          <Link to="/get-quote">
            <Button className="bg-[#14204A] hover:bg-[#14204A]/90 text-white shadow-sm hover:shadow-md rounded-xl px-5 font-semibold text-sm transition-all duration-200">
              Get Quote
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="ghost" size="default" className="font-semibold text-[#555555] hover:text-[#14204A] hover:bg-[#14204A]/5 rounded-lg">
              Login
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
        <div className="border-t border-gray-100 bg-white lg:hidden shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col gap-1">
              {/* Products with expandable categories */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen((o) => !o)}
                  className="flex items-center justify-between w-full rounded-lg px-4 py-3 text-sm font-medium text-[#555555] hover:text-[#14204A] hover:bg-[#14204A]/5 transition-colors"
                >
                  <span>Products</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileProductsOpen && "rotate-180")} />
                </button>
                {mobileProductsOpen && (
                  <div className="ml-4 pl-3 border-l-2 border-[#14204A]/10 space-y-2 py-2">
                    {CATEGORIES.map((cat) => (
                      <div key={cat.id}>
                        <button
                          onClick={() => setMobileCategory(mobileCategory === cat.id ? null : cat.id)}
                          className="flex items-center justify-between w-full rounded-lg px-3 py-2 text-sm font-medium text-[#555555] hover:text-[#14204A] hover:bg-[#14204A]/5 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="grid h-5 w-5 shrink-0 place-items-center rounded bg-[#14204A]/10 text-[#14204A]">
                              <cat.icon className="h-3 w-3" />
                            </span>
                            <span>{cat.label}</span>
                          </div>
                          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", mobileCategory === cat.id && "rotate-180")} />
                        </button>
                        {mobileCategory === cat.id && (
                          <div className="ml-7 pl-3 border-l-2 border-gray-100 space-y-1 py-1">
                            {SUBCATEGORIES[cat.id]?.groups ? (
                              SUBCATEGORIES[cat.id].groups.map((group, gIdx) => (
                                <div key={gIdx}>
                                  <Link
                                    to={group.slug}
                                    onClick={() => { setMobileOpen(false); setMobileProductsOpen(false); }}
                                    className="block rounded-lg px-3 py-1.5 text-[12px] font-semibold text-[#222222] hover:text-[#14204A] hover:bg-[#14204A]/5 transition-colors"
                                  >
                                    {group.label}
                                  </Link>
                                  <div className="pl-3 space-y-0.5">
                                    {group.items.map((item) => (
                                      <Link
                                        key={item.label}
                                        to={item.slug}
                                        onClick={() => { setMobileOpen(false); setMobileProductsOpen(false); }}
                                        className="block rounded-lg px-3 py-1 text-[13px] font-medium text-[#555555] hover:text-[#14204A] hover:bg-[#14204A]/5 transition-colors"
                                      >
                                        {item.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))
                            ) : (
                              <>
                                <Link
                                  to={SUBCATEGORIES[cat.id]?.slug || cat.slug}
                                  onClick={() => { setMobileOpen(false); setMobileProductsOpen(false); }}
                                  className="block rounded-lg px-3 py-1.5 text-[12px] font-semibold text-[#222222] hover:text-[#14204A] hover:bg-[#14204A]/5 transition-colors"
                                >
                                  {SUBCATEGORIES[cat.id]?.title || cat.label}
                                </Link>
                                <div className="pl-3 space-y-0.5">
                                  {SUBCATEGORIES[cat.id]?.items.map((item) => (
                                    <Link
                                      key={item.label}
                                      to={item.slug}
                                      onClick={() => { setMobileOpen(false); setMobileProductsOpen(false); }}
                                      className="block rounded-lg px-3 py-1 text-[13px] font-medium text-[#555555] hover:text-[#14204A] hover:bg-[#14204A]/5 transition-colors"
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Enterprise */}
              <Link
                to="/enterprise"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#555555] hover:text-[#14204A] hover:bg-[#14204A]/5 transition-colors"
              >
                Enterprise
              </Link>

              {/* Why Thiru Insurance */}
              <Link
                to="/why-thiru"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#555555] hover:text-[#14204A] hover:bg-[#14204A]/5 transition-colors"
              >
                Why Thiru Insurance
              </Link>

              {/* Support */}
              <Link
                to="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#555555] hover:text-[#14204A] hover:bg-[#14204A]/5 transition-colors"
              >
                Support
              </Link>

              <hr className="my-2 border-gray-100" />

              {/* Renewals */}
              <Link
                to="/renew-car-insurance"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#555555] hover:text-[#14204A] hover:bg-[#14204A]/5 transition-colors"
              >
                Renewals
              </Link>

              {/* Claims */}
              <Link
                to="/claims"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#555555] hover:text-[#14204A] hover:bg-[#14204A]/5 transition-colors"
              >
                Claims
              </Link>
            </div>
            <hr className="my-4 border-gray-100" />
            <div className="grid grid-cols-2 gap-2">
              <Link to="/login" onClick={() => setMobileOpen(false)}>
                <Button variant="ghost" className="font-semibold text-[#555555] rounded-lg w-full">
                  Login
                </Button>
              </Link>
              <Link to="/get-quote" onClick={() => setMobileOpen(false)}>
                <Button className="bg-[#14204A] hover:bg-[#14204A]/90 text-white rounded-xl font-semibold w-full">
                  Get Quote
                </Button>
              </Link>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-sm text-[#555555]">
              <Globe className="h-4 w-4" />
              <span>English</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}