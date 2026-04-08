"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] py-1.5 bg-white/90 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-[1120px] mx-auto px-6 flex items-center justify-between">
        <Link href="#" className="block leading-none">
          <Image src="/images/logo.png" alt="Webomate" width={180} height={90} className="h-[90px] w-auto object-contain" />
        </Link>
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-[var(--color-text-muted)] font-medium hover:text-[var(--color-primary)] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-full after:bg-[var(--color-primary)] after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label="選單"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-[var(--foreground)]"
        >
          <span className="w-6 h-0.5 bg-current block rounded" />
          <span className="w-6 h-0.5 bg-current block rounded" />
          <span className="w-6 h-0.5 bg-current block rounded" />
        </button>
      </div>
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[var(--color-border)] p-6 flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="text-[var(--color-text-muted)] font-medium">
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
