import { createFileRoute } from "@tanstack/react-router";
import {
  Splash, HomeScreen, MoodScreen, ActivitiesScreen, BookingScreen,
  PlantScreen, CommunityScreen, ProfileScreen,
} from "@/components/healing/Screens";
import { Leaf } from "@/components/healing/icons";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Healing SeeDing · 愈见 — UI Design Portfolio" },
      { name: "description", content: "愈见 Healing SeeDing — a plant-based, low-pressure healing platform for urban youth. 8 iPhone 15 Pro UI screens." },
    ],
  }),
});

const PALETTE: Array<[string, string, string]> = [
  ["#0F4A36", "Dark Forest", "深林绿"],
  ["#6F9B73", "Herb Green", "草本绿"],
  ["#DDE8D6", "Mist Green", "薄雾"],
  ["#F8F7F1", "Cream", "奶白"],
  ["#E9D8BC", "Warm Sand", "暖沙"],
  ["#C9A46A", "Soft Gold", "柔金"],
];

function Portfolio() {
  return (
    <main className="min-h-screen" style={{ background: "var(--cream)" }}>
      {/* Editorial header */}
      <header className="max-w-[1440px] mx-auto px-8 md:px-14 pt-14 md:pt-20">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase" style={{ color: "var(--herb)" }}>
          <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
          UI / UX Design Case · 2026
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-14 items-end">
          <div>
            <h1 className="font-display text-[64px] md:text-[112px] leading-[0.92] tracking-[-0.02em]"
                style={{ color: "var(--forest)" }}>
              Healing <span style={{ fontStyle: "italic", color: "var(--herb)" }}>SeeDing</span>
              <span className="block text-[44px] md:text-[72px] mt-2" style={{ color: "var(--forest)" }}>
                · 愈&nbsp;见 ·
              </span>
            </h1>
          </div>
          <div className="space-y-4">
            <p className="font-display text-[18px] md:text-[22px] leading-snug text-balance" style={{ color: "var(--forest)" }}>
              一座为都市青年安静生长的疗愈花园。
              <span className="block text-[14px] mt-2" style={{ color: "var(--herb)", fontStyle: "italic" }}>
                A quiet healing garden, growing inside the city.
              </span>
            </p>
            <p className="text-[12.5px] leading-relaxed max-w-[420px]" style={{ color: "oklch(0.4 0.03 150)" }}>
              植物陪伴 · 情绪记录 · 模块化线下空间 · 匿名低压社区。
              为 18–35 岁的城市青年提供一个柔软、自然、可以慢下来的疗愈生态。
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Mobile App", "iOS · 8 Screens", "Editorial UI", "Nature System"].map(t => (
                <span key={t} className="px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase"
                  style={{ background: "white", color: "var(--forest)", border: "1px solid var(--border)" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 h-px w-full" style={{ background: "var(--border)" }} />
      </header>

      {/* Screen board */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 mt-14">
        <div className="flex items-center justify-between px-4">
          <div className="text-[11px] tracking-[0.35em] uppercase" style={{ color: "var(--herb)" }}>
            01 — UI Showcase
          </div>
          <div className="text-[11px] tracking-[0.25em] uppercase" style={{ color: "oklch(0.5 0.03 150)" }}>
            iPhone 15 Pro · 8 Screens
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 justify-items-center">
          <Splash />
          <HomeScreen />
          <MoodScreen />
          <ActivitiesScreen />

          {/* Center info panel spans across on large screens via column flow */}
          <BookingScreen />
          <PlantScreen />
          <CommunityScreen />
          <ProfileScreen />
        </div>
      </section>

      {/* Color system + concept */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-14 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div>
            <div className="text-[11px] tracking-[0.35em] uppercase" style={{ color: "var(--herb)" }}>
              02 — Color System
            </div>
            <h2 className="font-display text-[36px] md:text-[44px] leading-tight mt-3" style={{ color: "var(--forest)" }}>
              一片<span style={{ color: "var(--herb)" }}>森林</span>的<br />六种呼吸
            </h2>
            <p className="text-[12.5px] mt-3 max-w-[360px] leading-relaxed" style={{ color: "oklch(0.45 0.03 150)" }}>
              The palette is drawn from herbs, mist, soil and afternoon light —
              a quiet ground where nothing shouts.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {PALETTE.map(([hex, en, cn]) => (
                <div key={hex} className="flex flex-col gap-2">
                  <div className="aspect-square rounded-2xl" style={{
                    background: hex,
                    boxShadow: "inset 0 0 0 1px oklch(0.4 0.03 150 / 0.08), 0 6px 16px -10px oklch(0.36 0.06 155 / 0.3)",
                  }} />
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--forest)" }}>{en}</div>
                    <div className="text-[10px]" style={{ color: "var(--herb)" }}>{cn}</div>
                    <div className="text-[9.5px] mt-0.5" style={{ color: "oklch(0.5 0.03 150)" }}>{hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Concept card */}
          <div className="rounded-[32px] p-8 md:p-10 relative overflow-hidden leaf-gradient" style={{ color: "var(--cream)" }}>
            <svg className="absolute -top-10 -right-10 opacity-25" width="320" height="320" viewBox="0 0 240 240" fill="none" stroke="var(--cream)" strokeWidth="0.8">
              <path d="M210 20c-70 0-140 50-180 160 60-10 140-50 180-160Z" />
              <path d="M30 200c40-40 110-90 180-180" />
            </svg>
            <div className="relative">
              <div className="flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase opacity-80">
                <Leaf className="w-4 h-4" /> Concept · 03
              </div>
              <h3 className="font-display text-[34px] md:text-[44px] leading-[1.05] mt-4">
                "把疗愈，<br />
                <span style={{ fontStyle: "italic" }}>种进生活</span>"
              </h3>
              <p className="text-[13px] leading-relaxed mt-6 max-w-[440px]" style={{ color: "color-mix(in oklab, var(--cream) 85%, transparent)" }}>
                Healing SeeDing 愈见 把线下模块化疗愈空间、植物养成、情绪打卡、匿名社区
                与长期自我照护记录串联成一个柔软的生态。
                它不催促、不评判、不计分，只是陪你慢慢长出一片绿色。
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-8">
                {[
                  ["18–35", "目标用户 · Target"],
                  ["8", "核心界面 · Screens"],
                  ["6", "色彩语言 · Palette"],
                  ["4", "成长阶段 · Plant Stages"],
                ].map(([n, label]) => (
                  <div key={label}>
                    <div className="font-display text-[32px]" style={{ color: "var(--gold)" }}>{n}</div>
                    <div className="text-[10px] tracking-[0.2em] uppercase opacity-80">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-[1440px] mx-auto px-8 md:px-14 mt-24 pb-14">
        <div className="h-px w-full" style={{ background: "var(--border)" }} />
        <div className="flex flex-wrap items-end justify-between gap-4 mt-6">
          <div>
            <div className="font-display text-[20px]" style={{ color: "var(--forest)" }}>愈见 · Healing SeeDing</div>
            <div className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--herb)" }}>
              A quiet plant for the urban heart
            </div>
          </div>
          <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "oklch(0.5 0.03 150)" }}>
            © 2026 Design Case · Crafted with care
          </div>
        </div>
      </footer>
    </main>
  );
}
