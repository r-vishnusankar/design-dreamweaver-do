"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/**
 * Syncs ScrollTrigger with Lenis when smooth scroll is active.
 * When lenis is null (mobile / native scroll), only refreshes ScrollTrigger.
 * Does NOT kill section-owned triggers — each component owns its own cleanup.
 */
export function useGsapLenis(lenis: Lenis | null) {
  useEffect(() => {
    if (!lenis) {
      ScrollTrigger.refresh();
      return;
    }

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value?: number) {
        if (arguments.length && value !== undefined && Math.abs(lenis.scroll - value) > 0.5) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.documentElement.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.defaults({ scroller: document.documentElement });

    // Drive Lenis from the GSAP ticker so ScrollTrigger and smooth scroll share one frame loop.
    const tickerFn = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(tickerFn);
      gsap.ticker.lagSmoothing(500, 33);

      // Restore native scroll proxy so leftover triggers don't read a dead Lenis instance.
      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value?: number) {
          if (arguments.length && value !== undefined) {
            document.documentElement.scrollTop = value;
          }
          return document.documentElement.scrollTop;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });
      ScrollTrigger.refresh();
    };
  }, [lenis]);
}
