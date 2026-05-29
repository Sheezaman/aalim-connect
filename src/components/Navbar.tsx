import { Button } from "@/components/ui/button";
import aalimLogo from "@/assets/aalim-logo.png";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={aalimLogo} alt="Aalim logo" className="size-9 object-contain" />
          <span className="font-display text-xl font-bold tracking-tight">Aalim</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#languages" className="hover:text-foreground transition">Languages</a>
          <a href="#how" className="hover:text-foreground transition">How it works</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">Log in</Button>
          <Button size="sm" className="bg-primary-gradient shadow-soft">Get started</Button>
        </div>
      </div>
    </header>
  );
}
