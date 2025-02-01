import Image from "next/image";
import LeadCard from "./LeadCard";
import { teamLeadInfo } from "@/utils";

const AboutLeads = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
      <div className="flex flex-col justify-center items-center self-stretch gap-3 md:gap-5">
        <div className="who-we-are">
          <div className="rounded-xl border-[#e3e3e3] border border-b-2 px-2 py-[2px] md:px-3 md:py-1 text-sm text-center flex gap-2 items-center justify-center shadow-sm">
            <Image
              height={12}
              width={12}
              className="md:w-4 md:h-4"
              src={`/team-leads-badge.svg`}
              alt="badge"
            />
            <p>Team Leads</p>
          </div>
        </div>
        <div className="about-heading w-[90%] md:w-[800px]">
          <h1 className="text-center text-[20px] md:text-[26px] font-semibold leading-[2rem] md:leading-[3rem]">
            Your Dedicated Team of Specialists in Every Field
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-8 md:gap-x-8 md:gap-y-16 w-10/12 md:w-8/12">
        {teamLeadInfo.map((l) => (
          <LeadCard
            key={l.id}
            name={l.name}
            title={l.title}
            desc={l.desc}
            linkedIn={l.linkedInSrc}
            imageSrc={l.profilePicSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutLeads;
