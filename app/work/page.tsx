import ViewWork from "@/components/ViewWork";
import { HeroWork, Projects } from "./components";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";

const WorkPage = () => {
  return (
    <>
      <main className="md:mt-16 mt-10 flex flex-col items-center justify-center md:gap-14 gap-10">
        <HeroWork />
        <Projects />
      </main>
      <div className="flex bg-[#F7F7F7] flex-col md:flex-row justify-around items-center mt-20 lg:mx-32 md:mx-24 sm:mx-16 mx-4 p-2">
        <div className="flex flex-col justify-start items-start gap-4 p-10 ">
          <h2 className="text-xl sm:text-[24px] leading-[24px] font-medium text-left">
            Your Project Awaits, Get Started Now.{" "}
          </h2>
          <p className="sm:text-lg text-base text-neutral-500">
            We’re here to help brainstorm and turn your ideas into successful
            products.{" "}
          </p>
        </div>
        <div className="p-1 md:p-5">
          <Button className="bg-white shadow-lg text-base sm:text-lg text-black hover:bg-white hover:text-neutral-700">
            View Our Services <MdKeyboardArrowRight width={20} height={20} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default WorkPage;
