import {
  AboutHeader,
  AboutValues,
  AboutLeads,
  AboutFooter,
} from "./components";
import PreviousWork from "../../components/previouswork";

const AboutPage = () => {
  return (
    <>
      <main className="md:mt-16 mt-10 flex flex-col items-center justify-center md:gap-10 gap-8">
        <AboutHeader />
        <hr className="w-full border-t-[1px] border-[#E6E6E6]" />
        {/* <AboutValues /> */}
        <AboutLeads />
        <hr className="w-full border-t-[1px] border-[#E6E6E6]" />
        <div className="flex items-center w-full justify-center gap-2 ">
          <PreviousWork />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
