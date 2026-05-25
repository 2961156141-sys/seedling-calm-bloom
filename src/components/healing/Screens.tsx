import type { ReactNode } from "react";
import {
  Bell, Calendar, Chevron, ChevronLeft, Drop, Heart, Home as HomeIcon, Leaf,
  Pin, Plus, Search, Settings, Sprout, Sun, User, Users,
} from "./icons";

/* ──────────────────────────────────────────────────────────────
   Shared chrome
   ────────────────────────────────────────────────────────────── */

function StatusBar({ tint = "var(--forest)" }: { tint?: string }) {
  return (
    <div className="status-bar" style={{ color: tint }}>
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
          <rect x="0" y="3" width="2" height="4" rx="1" fill="currentColor" />
          <rect x="4" y="2" width="2" height="6" rx="1" fill="currentColor" />
          <rect x="8" y="1" width="2" height="8" rx="1" fill="currentColor" />
          <rect x="12" y="0" width="2" height="10" rx="1" fill="currentColor" />
        </svg>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M1 5a8 8 0 0 1 12 0M3 7a5 5 0 0 1 8 0" />
          <circle cx="7" cy="9" r="0.8" fill="currentColor" />
        </svg>
        <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
          <rect x="0.5" y="0.5" width="18" height="9" rx="2" stroke="currentColor" />
          <rect x="2" y="2" width="14" height="6" rx="1" fill="currentColor" />
          <rect x="19.5" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

function TabBar({ active }: { active: "home" | "mood" | "garden" | "community" | "me" }) {
  const items = [
    { k: "home", Icon: HomeIcon, label: "首页" },
    { k: "mood", Icon: Heart, label: "情绪" },
    { k: "garden", Icon: Sprout, label: "植物" },
    { k: "community", Icon: Users, label: "社区" },
    { k: "me", Icon: User, label: "我的" },
  ] as const;
  return (
    <div className="absolute bottom-0 inset-x-0 px-3 pb-3 pt-1.5 glass rounded-b-[36px]">
      <div className="flex items-end justify-between px-2">
        {items.map(({ k, Icon, label }) => {
          const on = k === active;
          return (
            <div key={k} className="flex flex-col items-center gap-0.5" style={{ width: 46 }}>
              <Icon className="w-[18px] h-[18px]" style={{ color: on ? "var(--forest)" : "oklch(0.55 0.03 150)" }} />
              <span className="text-[8.5px]" style={{ color: on ? "var(--forest)" : "oklch(0.55 0.03 150)", fontWeight: on ? 600 : 400 }}>{label}</span>
              {on && <div className="w-1 h-1 rounded-full" style={{ background: "var(--gold)" }} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ScreenShell({
  children, label, en, bg = "var(--cream)",
}: { children: ReactNode; label: string; en: string; bg?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="phone-frame">
        <div className="phone-screen" style={{ background: bg }}>
          {children}
        </div>
      </div>
      <div className="text-center">
        <div className="font-display text-base" style={{ color: "var(--forest)" }}>{label}</div>
        <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "oklch(0.5 0.03 150)" }}>{en}</div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   1. Splash
   ────────────────────────────────────────────────────────────── */
export function Splash() {
  return (
    <ScreenShell label="启动页" en="Splash">
      <div className="absolute inset-0 leaf-gradient" />
      <div className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(circle at 50% 30%, var(--gold), transparent 55%)" }} />
      <svg className="absolute -top-6 -right-10 opacity-20" width="240" height="240" viewBox="0 0 240 240" fill="none" stroke="var(--cream)" strokeWidth="1">
        <path d="M200 20c-60 10-110 50-150 110 50-10 110-40 150-110Z" />
        <path d="M50 130c40-30 100-60 150-110" />
      </svg>
      <svg className="absolute -bottom-10 -left-10 opacity-20" width="260" height="260" viewBox="0 0 240 240" fill="none" stroke="var(--cream)" strokeWidth="1">
        <path d="M40 220c40-60 100-110 180-150-10 70-60 130-180 150Z" />
      </svg>

      <div className="relative h-full flex flex-col items-center justify-between py-20 px-8">
        <div />
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: "color-mix(in oklab, white 18%, transparent)", border: "1px solid color-mix(in oklab, white 30%, transparent)" }}>
            <Leaf className="w-8 h-8" style={{ color: "var(--cream)" }} />
          </div>
          <div className="font-display mt-6 text-[42px] leading-none" style={{ color: "var(--cream)" }}>愈见</div>
          <div className="mt-2 tracking-[0.4em] text-[10px]" style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}>
            HEALING&nbsp;·&nbsp;SEEDING
          </div>
          <div className="mt-8 h-px w-10" style={{ background: "var(--gold)" }} />
          <p className="mt-6 text-[11px] leading-relaxed max-w-[180px]"
            style={{ color: "color-mix(in oklab, var(--cream) 75%, transparent)" }}>
            在城市缝隙里 种一株安静<br />A quiet plant for the urban heart
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-[2px] rounded-full" style={{ background: "var(--gold)" }} />
          <span className="text-[9px] tracking-[0.35em]" style={{ color: "color-mix(in oklab, var(--cream) 60%, transparent)" }}>v 1.0 · 2026</span>
        </div>
      </div>
    </ScreenShell>
  );
}

/* ──────────────────────────────────────────────────────────────
   2. Home
   ────────────────────────────────────────────────────────────── */
export function HomeScreen() {
  return (
    <ScreenShell label="首页" en="Home">
      <div className="absolute inset-0 grain" />
      <StatusBar />
      <div className="relative px-5 pt-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "oklch(0.5 0.03 150)" }}>Wednesday · 周三</div>
            <div className="font-display text-[22px] mt-1" style={{ color: "var(--forest)" }}>你好，林一<span className="text-[12px] tracking-widest ml-1" style={{ color: "var(--herb)" }}>Hello</span></div>
          </div>
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "white", border: "1px solid var(--border)" }}>
            <Bell className="w-4 h-4" style={{ color: "var(--forest)" }} />
          </div>
        </div>

        {/* Hero mood card */}
        <div className="mt-4 rounded-[26px] p-4 relative overflow-hidden"
          style={{ background: "linear-gradient(150deg, var(--forest), oklch(0.45 0.06 150))", color: "var(--cream)" }}>
          <svg className="absolute -right-4 -bottom-4 opacity-30" width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="var(--cream)" strokeWidth="0.8">
            <path d="M80 20c-30 0-50 20-50 50 0 5 2 10 5 10 25 0 45-25 45-60Z" />
            <path d="M30 80c15-20 30-35 50-60" />
          </svg>
          <div className="text-[10px] tracking-[0.3em] uppercase opacity-80">Today's Whisper</div>
          <div className="font-display text-[18px] leading-snug mt-2 max-w-[170px]">
            "把今天的一点呼吸 留给自己。"
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-[10px] opacity-80">— 今日心境 · soft & still</div>
            <div className="px-2.5 py-1 rounded-full text-[9px] tracking-widest"
              style={{ background: "var(--gold)", color: "var(--forest)" }}>RECORD</div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-3 gap-2.5 mt-4">
          {[
            { Icon: Heart, label: "情绪", en: "Mood" },
            { Icon: Sprout, label: "植物", en: "Plant" },
            { Icon: Calendar, label: "活动", en: "Events" },
          ].map(({ Icon, label, en }) => (
            <div key={label} className="rounded-2xl bg-white p-3 flex flex-col gap-2" style={{ border: "1px solid var(--border)" }}>
              <Icon className="w-4 h-4" style={{ color: "var(--herb)" }} />
              <div>
                <div className="text-[12px] font-medium" style={{ color: "var(--forest)" }}>{label}</div>
                <div className="text-[8.5px] tracking-widest uppercase" style={{ color: "oklch(0.55 0.03 150)" }}>{en}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Plant strip */}
        <div className="mt-4 rounded-2xl p-3.5" style={{ background: "var(--mist)" }}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--herb)" }}>My Plant · Day 24</div>
              <div className="font-display text-[15px] mt-0.5" style={{ color: "var(--forest)" }}>薄荷 · Mentha</div>
            </div>
            <Sprout className="w-7 h-7" style={{ color: "var(--forest)" }} />
          </div>
          <div className="mt-2.5 h-1 rounded-full overflow-hidden" style={{ background: "color-mix(in oklab, white 60%, transparent)" }}>
            <div className="h-full" style={{ width: "62%", background: "var(--forest)" }} />
          </div>
          <div className="flex justify-between text-[9px] mt-1.5" style={{ color: "var(--herb)" }}>
            <span>Soil</span><span>Sprout</span><span style={{ color: "var(--forest)", fontWeight: 600 }}>Bloom</span><span>Fruit</span>
          </div>
        </div>

        {/* Featured activity */}
        <div className="mt-3 text-[10px] tracking-[0.25em] uppercase flex items-center justify-between" style={{ color: "oklch(0.5 0.03 150)" }}>
          <span>Nearby Healing · 附近疗愈</span><span>更多</span>
        </div>
        <div className="mt-2 rounded-2xl bg-white p-3 flex gap-3" style={{ border: "1px solid var(--border)" }}>
          <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "var(--mist)" }}>
            <Leaf className="w-6 h-6" style={{ color: "var(--forest)" }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-display text-[14px]" style={{ color: "var(--forest)" }}>森林呼吸工作坊</div>
            <div className="text-[9px]" style={{ color: "oklch(0.5 0.03 150)" }}>Forest Breath · Sat 16:00</div>
            <div className="flex items-center gap-1 mt-1 text-[9px]" style={{ color: "var(--herb)" }}>
              <Pin className="w-2.5 h-2.5" /> 复兴公园 · 2.1 km
            </div>
          </div>
        </div>
      </div>
      <TabBar active="home" />
    </ScreenShell>
  );
}

/* ──────────────────────────────────────────────────────────────
   3. Mood Check-in
   ────────────────────────────────────────────────────────────── */
export function MoodScreen() {
  const moods = [
    { en: "Calm", cn: "平静", c: "var(--mist)" },
    { en: "Gentle", cn: "温柔", c: "var(--sand)" },
    { en: "Quiet", cn: "安静", c: "color-mix(in oklab, var(--herb) 35%, white)" },
    { en: "Tender", cn: "柔软", c: "color-mix(in oklab, var(--gold) 30%, white)" },
    { en: "Heavy", cn: "沉重", c: "color-mix(in oklab, var(--forest) 25%, white)" },
    { en: "Foggy", cn: "迷茫", c: "color-mix(in oklab, oklch(0.7 0.03 220) 35%, white)" },
  ];
  return (
    <ScreenShell label="情绪记录" en="Mood Check-in">
      <div className="absolute inset-0 grain" />
      <StatusBar />
      <div className="relative px-5 pt-2">
        <div className="flex items-center justify-between">
          <ChevronLeft className="w-5 h-5" style={{ color: "var(--forest)" }} />
          <div className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "oklch(0.5 0.03 150)" }}>May 25 · 周三</div>
          <div className="w-5" />
        </div>

        <div className="mt-5">
          <div className="font-display text-[26px] leading-tight" style={{ color: "var(--forest)" }}>
            此刻<br />你感觉如何？
          </div>
          <div className="text-[10px] tracking-[0.25em] uppercase mt-2" style={{ color: "var(--herb)" }}>
            How are you feeling now
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5 mt-5">
          {moods.map((m, i) => (
            <div key={m.en} className="aspect-square rounded-2xl p-2.5 flex flex-col justify-between relative overflow-hidden"
              style={{ background: m.c, border: i === 1 ? "1.5px solid var(--forest)" : "1px solid transparent" }}>
              <div className="w-6 h-6 rounded-full" style={{ background: "color-mix(in oklab, white 50%, transparent)" }} />
              <div>
                <div className="text-[12px] font-medium" style={{ color: "var(--forest)" }}>{m.cn}</div>
                <div className="text-[8.5px] tracking-widest uppercase" style={{ color: "color-mix(in oklab, var(--forest) 65%, transparent)" }}>{m.en}</div>
              </div>
              {i === 1 && (
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 text-[10px] tracking-[0.25em] uppercase" style={{ color: "oklch(0.5 0.03 150)" }}>Note · 一句话</div>
        <div className="mt-2 rounded-2xl bg-white p-3.5" style={{ border: "1px solid var(--border)" }}>
          <div className="font-display text-[13px] leading-relaxed" style={{ color: "var(--forest)" }}>
            "下午的阳光晒到桌角，<br />
            <span style={{ color: "var(--herb)" }}>薄荷的味道</span>淡淡浮起。"
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-1.5">
              {["#光", "#薄荷", "#独处"].map(t => (
                <span key={t} className="px-2 py-0.5 rounded-full text-[9px]" style={{ background: "var(--mist)", color: "var(--forest)" }}>{t}</span>
              ))}
            </div>
            <div className="text-[9px]" style={{ color: "var(--herb)" }}>32 / 140</div>
          </div>
        </div>

        <button className="mt-5 w-full rounded-full py-3 flex items-center justify-center gap-2"
          style={{ background: "var(--forest)", color: "var(--cream)" }}>
          <span className="text-[12px] tracking-[0.25em]">保 存 今 日 心 境</span>
        </button>
      </div>
      <TabBar active="mood" />
    </ScreenShell>
  );
}

/* ──────────────────────────────────────────────────────────────
   4. Activity List
   ────────────────────────────────────────────────────────────── */
export function ActivitiesScreen() {
  const items = [
    { cn: "森林冥想行走", en: "Forest Walking Meditation", time: "周六 · 16:00", place: "复兴公园", tag: "户外 · Outdoor" },
    { cn: "陶土与呼吸", en: "Clay & Breath", time: "周日 · 10:30", place: "M50 工坊", tag: "手作 · Craft" },
    { cn: "夜读疗愈圈", en: "Night Reading Circle", time: "周五 · 20:00", place: "梧桐书房", tag: "对话 · Talk" },
  ];
  return (
    <ScreenShell label="疗愈活动" en="Activities">
      <div className="absolute inset-0 grain" />
      <StatusBar />
      <div className="relative px-5 pt-2 h-full">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--herb)" }}>Discover</div>
            <div className="font-display text-[22px]" style={{ color: "var(--forest)" }}>慢下来的方式</div>
          </div>
          <Search className="w-5 h-5" style={{ color: "var(--forest)" }} />
        </div>

        <div className="mt-3 flex gap-1.5 overflow-hidden">
          {["全部", "户外", "手作", "对话", "声音", "植物"].map((t, i) => (
            <div key={t} className="px-3 py-1.5 rounded-full text-[10px] whitespace-nowrap"
              style={{
                background: i === 0 ? "var(--forest)" : "white",
                color: i === 0 ? "var(--cream)" : "var(--forest)",
                border: "1px solid var(--border)",
              }}>{t}</div>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          {items.map((it, i) => (
            <div key={it.cn} className="rounded-2xl bg-white overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <div className="h-20 relative overflow-hidden" style={{
                background: i === 0
                  ? "linear-gradient(135deg, var(--forest), var(--herb))"
                  : i === 1
                  ? "linear-gradient(135deg, var(--sand), var(--gold))"
                  : "linear-gradient(135deg, oklch(0.4 0.04 200), var(--herb))",
              }}>
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 100" fill="none" stroke="var(--cream)" strokeWidth="0.8">
                  <path d="M0 80c40-30 80-40 200-50" />
                  <path d="M20 100c30-30 70-50 180-60" />
                </svg>
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[8.5px] tracking-widest glass" style={{ color: "var(--forest)" }}>
                  {it.tag}
                </div>
              </div>
              <div className="p-3">
                <div className="font-display text-[14px]" style={{ color: "var(--forest)" }}>{it.cn}</div>
                <div className="text-[9px] tracking-widest uppercase mt-0.5" style={{ color: "var(--herb)" }}>{it.en}</div>
                <div className="flex items-center justify-between mt-2 text-[9.5px]" style={{ color: "oklch(0.5 0.03 150)" }}>
                  <span className="flex items-center gap-1"><Calendar className="w-2.5 h-2.5" />{it.time}</span>
                  <span className="flex items-center gap-1"><Pin className="w-2.5 h-2.5" />{it.place}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="home" />
    </ScreenShell>
  );
}

/* ──────────────────────────────────────────────────────────────
   5. Booking
   ────────────────────────────────────────────────────────────── */
export function BookingScreen() {
  return (
    <ScreenShell label="活动预约" en="Booking">
      <div className="absolute inset-0" style={{ background: "var(--cream)" }} />
      <StatusBar />
      <div className="relative px-5 pt-2 pb-24">
        <div className="flex items-center justify-between">
          <ChevronLeft className="w-5 h-5" style={{ color: "var(--forest)" }} />
          <div className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "oklch(0.5 0.03 150)" }}>Booking</div>
          <Heart className="w-5 h-5" style={{ color: "var(--forest)" }} />
        </div>

        <div className="mt-4 h-32 rounded-2xl relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, var(--forest), var(--herb))" }}>
          <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 240 130" fill="none" stroke="var(--cream)" strokeWidth="0.8">
            <path d="M-20 100c60-50 140-70 280-80" />
            <path d="M-20 120c60-50 140-70 280-80" />
            <circle cx="200" cy="35" r="14" />
          </svg>
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <div>
              <div className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "color-mix(in oklab, var(--cream) 80%, transparent)" }}>Outdoor</div>
              <div className="font-display text-[18px]" style={{ color: "var(--cream)" }}>森林呼吸工作坊</div>
            </div>
            <div className="text-[10px] glass px-2 py-1 rounded-full" style={{ color: "var(--forest)" }}>2.1 km</div>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--herb)" }}>Select Date · 选择日期</div>
          <div className="mt-2 flex justify-between">
            {[
              ["MON", 23], ["TUE", 24], ["WED", 25], ["THU", 26], ["FRI", 27], ["SAT", 28], ["SUN", 29],
            ].map(([d, n], i) => {
              const on = i === 5;
              return (
                <div key={d as string} className="flex flex-col items-center gap-1 rounded-2xl px-1.5 py-2"
                  style={{ background: on ? "var(--forest)" : "transparent", color: on ? "var(--cream)" : "var(--forest)", width: 30 }}>
                  <span className="text-[8.5px] tracking-widest">{d}</span>
                  <span className="font-display text-[14px]">{n}</span>
                  {on && <div className="w-1 h-1 rounded-full" style={{ background: "var(--gold)" }} />}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4">
          <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--herb)" }}>Time · 时段</div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {["10:00", "14:00", "16:00", "18:00", "19:30", "20:30"].map((t, i) => (
              <div key={t} className="rounded-xl text-center py-2 text-[11px]"
                style={{
                  background: i === 2 ? "var(--forest)" : "white",
                  color: i === 2 ? "var(--cream)" : "var(--forest)",
                  border: "1px solid var(--border)",
                }}>{t}</div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-2xl p-3.5" style={{ background: "var(--mist)" }}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--herb)" }}>Group Size</div>
              <div className="font-display text-[14px] mt-0.5" style={{ color: "var(--forest)" }}>小组 · 8 人以内</div>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-6 h-6 rounded-full bg-white flex items-center justify-center" style={{ color: "var(--forest)" }}>–</button>
              <span className="font-display text-[16px]" style={{ color: "var(--forest)" }}>1</span>
              <button className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "var(--forest)", color: "var(--cream)" }}>+</button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-3 right-3 bottom-[70px] glass rounded-2xl p-3 flex items-center justify-between">
        <div>
          <div className="text-[9px] tracking-widest uppercase" style={{ color: "var(--herb)" }}>Total · 共计</div>
          <div className="font-display text-[18px]" style={{ color: "var(--forest)" }}>¥ 128 <span className="text-[10px]" style={{ color: "var(--herb)" }}>/ 人</span></div>
        </div>
        <button className="rounded-full px-5 py-2.5 text-[11px] tracking-[0.25em]" style={{ background: "var(--forest)", color: "var(--cream)" }}>
          确 认 预 约
        </button>
      </div>

      <TabBar active="home" />
    </ScreenShell>
  );
}

/* ──────────────────────────────────────────────────────────────
   6. Plant Growth
   ────────────────────────────────────────────────────────────── */
export function PlantScreen() {
  const stages = ["Soil", "Sprout", "Bloom", "Fruit"];
  return (
    <ScreenShell label="我的植物" en="Plant Growth">
      <div className="absolute inset-0 grain" />
      <StatusBar />
      <div className="relative px-5 pt-2">
        <div className="flex items-center justify-between">
          <ChevronLeft className="w-5 h-5" style={{ color: "var(--forest)" }} />
          <div className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "oklch(0.5 0.03 150)" }}>Day 24</div>
          <Plus className="w-5 h-5" style={{ color: "var(--forest)" }} />
        </div>

        {/* Plant illustration card */}
        <div className="mt-3 rounded-[26px] h-56 relative overflow-hidden"
          style={{ background: "linear-gradient(180deg, var(--mist), var(--cream))" }}>
          <svg className="absolute inset-x-0 bottom-0 w-full" height="200" viewBox="0 0 240 200" fill="none">
            {/* pot */}
            <path d="M85 170 L155 170 L148 195 L92 195 Z" fill="var(--sand)" />
            <ellipse cx="120" cy="170" rx="35" ry="5" fill="color-mix(in oklab, var(--forest) 20%, var(--sand))" />
            {/* stem */}
            <path d="M120 170 C120 130 118 110 120 80" stroke="var(--forest)" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M120 130 C100 120 88 110 80 95" stroke="var(--forest)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            <path d="M120 110 C140 100 152 90 158 75" stroke="var(--forest)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            {/* leaves */}
            <path d="M80 95 C70 80 78 60 100 60 C100 80 95 95 80 95Z" fill="var(--herb)" />
            <path d="M158 75 C170 60 165 40 145 38 C140 55 145 70 158 75Z" fill="var(--herb)" />
            <path d="M120 80 C108 65 118 45 138 48 C138 65 132 80 120 80Z" fill="var(--forest)" />
            <path d="M120 80 C132 65 122 45 102 48 C102 65 108 80 120 80Z" fill="color-mix(in oklab, var(--forest) 70%, var(--herb))" />
            {/* dew */}
            <circle cx="100" cy="62" r="1.4" fill="var(--cream)" opacity="0.8" />
            <circle cx="138" cy="55" r="1.2" fill="var(--cream)" opacity="0.7" />
          </svg>
          <div className="absolute top-3 left-4">
            <div className="text-[9.5px] tracking-[0.3em] uppercase" style={{ color: "var(--herb)" }}>Mentha · 薄荷</div>
            <div className="font-display text-[20px]" style={{ color: "var(--forest)" }}>第二十四天</div>
          </div>
          <div className="absolute top-3 right-3 px-2 py-1 rounded-full glass text-[9px]" style={{ color: "var(--forest)" }}>
            Stage · Bloom
          </div>
        </div>

        {/* Stages */}
        <div className="mt-4 flex justify-between items-center">
          {stages.map((s, i) => (
            <div key={s} className="flex flex-col items-center gap-1.5">
              <div className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  background: i <= 2 ? "var(--forest)" : "white",
                  color: i <= 2 ? "var(--cream)" : "var(--herb)",
                  border: "1px solid var(--border)",
                }}>
                {i === 0 ? <Drop className="w-4 h-4" /> : <Leaf className="w-4 h-4" />}
              </div>
              <span className="text-[9px] tracking-widest" style={{ color: i === 2 ? "var(--forest)" : "var(--herb)", fontWeight: i === 2 ? 600 : 400 }}>{s}</span>
            </div>
          ))}
        </div>

        {/* Care tasks */}
        <div className="mt-4 text-[10px] tracking-[0.25em] uppercase" style={{ color: "oklch(0.5 0.03 150)" }}>Today's Care · 今日照护</div>
        <div className="mt-2 space-y-2">
          {[
            { Icon: Drop, cn: "浇水 30 ml", en: "Water · done", done: true },
            { Icon: Sun, cn: "晒到柔光", en: "Soft sunlight 2h", done: true },
            { Icon: Leaf, cn: "记录新叶", en: "Record new leaf", done: false },
          ].map(({ Icon, cn, en, done }) => (
            <div key={cn} className="rounded-2xl bg-white p-3 flex items-center gap-3" style={{ border: "1px solid var(--border)" }}>
              <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: done ? "var(--mist)" : "var(--sand)", color: "var(--forest)" }}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: "var(--forest)" }}>{cn}</div>
                <div className="text-[9px] tracking-widest uppercase" style={{ color: "oklch(0.5 0.03 150)" }}>{en}</div>
              </div>
              <div className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ border: "1.4px solid", borderColor: done ? "var(--forest)" : "var(--border)", background: done ? "var(--forest)" : "transparent" }}>
                {done && <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="var(--cream)" strokeWidth="1.8"><path d="m3 6 2 2 4-4" /></svg>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="garden" />
    </ScreenShell>
  );
}

