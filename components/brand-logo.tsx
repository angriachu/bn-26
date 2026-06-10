import { cn } from "@/lib/utils";

function assetSrc(src: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!basePath || src.startsWith("http")) return src;
  return `${basePath}${src}`;
}

export function BrandLogo({ className = "", imageClassName = "" }: { className?: string; imageClassName?: string }) {
  return (
    <span className={cn("grid place-items-center overflow-hidden rounded-md bg-ink ring-1 ring-white/15", className)}>
      <img src={assetSrc("/brand/buildnest-pwa-192.png")} alt="Build Nest logo" className={cn("h-full w-full object-cover", imageClassName)} />
    </span>
  );
}
