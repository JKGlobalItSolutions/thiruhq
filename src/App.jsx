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
        </Route>
      </Routes>
    </Suspense>
  );
}