import React from "react";
import { Button } from "./ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const ViewWork = () => {
  return (
    <div className="flex bg-[#F7F7F7] flex-col md:flex-row justify-around items-center mt-20 lg:mx-32 md:mx-24 sm:mx-16 mx-4 p-2">
      <div className="flex flex-col justify-start items-start gap-4 p-10 ">
        <h2 className="text-xl sm:text-[24px] leading-[24px] font-medium text-left">
          Want to see our previous work?{" "}
        </h2>
        <p className="sm:text-lg text-base text-neutral-500">
          Explore our diverse portfolio of design and development projects.
        </p>
      </div>
      <div className="p-1 md:p-5">
        <Button className="bg-white shadow-lg text-base sm:text-lg text-black hover:bg-white hover:text-neutral-700">
          <Link href={"/work"} className="flex justify-center items-center">
            View Our Work <MdKeyboardArrowRight width={20} height={20} />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ViewWork;
