"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ScheduleDemoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/send-demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          workEmail: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* ── LEFT PANEL (Dark) ── */}
      <div className="relative lg:w-[45%] bg-gray-950 text-white flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }} />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-purple-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 mb-12">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-extrabold text-sm">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight">SYNCOMX</span>
          </Link>

          {/* Hero text */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.12] tracking-tight mb-6">
            Experience{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              SYNCOMX Core
            </span>{" "}
            <span className="inline-block relative">
              <svg className="absolute -top-1 -right-5 w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
              </svg>
            </span>
            <br />
            Powered Production
            <br />
            Excellence
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
            Revolutionize Your Manufacturing Base with Systemic Control.
            Explore how SYNCOMX unites operations, oversight, and logging inside a singular
            ecosystem. Schedule a personalized showcase to see how our platforms can secure
            flawless adherence, compress output delays, and optimize your entire facility.
          </p>

        </motion.div>
      </div>

      {/* ── RIGHT PANEL (Form) ── */}
      <div className="relative lg:w-[55%] bg-gray-50 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-12 lg:py-16">
        {/* Close button */}
        <button
          onClick={() => router.back()}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 transition-all duration-200 shadow-sm z-20"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="max-w-lg mx-auto w-full"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1.5 tracking-tight">
            Connect with a SYNCOMX Specialist
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Schedule a 30-Minute Product Demo with Expert Q&A
          </p>

          <AnimatePresence mode="wait">
            {submitStatus === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Demo Request Submitted!</h3>
                <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
                  Thank you for your interest. One of our experts will reach out within 24 hours to schedule your personalized demo.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Back to Home
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Work Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-200"
                    placeholder="you@company.com"
                  />
                </div>



                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-200"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all duration-200 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {/* Error message */}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {errorMessage}
                  </motion.div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-25" />
                        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>

                <p className="text-xs text-gray-400 mt-2">
                  By submitting, you agree to our Privacy Policy and consent to being contacted regarding SYNCOMX systems.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
