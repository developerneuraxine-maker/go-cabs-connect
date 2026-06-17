import { createContext, useContext, useState, type ReactNode } from "react";
import { BookingModal } from "@/components/BookingModal";
import type { BookingPayload } from "@/lib/whatsapp";

type OpenOpts = {
  subject?: string;
  defaults?: Partial<BookingPayload>;
  title?: string;
};

type Ctx = { open: (opts?: OpenOpts) => void };
const BookingCtx = createContext<Ctx | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [opts, setOpts] = useState<OpenOpts | null>(null);

  return (
    <BookingCtx.Provider value={{ open: (o) => setOpts(o ?? {}) }}>
      {children}
      <BookingModal
        open={!!opts}
        onClose={() => setOpts(null)}
        subject={opts?.subject}
        title={opts?.title}
        defaults={opts?.defaults}
      />
    </BookingCtx.Provider>
  );
}

export function useBooking() {
  const c = useContext(BookingCtx);
  if (!c) throw new Error("useBooking must be used within BookingProvider");
  return c;
}
