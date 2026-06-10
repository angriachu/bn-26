import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({ children, href, variant = "primary", className, onClick, type = "button" }: ButtonProps) {
  const classes = cn(
    "inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-aqua/60",
    variant === "primary" && "bg-aqua text-ink shadow-glow hover:bg-mist",
    variant === "secondary" && "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15",
    variant === "ghost" && "text-copy hover:bg-ink/5",
    variant === "dark" && "bg-ink text-white hover:bg-night",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
