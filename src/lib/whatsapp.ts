export const WA_NUMBER = "918638252887";
export const PHONE_DISPLAY = "+91 8638252887";
export const EMAIL = "dibrugarhgocabs@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/dibrugarhgocabs";
export const ADDRESS = "Bokul Majgaon, Dibrugarh, Assam – 786010";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type BookingPayload = {
  pickup?: string;
  destination?: string;
  journeyType?: string;
  date?: string;
  time?: string;
  passengers?: string | number;
  name?: string;
  phone?: string;
  requirement?: string;
  subject?: string; // e.g. "Tour: Majuli Island" or "Vehicle: Innova Crysta"
};

export function buildBookingMessage(p: BookingPayload) {
  const lines: string[] = [];
  lines.push("Hi Dibrugarh Go Cabs 👋");
  lines.push("");
  lines.push(p.subject ? `I would like to enquire about: ${p.subject}` : "I would like to book a cab.");
  lines.push("");
  if (p.pickup) lines.push(`Pickup Location:\n${p.pickup}`);
  if (p.destination) lines.push(`Destination:\n${p.destination}`);
  if (p.journeyType) lines.push(`Journey Type:\n${p.journeyType}`);
  if (p.date) lines.push(`Travel Date:\n${p.date}`);
  if (p.time) lines.push(`Travel Time:\n${p.time}`);
  if (p.passengers) lines.push(`Passengers:\n${p.passengers}`);
  if (p.name) lines.push(`Customer Name:\n${p.name}`);
  if (p.phone) lines.push(`Phone Number:\n${p.phone}`);
  if (p.requirement) lines.push(`Special Requirement:\n${p.requirement}`);
  lines.push("");
  lines.push("Please share fare details and cab availability.");
  lines.push("");
  lines.push("Thank You.");
  return lines.filter((l, i, a) => !(l === "" && a[i - 1] === "")).join("\n");
}
