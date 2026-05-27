import { createFileRoute } from "@tanstack/react-router";
import {
  Splash, HomeScreen, MoodScreen, ActivitiesScreen, BookingScreen,
  PlantScreen, CommunityScreen, ProfileScreen, SoundScreen,
} from "@/components/healing/Screens";
import { Leaf } from "@/components/healing/icons";
import type { ReactNode } from "react";


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

function SectionLabel({ n, en, cn }: { n: string; en: string; cn?: string }) {
  return (
    <div className="flex items-center gap-3 text-[10.5px] tracking-[0.4em] uppercase" style={{ color: "var(--herb)" }}>
      <span className="font-display text-[13px] tracking-normal" style={{ color: "var(--gold)" }}>{n}</span>
      <span className="w-6 h-px" style={{ background: "var(--gold)" }} />
      <span>{en}</span>
      {cn && <span style={{ color: "oklch(0.55 0.03 150)" }}>· {cn}</span>}
    </div>
  );
}

function Portfolio() {
  return (
    <main className="min-h-screen board-bg">
      {/* ───── Editorial header ───── */}
      <header className="max-w-[1320px] mx-auto px-8 md:px-16 pt-20 md:pt-28">
        <SectionLabel n="00" en="UI / UX Case Study" cn="2026" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 md:gap-20 items-end">
          <div>
            <h1 className="font-display text-[72px] md:text-[140px] leading-[0.88] tracking-[-0.025em]"
                style={{ color: "var(--forest)" }}>
              Healing
              <span className="block" style={{ fontStyle: "italic", color: "var(--herb)" }}>SeeDing</span>
            </h1>
            <div className="mt-8 flex items-center gap-5">
              <div className="h-px w-16" style={{ background: "var(--gold)" }} />
              <div className="font-display text-[28px] md:text-[36px] tracking-[0.3em]" style={{ color: "var(--forest)" }}>
                愈&nbsp;&nbsp;见
              </div>
            </div>
          </div>

          <div className="space-y-6 md:pb-4">
            <p className="font-display text-[20px] md:text-[24px] leading-[1.35] text-balance" style={{ color: "var(--forest)" }}>
              一座为都市青年安静生长的<br/>
              <span style={{ fontStyle: "italic", color: "var(--herb)" }}>疗愈花园</span>。
            </p>
            <p className="text-[12px] tracking-[0.05em] leading-[1.85] max-w-[400px]" style={{ color: "oklch(0.45 0.025 150)" }}>
              A quiet healing garden growing inside the city —
              connecting modular offline spaces, plant companionship,
              gentle emotional records and anonymous whispers.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Mobile · iOS", "9 Screens", "Editorial UI", "Nature System"].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full text-[9.5px] tracking-[0.25em] uppercase"
                  style={{ background: "color-mix(in oklab, white 60%, transparent)", color: "var(--forest)", border: "1px solid color-mix(in oklab, var(--border) 80%, transparent)" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 h-px w-full hairline" />
      </header>

      {/* ───── Screen board ───── */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-12 mt-24 md:mt-32">
        <div className="flex items-end justify-between px-2">
          <SectionLabel n="01" en="UI Showcase" cn="八屏画板" />
          <div className="text-[10px] tracking-[0.3em] uppercase hidden md:block" style={{ color: "oklch(0.55 0.025 150)" }}>
            iPhone 15 Pro
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24 justify-items-center">
          <Splash />
          <HomeScreen />
          <MoodScreen />
          <ActivitiesScreen />
          <BookingScreen />
          <PlantScreen />
          <CommunityScreen />
          <ProfileScreen />
          <SoundScreen />
        </div>
      </section>

      {/* ───── Visual Map ───── */}
      <VisualMap />

      {/* ───── Color + Concept ───── */}

      <section className="max-w-[1320px] mx-auto px-8 md:px-16 mt-36">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-24 items-start">
          {/* Color system */}
          <div>
            <SectionLabel n="02" en="Color System" cn="森林呼吸" />
            <h2 className="font-display text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.015em] mt-6" style={{ color: "var(--forest)" }}>
              一片<span style={{ color: "var(--herb)", fontStyle: "italic" }}>森林</span>的<br />
              六种呼吸
            </h2>
            <p className="text-[12px] mt-5 max-w-[380px] leading-[1.85]" style={{ color: "oklch(0.48 0.025 150)" }}>
              Drawn from herbs, mist, soil and afternoon light —
              a quiet ground where nothing shouts, only breathes.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-x-5 gap-y-8">
              {PALETTE.map(([hex, en, cn]) => (
                <div key={hex} className="flex flex-col gap-3">
                  <div className="aspect-square rounded-3xl" style={{
                    background: hex,
                    boxShadow: "inset 0 0 0 1px oklch(0.4 0.03 150 / 0.06), 0 18px 30px -22px oklch(0.36 0.06 155 / 0.35)",
                  }} />
                  <div className="px-0.5">
                    <div className="text-[9.5px] tracking-[0.22em] uppercase" style={{ color: "var(--forest)" }}>{en}</div>
                    <div className="text-[10.5px] font-display mt-0.5" style={{ color: "var(--herb)" }}>{cn}</div>
                    <div className="text-[9px] mt-1 tracking-wider" style={{ color: "oklch(0.55 0.025 150)" }}>{hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Concept — soft cream card instead of heavy dark */}
          <div className="relative">
            <SectionLabel n="03" en="Product Concept" cn="把疗愈，种进生活" />

            <div className="mt-6 rounded-[36px] relative overflow-hidden soft-card p-10 md:p-14">
              <svg className="absolute -top-12 -right-12 opacity-[0.08]" width="340" height="340" viewBox="0 0 240 240" fill="none" stroke="var(--forest)" strokeWidth="0.6">
                <path d="M210 20c-70 0-140 50-180 160 60-10 140-50 180-160Z" />
                <path d="M30 200c40-40 110-90 180-180" />
                <path d="M120 40c-10 60-40 110-90 150" />
              </svg>

              <div className="relative">
                <div className="flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase" style={{ color: "var(--herb)" }}>
                  <Leaf className="w-3.5 h-3.5" /> Concept
                </div>

                <h3 className="font-display text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.015em] mt-5" style={{ color: "var(--forest)" }}>
                  把疗愈，<br />
                  <span style={{ fontStyle: "italic", color: "var(--herb)" }}>种进生活</span>。
                </h3>

                <div className="mt-8 h-px w-12" style={{ background: "var(--gold)" }} />

                <p className="text-[13px] leading-[1.95] mt-8 max-w-[460px]" style={{ color: "oklch(0.42 0.025 150)" }}>
                  愈见 把线下模块化疗愈空间、植物养成、情绪打卡、匿名社区
                  与长期自我照护记录，串联成一个柔软的生态。
                  <span className="block mt-3" style={{ color: "var(--herb)", fontStyle: "italic" }}>
                    It doesn't rush. It doesn't judge. It just stays quiet beside you,
                    growing a little green.
                  </span>
                </p>

                <div className="grid grid-cols-2 gap-x-10 gap-y-8 mt-12">
                  {[
                    ["18–35", "目标用户", "Target Users"],
                    ["9", "核心界面", "Screens"],
                    ["6", "色彩语言", "Palette"],
                    ["4", "成长阶段", "Plant Stages"],
                  ].map(([n, cn, en]) => (
                    <div key={en} className="flex flex-col gap-1">
                      <div className="font-display text-[44px] leading-none" style={{ color: "var(--forest)" }}>{n}</div>
                      <div className="text-[11px]" style={{ color: "var(--forest)" }}>{cn}</div>
                      <div className="text-[9px] tracking-[0.25em] uppercase" style={{ color: "var(--herb)" }}>{en}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Typography / closing whisper ───── */}
      <section className="max-w-[1320px] mx-auto px-8 md:px-16 mt-36">
        <div className="h-px w-full hairline" />
        <div className="py-24 text-center">
          <div className="text-[10px] tracking-[0.4em] uppercase" style={{ color: "var(--herb)" }}>
            A quiet whisper · 04
          </div>
          <p className="font-display text-[36px] md:text-[64px] leading-[1.05] tracking-[-0.02em] mt-8 max-w-[900px] mx-auto text-balance" style={{ color: "var(--forest)" }}>
            "在城市的缝隙里，<br/>
            <span style={{ fontStyle: "italic", color: "var(--herb)" }}>种一株安静</span>。"
          </p>
          <div className="mt-10 mx-auto h-px w-10" style={{ background: "var(--gold)" }} />
          <div className="mt-6 text-[10px] tracking-[0.35em] uppercase" style={{ color: "oklch(0.5 0.025 150)" }}>
            Plant a quiet thing in the cracks of the city
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="max-w-[1320px] mx-auto px-8 md:px-16 pb-16">
        <div className="h-px w-full hairline" />
        <div className="flex flex-wrap items-end justify-between gap-4 mt-8">
          <div>
            <div className="font-display text-[22px]" style={{ color: "var(--forest)" }}>愈见 · Healing SeeDing</div>
            <div className="text-[9.5px] tracking-[0.35em] uppercase mt-1" style={{ color: "var(--herb)" }}>
              A quiet plant for the urban heart
            </div>
          </div>
          <div className="text-[9.5px] tracking-[0.3em] uppercase" style={{ color: "oklch(0.5 0.025 150)" }}>
            © 2026 · Design Case · Crafted with care
          </div>
        </div>
      </footer>
    </main>
  );
}
