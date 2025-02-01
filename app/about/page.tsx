import {
  AboutHeader,
  AboutValues,
  AboutLeads,
  AboutFooter,
} from "./components";

const AboutPage = () => {
  return (
    <>
      <main className="md:mt-16 mt-10 flex flex-col items-center justify-center md:gap-32 gap-20">
        <AboutHeader />
        <hr className="w-full border-t-[1px] border-[#E6E6E6]" />
        {/* <AboutValues /> */}
        <AboutLeads />
        <hr className="w-full border-t-[1px] border-[#E6E6E6]" />
        <AboutFooter />
      </main>
    </>
  );
};

export default AboutPage;
