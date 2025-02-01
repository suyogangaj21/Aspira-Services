import type { Metadata } from "next";
import { Onest, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/MobileNav";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const jetBrains_Mono = JetBrains_Mono({
  variable: "--font-jet-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aspira Services",
  description: "Aspira Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${onest.variable} ${jetBrains_Mono.variable} antialiased`}
      >
        <SidebarProvider open={false}>
          <AppSidebar />
          <div className="relative flex w-full flex-col">
            <Nav></Nav>
            {children}
            <Footer />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
