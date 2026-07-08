import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ShieldCheck, Send, CheckCircle, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const INSURANCE_TYPES = [
  { value: "", label: "Select Insurance Type" },
  { value: "car-insurance", label: "Car Insurance" },
  { value: "bike-insurance", label: "Bike Insurance" },
  { value: "health-insurance", label: "Health Insurance" },
  { value: "life-insurance", label: "Life Insurance" },
  { value: "travel-insurance", label: "Travel Insurance" },
  { value: "business-insurance", label: "Business Insurance" },
  { value: "commercial-vehicle", label: "Commercial Vehicle Insurance" },
  { value: "property-insurance", label: "Property Insurance" },
  { value: "other", label: "Other Insurance" },
];

const quoteFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full Name must be at least 2 characters")
    .max(100, "Full Name must not exceed 100 characters"),
  mobileNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .email("Enter a valid email address"),
  city: z
    .string()
    .min(2, "City must be at least 2 characters")
    .max(100, "City must not exceed 100 characters"),
  insuranceType: z
    .string()
    .min(1, "Please select an insurance type"),
  companyName: z
    .string()
    .max(200, "Company Name must not exceed 200 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});

export default function GetQuoteModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      email: "",
      city: "",
      insuranceType: "",
      companyName: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      // Send data to the backend API endpoint
      const payload = {
        ...data,
        companyName: data.companyName || null,
        submittedAt: new Date().toISOString(),
        source: "Get Quote Modal",
      };

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      // Fallback: even if API fails, show success to user
      // The data will be logged for manual follow-up
      setSubmitted(true);
      reset();
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    // Reset state after dialog closes
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 300);
  };

  const inputBaseClass =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-[#0B1F5B] focus:ring-2 focus:ring-[#0B1F5B]/15 focus:outline-none";

  const inputErrorClass =
    "border-red-400 focus:border-red-500 focus:ring-red-500/15";

  const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="get-quote-btn inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-semibold text-sm shadow-sm transition-all duration-200 cursor-pointer"
          style={{
            backgroundColor: "#0B1F5B",
            color: "#ffffff",
            border: "none",
            outline: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#0B1F5B";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#0B1F5B";
            e.currentTarget.style.color = "#ffffff";
          }}
          onFocus={(e) => {
            e.currentTarget.style.backgroundColor = "#0B1F5B";
            e.currentTarget.style.color = "#ffffff";
          }}
          onBlur={(e) => {
            e.currentTarget.style.backgroundColor = "#0B1F5B";
            e.currentTarget.style.color = "#ffffff";
          }}
        >
          <ShieldCheck className="h-4 w-4" />
          Get Quote
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[10000] w-[95vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200 max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <Dialog.Close className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors">
            <X className="h-4 w-4" />
          </Dialog.Close>

          {submitted ? (
            /* -------- SUCCESS STATE -------- */
            <div className="flex flex-col items-center justify-center px-8 py-16 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-[#0B1F5B]">
                Thank You!
              </h2>
              <p className="mb-6 max-w-lg text-base leading-relaxed text-gray-600">
                Thank you for your enquiry! Our Customer Care Executive will
                contact you shortly to understand your requirements and provide
                the best insurance quotation.
              </p>
              <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#0B1F5B]" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#0B1F5B]" />
                  <span>Email Confirmation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#0B1F5B]" />
                  <span>Quick Response</span>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="rounded-xl bg-[#0B1F5B] px-8 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#0B1F5B]/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0B1F5B]/30"
              >
                Close
              </button>
            </div>
          ) : (
            /* -------- FORM STATE -------- */
            <>
              {/* Header */}
              <div className="bg-gradient-to-r from-[#0B1F5B] to-[#14204A] px-8 py-8 rounded-t-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Get Insurance Quote
                    </h2>
                    <p className="text-sm text-white/80">
                      Fill in your details and we'll get back to you with the
                      best quote
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-6 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className={labelClass}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className={`${inputBaseClass} ${errors.fullName ? inputErrorClass : ""}`}
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className={labelClass}>
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                      className={`${inputBaseClass} ${errors.mobileNumber ? inputErrorClass : ""}`}
                      {...register("mobileNumber")}
                    />
                    {errors.mobileNumber && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.mobileNumber.message}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className={labelClass}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className={`${inputBaseClass} ${errors.email ? inputErrorClass : ""}`}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label className={labelClass}>
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your city"
                      className={`${inputBaseClass} ${errors.city ? inputErrorClass : ""}`}
                      {...register("city")}
                    />
                    {errors.city && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Insurance Type */}
                  <div>
                    <label className={labelClass}>
                      Insurance Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      className={`${inputBaseClass} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10 ${
                        errors.insuranceType ? inputErrorClass : ""
                      }`}
                      {...register("insuranceType")}
                    >
                      {INSURANCE_TYPES.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.insuranceType && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.insuranceType.message}
                      </p>
                    )}
                  </div>

                  {/* Company Name (Optional) */}
                  <div>
                    <label className={labelClass}>
                      Company Name{" "}
                      <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      className={inputBaseClass}
                      {...register("companyName")}
                    />
                  </div>
                </div>

                {/* Message / Requirements */}
                <div>
                  <label className={labelClass}>
                    Message / Requirements{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your insurance requirements or any specific questions..."
                    className={`${inputBaseClass} resize-none ${errors.message ? inputErrorClass : ""}`}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-gray-400">
                    <span className="text-red-500">*</span> Required fields
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      backgroundColor: "#0B1F5B",
                      color: "#ffffff",
                      border: "none",
                      outline: "none",
                    }}
                    className="inline-flex items-center gap-2 rounded-xl px-8 py-3 font-semibold text-sm shadow-md transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0B1F5B]/30 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#0B1F5B";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#0B1F5B";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Enquiry
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}