import PreviousWork from "@/components/previouswork";
import { HeroWork, Projects } from "./components";
import { Button } from "@/components/ui/button";
import ViewWorkButton from "@/components/viewworkbutton";
import { MdKeyboardArrowRight } from "react-icons/md";

const WorkPage = () => {
  return (
    <>
      <main className="md:mt-16 mt-10 flex flex-col items-center justify-center md:gap-14 gap-10">
        <HeroWork />
        <Projects />
      </main>
      <div className="flex items-center justify-center gap-2 mt-10">
        <PreviousWork
          title="Your Project Awaits, Get Started Now."
          description="We’re here to help brainstorm and turn your ideas into successful products."
          btnText="View Services"
          linkSrc="/"
        />
      </div>
    </>
  );
};

export default WorkPage;
