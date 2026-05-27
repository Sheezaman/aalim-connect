const LANGUAGES = [
  { native: "Türkçe", english: "Turkish", flag: "🇹🇷" },
  { native: "हिन्दी", english: "Hindi", flag: "🇮🇳" },
  { native: "اردو", english: "Urdu", flag: "🇵🇰", rtl: true },
  { native: "Français", english: "French", flag: "🇫🇷" },
  { native: "Español", english: "Spanish", flag: "🇪🇸" },
  { native: "Bahasa", english: "Indonesian", flag: "🇮🇩" },
  { native: "السودانية", english: "Sudanese", flag: "🇸🇩", rtl: true },
  { native: "中文", english: "Chinese", flag: "🇨🇳" },
];

export function Languages() {
  return (
    <div className="max-w-2xl mx-auto rounded-3xl bg-card border border-border/60 shadow-soft overflow-hidden">
      {LANGUAGES.map((l, i) => (
        <div
          key={l.english}
          className={`flex items-center justify-between gap-4 px-6 py-5 ${
            i !== LANGUAGES.length - 1 ? "border-b border-border/50" : ""
          }`}
        >
          <div className="flex items-center gap-4 min-w-0">
            <span className="text-3xl leading-none shrink-0">{l.flag}</span>
            <div className="flex flex-col min-w-0">
              <span
                dir={l.rtl ? "rtl" : "ltr"}
                className={`text-xl font-medium text-foreground truncate ${
                  l.rtl ? "font-arabic" : ""
                }`}
              >
                {l.native}
              </span>
              <span className="text-sm text-muted-foreground">{l.english}</span>
            </div>
          </div>
          <span className="size-2.5 rounded-full bg-primary shrink-0" />
        </div>
      ))}
    </div>
  );
}
