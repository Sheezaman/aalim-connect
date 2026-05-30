import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mic, AudioLines } from "lucide-react";

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
      <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-secondary/40">
        <div className="flex items-center gap-2.5">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
            <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Live · Imam</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Mic className="size-3.5" />
          <AudioLines className="size-3.5" />
          <span className="text-xs">EN</span>
        </div>
      </div>
      <div className="p-8 md:p-10 min-h-[220px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
          >
            <p dir="rtl" className="font-arabic text-3xl md:text-4xl text-foreground leading-relaxed mb-4">
              {line.ar}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-snug">
              {line.en}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
