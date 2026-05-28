import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { LiveTranslation } from "@/components/LiveTranslation";
import { Languages } from "@/components/Languages";
import { ArrowRight, BookOpen, Tv, QrCode, Languages as LangIcon, Sparkles, ShieldCheck, Zap, Megaphone, ScanLine, Headphones, ArrowRight as ArrowRightIcon, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aalim — #1 Live Translation Built for the Masjid" },
      { name: "description", content: "Real-time Arabic to English translation for masjids. 90%+ accuracy, 20+ languages, set up in under a minute. Built for the Ummah." },
      { property: "og:title", content: "Aalim — Live Translation for the Masjid" },
      { property: "og:description", content: "Real-time Arabic translation in 20+ languages. Setup in 60 seconds." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background islamic-pattern">
      <Navbar />

      {/* HERO */}
      <section className="bg-hero pt-16 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border/60 text-xs font-medium text-secondary-foreground mb-6">
              <Sparkles className="size-3.5 text-primary" />
              The #1 live translation made for masjids
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              Every word of the khutbah, <span className="text-primary italic">understood</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              The world's first live khutbah translation platform — delivering real-time
              translation and ready in your masjid within minutes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
              <Button size="lg" className="bg-primary-gradient shadow-elegant h-12 px-6">
                Get started free <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6">
                Watch demo
              </Button>
            </div>
          </motion.div>

          <LiveTranslation />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> 96%+ accuracy</span>
            <span className="flex items-center gap-2"><Zap className="size-4 text-primary" /> 60-second setup</span>
            <span className="flex items-center gap-2"><LangIcon className="size-4 text-primary" /> 20+ languages</span>
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section id="languages" className="py-24 border-t border-border/60">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground mb-5">
              Language Coverage
            </div>
            <h3 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
              <span className="block text-foreground">20+ languages.</span>
              <span className="block text-primary">So everyone can understand.</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From Arabic to Urdu, Turkish to Chinese — every member of your jama'ah
              hears the khutbah in their own language. Simultaneously. In real time.
            </p>
          </div>
          <Languages />
        </div>
      </section>


      {/* AYAH RECOGNITION */}
      <section id="features" className="py-24 bg-secondary/30 border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary mb-4">
              <BookOpen className="size-4" /> Ayah Recognition
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Knows the Qur'an, word for word.
            </h2>
            <p className="text-lg text-muted-foreground">
              When the imam recites, Aalim identifies the exact ayah and shows the verified
              translation — never a guess.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto rounded-3xl bg-card border border-border/60 shadow-elegant overflow-hidden"
          >
            <div className="px-7 py-4 border-b border-border/60 flex items-center justify-between bg-gradient-to-r from-secondary/60 to-transparent">
              <div className="flex items-center gap-2 text-sm">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                <span className="font-medium">Ayah detected</span>
              </div>
              <span className="text-xs text-muted-foreground font-mono">Surah Al-Baqarah · 2:152</span>
            </div>
            <div className="p-8 md:p-12">
              <p dir="rtl" className="font-arabic text-4xl md:text-5xl text-foreground leading-[1.7] text-center mb-8">
                فَٱذْكُرُونِىٓ أَذْكُرْكُمْ وَٱشْكُرُوا۟ لِى وَلَا تَكْفُرُونِ
              </p>
              <div className="h-px bg-border my-6" />
              <p className="text-xl md:text-2xl text-center text-muted-foreground italic leading-relaxed">
                "So remember Me; I will remember you. And be grateful to Me and do not deny Me."
              </p>

              <div className="mt-8 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="px-3 py-1 rounded-full bg-secondary border border-border/60">Sahih International</span>
                <span className="px-3 py-1 rounded-full bg-secondary border border-border/60">Verified ✓</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary mb-4">
              How it works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Two ways to listen.</h2>
            <p className="text-lg text-muted-foreground">
              The masjid sets up once. Everyone benefits — instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl bg-card border border-border/60 p-8 hover:shadow-elegant transition-shadow"
            >
              <div className="size-12 rounded-2xl bg-primary-gradient grid place-items-center mb-6 shadow-soft">
                <Tv className="size-5 text-primary-foreground" />
              </div>
              <div className="text-xs font-mono text-primary mb-2">01 · ON THE MASJID TV</div>
              <h3 className="text-2xl font-bold mb-3">English translation, live on screen</h3>
              <p className="text-muted-foreground">
                Connect Aalim to any TV in the masjid. The English translation appears
                automatically as the imam speaks — readable across the prayer hall.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative rounded-3xl bg-card border border-border/60 p-8 hover:shadow-elegant transition-shadow"
            >
              <div className="size-12 rounded-2xl bg-primary-gradient grid place-items-center mb-6 shadow-soft">
                <QrCode className="size-5 text-primary-foreground" />
              </div>
              <div className="text-xs font-mono text-primary mb-2">02 · ON YOUR PHONE</div>
              <h3 className="text-2xl font-bold mb-3">Scan the QR for any language</h3>
              <p className="text-muted-foreground">
                Need Urdu, Spanish, Turkish, or 17+ others? Scan the QR code, pick your
                language, and listen privately on your phone — perfectly synced.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / FORM */}
      <section id="get-started" className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-primary mb-5">
              Get Started
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="block text-background">Bring Aalim</span>
              <span className="block text-primary">to your masjid.</span>
            </h2>
            <p className="text-lg text-background/60 mb-10">
              Fill in your details and we'll reach out to get you set up.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Under 1 second latency",
                "Qur'an verse detection included",
                "Personal QR audio for attendees",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-background">
                  <span className="size-6 rounded-full border border-primary/40 bg-primary/10 grid place-items-center">
                    <svg className="size-3.5 text-primary" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 10l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl bg-background/5 border border-background/10 p-7 md:p-9 shadow-elegant space-y-6 backdrop-blur"
            >
              {[
                { label: "Full Name", required: true, type: "text" },
                { label: "Masjid Name", required: false, type: "text" },
                { label: "Masjid Address", required: false, type: "text" },
                { label: "Telephone Number", required: false, type: "tel" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-xs font-bold uppercase tracking-[0.14em] text-background/80 mb-2">
                    {field.label} {field.required && <span className="text-primary">*</span>}
                  </label>
                  <input
                    type={field.type}
                    required={field.required}
                    className="w-full h-12 rounded-xl bg-background/10 border border-background/15 px-4 text-base text-background placeholder:text-background/40 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>
              ))}

              <Button type="submit" size="lg" className="w-full bg-primary-gradient shadow-elegant h-12 mt-2">
                Request access <ArrowRight className="size-4" />
              </Button>
            </motion.form>
          </div>
        </div>

        <footer className="container mx-auto px-6 mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-background">Aalim</span>
            <span>· Live translation for the masjid</span>
          </div>
          <div>© 2026 Aalim. Made with sincerity.</div>
        </footer>
      </section>


    </div>
  );
}
