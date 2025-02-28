import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navlinks from "./nav-links";

import CallButtton from "./CallButtton";
import { IoMdMail } from "react-icons/io";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className="sticky  flex-col  h-full md:flex-row px-4 md:px-28 my-10 p-2 top-0 z-50  border-y bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between items-center font-onest-sans font-medium ">
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
      <div className="flex items-center justify-between w-full px-10 max-w-[290px]">
        <Link href="https://www.linkedin.com/company/aspira.services/">
          LinkedIn
        </Link>
        <Link href="https://x.com/Aspira_services">X</Link>
        <Link href="https://x.com/Aspira_services">Instagram</Link>
      </div>
      <div className="flex items-center justify-center gap-5 flex-col md:flex-row">
        <Link
          href="mailto:vineetbabar08@gmail.com"
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
    </div>
  );
};

export default Footer;
