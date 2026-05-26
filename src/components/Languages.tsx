const LANGS = [
  { name: "English", flag: "🇬🇧" },
  { name: "Urdu", flag: "🇵🇰" },
  { name: "Arabic", flag: "🇸🇦" },
  { name: "Spanish", flag: "🇪🇸" },
  { name: "Turkish", flag: "🇹🇷" },
  { name: "French", flag: "🇫🇷" },
  { name: "Hindi", flag: "🇮🇳" },
  { name: "Indonesian", flag: "🇮🇩" },
  { name: "Bengali", flag: "🇧🇩" },
  { name: "Malay", flag: "🇲🇾" },
  { name: "German", flag: "🇩🇪" },
  { name: "Italian", flag: "🇮🇹" },
  { name: "Russian", flag: "🇷🇺" },
  { name: "Persian", flag: "🇮🇷" },
  { name: "Somali", flag: "🇸🇴" },
  { name: "Swahili", flag: "🇰🇪" },
  { name: "Pashto", flag: "🇦🇫" },
  { name: "Tamil", flag: "🇮🇳" },
  { name: "Mandarin", flag: "🇨🇳" },
  { name: "Dutch", flag: "🇳🇱" },
  { name: "Portuguese", flag: "🇵🇹" },
  { name: "Japanese", flag: "🇯🇵" },
];

export function Languages() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {LANGS.map((l) => (
        <div
          key={l.name}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border/60 hover:border-primary/40 hover:shadow-soft transition-all"
        >
          <span className="text-2xl leading-none">{l.flag}</span>
          <span className="text-sm font-medium">{l.name}</span>
        </div>
      ))}
    </div>
  );
}
