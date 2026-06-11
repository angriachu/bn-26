import { cn } from "@/lib/utils";

export function BrandLogo({ className = "", imageClassName = "" }: { className?: string; imageClassName?: string }) {
  return (
    <span className={cn("grid place-items-center overflow-hidden rounded-md bg-ink ring-1 ring-white/15", className)}>
      <img src="/brand/buildnest-pwa-192.png" alt="Build Nest logo" className={cn("h-full w-full object-cover", imageClassName)} />
    </span>
  );
}
