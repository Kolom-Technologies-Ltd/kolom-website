import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — Kolom Technologies",
  description:
    "Terms and conditions for using Kolom Technologies services and website.",
};

export default function TermsPage() {
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
            Terms &amp;{" "}
            <span className="bg-gradient-to-r from-[#4093FF] via-[#6db3ff] to-[#4093FF] bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          <p className="mb-12 text-sm text-white/30">
            Last updated: March 4, 2026
          </p>

          <div className="space-y-10 text-sm leading-relaxed text-white/40 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
            <section>
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using the website and services provided by Kolom
                Technologies Ltd. (&quot;Company,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;), you agree to be bound by
                these Terms &amp; Conditions. If you do not agree, please do not
                use our services.
              </p>
            </section>

            <section>
              <h2>2. Services</h2>
              <p>
                Kolom Technologies provides software development, design, and
                AI-driven solutions. The scope, deliverables, and timelines for
                any engagement will be defined in a separate statement of work or
                service agreement between the parties.
              </p>
            </section>

            <section>
              <h2>3. Intellectual Property</h2>
              <ul>
                <li>
                  All content on this website — including text, graphics, logos,
                  and software — is the property of Kolom Technologies Ltd. and
                  is protected by applicable intellectual property laws.
                </li>
                <li>
                  Client work product ownership is governed by the specific
                  service agreement for each engagement.
                </li>
              </ul>
            </section>

            <section>
              <h2>4. User Responsibilities</h2>
              <ul>
                <li>
                  You agree not to use our website or services for any unlawful
                  purpose or in violation of any applicable laws or regulations.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of any
                  account credentials associated with our services.
                </li>
              </ul>
            </section>

            <section>
              <h2>5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Kolom Technologies Ltd.
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of our
                website or services, even if we have been advised of the
                possibility of such damages.
              </p>
            </section>

            <section>
              <h2>6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the content, privacy practices, or terms of
                any third-party sites.
              </p>
            </section>

            <section>
              <h2>7. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting to this page. Your
                continued use of our services after any changes constitutes
                acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2>8. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the
                laws of Bangladesh. Any disputes arising from these terms shall
                be subject to the exclusive jurisdiction of the courts in Dhaka,
                Bangladesh.
              </p>
            </section>

            <section>
              <h2>9. Contact</h2>
              <p>
                If you have any questions about these Terms &amp; Conditions,
                please contact us at{" "}
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
