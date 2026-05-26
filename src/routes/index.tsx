import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { LiveTranslation } from "@/components/LiveTranslation";
import { Languages } from "@/components/Languages";
import { ArrowRight, BookOpen, Tv, QrCode, Languages as LangIcon, Sparkles, ShieldCheck, Zap } from "lucide-react";

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
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-6">
              Every word of the khutbah, <span className="text-primary italic">understood</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Aalim translates the imam in real time with greater than 90% accuracy.
              Set up in your masjid in under a minute.
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

      {/* QR + LANGUAGES */}
      <section id="languages" className="py-24 border-t border-border/60">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary mb-4">
                <QrCode className="size-4" /> For attendees
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-5">
                Scan the QR. Pick your language. Listen.
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Worshippers simply scan the QR code displayed in the masjid and choose
                from 20+ languages — the translation plays instantly in their language,
                synced with the imam.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3"><span className="mt-1.5 size-1.5 rounded-full bg-primary" /> No downloads required</li>
                <li className="flex items-start gap-3"><span className="mt-1.5 size-1.5 rounded-full bg-primary" /> Works on any phone</li>
                <li className="flex items-start gap-3"><span className="mt-1.5 size-1.5 rounded-full bg-primary" /> Private & silent — only you hear it</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full" />
                <div className="relative bg-card p-8 rounded-3xl border border-border/60 shadow-elegant">
                  <QRCodeSVG
                    value="https://aalim.app/listen"
                    size={240}
                    bgColor="transparent"
                    fgColor="oklch(0.32 0.09 160)"
                    level="H"
                  />
                  <div className="mt-5 text-center">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Live at</div>
                    <div className="font-display font-semibold text-lg">Masjid Al-Noor</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">20+ languages, growing</h3>
            <p className="text-muted-foreground">From Urdu to Spanish — meet every member of your jama'ah.</p>
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
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
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
              <span className="text-xs text-muted-foreground font-mono">Surah Al-Fatihah · 1:2</span>
            </div>
            <div className="p-8 md:p-12">
              <p dir="rtl" className="font-arabic text-4xl md:text-5xl text-foreground leading-[1.7] text-center mb-8">
                ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ
              </p>
              <div className="h-px bg-border my-6" />
              <p className="text-xl md:text-2xl text-center text-muted-foreground italic leading-relaxed">
                "All praise is due to Allah, Lord of all the worlds."
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
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Two ways to listen.</h2>
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
              <h3 className="text-2xl font-semibold mb-3">English translation, live on screen</h3>
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
              <h3 className="text-2xl font-semibold mb-3">Scan the QR for any language</h3>
              <p className="text-muted-foreground">
                Need Urdu, Spanish, Turkish, or 17+ others? Scan the QR code, pick your
                language, and listen privately on your phone — perfectly synced.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / FOOTER */}
      <section className="py-24 border-t border-border/60">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto rounded-[2rem] bg-primary-gradient p-12 md:p-16 text-center overflow-hidden shadow-elegant"
          >
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: "radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 80%, white 0%, transparent 40%)"
            }} />
            <div className="relative">
              <p className="font-arabic text-2xl text-primary-foreground/80 mb-4">بُنِيَ لِلْأُمَّةِ</p>
              <h2 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground mb-4 tracking-tight">
                Built for the Ummah.
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Bring the khutbah to every heart, in every language. Sadaqah jariyah for your masjid.
              </p>
              <Button size="lg" variant="secondary" className="h-12 px-8">
                Bring Aalim to your masjid <ArrowRight className="size-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        <footer className="container mx-auto px-6 mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold text-foreground">Aalim</span>
            <span>· Live translation for the masjid</span>
          </div>
          <div>© 2026 Aalim. Made with sincerity.</div>
        </footer>
      </section>
    </div>
  );
}
