import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Mic, Copy, Check } from "lucide-react";
import aalimLogo from "@/assets/aalim-logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Aalim" },
      { name: "description", content: "Aalim masjid translation dashboard." },
    ],
  }),
  component: Dashboard,
});

const TRANSLATE_LANGUAGES = [
  "English",
  "Hindi",
  "Turkish",
  "Spanish",
  "Urdu",
  "Indonesian",
  "Chinese",
  "French",
  "Sudanese",
  "Malayalam",
  "Kannada",
];

function Dashboard() {
  const navigate = useNavigate();
  const [sessionActive, setSessionActive] = useState(false);
  const [translateInto, setTranslateInto] = useState("English");
  const [copied, setCopied] = useState(false);
  const displayUrl =
    typeof window !== "undefined" ? `${window.location.origin}/display` : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };

  const handleSignOut = () => {
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-secondary/40">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-primary" />

      {/* Header */}
      <header className="bg-background border-b border-border/60">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src={aalimLogo} alt="Aalim logo" className="size-9 object-contain" />
            <span className="font-display text-xl font-bold tracking-tight">
              Aalim
            </span>
          </a>
          <button
            onClick={handleSignOut}
            className="text-sm font-medium text-foreground hover:text-primary transition"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-2xl space-y-6">
        {/* Session card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-background border border-border/60 shadow-soft p-8"
        >
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
              {sessionActive ? "Session live" : "Ready to translate"}
            </p>
            <h1 className="font-display text-2xl font-bold mt-2">Test</h1>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-foreground mb-2">
              Microphone
            </label>
            <Select defaultValue="default">
              <SelectTrigger className="h-12 rounded-xl text-base">
                <SelectValue placeholder="Microphone..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Microphone (default)</SelectItem>
                <SelectItem value="external">External microphone</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-center my-10">
            <button
              onClick={() => setSessionActive((v) => !v)}
              className="relative grid place-items-center"
              aria-label={sessionActive ? "Stop session" : "Start session"}
            >
              <span className="absolute inset-0 -m-6 rounded-full border border-primary/20" />
              <span className="absolute inset-0 -m-3 rounded-full border border-primary/30" />
              {sessionActive && (
                <span className="absolute inset-0 -m-6 rounded-full bg-primary/20 animate-ping" />
              )}
              <span className="relative size-56 rounded-full bg-primary text-primary-foreground shadow-elegant grid place-items-center transition hover:scale-[1.02] active:scale-95">
                <span className="flex flex-col items-center gap-2">
                  <Mic className="size-8" />
                  <span className="font-display text-xl font-semibold">
                    {sessionActive ? "Stop Session" : "Start Session"}
                  </span>
                </span>
              </span>
            </button>
          </div>

          <div className="border-t border-border/60 pt-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
              TV Display Screen
            </p>
            <button
              onClick={handleCopy}
              className="w-full h-12 rounded-xl bg-secondary/70 border border-border/60 flex items-center justify-center gap-2 text-sm font-semibold text-foreground hover:bg-secondary transition"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Copied!" : "Copy Display URL"}
            </button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Paste this on your TV / projector
            </p>
          </div>
        </motion.div>

        {/* Translation languages */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-3xl bg-background border border-border/60 shadow-soft p-8"
        >
          <h2 className="font-display text-2xl font-bold">Translation Languages</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Applied to all sessions
          </p>

          <div className="mt-6">
            <label className="block text-sm font-medium text-foreground mb-2">
              Khutbah language
            </label>
            <div className="h-12 rounded-xl border border-border/70 px-4 flex items-center text-base text-foreground bg-background">
              Arabic
            </div>
          </div>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-border" />
            <div className="size-9 rounded-full border border-border/70 grid place-items-center">
              <svg
                className="size-4 text-foreground"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Translate into
            </label>
            <Select value={translateInto} onValueChange={setTranslateInto}>
              <SelectTrigger className="h-12 rounded-xl text-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TRANSLATE_LANGUAGES.map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
