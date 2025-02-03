import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { cn } from "@/lib/utils";

// export const metadata: Metadata = {
//   title: "Gazal Isiaq · Fullstack Software Developer",
//   description: "Digital Solutionist",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className)}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
        > */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
