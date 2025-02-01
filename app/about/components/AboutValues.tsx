import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { ImLeaf } from "react-icons/im";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const AboutValues = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center my-20">
      <p className="flex gap-2 items-center rounded-xm shadow-sm border-neutral-200 border font-jet-mono text-neutral-500 rounded-3xl p-2 px-4">
        <ImLeaf className="" /> Our Values
      </p>
      <h2 className="font-medium text-4xl leading-[44px] text-center ">
        The Values That Shape Our Work and Purpose{" "}
      </h2>
      <div className="grid grid-cols-1 md:h-[220px] justify-center   text-xl  lg:text-2xl  max-w-[1150px] gap-6 md:grid-cols-3   mt-10  border-[#FEE9EA] border-[5px] rounded-3xl m-1 p-1">
        <div className="flex   ">
          <div className="mx-4   flex flex-col mt-6  ">
            <Image
              src="/home/camara.png"
              alt="problem2"
              width={34}
              height={34}
            ></Image>
            <p>
              We are passionately driven to explore new ideas and create
              meaningful products
            </p>
          </div>
          <Separator
            orientation="vertical"
            className=" w-[1px]  bg-[#FEE9EA] hidden md:block"
          />
        </div>

        <div className="flex  ">
          <div className="mx-4   mt-6 gap-4 flex flex-col   ">
            <Image
              src="/home/alert.png"
              alt="problem1"
              width={34}
              height={34}
            ></Image>
            <p>Our decisions always prioritize the end user.</p>
          </div>
          <Separator
            orientation="vertical"
            className=" w-[1px] bg-[#FEE9EA] hidden md:block"
          />
        </div>

        <div className="flex flex-col  gap-3  p-4 m-1  ">
          <Image
            src="/home/problem2.png"
            alt="problem3"
            width={34}
            height={34}
          ></Image>
          <p>We deeply understand our clients’ vision and expectations.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
