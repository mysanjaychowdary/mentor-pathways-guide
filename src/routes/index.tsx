import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  GraduationCap, Menu, X, Phone, Mail, MapPin, MessageCircle,
  CheckCircle2, Award, Users, Headphones, Sparkles, ArrowRight,
  BookOpen, Building2, Briefcase, FlaskConical, Stethoscope, Code2,
  Search, ClipboardCheck, FileText, Trophy, Star, Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero-students.jpg";
import campusImg from "@/assets/campus.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Universities", href: "#universities" },
  { label: "Courses", href: "#courses" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const universities = [
  { name: "Lovely Professional University", location: "Punjab", courses: "Engineering · MBA · Law" },
  { name: "Chandigarh University", location: "Mohali", courses: "B.Tech · BBA · Pharmacy" },
  { name: "Amity University", location: "Noida", courses: "Engineering · MBA · Design" },
  { name: "Manipal University", location: "Karnataka", courses: "Medical · Engineering · Arts" },
  { name: "Sharda University", location: "Greater Noida", courses: "B.Tech · MBBS · Law" },
  { name: "Galgotias University", location: "Greater Noida", courses: "Engineering · MBA · Pharmacy" },
];

const courses = [
  { icon: Code2, title: "Engineering", desc: "B.Tech, M.Tech in CSE, AI, Mechanical, Civil & more." },
  { icon: Briefcase, title: "MBA", desc: "Specializations in Marketing, Finance, HR & Analytics." },
  { icon: BookOpen, title: "Degree Programs", desc: "BA, BSc, BCom, BBA from accredited universities." },
  { icon: FlaskConical, title: "Pharmacy", desc: "B.Pharm, D.Pharm, M.Pharm with industry exposure." },
  { icon: Stethoscope, title: "Medical & Allied", desc: "BAMS, BHMS, Nursing, Physiotherapy programs." },
  { icon: Building2, title: "Law & Design", desc: "BA LLB, BBA LLB, B.Des, fashion & interior design." },
];

const whyUs = [
  { icon: Award, title: "Expert Guidance", desc: "15+ years of experience guiding 10,000+ students to the right university." },
  { icon: Headphones, title: "100% Support", desc: "End-to-end assistance from application to enrollment and beyond." },
  { icon: Users, title: "Trusted by Students", desc: "Recommended by thousands of alumni across India and abroad." },
  { icon: Sparkles, title: "Easy Admission", desc: "Hassle-free, transparent process with the best scholarship offers." },
];

const steps = [
  { icon: Search, title: "Enquiry", desc: "Share your goals and academic background with our team." },
  { icon: ClipboardCheck, title: "Counseling", desc: "Get personalized guidance on the best-fit universities." },
  { icon: FileText, title: "Application", desc: "We help you prepare and submit a winning application." },
  { icon: Trophy, title: "Admission", desc: "Secure your seat with scholarships and start your journey." },
];

const testimonials = [
  { name: "Priya Sharma", course: "B.Tech CSE", text: "Education Mentor made my admission process incredibly smooth. Got into my dream university with a scholarship!" },
  { name: "Rohan Verma", course: "MBA Finance", text: "The counselors understood exactly what I wanted. Highly recommend for anyone confused about university choice." },
  { name: "Ananya Iyer", course: "B.Pharm", text: "From application to admission, every step was guided perfectly. Truly grateful for their support and expertise." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.course) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Thanks! Our counselor will contact you shortly.");
    setForm({ name: "", phone: "", email: "", course: "" });
  };

  return (
    <div id="home" className="min-h-screen bg-background">
      <Toaster position="top-center" />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">Education Mentor</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild className="bg-[image:var(--gradient-hero)] shadow-[var(--shadow-soft)] hover:opacity-90">
              <a href="#contact">Apply Now</a>
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-border/40 bg-background md:hidden">
            <nav className="container mx-auto flex flex-col gap-1 px-4 py-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted">
                  {l.label}
                </a>
              ))}
              <Button asChild className="mt-2 bg-[image:var(--gradient-hero)]">
                <a href="#contact" onClick={() => setMenuOpen(false)}>Apply Now</a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-glow/40 blur-3xl" />
        <div className="container relative mx-auto grid gap-12 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Admissions Open 2026
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Your Gateway to <span className="bg-gradient-to-r from-accent to-amber-300 bg-clip-text text-transparent">Top Universities</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/85">
              Get expert admission guidance for India's leading universities. We've helped 10,000+ students unlock their dream careers — let's start with yours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground shadow-[var(--shadow-glow)] hover:bg-accent/90">
                <a href="#contact">Get Free Counseling <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white">
                <a href="#universities">Explore Universities</a>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-white">
              {[
                { n: "10K+", l: "Students Placed" },
                { n: "150+", l: "Partner Universities" },
                { n: "15+", l: "Years Experience" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold md:text-3xl">{s.n}</div>
                  <div className="text-xs text-white/70 md:text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-2xl" />
            <img
              src={heroImg}
              alt="Happy university graduates celebrating their admission success"
              width={1536}
              height={1024}
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/20"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-background p-4 shadow-[var(--shadow-card)] sm:flex sm:items-center sm:gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--whatsapp)]/15 text-[color:var(--whatsapp)]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">Free Counseling</div>
                <div className="text-xs text-muted-foreground">Available 7 days a week</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28">
        <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img src={campusImg} alt="Modern university campus" loading="lazy" width={1024} height={768}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-card)]" />
            <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-[image:var(--gradient-accent)] p-5 text-white shadow-xl sm:block">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-xs">Success Rate</div>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Helping students reach their dream universities across India</h2>
            <p className="mt-5 text-muted-foreground">
              Education Mentor is a trusted educational consultancy with over a decade of experience guiding aspiring students through India's competitive university admissions landscape. From career counseling to securing your seat, our expert mentors stand by you at every step.
            </p>
            <ul className="mt-6 space-y-3">
              {["Personalised university shortlisting", "Scholarship & loan assistance", "End-to-end documentation support", "Career & course counseling"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section id="universities" className="bg-muted/40 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Partner Universities</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">India's top universities, one application away</h2>
            <p className="mt-4 text-muted-foreground">We partner with the country's most reputed institutions to bring you the best admission opportunities.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {universities.map((u) => (
              <Card key={u.name} className="group p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">{u.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{u.location}</p>
                <p className="mt-3 text-sm">{u.courses}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Know more <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Courses Offered</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Find a program built for your career</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <Card key={c.title} className="p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-accent)] text-white shadow-md">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Trusted mentorship that delivers results</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => (
              <Card key={w.title} className="p-6 text-center transition-all hover:shadow-[var(--shadow-card)]">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <w.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Admission Process</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Four simple steps to your dream university</h2>
          </div>
          <div className="relative mt-16 grid gap-8 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-soft)]">
                  <s.icon className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">{i + 1}</span>
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">What our students say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="relative p-7">
                <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/15" />
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--gradient-hero)] text-sm font-semibold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.course}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Get in touch</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Begin your admission journey today</h2>
              <p className="mt-4 text-muted-foreground">Fill out the form and our counselor will reach out within 24 hours with a personalized admission plan.</p>
              <div className="mt-8 space-y-4">
                <a href="tel:+919876543210" className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary"><Phone className="h-5 w-5" /></div>
                  <div><div className="text-xs text-muted-foreground">Call us</div><div className="font-medium">+91 98765 43210</div></div>
                </a>
                <a href="mailto:hello@educationmentor.in" className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary"><Mail className="h-5 w-5" /></div>
                  <div><div className="text-xs text-muted-foreground">Email us</div><div className="font-medium">hello@educationmentor.in</div></div>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener" className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-[color:var(--whatsapp)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[color:var(--whatsapp)]/15 text-[color:var(--whatsapp)]"><MessageCircle className="h-5 w-5" /></div>
                  <div><div className="text-xs text-muted-foreground">WhatsApp</div><div className="font-medium">Chat with a counselor</div></div>
                </a>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary"><MapPin className="h-5 w-5" /></div>
                  <div><div className="text-xs text-muted-foreground">Office</div><div className="font-medium">New Delhi · Bengaluru · Mumbai</div></div>
                </div>
              </div>
            </div>
            <Card className="p-7 shadow-[var(--shadow-card)]">
              <h3 className="text-xl font-semibold">Apply for Free Counseling</h3>
              <p className="mt-1 text-sm text-muted-foreground">Tell us about yourself</p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Full Name</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" maxLength={100} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Phone</label>
                    <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" maxLength={20} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Email</label>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" maxLength={255} />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Course of Interest</label>
                  <Select value={form.course} onValueChange={(v) => setForm({ ...form, course: v })}>
                    <SelectTrigger><SelectValue placeholder="Select a course" /></SelectTrigger>
                    <SelectContent>
                      {courses.map((c) => <SelectItem key={c.title} value={c.title}>{c.title}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" size="lg" className="w-full bg-[image:var(--gradient-hero)] shadow-[var(--shadow-soft)] hover:opacity-90">
                  Submit Application <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-hero)] text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold">Education Mentor</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Your trusted partner for university admissions across India. Helping students unlock their potential with expert guidance and personalized support.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} className="text-muted-foreground hover:text-primary">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-5 text-center text-xs text-muted-foreground md:px-6">
            © {new Date().getFullYear()} Education Mentor. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 animate-float items-center justify-center rounded-full bg-[color:var(--whatsapp)] text-white shadow-2xl ring-4 ring-[color:var(--whatsapp)]/20 transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
