import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";

const CallButtton = () => {
  return (
    <div>
      <Link href="https://cal.com/vineet-babar" target="blank">
        <Button className="rounded-xl text-sm md:text-base py-2 px-4 bg-[#272A2E] shadow-xl tracking-[-0.05px] leading-6">
          Book a call Now
          <MdKeyboardArrowRight width={20} height={20} />
        </Button>
      </Link>
    </div>
  );
};

export default CallButtton;
