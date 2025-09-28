import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

// Reusable navigation helper for fragment anchors and smooth scrolling.
// Usage: handleRedirect(event, href, { onNavigate: () => { /* e.g. close menu */ } })
export function handleRedirect(e, href, { onNavigate } = {}) {
  // Allow modifier keys to behave normally (open in new tab etc.)
  if (e && (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)) return;
  if (e && typeof e.preventDefault === "function") e.preventDefault();

  const id = href?.startsWith("#") ? href.slice(1) : href;
  if (!id) return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    try {
      // fallback: update hash without triggering router navigation if possible
      window.location.hash = `#${id}`;
    } catch {
      // no-op
    }
  }

  if (typeof onNavigate === "function") {
    try {
      onNavigate();
    } catch {
      // ignore errors in callback
    }
  }
}
