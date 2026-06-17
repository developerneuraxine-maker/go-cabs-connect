import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Plane,
  Train,
  MapPin,
  Mountain,
  Briefcase,
  Camera,
  Users,
  Hotel,
  Heart,
  UsersRound,
  Clock,
  ShieldCheck,
  Sparkles,
  Wallet,
  BadgeCheck,
  Star,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Car,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useBooking } from "@/components/BookingProvider";
import {
  buildBookingMessage,
  waLink,
  WA_NUMBER,
  PHONE_DISPLAY,
  EMAIL,
  ADDRESS,
} from "@/lib/whatsapp";

import heroRoad from "@/assets/hero-road.jpg";
import fleetAnini from "@/assets/fleet-anini.jpg";
import fleetMountains from "@/assets/fleet-mountains.jpg";
import fleetYard from "@/assets/fleet-yard.jpg";
import banner from "@/assets/banner.jpg";
import tourKaziranga from "@/assets/tour-kaziranga.jpg";
import tourMajuli from "@/assets/tour-majuli.jpg";
import tourSivasagar from "@/assets/tour-sivasagar.jpg";
import tourMeghalaya from "@/assets/tour-meghalaya.jpg";
import tourDibrugarh from "@/assets/tour-dibrugarh.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dibrugarh Go Cabs — Taxi Service in Dibrugarh, Assam | 24×7 Cab Booking" },
      {
        name: "description",
        content:
          "Reliable taxi service in Dibrugarh: airport transfers, outstation cabs, Innova rental, and Assam & Arunachal tour packages. Book on WhatsApp 24×7.",
      },
      {
        name: "keywords",
        content:
          "Taxi Service Dibrugarh, Cab Service Dibrugarh, Airport Taxi Dibrugarh, Assam Taxi Service, Arunachal Taxi Service, Tour Packages Assam, Innova Rental Dibrugarh, Cab Booking Assam, Travel Agency Dibrugarh",
      },
      { property: "og:title", content: "Dibrugarh Go Cabs — Trusted Taxi Service Across Assam" },
      {
        property: "og:description",
        content:
          "Airport transfers, outstation cabs and tour packages across Assam & Arunachal. Book instantly on WhatsApp.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div id="top" className="bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Tours />
      <Fleet />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <QuickBook />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroRoad}
          alt="Innova Crysta taxi on a scenic Arunachal Pradesh highway"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/70 to-ink/95" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pt-20 lg:pb-28">
        <div className="text-background">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            24×7 Available · Dibrugarh, Assam
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Book Reliable Taxi <br />
            Services Across <span className="text-gradient-fire">Assam</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-background/80 sm:text-lg">
            Airport transfers, local taxis, outstation trips, tourist packages, corporate travel and
            round-the-clock cab service — handled by professional drivers and spotless vehicles.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <BookCTA size="lg" label="Book Your Cab" />
            <a
              href={waLink(
                "Hi Dibrugarh Go Cabs 👋\n\nI'd like an instant fare quote. Please share details.",
              )}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-gold/40 bg-background/5 px-6 py-3.5 text-sm font-semibold text-background backdrop-blur transition hover:bg-background/10"
            >
              Get Instant Quote
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-background/70">
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-gold" /> Verified Drivers
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" /> Safe & Insured
            </span>
            <span className="flex items-center gap-2">
              <Wallet className="h-4 w-4 text-gold" /> Transparent Pricing
            </span>
          </div>
        </div>

        <HeroBookingCard />
      </div>
    </section>
  );
}

