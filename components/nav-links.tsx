"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlinks = () => {
  const pathName = usePathname();
  const links = [
    { href: "/", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
  ];
  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-muted-foreground hover:text-foreground transition-colors",
            pathName === link.href && "text-foreground font-medium"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navlinks;
