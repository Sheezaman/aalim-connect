import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mic, AudioLines, Quote, ChevronDown } from "lucide-react";

const LINES = [
  { ar: "أيها الإخوة، اتقوا الله في كل أموركم", en: "O brothers, be mindful of Allah in all your affairs" },
  { ar: "إن أعظم نعمة بعد الإيمان هي نعمة الوقت", en: "Indeed, the greatest blessing after faith is the blessing of time" },
  { ar: "فاحرصوا على الصلاة في جماعة", en: "So be eager to pray in congregation" },
  { ar: "وأحسنوا إلى جيرانكم وأهليكم", en: "And be kind to your neighbours and your families" },
  { ar: "وتذكروا أن الدنيا دار ممر لا دار مقر", en: "And remember that this world is a passage, not a place of stay" },
];

export function LiveTranslation() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % LINES.length), 3800);
    return () => clearInterval(t);
  }, []);
  const line = LINES[i];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative mx-auto max-w-2xl rounded-3xl bg-card border border-border/60 shadow-elegant overflow-hidden"
    >
      {/* Header — dark green gradient */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.38 0.09 155) 0%, oklch(0.28 0.07 160) 55%, oklch(0.18 0.04 165) 100%)",
        }}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 ring-1 ring-white/15">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white/80 opacity-70 animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-white" />
            </span>
            <span className="text-[11px] font-semibold tracking-[0.18em] text-white uppercase">Live</span>
          </span>
          <span className="text-sm font-medium tracking-wide text-white/90 uppercase">Imam</span>
        </div>
        <div className="flex items-center gap-3 text-white/90">
          <Mic className="size-4" />
          <AudioLines className="size-4 text-primary-foreground" style={{ color: "oklch(0.78 0.16 155)" }} />
          <span className="inline-flex items-center gap-1 rounded-md bg-white/10 ring-1 ring-white/15 px-2 py-1 text-xs font-medium">
            EN <ChevronDown className="size-3" />
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-8 py-10 md:px-12 md:py-12 bg-card">
        {/* Ornament */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <svg viewBox="0 0 80 8" className="h-2 w-20 text-primary/40" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M0 4 L28 4" />
            <path d="M28 4 L34 1 L40 4 L34 7 Z" />
            <path d="M40 4 L80 4" strokeOpacity="0" />
          </svg>
          <div className="relative grid place-items-center">
            <span className="absolute inset-0 -m-2 rounded-full bg-primary/15 blur-md" />
            <span className="relative grid place-items-center size-10 rounded-full bg-primary/10 ring-1 ring-primary/25">
              <Quote className="size-4 text-primary" />
            </span>
          </div>
          <svg viewBox="0 0 80 8" className="h-2 w-20 text-primary/40" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M0 4 L40 4" strokeOpacity="0" />
            <path d="M40 4 L46 1 L52 4 L46 7 Z" />
            <path d="M52 4 L80 4" />
          </svg>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
          >
            <p dir="rtl" className="font-arabic text-3xl md:text-4xl text-foreground leading-[1.9] text-center mb-6">
              {line.ar}
            </p>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-border" />
              <span className="size-1 rounded-full bg-muted-foreground/50" />
              <div className="flex-1 h-px bg-border" />
            </div>

            <p className="text-lg md:text-xl text-center text-foreground/80 leading-snug">
              {line.en}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
