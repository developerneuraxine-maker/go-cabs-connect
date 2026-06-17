import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/logo.jpg";
import { useBooking } from "@/components/BookingProvider";

const links = [
  { href: "#services", label: "Services" },
  { href: "#tours", label: "Tours" },
  { href: "#fleet", label: "Fleet" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { open: openBooking } = useBooking();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoAsset}
            alt="Dibrugarh Go Cabs logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-lg object-cover shadow-card"
          />
          <div className="leading-tight">
            <p className="font-display text-base font-bold text-foreground">Dibrugarh Go Cabs</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-ember">
              Trusted Travel Partner
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => openBooking()}
            className="rounded-full bg-gradient-fire px-5 py-2.5 text-sm font-bold text-ink shadow-glow transition hover:scale-105"
          >
            Book Your Cab
          </button>
        </div>

        <button
          className="md:hidden rounded-lg p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                openBooking();
              }}
              className="mt-2 rounded-xl bg-gradient-fire px-5 py-3 text-sm font-bold text-ink shadow-glow"
            >
              Book Your Cab
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
