"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";
import { featureModules } from "@/lib/site";
import { cn } from "@/lib/utils";

const mobileScreens = [
  { title: "Today command centre", src: "/mobile/today.jpg", body: "Portfolio health, open work, material flow and project analytics for management review." },
  { title: "Projects", src: "/mobile/projects.jpg", body: "Track active sites, budgets, progress and work packages from the field." },
  { title: "Field capture", src: "/mobile/capture.jpg", body: "GPS attendance, daily site reports, field expenses and material requests in one workflow." },
  { title: "Materials", src: "/mobile/materials.jpg", body: "Request, approve, issue and audit stock directly from mobile." },
  { title: "Reports", src: "/mobile/reports.jpg", body: "Daily site reports, project analytics and export-ready summaries for site teams." },
  { title: "Account and modules", src: "/mobile/account.jpg", body: "Role-aware module access for attendance, reports, materials, capture, projects and help desk." },
  { title: "Secure sign in", src: "/mobile/sign-in.jpg", body: "Mobile number based entry for field operations teams." },
  { title: "WhatsApp OTP", src: "/mobile/verify-otp.jpg", body: "Verify access with WhatsApp OTP before entering the workspace." }
];

export function DashboardShowcase({ compact = false }: { compact?: boolean }) {
  return <AppScreenshotFrame src="/screenshots/dashboard.png" title="Build Nest dashboard" compact={compact} />;
}

export function AppScreenshotFrame({
  src,
  title,
  compact = false,
  priority = false
}: {
  src: string;
  title: string;
  compact?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg border border-white/15 bg-white/10 p-3 shadow-glow backdrop-blur", compact ? "h-[260px]" : "h-[430px]")}>
      <div className="relative h-full overflow-hidden rounded-md bg-[#071E2D]">
        <img
          src={src}
          alt={title}
          loading={priority ? "eager" : "lazy"}
          className={cn("h-full w-full object-cover object-top", compact ? "transition duration-500 group-hover:scale-[1.03]" : "")}
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>
      <div className="absolute bottom-5 left-5 hidden rounded-md border border-white/15 bg-white/90 p-4 text-copy shadow-premium sm:block">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Cost Variance</p>
        <p className="mt-1 text-2xl font-black">4.8%</p>
      </div>
      <div className="absolute right-5 top-24 hidden rounded-md border border-white/15 bg-white/90 p-4 text-copy shadow-premium md:block">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">DPR Submitted</p>
        <p className="mt-1 text-2xl font-black">96%</p>
      </div>
    </div>
  );
}

export function PhoneMockups() {
  const featured = mobileScreens.slice(0, 3);

  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {featured.map((screen, index) => (
        <MobileScreenshotFrame key={screen.title} src={screen.src} title={screen.title} className={cn(index === 1 && "sm:mt-10")} />
      ))}
    </div>
  );
}

export function MobileScreenshotFrame({
  src,
  title,
  className = ""
}: {
  src: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[260px] rounded-[2rem] border-[10px] border-ink bg-ink p-2 shadow-premium", className)}>
      <div className="relative aspect-[1264/2638] overflow-hidden rounded-[1.35rem] bg-pearl">
        <img src={src} alt={`${title} mobile app screenshot`} loading="lazy" className="h-full w-full object-cover object-top" />
      </div>
    </div>
  );
}

export function MobileScreenshotGallery() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {mobileScreens.map((screen) => (
        <div key={screen.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <MobileScreenshotFrame src={screen.src} title={screen.title} />
          <div className="mt-5">
            <p className="text-lg font-bold text-copy">{screen.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{screen.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ScreenshotGallery({ group }: { group?: string }) {
  const items = group ? featureModules.filter((module) => module.title === group) : featureModules;
  const [active, setActive] = useState<(typeof items)[number] | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button key={item.slug} onClick={() => setActive(item)} className="group overflow-hidden rounded-lg border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
            <div className="relative bg-gradient-to-br from-ink via-night to-[#0B3A45] p-4">
              <AppScreenshotFrame src={item.screenshot} title={`${item.title} screenshot`} compact />
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-md bg-white/90 text-copy">
                <Maximize2 className="h-4 w-4" />
              </span>
            </div>
            <div className="p-5">
              <p className="text-lg font-bold text-copy">{item.title}</p>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{item.overview}</p>
            </div>
          </button>
        ))}
      </div>
      <Dialog.Root open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/80 backdrop-blur" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[92vh] w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-lg bg-white p-3 shadow-premium">
            <Dialog.Close className="absolute right-5 top-5 z-10 rounded-md bg-white/90 p-2 text-copy" aria-label="Close">
              <X className="h-5 w-5" />
            </Dialog.Close>
            {active ? (
              <div className="rounded-md bg-ink p-4">
                <img src={active.screenshot} alt={`${active.title} full screenshot`} className="mx-auto h-auto w-full rounded-md" />
              </div>
            ) : null}
            {active ? <Dialog.Title className="px-2 pt-4 text-xl font-bold text-copy">{active.title} Screenshot Preview</Dialog.Title> : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
