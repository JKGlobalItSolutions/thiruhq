import { Store, Shield, CheckCircle2, Clock, Award, Zap, Users, FileText, DollarSign, Umbrella } from "lucide-react";
import { InsurancePageTemplate } from "@/components/InsurancePageTemplate";

export default function ShopInsurancePage() {
  return (
    <InsurancePageTemplate
      title="Shop Insurance"
      subtitle="Complete coverage for retail shops, stock & business premises."
      description="Shop insurance with stock cover, burglary protection, fire coverage, and public liability. Protect your retail business starting from just ₹2,999/year."
      heroIcon={Store}
      heroImage="/src/assets/insurance-banners/shop-insurance.webp"
      breadcrumbs={[{ label: "Insurance", href: "/insurance" }, { label: "Shop Insurance" }]}
      productName="Shop Insurance"
      introduction="Your shop is not just a business — it's your livelihood. Whether you run a grocery store, clothing boutique, electronics shop, or any retail business, protecting your inventory, premises, and daily operations from unexpected events is crucial. At THIRU Insurance, our Shop Insurance policy is designed specifically for retail businesses, providing comprehensive coverage for your stock, shop premises, and liabilities at very affordable premiums."
      whatIs="Shop Insurance is a specialized business insurance policy designed to protect retail shops and small businesses from financial losses due to fire, theft, burglary, natural disasters, and public liability claims. Unlike standard property insurance, shop insurance is tailored to the specific needs of retail businesses, covering stock-in-trade, shop fittings, display items, cash in hand, and public liability. In India, shop insurance is becoming increasingly popular among small business owners who want to protect their investment against unforeseen events that could disrupt their business operations."
      benefits={[
        { icon: Shield, title: "Stock-in-Trade Cover", desc: "Protection for your inventory and merchandise against theft, fire, and damage." },
        { icon: Store, title: "Premises Protection", desc: "Coverage for shop building, fixtures, fittings, and interiors against damage." },
        { icon: Award, title: "Burglary Insurance", desc: "Coverage against theft, burglary, and robbery including break-ins." },
        { icon: Zap, title: "Fire & Allied Perils", desc: "Protection against fire, lightning, explosion, and short circuit damage." },
        { icon: Umbrella, title: "Public Liability", desc: "Coverage for customer injuries or property damage on your premises." },
        { icon: DollarSign, title: "Cash Protection", desc: "In-shop cash cover up to ₹50,000 and daily remittance protection." },
        { icon: Clock, title: "Quick Claim Settlement", desc: "Claims processed within 48 hours for shop insurance policies." },
        { icon: Users, title: "Electronic Equipment", desc: "Coverage for computers, billing machines, and CCTV equipment." },
      ]}
      coverage={[
        { label: "Stock & Inventory", desc: "Coverage for all stock-in-trade including raw materials and finished goods" },
        { label: "Shop Premises", desc: "Building, interior walls, flooring, ceiling, and permanent fixtures" },
        { label: "Furniture & Fittings", desc: "Counters, shelves, display racks, furniture, and shop fittings" },
        { label: "Burglary & Theft", desc: "Loss due to burglary, housebreaking, theft, or robbery" },
        { label: "Fire & Allied Perils", desc: "Damage from fire, lightning, explosion, short circuit, and bursting of pipes" },
        { label: "Natural Calamities", desc: "Coverage for floods, earthquakes, cyclones, and storms" },
        { label: "Cash in Hand", desc: "Daily cash in shop up to ₹50,000 and cash in transit" },
        { label: "Public Liability", desc: "Legal liability for injury to customers or damage to their property" },
      ]}
      exclusions={[
        { label: "Wear & Tear", desc: "Normal depreciation and gradual deterioration of stock and premises" },
        { label: "Intentional Loss", desc: "Loss caused intentionally by the insured or employees" },
        { label: "War & Terrorism", desc: "Losses due to war, invasion, or terrorist activities" },
        { label: "Nuclear Risks", desc: "Damage due to nuclear reaction or radiation" },
        { label: "Consequential Loss", desc: "Loss of business income or loss of profits due to business interruption" },
        { label: "Perishable Goods", desc: "Spoilage of perishable goods unless specifically covered" },
      ]}
      whyChoose={[
        { icon: Shield, title: "IRDAI Approved", desc: "All shop insurance policies from IRDAI-approved insurers." },
        { icon: Award, title: "10,000+ Shops Covered", desc: "Trusted by over 10,000 shop owners across India." },
        { icon: Zap, title: "Instant Policy Issuance", desc: "Get your shop insurance policy in minutes online." },
        { icon: Users, title: "Affordable Premiums", desc: "Shop insurance starting from just ₹2,999/year." },
        { icon: Clock, title: "24/7 Claim Support", desc: "Round-the-clock claim assistance for shop owners." },
        { icon: FileText, title: "Easy Documentation", desc: "Minimal paperwork required for policy purchase and claims." },
      ]}
      enquiryFormSpecific={
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-[#14204A] border-b border-gray-100 pb-2">Shop Details</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Shop Name *</label>
              <input type="text" name="shopName" required placeholder="Your shop name" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-[#14204A]">Business Type *</label>
              <select name="businessType" required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none">
                <option value="">Select</option>
                <option value="grocery">Grocery / Kirana Store</option>
                <option value="clothing">Clothing / Fashion Store</option>
                <option value="electronics">Electronics / Mobile Shop</option>
                <option value="medical">Medical / Pharmacy</option>
                <option value="general">General Store</option>
                <option value="other">Other Retail</option>
              </select>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-[#14204A]">Shop Area (Sq Ft) *</label>
            <input type="number" name="shopArea" required placeholder="e.g. 500" min="50" max="10000" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#222222] placeholder-gray-400 focus:border-[#14204A] focus:ring-2 focus:ring-[#14204A]/10 transition-all duration-200 outline-none" />
          </div>
        </div>
      }
      faqs={[
        { question: "What does shop insurance cover?", answer: "Shop insurance covers your stock-in-trade, shop premises, furniture and fittings, burglary and theft, fire and natural disasters, cash in hand up to ₹50,000, and public liability for customer injuries." },
        { question: "Is shop insurance mandatory for retail businesses?", answer: "While not legally mandatory, shop insurance is highly recommended for all retail businesses. If you have taken a business loan, the bank may require comprehensive shop insurance as a condition." },
        { question: "How much does shop insurance cost?", answer: "Shop insurance premiums start from as low as ₹2,999 per year for basic coverage. The premium depends on factors like shop area, location, stock value, and coverage options selected." },
        { question: "Does shop insurance cover theft by employees?", answer: "Standard shop insurance covers burglary and robbery by outsiders. Employee theft or internal fraud may require a separate fidelity guarantee insurance policy." },
        { question: "Can I add multiple shops under one policy?", answer: "Yes, if you own multiple shop locations, you can opt for a comprehensive policy that covers all your shops under a single plan with aggregated coverage limits." },
      ]}
      ctaText="Protect Your Shop Today!"
    />
  );
}