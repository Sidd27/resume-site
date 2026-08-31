import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// ponytail: regex split, not a parser. Matches "~23 → ~75", "6s → 300ms", "7% → 22%".
const METRIC = /(~?\d[\d.]*(?:%|ms|s|x)?\s*(?:→|->)\s*~?\d[\d.]*(?:%|ms|s|x)?)/g;

/** Splits text into plain and metric segments so deltas can be set in mono. */
export function splitMetrics(text: string): { text: string; metric: boolean }[] {
  // split() with one capture group puts the matches at the odd indices.
  return text
    .split(METRIC)
    .map((part, i) => ({ text: part, metric: i % 2 === 1 }))
    .filter((part) => part.text !== "");
}
