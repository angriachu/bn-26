import { cn } from "@/lib/utils";

export function Section({
  children,
  id,
  className = "",
  innerClassName = ""
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section id={id} className={cn("px-4 py-20 sm:px-6 lg:px-8", className)}>
      <div className={cn("mx-auto max-w-7xl", innerClassName)}>{children}</div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "light"
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("mb-12 max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-aqua">{eyebrow}</p> : null}
      <h2 className={cn("text-3xl font-bold tracking-normal sm:text-4xl lg:text-5xl", tone === "dark" ? "text-white" : "text-copy")}>{title}</h2>
      {body ? <p className={cn("mt-5 text-lg leading-8", tone === "dark" ? "text-white/70" : "text-slate-600")}>{body}</p> : null}
    </div>
  );
}
