const PAIRS = [
  { from: "English", fromFlag: "🇬🇧", to: "Spanish", toFlag: "🇪🇸" },
  { from: "English", fromFlag: "🇬🇧", to: "Urdu", toFlag: "🇵🇰" },
  { from: "English", fromFlag: "🇬🇧", to: "Turkish", toFlag: "🇹🇷" },
  { from: "English", fromFlag: "🇬🇧", to: "French", toFlag: "🇫🇷" },
  { from: "English", fromFlag: "🇬🇧", to: "Indonesian", toFlag: "🇮🇩" },
];

export function Languages() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
      {PAIRS.map((p) => (
        <div
          key={p.to}
          className="flex items-center justify-between gap-3 px-5 py-4 rounded-2xl bg-card border border-border/60 hover:border-primary/40 hover:shadow-soft transition-all"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl leading-none">{p.fromFlag}</span>
            <span className="text-sm font-medium">{p.from}</span>
          </div>
          <span className="text-primary text-lg">→</span>
          <div className="flex items-center gap-2">
            <span className="text-2xl leading-none">{p.toFlag}</span>
            <span className="text-sm font-medium">{p.to}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
