import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Education Mentor" },
      { name: "description", content: "Terms governing your use of Education Mentor's website and counseling services." },
      { property: "og:title", content: "Terms & Conditions — Education Mentor" },
      { property: "og:description", content: "Terms governing your use of Education Mentor's website and counseling services." },
    ],
  }),
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">Education Mentor</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </header>

      <section className="container mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Legal</span>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>By accessing or using the Education Mentor website and services, you agree to be bound by the following terms and conditions.</p>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Use of Services</h2>
            <p>Our counseling and admission guidance services are intended to assist students in choosing and applying to universities. Final admission decisions rest solely with the respective universities.</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Accuracy of Information</h2>
            <p>You agree to provide accurate, current and complete information when submitting enquiries or applications. We are not responsible for issues arising from incorrect information provided by you.</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">No Guarantee</h2>
            <p>While we strive to provide the best guidance, we do not guarantee admission, scholarships, or specific outcomes from any university.</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Intellectual Property</h2>
            <p>All content, logos, graphics and material on this website are the property of Education Mentor and may not be reproduced without prior written consent.</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Limitation of Liability</h2>
            <p>Education Mentor shall not be liable for any indirect, incidental or consequential damages arising from the use of our website or services.</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Changes to Terms</h2>
            <p>We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the revised terms.</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Contact</h2>
            <p>For questions regarding these terms, contact us at hello@educationmentor.in.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-muted-foreground md:flex-row md:px-6">
          <div>© {new Date().getFullYear()} Education Mentor. All rights reserved.</div>
          <div>Powered by <span className="font-semibold text-foreground">VINAYAKA IMPACTS</span></div>
        </div>
      </footer>
    </div>
  );
}