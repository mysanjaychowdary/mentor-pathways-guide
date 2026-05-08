import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Education Mentor" },
      { name: "description", content: "How Education Mentor collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — Education Mentor" },
      { property: "og:description", content: "How Education Mentor collects, uses and protects your personal information." },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
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
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>Education Mentor ("we", "us", "our") respects your privacy and is committed to protecting the personal information you share with us through our website and counseling services.</p>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Information We Collect</h2>
            <p>We collect information you provide directly to us, such as your name, phone number, email address and course of interest, when you submit our enquiry form or request counseling.</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">How We Use Your Information</h2>
            <p>Your information is used solely to respond to your enquiry, provide admission counseling, share details about partner universities, and follow up regarding your application. We do not sell your data to third parties.</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Communication Consent</h2>
            <p>By submitting our form, you consent to receive promotional and transactional notifications from us via SMS, email and WhatsApp. You may opt out at any time by contacting us.</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Data Sharing</h2>
            <p>We may share your details with the partner universities you express interest in, strictly for the purpose of facilitating your admission process.</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Data Security</h2>
            <p>We implement reasonable safeguards to protect your information from unauthorized access, alteration, or disclosure.</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time by writing to hello@educationmentor.in.</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Contact</h2>
            <p>For any privacy-related questions, please contact us at hello@educationmentor.in.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-muted-foreground md:flex-row md:px-6">
          <div>© {new Date().getFullYear()} Education Mentor. All rights reserved.</div>
          <div>Powered by <span className="font-semibold text-foreground">NAK CONSULTANCY SERVICES</span></div>
        </div>
      </footer>
    </div>
  );
}