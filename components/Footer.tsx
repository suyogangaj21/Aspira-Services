import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navlinks from "./nav-links";

import CallButtton from "./CallButtton";
import { IoMdMail } from "react-icons/io";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="sticky gap-4 flex-col  h-full md:flex-row px-4 md:px-28 my-10 p-2 top-0 z-50   bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between items-center font-onest-sans font-medium ">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/logo.png"
            alt="logo"
            width={36}
            height={36}
            className=" "
          />
          <span>Aspira</span>
        </div>
        <div className="flex items-center justify-between  w-full px-10 max-w-[290px]">
          <Link href="https://www.linkedin.com/company/aspira.services/">
            LinkedIn
          </Link>

          <Link href="https://www.instagram.com/aspira.services/">
            Instagram
          </Link>
          <Link href="https://x.com/Aspira_services">X</Link>
        </div>
        <div className="flex h-[1px] w-[260px]   md:hidden  bg-[#E6E6E6] my-5"></div>
        <div className="flex items-center justify-center gap-5 flex-col md:flex-row">
          <Link
            href="mailto:aspira.services.work@gmail.com"
            className="flex  items-center gap-3"
          >
            <IoMdMail />
            <p>aspira.services.work@gmail.com</p>
          </Link>
          <Separator
            orientation="vertical"
            className="h-6 w-[2px] hidden md:flex"
          />
          <CallButtton />
        </div>
        <div className="flex h-[1px] w-full  mx-10   md:hidden  bg-[#E6E6E6] my-1"></div>
      </div>
      <span className="text-[#ABABAB] text-sm">
        Aspira.services 2025. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
