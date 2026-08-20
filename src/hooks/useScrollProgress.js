import { useEffect, useRef } from "react";

/**
 * Tracks how far an element has been scrolled and exposes it as the
 * `--scroll-pct` custom property (0 -> 1) for the mobile progress rail.
 * Returns the ref to attach to the scrollable element.
 */
export default function useScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollHeight - el.clientHeight;
      // Guard against 0/0 -> NaN when the content is shorter than the box.
      const pct = max > 0 ? el.scrollTop / max : 0;
      el.style.setProperty("--scroll-pct", String(pct));
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return ref;
}