/* ──────────────────────────────────────────────────────────────
   7. Community
   ────────────────────────────────────────────────────────────── */
export function CommunityScreen() {
  const posts = [
    {
      cn: "今天给薄荷换了陶盆，闻到那一刻 突然鼻子酸了。城市里很少有这么干净的味道。",
      mood: "柔软 · Tender", time: "12 min", reacts: 24,
    },
    {
      cn: "下班后没回家，去河边坐了一会儿。 风很轻。",
      mood: "平静 · Calm", time: "1 h", reacts: 58,
    },
    {
      cn: "和陌生人一起做陶。手心是凉的，但心是暖的。",
      mood: "温柔 · Gentle", time: "3 h", reacts: 102,
    },
  ];
  return (
    <ScreenShell label="低压力社区" en="Community">
      <div className="absolute inset-0 grain" />
      <StatusBar />
      <div className="relative px-5 pt-2">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--herb)" }}>Whispers</div>
            <div className="font-display text-[22px]" style={{ color: "var(--forest)" }}>低声的人们</div>
          </div>
          <div className="px-3 py-1.5 rounded-full text-[10px] flex items-center gap-1.5"
            style={{ background: "var(--forest)", color: "var(--cream)" }}>
            <Plus className="w-3 h-3" /> 匿名
          </div>
        </div>

        <div className="mt-3 flex gap-1.5">
          {["所有心境", "平静", "柔软", "迷茫", "沉重"].map((t, i) => (
            <div key={t} className="px-2.5 py-1 rounded-full text-[10px]"
              style={{
                background: i === 0 ? "var(--mist)" : "transparent",
                color: "var(--forest)",
                border: i === 0 ? "none" : "1px solid var(--border)",
              }}>{t}</div>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          {posts.map((p, i) => (
            <div key={i} className="rounded-2xl bg-white p-3.5" style={{ border: "1px solid var(--border)" }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: ["var(--mist)", "var(--sand)", "color-mix(in oklab, var(--gold) 40%, white)"][i] }}>
                    <Leaf className="w-3.5 h-3.5" style={{ color: "var(--forest)" }} />
                  </div>
                  <div>
                    <div className="text-[10.5px]" style={{ color: "var(--forest)" }}>匿名的种子 · {1024 + i * 7}</div>
                    <div className="text-[8.5px] tracking-widest uppercase" style={{ color: "var(--herb)" }}>{p.mood}</div>
                  </div>
                </div>
                <div className="text-[9px]" style={{ color: "oklch(0.55 0.03 150)" }}>{p.time}</div>
              </div>
              <div className="font-display text-[12.5px] leading-relaxed mt-2.5" style={{ color: "var(--forest)" }}>
                "{p.cn}"
              </div>
              <div className="flex items-center gap-4 mt-3 text-[9.5px]" style={{ color: "var(--herb)" }}>
                <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> 轻拥 {p.reacts}</span>
                <span className="flex items-center gap-1"><Sprout className="w-3 h-3" /> 共鸣 12</span>
                <span className="flex items-center gap-1"><Drop className="w-3 h-3" /> 浇灌</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="community" />
    </ScreenShell>
  );
}

/* ──────────────────────────────────────────────────────────────
   8. Profile / Mine
   ────────────────────────────────────────────────────────────── */
export function ProfileScreen() {
  return (
    <ScreenShell label="我的" en="Profile">
      <div className="absolute inset-x-0 top-0 h-44 leaf-gradient" />
      <StatusBar tint="var(--cream)" />
      <div className="relative px-5 pt-2 text-[color:var(--cream)]">
        <div className="flex items-center justify-between">
          <ChevronLeft className="w-5 h-5" />
          <Settings className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-3 mt-3">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: "color-mix(in oklab, white 20%, transparent)", border: "1px solid color-mix(in oklab, white 30%, transparent)" }}>
            <Leaf className="w-6 h-6" />
          </div>
          <div>
            <div className="font-display text-[20px]">林一 · Lin Yi</div>
            <div className="text-[10px] tracking-[0.25em] uppercase opacity-80">Seeding since · 03.2026</div>
          </div>
        </div>
      </div>

      <div className="relative px-5 mt-4">
        <div className="rounded-2xl bg-white p-3.5 grid grid-cols-3" style={{ border: "1px solid var(--border)" }}>
          {[
            ["24", "照护日", "Care Days"],
            ["7", "心境", "Moods"],
            ["3", "活动", "Events"],
          ].map(([n, cn, en]) => (
            <div key={en} className="text-center" style={{ borderRight: en !== "Events" ? "1px solid var(--border)" : "none" }}>
              <div className="font-display text-[22px]" style={{ color: "var(--forest)" }}>{n}</div>
              <div className="text-[10px]" style={{ color: "var(--forest)" }}>{cn}</div>
              <div className="text-[8.5px] tracking-widest uppercase" style={{ color: "var(--herb)" }}>{en}</div>
            </div>
          ))}
        </div>

        {/* Growth report */}
        <div className="mt-3 rounded-2xl p-3.5" style={{ background: "var(--mist)" }}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--herb)" }}>Healing Report · 5月</div>
              <div className="font-display text-[15px] mt-0.5" style={{ color: "var(--forest)" }}>本月情绪走势</div>
            </div>
            <Chevron className="w-4 h-4" style={{ color: "var(--forest)" }} />
          </div>
          <svg viewBox="0 0 240 60" className="w-full h-14 mt-2">
            <path d="M0 45 C30 30 50 50 80 35 S140 15 170 25 S220 40 240 30" stroke="var(--forest)" strokeWidth="1.5" fill="none" />
            <path d="M0 45 C30 30 50 50 80 35 S140 15 170 25 S220 40 240 30 L240 60 L0 60Z" fill="color-mix(in oklab, var(--forest) 10%, transparent)" />
            {[20, 80, 140, 200].map(x => <circle key={x} cx={x} cy={x === 140 ? 22 : 35} r="2" fill="var(--gold)" />)}
          </svg>
        </div>

        <div className="mt-3 rounded-2xl bg-white divide-y" style={{ border: "1px solid var(--border)" }}>
          {[
            { Icon: Sprout, cn: "我的植物花园", en: "My Garden" },
            { Icon: Calendar, cn: "活动与预约", en: "My Bookings" },
            { Icon: Heart, cn: "情绪日记", en: "Mood Journal" },
            { Icon: Users, cn: "我的低语", en: "My Whispers" },
          ].map(({ Icon, cn, en }) => (
            <div key={en} className="flex items-center gap-3 px-3.5 py-2.5">
              <div className="w-7 h-7 rounded-xl flex items-center justify-center" style={{ background: "var(--mist)" }}>
                <Icon className="w-3.5 h-3.5" style={{ color: "var(--forest)" }} />
              </div>
              <div className="flex-1">
                <div className="text-[12px]" style={{ color: "var(--forest)" }}>{cn}</div>
                <div className="text-[8.5px] tracking-widest uppercase" style={{ color: "var(--herb)" }}>{en}</div>
              </div>
              <Chevron className="w-3.5 h-3.5" style={{ color: "var(--herb)" }} />
            </div>
          ))}
        </div>
      </div>
      <TabBar active="me" />
    </ScreenShell>
  );
}
