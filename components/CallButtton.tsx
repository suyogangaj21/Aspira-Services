import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";

const CallButtton = () => {
  return (
    <div>
      <Link href="https://cal.com/vineet-babar" target="blank">
        <Button className="rounded-lg text-sm md:text-base font-normal bg-gray-950 shadow-xl">
          Book a call Now
          <MdKeyboardArrowRight width={20} height={20} />
        </Button>
      </Link>
    </div>
  );
};

export default CallButtton;
