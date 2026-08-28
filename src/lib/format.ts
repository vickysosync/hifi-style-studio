export function inr(value: number): string {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

export function formatDate(value: string | Date): string {
  const d = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

export function newOrderId(): string {
  return `HF-${100247 + Math.floor(Math.random() * 8000)}`;
}
