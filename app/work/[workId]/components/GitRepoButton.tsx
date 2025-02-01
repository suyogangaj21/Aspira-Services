import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const GitRepoButton = ({ link }: { link: string }) => {
  return (
    <div className="flex gap-5 justify-between">
      <div className="flex md:gap-[6px] gap-1 justify-center items-center py-2 md:pl-4 pl-2 md:pr-5 pr-3 rounded-xl shadow-sm border border-gray-[#d8d8d8]">
        <Link href="/work" className="flex gap-2">
          <Image
            src={"/left-arrow.png"}
            alt="left-arrow"
            height={16}
            width={16}
          />

          <p className="text-base font-medium">Back to projects</p>
        </Link>
      </div>
      <Link href={link} className="" target="blank">
        <div className="flex md:gap-[6px] gap-1 justify-center bg-black text-white items-center py-2 md:pl-4 pl-2 md:pr-5 pr-3 rounded-xl shadow-sm border border-gray-[#d8d8d8]">
          <p className="text-base font-medium">View GitHub Repository</p>
          <MdKeyboardArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default GitRepoButton;