function HeroBookingCard() {
  const [form, setForm] = useState({
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
  const types = ["One Way", "Round Trip", "Airport Transfer", "Local Trip", "Outstation Trip"];

  function submit(e: React.FormEvent) {
    e.preventDefault();
    window.open(waLink(buildBookingMessage(form)), "_blank");
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-border bg-card p-5 shadow-glow sm:p-6"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-ember">Booking Form</p>
          <h2 className="font-display text-xl font-bold text-foreground">Check Availability</h2>
        </div>
        <Car className="h-7 w-7 text-ember" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Inp
          label="Pickup *"
          required
          value={form.pickup}
          onChange={(v) => setForm({ ...form, pickup: v })}
          placeholder="Dibrugarh Airport"
        />
        <Inp
          label="Destination *"
          required
          value={form.destination}
          onChange={(v) => setForm({ ...form, destination: v })}
          placeholder="Tinsukia"
        />
        <div className="col-span-2">
          <Label>Journey Type *</Label>
          <div className="flex flex-wrap gap-1.5">
            {types.map((t) => (
              <button
                type="button"
                key={t}
                onClick={() => setForm({ ...form, journeyType: t })}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                  form.journeyType === t
                    ? "bg-gradient-fire border-transparent text-ink"
                    : "border-border text-muted-foreground hover:border-ember/50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <Inp
          label="Passengers *"
          required
          type="number"
          value={form.passengers}
          onChange={(v) => setForm({ ...form, passengers: v })}
          placeholder="4"
        />
        <Inp
          label="Name *"
          required
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
          placeholder="Full name"
        />
        <div className="col-span-2">
          <Inp
            label="Phone *"
            required
            type="tel"
            value={form.phone}
            onChange={(v) => setForm({ ...form, phone: v })}
            placeholder="+91 XXXXXXXXXX"
          />
        </div>
        <div className="col-span-2">
          <Inp
            label="Special Requirement"
            value={form.requirement}
            onChange={(v) => setForm({ ...form, requirement: v })}
            placeholder="Need Innova Crysta"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-fire px-6 py-4 text-sm font-bold text-ink shadow-glow transition hover:scale-[1.01]"
      >
        Check Availability <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-2 text-center text-[11px] text-muted-foreground">
        Redirects to WhatsApp with your trip details pre-filled.
      </p>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
      {children}
    </span>
  );
}
function Inp(props: {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <Label>{props.label}</Label>
      <input
        required={props.required}
        type={props.type ?? "text"}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/30"
      />
    </label>
  );
}

/* ---------------- STATS ---------------- */

function Stats() {
  const items = [
    ["10+", "Years on the Road"],
    ["25K+", "Happy Travellers"],
    ["50+", "Cities Covered"],
    ["24/7", "Booking Support"],
  ];
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:grid-cols-4 sm:px-6">
        {items.map(([n, l]) => (
          <div key={l} className="text-center">
            <p className="font-display text-3xl font-bold text-gradient-fire sm:text-4xl">{n}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */

function Services() {
  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      desc: "On-time pickups & drops from Dibrugarh Airport.",
    },
    {
      icon: Train,
      title: "Railway Station Pickup",
      desc: "Comfortable rides to and from the station.",
    },
    {
      icon: MapPin,
      title: "Local Taxi Service",
      desc: "Hourly & full-day local cabs across Dibrugarh.",
    },
    {
      icon: Mountain,
      title: "Outstation Cab Service",
      desc: "One-way & round trips across Assam and beyond.",
    },
    {
      icon: Briefcase,
      title: "Corporate Travel",
      desc: "Reliable transport for teams and executives.",
    },
    {
      icon: Camera,
      title: "Tourist Taxi Service",
      desc: "Curated sightseeing with knowledgeable drivers.",
    },
    { icon: Heart, title: "Family Trips", desc: "Spacious Innovas & SUVs for family journeys." },
    { icon: Hotel, title: "Hotel Transfers", desc: "Door-to-door transfers to your stay." },
    {
      icon: Sparkles,
      title: "Wedding Transportation",
      desc: "Decorated cabs and fleet for your big day.",
    },
    { icon: UsersRound, title: "Group Travel", desc: "Tempo travellers & multi-cab convoys." },
    { icon: Clock, title: "24×7 Cab Booking", desc: "We're available round the clock — any hour." },
    {
      icon: Car,
      title: "Custom Itineraries",
      desc: "Tell us your plan — we'll route the perfect ride.",
    },
  ];

  return (
    <Section
      id="services"
      eyebrow="Our Services"
      title="Travel-grade rides for every kind of journey"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </Section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Plane;
  title: string;
  desc: string;
}) {
  const { open } = useBooking();
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-ember/40">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-fire opacity-0 blur-3xl transition group-hover:opacity-40" />
      <div className="relative">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-fire text-ink shadow-glow">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
        <button
          onClick={() => open({ subject: `Service: ${title}`, title: `Book ${title}` })}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ember hover:text-ink"
        >
          Book Now <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ---------------- TOURS ---------------- */

function Tours() {
  const tours = [
    { name: "Dibrugarh Local Sightseeing", img: tourDibrugarh, days: "1 Day", tag: "Tea Estates" },
    { name: "Kaziranga National Park Tour", img: tourKaziranga, days: "2–3 Days", tag: "Wildlife" },
    { name: "Majuli Island Tour", img: tourMajuli, days: "2 Days", tag: "River Island" },
    { name: "Sivasagar Heritage Tour", img: tourSivasagar, days: "1–2 Days", tag: "Ahom Heritage" },
    { name: "Anini Adventure Tour", img: fleetAnini, days: "3–4 Days", tag: "Arunachal" },
    { name: "Tinsukia Tour", img: fleetMountains, days: "1–2 Days", tag: "Northeast" },
    { name: "Meghalaya Tour", img: tourMeghalaya, days: "4–5 Days", tag: "Living Roots" },
    { name: "Arunachal Pradesh Tour", img: fleetMountains, days: "5–7 Days", tag: "Himalayas" },
    { name: "Custom Tour Packages", img: tourMajuli, days: "Flexible", tag: "Made For You" },
  ];

  return (
    <Section
      id="tours"
      eyebrow="Tour Packages"
      title="Curated journeys across Northeast India"
      dark
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((t) => (
          <TourCard key={t.name} {...t} />
        ))}
      </div>
    </Section>
  );
}

function TourCard({
  name,
  img,
  days,
  tag,
}: {
  name: string;
  img: string;
  days: string;
  tag: string;
}) {
  const { open } = useBooking();
  return (
    <article className="group overflow-hidden rounded-3xl border border-background/10 bg-ink shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-gradient-fire px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
          {tag}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-background/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-background backdrop-blur">
          {days}
        </span>
        <h3 className="absolute bottom-4 left-4 right-4 font-display text-xl font-bold text-background">
          {name}
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-2 p-4">
        <button
          onClick={() =>
            open({
              subject: `Tour: ${name}`,
              title: "Request Quote",
              defaults: { destination: name },
            })
          }
          className="rounded-lg border border-background/15 px-3 py-2 text-xs font-semibold text-background transition hover:bg-background/10"
        >
          View Details
        </button>
        <button
          onClick={() =>
            open({
              subject: `Tour Quote: ${name}`,
              title: "Request Quote",
              defaults: { destination: name, journeyType: "Round Trip" },
            })
          }
          className="rounded-lg border border-gold/30 bg-gold/10 px-3 py-2 text-xs font-semibold text-gold transition hover:bg-gold/20"
        >
          Get Quote
        </button>
        <button
          onClick={() =>
            open({
              subject: `Book Tour: ${name}`,
              title: "Book This Tour",
              defaults: { destination: name, journeyType: "Round Trip" },
            })
          }
          className="rounded-lg bg-gradient-fire px-3 py-2 text-xs font-bold text-ink shadow-glow"
        >
          Book Tour
        </button>
      </div>
    </article>
  );
}

/* ---------------- FLEET ---------------- */

function Fleet() {
  const fleet = [
    { name: "Sedan", seats: "4 Seater", desc: "Dzire / Etios — efficient city rides." },
    { name: "SUV", seats: "6–7 Seater", desc: "Scorpio / XUV — rugged comfort." },
    { name: "Innova", seats: "7 Seater", desc: "Reliable workhorse for long trips." },
    { name: "Innova Crysta", seats: "7 Seater", desc: "Premium comfort for families & tours." },
    { name: "Ertiga", seats: "6 Seater", desc: "Compact MPV for small groups." },
    { name: "Tempo Traveller", seats: "12–17 Seater", desc: "Group travel & corporate moves." },
    { name: "Luxury Vehicles", seats: "On Request", desc: "Premium fleet for weddings & VIPs." },
  ];

  return (
    <Section id="fleet" eyebrow="Our Fleet" title="A spotless, well-maintained line-up">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {fleet.map((v, i) => (
          <FleetCard
            key={v.name}
            {...v}
            img={[fleetAnini, fleetYard, fleetMountains][i % 3]}
          />
        ))}
      </div>
    </Section>
  );
}

function FleetCard({
  name,
  seats,
  desc,
  img,
}: {
  name: string;
  seats: string;
  desc: string;
  img: string;
}) {
  const { open } = useBooking();
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img src={img} alt={name} loading="lazy" className="h-full w-full object-cover" />
        <span className="absolute right-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold backdrop-blur">
          {seats}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() =>
              open({
                subject: `Vehicle Enquiry: ${name}`,
                title: "Get Fare",
                defaults: { requirement: `Need ${name}` },
              })
            }
            className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-foreground hover:border-ember/50"
          >
            Get Fare
          </button>
          <button
            onClick={() =>
              open({
                subject: `Book Vehicle: ${name}`,
                title: "Book Now",
                defaults: { requirement: `Need ${name}` },
              })
            }
            className="rounded-lg bg-gradient-fire px-3 py-2 text-xs font-bold text-ink shadow-glow"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- WHY US ---------------- */

function WhyUs() {
  const items = [
    [Clock, "24×7 Service", "Day or night, we're a call away."],
    [Users, "Professional Drivers", "Licensed, courteous, well-trained."],
    [Sparkles, "Clean Vehicles", "Sanitised and well-maintained."],
    [Wallet, "Affordable Pricing", "Transparent fares, no surprises."],
    [Plane, "Airport Specialists", "On-time pickups & drops."],
    [ShieldCheck, "Safe Travel", "GPS tracking & verified drivers."],
    [Mountain, "Tour Packages", "Custom itineraries across NE India."],
    [MessageCircle, "Instant Booking", "Confirm trips right on WhatsApp."],
    [BadgeCheck, "Experienced Team", "A decade serving travellers."],
  ];

  return (
    <Section id="why" eyebrow="Why Choose Us" title="A travel partner you can count on">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(([Icon, t, d]) => {
          const I = Icon as typeof Clock;
          return (
            <div
              key={t as string}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-gold">
                <I className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{t as string}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d as string}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------- GALLERY ---------------- */

function Gallery() {
  const imgs = [
    {
      src: fleetAnini,
      cat: "Arunachal Tours",
      alt: "Fleet of Innovas in Anini, Arunachal Pradesh",
    },
    { src: tourKaziranga, cat: "Tour Packages", alt: "Kaziranga National Park" },
    { src: fleetMountains, cat: "Road Trips", alt: "Cabs lined up in the mountains" },
    { src: tourMajuli, cat: "Assam Tourism", alt: "Majuli Island paddy fields" },
    { src: fleetYard, cat: "Fleet", alt: "Dibrugarh Go Cabs fleet yard" },
    { src: tourMeghalaya, cat: "Tour Packages", alt: "Meghalaya living root bridge" },
    { src: tourSivasagar, cat: "Assam Tourism", alt: "Sivasagar Rang Ghar heritage" },
    { src: banner, cat: "Customer Trips", alt: "Dibrugarh Go Cabs banner" },
  ];
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section id="gallery" eyebrow="Gallery" title="On the road with Dibrugarh Go Cabs">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {imgs.map((im, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-muted"
          >
            <img
              src={im.src}
              alt={im.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <span className="absolute bottom-2 left-2 rounded-full bg-gold/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink opacity-0 transition group-hover:opacity-100">
              {im.cat}
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setActive(null)}
        >
          <img
            src={imgs[active].src}
            alt={imgs[active].alt}
            className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-glow"
          />
        </div>
      )}
    </Section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

function Testimonials() {
  const reviews = [
    ["Excellent cab service and professional drivers.", "Aman R."],
    ["Best taxi service in Dibrugarh — punctual and polite.", "Priya S."],
    ["Comfortable and safe travel experience for our family.", "Rohit K."],
    ["Highly recommended for Assam tours, great vehicles!", "Megha B."],
  ];

  return (
    <Section eyebrow="Testimonials" title="Loved by travellers across the Northeast" dark>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map(([q, n]) => (
          <figure
            key={n}
            className="rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur"
          >
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-3 text-sm text-background/90">"{q}"</blockquote>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold">
              — {n}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- QUICK BOOK ---------------- */

function QuickBook() {
  const { open } = useBooking();
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-ink p-8 text-background shadow-glow sm:p-12">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-fire opacity-30 blur-3xl" />
          <div className="relative grid gap-6 sm:grid-cols-[1.4fr_1fr] sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold">Quick Booking</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                Need a cab right now?
              </h2>
              <p className="mt-3 max-w-xl text-background/80">
                Get instant fare details and booking confirmation directly on WhatsApp. We're
                available 24×7 across Assam and Arunachal Pradesh.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <button
                onClick={() => open({ title: "Book Instantly" })}
                className="rounded-xl bg-gradient-fire px-7 py-4 text-base font-bold text-ink shadow-glow transition hover:scale-105"
              >
                Book Instantly
              </button>
              <a
                href={`tel:+${WA_NUMBER}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold"
              >
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
    message: "",
  });
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg = buildBookingMessage({
      name: form.name,
      phone: form.phone,
      pickup: form.pickup,
      destination: form.destination,
      date: form.date,
      requirement: form.message,
    });
    window.open(waLink(msg), "_blank");
  }

  return (
    <Section id="contact" eyebrow="Contact Us" title="Plan your next ride with us">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            [Phone, "Phone", PHONE_DISPLAY, `tel:+${WA_NUMBER}`],
            [MessageCircle, "WhatsApp", PHONE_DISPLAY, `https://wa.me/${WA_NUMBER}`],
            [Mail, "Email", EMAIL, `mailto:${EMAIL}`],
            [MapPin, "Address", ADDRESS],
            [Clock, "Business Hours", "24×7 Available"],
          ].map(([Icon, label, val, href]) => {
            const I = Icon as typeof Phone;
            const Body = (
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-fire text-ink">
                  <I className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-ember">
                    {label as string}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">{val as string}</p>
                </div>
              </div>
            );
            return href ? (
              <a
                key={label as string}
                href={href as string}
                target={(href as string).startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {Body}
              </a>
            ) : (
              <div key={label as string}>{Body}</div>
            );
          })}
        </div>

        <form
          onSubmit={submit}
          className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
        >
          <h3 className="font-display text-xl font-bold text-foreground">Send us a trip enquiry</h3>
          <p className="mt-1 text-sm text-muted-foreground">We'll respond instantly on WhatsApp.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Inp
              label="Name *"
              required
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
            />
            <Inp
              label="Phone *"
              required
              type="tel"
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
            />
            <Inp
              label="Pickup Location"
              value={form.pickup}
              onChange={(v) => setForm({ ...form, pickup: v })}
            />
            <Inp
              label="Destination"
              value={form.destination}
              onChange={(v) => setForm({ ...form, destination: v })}
            />
            <label className="block sm:col-span-2">
              <Label>Message</Label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your trip..."
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/30"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-xl bg-gradient-fire px-6 py-4 text-base font-bold text-ink shadow-glow transition hover:scale-[1.01]"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </Section>
  );
}

/* ---------------- LAYOUT ---------------- */

function Section({
  id,
  eyebrow,
  title,
  children,
  dark,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section id={id} className={dark ? "bg-ink text-background" : "bg-background"}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p
            className={`text-xs font-bold uppercase tracking-widest ${dark ? "text-gold" : "text-ember"}`}
          >
            {eyebrow}
          </p>
          <h2
            className={`mt-2 font-display text-3xl font-bold sm:text-4xl lg:text-[2.65rem] ${dark ? "text-background" : "text-foreground"}`}
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function BookCTA({ size = "md", label }: { size?: "md" | "lg"; label: string }) {
  const { open } = useBooking();
  const cls = size === "lg" ? "px-7 py-3.5 text-sm" : "px-5 py-2.5 text-sm";
  return (
    <button
      onClick={() => open({ title: label })}
      className={`rounded-xl bg-gradient-fire font-bold text-ink shadow-glow transition hover:scale-105 ${cls}`}
    >
      {label}
    </button>
  );
}
