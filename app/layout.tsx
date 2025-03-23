import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "300", "200", "800"],
  variable: "--font-poppins",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Adhaghani - Portolio",
  description:
    "Adhaghani's personal portfolio website, a computer science student at UiTM."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased w-full mx-auto overflow-x-hidden selection:bg-primary/50 selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Header />
          <main className="md:px-4 max-w-6xl mx-auto overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <GridPattern
            width={30}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            className={cn(
              "fixed -z-10 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
            )}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
