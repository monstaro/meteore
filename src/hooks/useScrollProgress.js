import { useEffect, useRef } from "react";

/**
 * Tracks how far an element has been scrolled and publishes two things on it:
 *
 *  - `--scroll-pct` (0 -> 1), read by the mobile progress rail.
 *  - `data-scrollable`, read by the bottom fade. The fade has to be off when
 *    everything already fits, or a short entry looks cropped for no reason.
 *
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
      // > 1 rather than > 0: sub-pixel rounding otherwise reports a scrollable
      // box that cannot actually move.
      el.dataset.scrollable = max > 1 ? "true" : "false";
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    // Images finish loading after mount and change scrollHeight. `load` does
    // not bubble, but it does reach a capture-phase listener on the container.
    el.addEventListener("load", update, true);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      el.removeEventListener("load", update, true);
    };
  }, []);

  return ref;
}
