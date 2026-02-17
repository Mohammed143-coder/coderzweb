"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight IntersectionObserver hook for scroll-triggered reveal animations.
 * Add the returned `ref` to a container element, and give child elements
 * the CSS class `reveal`, `reveal-left`, `reveal-right`, or `reveal-scale`.
 *
 * When they scroll into view, the class `visible` is added.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      // Make everything visible immediately
      el.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale",
      ).forEach((child) => {
        child.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
        ...options,
      },
    );

    // Initial observation
    const observeElements = (root: HTMLElement) => {
      const classes = [
        ".reveal",
        ".reveal-left",
        ".reveal-right",
        ".reveal-scale",
        ".reveal-3d",
      ];
      const selector = classes.join(", ");

      if (classes.some((c) => root.classList.contains(c.substring(1)))) {
        observer.observe(root);
      }
      root.querySelectorAll(selector).forEach((child) => {
        observer.observe(child);
      });
    };

    observeElements(el);

    // MutationObserver to handle dynamic content (e.g., Tab switching)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            observeElements(node);
          }
        });
      });
    });

    mutationObserver.observe(el, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [options]);

  return ref;
}
