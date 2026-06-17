import { Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import logoAsset from "@/assets/logo.asset.json";
import { ADDRESS, EMAIL, INSTAGRAM, PHONE_DISPLAY, WA_NUMBER } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-ink text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Logo" width={44} height={44} className="h-11 w-11 rounded-lg" />
            <div>
              <p className="font-display text-lg font-bold">Dibrugarh Go Cabs</p>
              <p className="text-xs uppercase tracking-widest text-gold">Trusted Travel Partner</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-background/70">
            Your Trusted Travel Partner Across Assam. Safe rides, comfortable journeys, affordable prices — available 24×7.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer" className="rounded-full bg-whatsapp p-2.5 text-white transition hover:scale-110" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="rounded-full bg-background/10 p-2.5 text-background transition hover:bg-gradient-fire hover:text-ink" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={`tel:+${WA_NUMBER}`} className="rounded-full bg-background/10 p-2.5 text-background transition hover:bg-gold hover:text-ink" aria-label="Call">
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gold">Get In Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-background/80">
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-ember" /><a href={`tel:+${WA_NUMBER}`} className="hover:text-gold">{PHONE_DISPLAY}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-ember" /><a href={`mailto:${EMAIL}`} className="hover:text-gold break-all">{EMAIL}</a></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-ember" /><span>{ADDRESS}</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gold">Explore</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-background/80">
            {[
              ["#services", "Services"],
              ["#tours", "Tour Packages"],
              ["#fleet", "Our Fleet"],
              ["#why", "Why Choose Us"],
              ["#gallery", "Gallery"],
              ["#contact", "Contact"],
            ].map(([h, l]) => (
              <li key={h}><a href={h} className="hover:text-gold">{l}</a></li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl bg-background/5 p-4 text-xs text-background/70">
            <p className="font-semibold text-gold mb-1">Business Hours</p>
            24×7 Available — Round the Clock Cab Service
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-background/60 sm:flex-row sm:px-6">
          <p>© 2026 Dibrugarh Go Cabs. All Rights Reserved.</p>
          <p>Owned by Mustakim Ali · Dibrugarh, Assam</p>
        </div>
      </div>
    </footer>
  );
}
