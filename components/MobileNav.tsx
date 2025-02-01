"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CallButtton from "./CallButtton";
import { Button } from "./ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";

// Menu items.
const items = [
  {
    title: "Services",
    url: "/",
    icon: Home,
  },
  {
    title: "Work",
    url: "/work",
    icon: Inbox,
  },
  {
    title: "About",
    url: "/about",
    icon: Calendar,
  },
];

export function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  const pathname = usePathname();
  return (
    <Sidebar collapsible="offcanvas" side="right">
      <SidebarContent className="mt-10 ">
        <SidebarGroup>
          <SidebarGroupContent className="">
            <SidebarMenu className="flex flex-col gap-5">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={
                    pathname === item.url ? "bg-neutral-300 rounded-xl " : ""
                  }
                >
                  <SidebarMenuButton asChild className="text-lg font-medium ">
                    <a href={item.url} className="flex gap-4">
                      <item.icon className="h-7 w-7" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Link href="https://cal.com/vineet-babar" target="blank">
          <Button className="rounded-lg text-base font-normal bg-white text-black hover:bg-white hover:text-black shadow-xl">
            Book a call Now
            <MdKeyboardArrowRight width={20} height={20} />
          </Button>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
