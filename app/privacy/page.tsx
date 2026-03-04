import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Kolom Technologies",
  description:
    "Learn how Kolom Technologies collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen bg-black pt-32 pb-24">
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            width: "80vw",
            height: "60vh",
            background:
              "radial-gradient(ellipse at center, rgba(64,147,255,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-10">
          <Link
            href="/"
            className="group mb-10 inline-flex items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-[#4093FF]"
          >
            <ArrowLeft
              size={14}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Back to Home
          </Link>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Privacy{" "}
            <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="mb-12 text-sm text-white/30">
            Last updated: March 4, 2026
          </p>

          <div className="space-y-10 text-sm leading-relaxed text-white/40 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
            <section>
              <h2>1. Introduction</h2>
              <p>
                Kolom Technologies Ltd. (&quot;Company,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <ul>
                <li>
                  <strong className="text-white/60">Personal Information:</strong>{" "}
                  Name, email address, phone number, and company name when you
                  contact us or engage our services.
                </li>
                <li>
                  <strong className="text-white/60">Usage Data:</strong>{" "}
                  Information about how you access and use our website, including
                  IP address, browser type, pages visited, and time spent.
                </li>
                <li>
                  <strong className="text-white/60">Cookies:</strong>{" "}
                  We may use cookies and similar tracking technologies to
                  improve your experience on our website.
                </li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <ul>
                <li>To provide, maintain, and improve our services.</li>
                <li>To respond to your inquiries and communicate with you.</li>
                <li>To analyze website usage and improve user experience.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2>4. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third
                parties. We may share information with trusted service providers
                who assist us in operating our website and services, subject to
                confidentiality agreements.
              </p>
            </section>

            <section>
              <h2>5. Data Security</h2>
              <p>
                We implement reasonable technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2>6. Data Retention</h2>
              <p>
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this policy, or as
                required by law.
              </p>
            </section>

            <section>
              <h2>7. Your Rights</h2>
              <ul>
                <li>Access the personal information we hold about you.</li>
                <li>Request correction of inaccurate or incomplete data.</li>
                <li>Request deletion of your personal information.</li>
                <li>
                  Object to or restrict the processing of your personal
                  information.
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:team@kolom.ai"
                  className="text-[#4093FF] transition-colors duration-300 hover:text-[#6db3ff]"
                >
                  team@kolom.ai
                </a>
                .
              </p>
            </section>

            <section>
              <h2>8. Third-Party Services</h2>
              <p>
                Our website may contain links to third-party services. We are
                not responsible for the privacy practices of these external
                sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated &quot;Last
                updated&quot; date. Your continued use of our services after any
                changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2>10. Contact</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href="mailto:team@kolom.ai"
                  className="text-[#4093FF] transition-colors duration-300 hover:text-[#6db3ff]"
                >
                  team@kolom.ai
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
