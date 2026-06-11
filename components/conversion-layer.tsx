"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarDays, Menu, MessageCircle, PlayCircle, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { WhatsAppEnquiryForm, WhatsAppQuickLink } from "@/components/whatsapp-enquiry-form";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function LeadForm({ intent }: { intent: string }) {
  return <WhatsAppEnquiryForm intent={intent} compact />;
}

export function LeadDialog({
  children,
  title,
  intent
}: {
  children: React.ReactNode;
  title: string;
  intent: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-premium">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="text-2xl font-bold text-copy">{title}</Dialog.Title>
              <Dialog.Description className="mt-2 text-sm leading-6 text-slate-600">
                Share a few details and the Build Nest team will help you evaluate the right plan.
              </Dialog.Description>
            </div>
            <Dialog.Close className="rounded-md p-2 text-slate-500 hover:bg-slate-100" aria-label="Close">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>
          <LeadForm intent={intent} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-white">
          <BrandLogo className="h-11 w-11" />
          <span>
            <span className="block text-base font-bold leading-5">{site.name}</span>
            <span className="block text-xs text-mist">{site.tagline}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-md px-3 py-2 text-sm font-semibold text-white hover:bg-white/10 hover:text-mist">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.appUrl}
            target="_blank"
            rel="noreferrer"
            className="h-10 rounded-md border border-mist/35 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 hover:text-mist"
          >
            Login
          </a>
          <LeadDialog title="Request a Build Nest Demo" intent="Demo">
            <button className="h-10 rounded-md border border-white/20 px-4 text-sm font-semibold text-white hover:bg-white/10">Request Demo</button>
          </LeadDialog>
          <a href={site.appUrl} target="_blank" rel="noreferrer" className="h-10 rounded-md bg-aqua px-4 py-2 text-sm font-semibold text-ink hover:bg-mist">
            Start Free
          </a>
        </div>
        <button className="rounded-md p-2 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div className={cn("mx-auto hidden max-w-7xl pb-4 lg:hidden", open && "block")}>
        <nav className="grid gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-md px-3 py-2 text-sm font-semibold text-white hover:bg-white/10" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a
            href={site.appUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-md border border-mist/35 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
            onClick={() => setOpen(false)}
          >
            Login
          </a>
          <a
            href={site.appUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-aqua px-3 py-2 text-sm font-bold text-ink"
            onClick={() => setOpen(false)}
          >
            Start Free
          </a>
        </nav>
      </div>
    </header>
  );
}

export function FloatingCtas() {
  const [exitOpen, setExitOpen] = useState(false);

  useEffect(() => {
    const onMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0 && !sessionStorage.getItem("bn-exit")) {
        sessionStorage.setItem("bn-exit", "1");
        setExitOpen(true);
      }
    };
    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, []);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <WhatsAppQuickLink className="grid h-12 w-12 place-items-center rounded-full bg-success text-white shadow-glow" aria-label="WhatsApp enquiry">
          <MessageCircle className="h-6 w-6" />
        </WhatsAppQuickLink>
        <LeadDialog title="Schedule a Build Nest Meeting" intent="Meeting">
          <button className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white shadow-premium" aria-label="Schedule meeting">
            <CalendarDays className="h-6 w-6" />
          </button>
        </LeadDialog>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-ink/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-xl gap-3">
          <LeadDialog title="Request a Build Nest Demo" intent="Demo">
            <button className="h-11 flex-1 rounded-md bg-aqua text-sm font-bold text-ink">Request Demo</button>
          </LeadDialog>
          <Link href="/contact" className="grid h-11 flex-1 place-items-center rounded-md border border-white/20 text-sm font-bold text-white">Contact Sales</Link>
        </div>
      </div>
      <Dialog.Root open={exitOpen} onOpenChange={setExitOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-premium">
            <Dialog.Close className="absolute right-4 top-4 rounded-md p-2 text-slate-500 hover:bg-slate-100" aria-label="Close">
              <X className="h-5 w-5" />
            </Dialog.Close>
            <Dialog.Title className="pr-10 text-2xl font-bold text-copy">Before you go, get the Build Nest buyer brief</Dialog.Title>
            <Dialog.Description className="mt-3 text-sm leading-6 text-slate-600">
              A concise product overview for promoters, project heads and operations leaders evaluating construction ERP.
            </Dialog.Description>
            <div className="mt-5">
              <LeadForm intent="Buyer Brief" />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export function HeroActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <LeadDialog title="Request a Build Nest Demo" intent="Demo">
        <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-aqua px-5 text-sm font-bold text-ink shadow-glow hover:bg-mist">
          Request Demo
        </button>
      </LeadDialog>
      <a
        href={site.appUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 text-sm font-bold text-white backdrop-blur hover:bg-white/15"
      >
        Start Free
      </a>
      <a href="#product-tour" className="inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold text-white hover:bg-white/10">
        <PlayCircle className="h-5 w-5" /> Watch Product Tour
      </a>
    </div>
  );
}
