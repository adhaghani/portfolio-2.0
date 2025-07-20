"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "fixed bottom-7 left-7 z-50 rounded-full opacity-0 transition-all duration-300",
        isVisible && "opacity-100"
      )}
      onClick={scrollToTop}
    >
      <ArrowUpIcon className="h-4 w-4" />
    </Button>
  );
}
