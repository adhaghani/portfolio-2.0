"use client";

import { useEffect, useState } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Create the media query
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Initial check
    setIsMobile(mediaQuery.matches);

    // Create the event listener function
    const handleResize = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the event listener
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return isMobile;
}
