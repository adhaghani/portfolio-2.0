"use client";

import { DockDemo } from "./header-dock";
import HeaderMobile from "./header-mobile";
import { useIsMobile } from "@/hooks/use-is-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  return (
    <header className="fixed top-0 z-50 w-full">
      {isMobile ? <HeaderMobile /> : <DockDemo />}
    </header>
  );
};

export default Header;
