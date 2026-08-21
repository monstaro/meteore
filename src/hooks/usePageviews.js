import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Reports client-side navigations to GoatCounter.
 *
 * count.js records a pageview when it loads and never again, so in a router
 * driven app every route after the landing page is invisible. This reports
 * each one by hand.
 *
 * The initial load is deliberately skipped - count.js already counted it, and
 * reporting it here too would double it.
 */
export default function usePageviews() {
  const { pathname, search, hash } = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    // The script is async and may not have landed yet; a dropped pageview in
    // the first moments is better than a crash.
    window.goatcounter?.count?.({ path: pathname + search + hash });
  }, [pathname, search, hash]);
}
