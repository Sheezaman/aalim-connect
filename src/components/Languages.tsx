const LANGUAGES = [
  { native: "Türkçe", english: "Turkish", flag: "🇹🇷" },
  { native: "हिन्दी", english: "Hindi", flag: "🇮🇳" },
  { native: "اردو", english: "Urdu", flag: "🇵🇰", rtl: true },
  { native: "Français", english: "French", flag: "🇫🇷" },
  { native: "Español", english: "Spanish", flag: "🇪🇸" },
  { native: "Bahasa", english: "Indonesian", flag: "🇮🇩" },
  { native: "Русский", english: "Russian", flag: "🇷🇺" },
  { native: "Shqip", english: "Albanian", flag: "🇦🇱" },
  { native: "বাংলা", english: "Bangladeshi", flag: "🇧🇩" },
  { native: "മലയാളം", english: "Malayalam", flag: "🇮🇳" },
  { native: "دری", english: "Dari", flag: "🇦🇫", rtl: true },
  { native: "پښتو", english: "Pashto", flag: "🇦🇫", rtl: true },
  { native: "فارسی", english: "Farsi", flag: "🇮🇷", rtl: true },
  { native: "中文", english: "Chinese", flag: "🇨🇳" },
];

export function Languages() {
  return (
    <div className="max-w-2xl mx-auto rounded-3xl bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04] overflow-hidden">
      {LANGUAGES.map((l, i) => (
        <div
          key={l.english}
          className={`flex items-center justify-between gap-4 px-7 py-5 ${
            i !== LANGUAGES.length - 1 ? "border-b border-gray-100" : ""
          }`}
        >
          <div className="flex items-center gap-5 min-w-0">
            <span className="text-4xl leading-none shrink-0">{l.flag}</span>
            <div className="flex flex-col min-w-0 gap-0.5">
              <span
                dir={l.rtl ? "rtl" : "ltr"}
                className={`text-2xl font-semibold text-gray-900 truncate leading-tight ${
                  l.rtl ? "font-arabic" : ""
                }`}
              >
                {l.native}
              </span>
              <span className="text-base text-gray-400 font-normal">{l.english}</span>
            </div>
          </div>
          <span className="size-2.5 rounded-full bg-primary shrink-0" />
        </div>
      ))}
    </div>
  );
}
