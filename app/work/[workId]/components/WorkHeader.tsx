import Image from "next/image";
import Link from "next/link";
import LogoComponent from "./LogoComponent";
import { BiRightArrow } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

type WorkHeaderProps = {
  title: string;
  desc: string;
  tags: Array<string>;
  author: string;
  tech: Array<string>;
  timePeriod: string;
  link: string;
};

const WorkHeader = ({
  title,
  desc,
  tags,
  author,
  tech,
  timePeriod,
  link,
}: WorkHeaderProps) => {
  const technologies = tech.join(", ");
  return (
    <div className="flex flex-col md:gap-16 gap-8 items-start justify-center">
      <div className="flex justify-between w-full">
        <Link href={`/work`}>
          <div className="flex md:gap-[6px] gap-1 justify-center items-center py-2 md:pl-4 pl-2 md:pr-5 pr-3 rounded-xl shadow-sm border border-gray-[#d8d8d8]">
            <div>
              <Image
                src={"/left-arrow.png"}
                alt="left-arrow"
                height={16}
                width={16}
              />
            </div>
            <div>
              <p className="text-base font-medium">Back to projects</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col md:gap-5 gap-3 md:px-0 px-2 items-start justify-center">
        <div className="md:text-[46px] text-[32px] leading-tight font-medium">
          <p>{title}</p>
        </div>
        <div className="md:w-3/4 w-full">
          <p className="text-[#515151] md:text-xl text-lg leading-snug">
            {desc}
          </p>
        </div>
        <div className="flex gap-3 items-center justify-start flex-wrap">
          {tags.map((t, i) => {
            return (
              <div
                key={i}
                className="py-1 px-3 bg-[#f2f2f2] rounded-full flex justify-center items-center"
              >
                <p className="text-[#595959] text-sm">{t}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between md:items-center items-start md:gap-0 gap-6 w-full md:pt-8 pt-0">
        <LogoComponent
          Imgsrc={`/gg_profile.svg`}
          title="Project By"
          content={author}
        />
        <LogoComponent
          Imgsrc={`/technology.svg`}
          title="Technologies"
          content={technologies}
        />
        <LogoComponent
          Imgsrc={`/outline_time.svg`}
          title="Time Period"
          content={timePeriod}
        />
      </div>
    </div>
  );
};

export default WorkHeader;
