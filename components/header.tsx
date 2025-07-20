"use client";

import { DockDemo } from "./header-dock";
import HeaderMobile from "./header-mobile";
import { useIsMobile } from "@/hooks/use-is-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  return (
    <header className="fixed z-50 w-full max-w-screen mx-auto px-2 md:px-4 pointer-events-none">
      {isMobile ? <HeaderMobile /> : <DockDemo />}
    </header>
  );
};

export default Header;
