import { Phone, MessageCircle } from "lucide-react";
import { WA_NUMBER } from "@/lib/whatsapp";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href="tel:+918638252887"
        aria-label="Call Now"
        title="Call Now"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-ink text-gold shadow-card transition hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={`https://wa.me/${WA_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Book on WhatsApp"
        title="Book on WhatsApp"
        className="pulse-ring flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-card transition hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
