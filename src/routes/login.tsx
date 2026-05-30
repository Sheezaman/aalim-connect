import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import aalimLogo from "@/assets/aalim-logo.png";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Aalim" },
      { name: "description", content: "Sign in to your Aalim masjid dashboard." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen bg-secondary/40 islamic-pattern flex flex-col items-center justify-center px-6 py-12 relative">
      <a
        href="/"
        aria-label="Back to home"
        className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 h-10 rounded-full bg-background border border-border/60 shadow-soft text-sm font-medium text-foreground hover:bg-secondary transition"
      >
        <ArrowLeft className="size-4" />
        <span className="hidden sm:inline">Home</span>
      </a>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Brand */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="size-20 rounded-3xl bg-primary-gradient shadow-elegant grid place-items-center mb-5">
            <img src={aalimLogo} alt="Aalim" className="size-12 object-contain" />
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">
            Aalim
          </h1>
          <p className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground mt-4">
            The #1 live{" "}
            <span className="relative inline-block">
              khutbah
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute left-0 -bottom-1.5 w-full h-2 text-primary"
              >
                <path
                  d="M2 7 Q 50 1, 100 5 T 198 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            translation
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-3xl bg-card border border-border/60 shadow-elegant p-7 md:p-8 space-y-6"
        >
          <div className="text-center mb-2">
            <h2 className="text-xl font-bold">Welcome to your masjid</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Enter your masjid details to get started.
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Masjid Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Masjid Al-Noor"
              className="w-full h-12 rounded-xl bg-background border border-border px-4 text-base placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Masjid Code</label>
            <input
              type="text"
              required
              placeholder="Enter your unique masjid code"
              className="w-full h-12 rounded-xl bg-background border border-border px-4 text-base tracking-widest placeholder:tracking-normal placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Don't have a code? Ask your masjid admin or request access.
            </p>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary-gradient shadow-elegant h-12"
          >
            Continue <ArrowRight className="size-4" />
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            By continuing you agree to Aalim's Terms & Privacy.
          </p>
        </form>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          New masjid?{" "}
          <a href="/#get-started" className="text-primary font-semibold hover:underline">
            Request access
          </a>
        </div>
      </motion.div>
    </div>
  );
}
