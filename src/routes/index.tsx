import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

import { QRCodeSVG } from "qrcode.react";
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
        <div className="container mx-auto px-6 relative">
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

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 max-w-5xl mx-auto text-center">
            {[
              { title: "Private and Secure", subtitle: "Your data stays protected" },
              { title: "QR Code Access", subtitle: "Instant access for everyone" },
              { title: "20+ Languages", subtitle: "Understanding for all" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-2">
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                  <span className="text-primary">{item.title.split(" ")[0]}</span>{" "}
                  <span>{item.title.split(" ").slice(1).join(" ")}</span>
                </h3>
                <p className="text-base text-muted-foreground">{item.subtitle}</p>
              </div>
            ))}
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
      <section id="how" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary mb-4">
              How it works
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Three simple steps.</h2>
            <p className="text-lg text-muted-foreground">
              From the masjid screen to your phone — translation everyone can follow.
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-12 md:gap-6 max-w-6xl mx-auto">
            {/* STEP 1 — TV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="size-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold text-sm mb-5 shadow-soft">1</div>
              <h3 className="text-xl font-bold mb-2">Live Speech on Screen</h3>
              <p className="text-sm text-muted-foreground max-w-[240px] mb-6">
                The Imam's speech is shown with live translation.
              </p>

              <div className="w-full max-w-[320px]">
                <div className="rounded-2xl bg-foreground p-5 shadow-elegant">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-primary text-primary-foreground">LIVE</span>
                  </div>
                  <p dir="rtl" className="font-arabic text-background text-[15px] leading-[2] text-center mb-3">
                    عُمَانُ هِيَ مَوْطِنُ الأَصَالَةِ وَالسَّلَامِ، حَيْثُ يَلْتَقِي التَّارِيخُ العَرِيقُ بِالجَمَالِ السَّاحِرِ وَحُسْنِ الضِّيَافَةِ.
                  </p>
                  <div className="h-px bg-primary/40 mb-3" />
                  <div className="flex items-end justify-between gap-2">
                    <p className="text-background/90 text-[11px] leading-snug text-left flex-1">
                      Oman is the cradle of authenticity and peace, where ancient history meets breathtaking beauty and warm hospitality.
                    </p>
                    <div className="size-10 rounded-sm bg-background p-1 shrink-0">
                      <QRCodeSVG value="https://aalim.app/live" size={32} bgColor="#ffffff" fgColor="#0a0a0a" level="M" />
                    </div>
                  </div>
                </div>
                <div className="mx-auto w-16 h-2 bg-foreground/80 rounded-b" />
                <div className="mx-auto w-24 h-1 bg-foreground/60 rounded-full mt-0.5" />
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-card border border-border/60 px-4 py-2.5 shadow-soft text-xs">
                <span className="size-7 rounded-full bg-primary grid place-items-center shrink-0"><Megaphone className="size-3.5 text-primary-foreground" /></span>
                <span className="text-left leading-tight">Listen to the speech.<br />Read the translation on screen.</span>
              </div>

              <ArrowRightIcon className="hidden md:block absolute top-24 -right-3 size-6 text-primary" />
            </motion.div>

            {/* STEP 2 — QR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="size-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold text-sm mb-5 shadow-soft">2</div>
              <h3 className="text-xl font-bold mb-2">Scan the QR Code</h3>
              <p className="text-sm text-muted-foreground max-w-[240px] mb-6">
                Scan the QR code on the screen using your phone camera.
              </p>

              <div className="relative w-full max-w-[320px]">
                <div className="rounded-2xl bg-foreground p-5 shadow-elegant">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-primary text-primary-foreground">SCAN ME</span>
                  </div>
                  <div className="grid place-items-center py-4">
                    <div className="rounded-xl bg-background p-3 border-2 border-primary">
                      <QRCodeSVG value="https://aalim.app/live" size={140} bgColor="#ffffff" fgColor="#0a0a0a" level="M" />
                    </div>
                  </div>
                </div>
                <div className="mx-auto w-16 h-2 bg-foreground/80 rounded-b" />
                <div className="mx-auto w-24 h-1 bg-foreground/60 rounded-full mt-0.5" />

                {/* Phone scanning overlay */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 rounded-[1.5rem] bg-foreground p-1.5 shadow-elegant w-[110px] aspect-[9/18] flex flex-col border-2 border-background">
                  <div className="mx-auto w-10 h-2.5 bg-background/10 rounded-full mt-1 mb-1.5" />
                  <div className="flex-1 rounded-xl bg-background grid place-items-center relative overflow-hidden">
                    <div className="absolute inset-2 border-2 border-primary rounded-lg pointer-events-none z-10" />
                    <QRCodeSVG value="https://aalim.app/live" size={70} bgColor="#ffffff" fgColor="#0a0a0a" level="M" />
                  </div>
                </div>
              </div>

              <div className="mt-16 inline-flex items-center gap-2 rounded-2xl bg-card border border-border/60 px-4 py-2.5 shadow-soft text-xs">
                <span className="size-7 rounded-full bg-primary grid place-items-center shrink-0"><QrCode className="size-3.5 text-primary-foreground" /></span>
                <span className="text-left leading-tight">Open your camera<br />and scan the QR code.</span>
              </div>

              <ArrowRightIcon className="hidden md:block absolute top-24 -right-3 size-6 text-primary" />

            </motion.div>

            {/* STEP 3 — Phone language */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="size-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold text-sm mb-5 shadow-soft">3</div>
              <h3 className="text-xl font-bold mb-2">Select Language & See Live Translation</h3>
              <p className="text-sm text-muted-foreground max-w-[260px] mb-6">
                Choose your preferred language and enjoy live translation on your phone.
              </p>

              <div className="rounded-[2rem] bg-foreground p-3 shadow-elegant w-[200px] flex flex-col">
                <div className="mx-auto w-16 h-4 bg-background/10 rounded-full mt-1 mb-2" />
                <div className="rounded-2xl bg-background p-3 flex flex-col">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground mb-2 text-left">Translating to</div>
                  <ul className="space-y-1.5 text-xs">
                    {[
                      { flag: "🇵🇰", name: "Urdu" },
                      { flag: "🇹🇷", name: "Turkish" },
                      { flag: "🇪🇸", name: "Spanish" },
                      { flag: "🇫🇷", name: "French" },
                      { flag: "🇮🇳", name: "Hindi" },
                      { flag: "🇮🇩", name: "Indonesian", selected: true },
                      { flag: "🇬🇧", name: "English" },
                    ].map((l) => (
                      <li key={l.name} className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5"><span>{l.flag}</span><span className="font-medium text-foreground">{l.name}</span></span>
                        <span className={`size-3.5 rounded-full border ${l.selected ? "bg-primary border-primary" : "border-border"} grid place-items-center`}>
                          {l.selected && <Check className="size-2.5 text-primary-foreground" strokeWidth={3} />}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="mt-3 w-full h-8 rounded-full bg-primary text-primary-foreground text-[11px] font-bold">
                    Start Listening
                  </button>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-card border border-border/60 px-4 py-2.5 shadow-soft text-xs">
                <span className="size-7 rounded-full bg-primary grid place-items-center shrink-0"><Headphones className="size-3.5 text-primary-foreground" /></span>
                <span className="text-left leading-tight">Select your language<br />and see live translation on your phone.</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 mx-auto max-w-xl rounded-full bg-secondary border border-border/60 px-5 py-3 flex items-center justify-center gap-3 text-sm text-foreground text-center"
          >
            <span className="size-6 rounded-full bg-primary grid place-items-center shrink-0"><Check className="size-3.5 text-primary-foreground" strokeWidth={3} /></span>
            One scan is all you need. Understand in your language. Stay connected.
          </motion.div>
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
