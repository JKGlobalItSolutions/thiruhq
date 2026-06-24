import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "@/components/Layout";

const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutUsPage = lazy(() => import("@/pages/AboutUsPage"));
const InsurancePage = lazy(() => import("@/pages/InsurancePage"));
const HealthInsurancePage = lazy(() => import("@/pages/HealthInsurancePage"));
const MotorInsurancePage = lazy(() => import("@/pages/MotorInsurancePage"));
const ShopInsurancePage = lazy(() => import("@/pages/ShopInsurancePage"));
const DeviceInsurancePage = lazy(() => import("@/pages/DeviceInsurancePage"));
const BikeInsurancePage = lazy(() => import("@/pages/BikeInsurancePage"));
const CarInsurancePage = lazy(() => import("@/pages/CarInsurancePage"));
const TravelInsurancePage = lazy(() => import("@/pages/TravelInsurancePage"));
const PersonalAccidentInsurancePage = lazy(() => import("@/pages/PersonalAccidentInsurancePage"));
const DownloadAppPage = lazy(() => import("@/pages/DownloadAppPage"));
const ContactUsPage = lazy(() => import("@/pages/ContactUsPage"));
const AgentLoginPage = lazy(() => import("@/pages/AgentLoginPage"));
const ComprehensiveCarInsurancePage = lazy(() => import("@/pages/ComprehensiveCarInsurancePage"));
const ThirdPartyCarInsurancePage = lazy(() => import("@/pages/ThirdPartyCarInsurancePage"));
const ZeroDepreciationInsurancePage = lazy(() => import("@/pages/ZeroDepreciationInsurancePage"));
const OwnDamageCarInsurancePage = lazy(() => import("@/pages/OwnDamageCarInsurancePage"));
const IndividualHealthInsurancePage = lazy(() => import("@/pages/IndividualHealthInsurancePage"));
const FamilyFloaterInsurancePage = lazy(() => import("@/pages/FamilyFloaterInsurancePage"));
const SeniorCitizenInsurancePage = lazy(() => import("@/pages/SeniorCitizenInsurancePage"));
const CriticalIllnessInsurancePage = lazy(() => import("@/pages/CriticalIllnessInsurancePage"));
const LifeInsurancePage = lazy(() => import("@/pages/LifeInsurancePage"));
const TermLifeInsurancePage = lazy(() => import("@/pages/TermLifeInsurancePage"));
const WholeLifeInsurancePage = lazy(() => import("@/pages/WholeLifeInsurancePage"));
const ChildPlansPage = lazy(() => import("@/pages/ChildPlansPage"));
const RetirementPlansPage = lazy(() => import("@/pages/RetirementPlansPage"));
const DomesticTravelInsurancePage = lazy(() => import("@/pages/DomesticTravelInsurancePage"));
const InternationalTravelInsurancePage = lazy(() => import("@/pages/InternationalTravelInsurancePage"));
const StudentTravelInsurancePage = lazy(() => import("@/pages/StudentTravelInsurancePage"));
const BusinessInsurancePage = lazy(() => import("@/pages/BusinessInsurancePage"));
const CommercialVehicleInsurancePage = lazy(() => import("@/pages/CommercialVehicleInsurancePage"));
const PropertyInsurancePage = lazy(() => import("@/pages/PropertyInsurancePage"));
const EmployeeHealthInsuranceBusinessPage = lazy(() => import("@/pages/EmployeeHealthInsuranceBusinessPage"));
const ComprehensiveBikeInsurancePage = lazy(() => import("@/pages/ComprehensiveBikeInsurancePage"));
const ThirdPartyBikeInsurancePage = lazy(() => import("@/pages/ThirdPartyBikeInsurancePage"));
const ElectricBikeInsurancePage = lazy(() => import("@/pages/ElectricBikeInsurancePage"));
const EnterprisePage = lazy(() => import("@/pages/EnterprisePage"));
const WhyThiruInsurancePage = lazy(() => import("@/pages/WhyThiruInsurancePage"));
const SupportPage = lazy(() => import("@/pages/SupportPage"));
const RenewalsPage = lazy(() => import("@/pages/RenewalsPage"));
const ClaimsPage = lazy(() => import("@/pages/ClaimsPage"));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
        <p className="mt-4 text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/insurance" element={<InsurancePage />} />
          <Route path="/insurance/health-insurance" element={<HealthInsurancePage />} />
          <Route path="/insurance/motor-insurance" element={<MotorInsurancePage />} />
          <Route path="/insurance/car-insurance" element={<CarInsurancePage />} />
          <Route path="/insurance/bike-insurance" element={<BikeInsurancePage />} />
          <Route path="/insurance/shop-insurance" element={<ShopInsurancePage />} />
          <Route path="/insurance/device-insurance" element={<DeviceInsurancePage />} />
          <Route path="/insurance/travel-insurance" element={<TravelInsurancePage />} />
          <Route path="/insurance/personal-accident-insurance" element={<PersonalAccidentInsurancePage />} />
          <Route path="/download-app" element={<DownloadAppPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/agent-login" element={<AgentLoginPage />} />
          {/* Motor Insurance Sub-pages */}
          <Route path="/comprehensive-car-insurance" element={<ComprehensiveCarInsurancePage />} />
          <Route path="/third-party-car-insurance" element={<ThirdPartyCarInsurancePage />} />
          <Route path="/zero-depreciation-insurance" element={<ZeroDepreciationInsurancePage />} />
          <Route path="/own-damage-car-insurance" element={<OwnDamageCarInsurancePage />} />
          <Route path="/comprehensive-bike-insurance" element={<ComprehensiveBikeInsurancePage />} />
          <Route path="/third-party-bike-insurance" element={<ThirdPartyBikeInsurancePage />} />
          <Route path="/electric-bike-insurance" element={<ElectricBikeInsurancePage />} />
          {/* Health Insurance Sub-pages */}
          <Route path="/individual-health-insurance" element={<IndividualHealthInsurancePage />} />
          <Route path="/family-floater-insurance" element={<FamilyFloaterInsurancePage />} />
          <Route path="/senior-citizen-insurance" element={<SeniorCitizenInsurancePage />} />
          <Route path="/critical-illness-insurance" element={<CriticalIllnessInsurancePage />} />
          {/* Life Insurance Pages */}
          <Route path="/life-insurance" element={<LifeInsurancePage />} />
          <Route path="/term-insurance" element={<TermLifeInsurancePage />} />
          <Route path="/whole-life-insurance" element={<WholeLifeInsurancePage />} />
          <Route path="/child-plans" element={<ChildPlansPage />} />
          <Route path="/retirement-plans" element={<RetirementPlansPage />} />
          {/* Travel Insurance Sub-pages */}
          <Route path="/domestic-travel-insurance" element={<DomesticTravelInsurancePage />} />
          <Route path="/international-travel-insurance" element={<InternationalTravelInsurancePage />} />
          <Route path="/student-travel-insurance" element={<StudentTravelInsurancePage />} />
          {/* Business Insurance Pages */}
          <Route path="/business-insurance" element={<BusinessInsurancePage />} />
          <Route path="/commercial-vehicle-insurance" element={<CommercialVehicleInsurancePage />} />
          <Route path="/property-insurance" element={<PropertyInsurancePage />} />
          <Route path="/employee-health-insurance" element={<EmployeeHealthInsuranceBusinessPage />} />
          {/* Main Navbar Pages */}
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/why-thiru" element={<WhyThiruInsurancePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/renewals" element={<RenewalsPage />} />
          <Route path="/claims" element={<ClaimsPage />} />
          {/* Sub-pages */}
          <Route path="/enterprise/group-health-insurance" element={<EnterprisePage />} />
          <Route path="/enterprise/employee-benefits" element={<EnterprisePage />} />
          <Route path="/enterprise/sme-insurance" element={<EnterprisePage />} />
          <Route path="/enterprise/corporate-risk-coverage" element={<EnterprisePage />} />
          <Route path="/why-thiru/trusted-partner" element={<WhyThiruInsurancePage />} />
          <Route path="/why-thiru/quick-claim-settlement" element={<WhyThiruInsurancePage />} />
          <Route path="/why-thiru/best-premium-rates" element={<WhyThiruInsurancePage />} />
          <Route path="/why-thiru/customer-support" element={<WhyThiruInsurancePage />} />
          <Route path="/why-thiru/digital-policy" element={<WhyThiruInsurancePage />} />
          <Route path="/why-thiru/customer-first" element={<WhyThiruInsurancePage />} />
          <Route path="/faqs" element={<SupportPage />} />
          <Route path="/claim-assistance" element={<SupportPage />} />
          <Route path="/grievance-support" element={<SupportPage />} />
          <Route path="/renew/car-insurance" element={<RenewalsPage />} />
          <Route path="/renew/bike-insurance" element={<RenewalsPage />} />
          <Route path="/renew/health-insurance" element={<RenewalsPage />} />
          <Route path="/renew/life-insurance" element={<RenewalsPage />} />
          <Route path="/claims/file-claim" element={<ClaimsPage />} />
          <Route path="/claims/track-status" element={<ClaimsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
