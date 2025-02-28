import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Navlinks from "./nav-links";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "./ui/sidebar";
import { AppSidebar } from "./MobileNav";
import CallButtton from "./CallButtton";

const Nav = () => {
  return (
    <div className="sticky flex m-1 md:px-28  p-2 top-0 z-50  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60  justify-between items-center font-onest-sans font-medium h-20">
      <div className="flex items-center justify-center gap-3">
        <Link href={"/"} className="flex gap-3 justify-center items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={36}
            height={36}
            className=" "
          />
          <span className="text-lg">Aspira</span>
        </Link>
      </div>
      <Navlinks />
      {/* <div className="hidden md:block">
        <Link href="https://cal.com/vineet-babar" target="blank">
          <Button className="bg-white text-black  hover:bg-white hover:text-black  transition-colors p-2 px-3 shadow-md">
            Book a call
            <MdKeyboardArrowRight width={20} height={20} />
          </Button>
        </Link>
      </div> */}
      <div className="hidden md:block">
        <CallButtton />
      </div>
      <SidebarTrigger className="md:hidden" />
    </div>
  );
};

export default Nav;
