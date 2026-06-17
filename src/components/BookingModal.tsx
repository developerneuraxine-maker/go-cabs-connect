import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { buildBookingMessage, waLink, type BookingPayload } from "@/lib/whatsapp";

const JOURNEY_TYPES = [
  "One Way",
  "Round Trip",
  "Airport Transfer",
  "Local Trip",
  "Outstation Trip",
];

type Props = {
  open: boolean;
  onClose: () => void;
  subject?: string;
  title?: string;
  defaults?: Partial<BookingPayload>;
};

export function BookingModal({ open, onClose, subject, title, defaults }: Props) {
  const [form, setForm] = useState<BookingPayload>({
    pickup: "",
    destination: "",
    journeyType: "One Way",
    date: "",
    time: "",
    passengers: "",
    name: "",
    phone: "",
    requirement: "",
  });

  useEffect(() => {
    if (open) {
      setForm((f) => ({ ...f, ...defaults }));
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open, defaults]);

  if (!open) return null;

  function update<K extends keyof BookingPayload>(k: K, v: BookingPayload[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    const url = waLink(buildBookingMessage({ ...form, subject }));
    window.open(url, "_blank");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/70 backdrop-blur-sm p-0 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-t-3xl bg-card sm:rounded-3xl shadow-glow max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-card/95 backdrop-blur px-5 py-4 rounded-t-3xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ember">
              Book on WhatsApp
            </p>
            <h3 className="text-xl font-bold text-foreground">
              {title ?? "Enquire & Confirm"}
            </h3>
            {subject && <p className="text-sm text-muted-foreground mt-0.5">{subject}</p>}
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-muted transition"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={submit} className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2">
          <Field label="Pickup Location *" required>
            <input
              required
              value={form.pickup}
              onChange={(e) => update("pickup", e.target.value)}
              placeholder="e.g. Dibrugarh Airport"
              className={inputCls}
            />
          </Field>
          <Field label="Destination *" required>
            <input
              required
              value={form.destination}
              onChange={(e) => update("destination", e.target.value)}
              placeholder="e.g. Tinsukia"
              className={inputCls}
            />
          </Field>

          <Field label="Journey Type *" className="sm:col-span-2">
            <div className="flex flex-wrap gap-2">
              {JOURNEY_TYPES.map((j) => (
                <button
                  type="button"
                  key={j}
                  onClick={() => update("journeyType", j)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                    form.journeyType === j
                      ? "bg-gradient-fire text-ink border-transparent shadow-glow"
                      : "border-border text-muted-foreground hover:border-ember/50 hover:text-foreground"
                  }`}
                >
                  {j}
                </button>
              ))}
            </div>
          </Field>

          <Field label="Pickup Date *" required>
            <input
              required
              type="date"
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="Pickup Time *" required>
            <input
              required
              type="time"
              value={form.time}
              onChange={(e) => update("time", e.target.value)}
              className={inputCls}
            />
          </Field>

          <Field label="Passengers *" required>
            <input
              required
              type="number"
              min={1}
              max={50}
              value={form.passengers}
              onChange={(e) => update("passengers", e.target.value)}
              placeholder="4"
              className={inputCls}
            />
          </Field>
          <Field label="Customer Name *" required>
            <input
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your full name"
              className={inputCls}
            />
          </Field>

          <Field label="Phone Number *" required className="sm:col-span-2">
            <input
              required
              type="tel"
              pattern="[0-9+\s-]{7,}"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+91 XXXXXXXXXX"
              className={inputCls}
            />
          </Field>

          <Field label="Special Requirement (Optional)" className="sm:col-span-2">
            <textarea
              rows={2}
              value={form.requirement}
              onChange={(e) => update("requirement", e.target.value)}
              placeholder="e.g. Need Innova Crysta with luggage carrier"
              className={inputCls}
            />
          </Field>

          <div className="sm:col-span-2 flex flex-col gap-2 pt-2">
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-fire px-6 py-4 text-base font-bold text-ink shadow-glow transition hover:scale-[1.01] active:scale-[0.99]"
            >
              Send to WhatsApp →
            </button>
            <p className="text-center text-xs text-muted-foreground">
              You'll be redirected to WhatsApp with your booking details pre-filled.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/30 transition";

function Field({
  label,
  required,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-ember"> </span>}
      </span>
      {children}
    </label>
  );
}

type ReactNode = import("react").ReactNode;
