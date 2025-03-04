import CallButtton from "@/components/CallButtton";
import FAQs from "@/components/FAQs";
import PreviousWork from "@/components/previouswork";
import Services from "@/components/services";
import Solutions from "@/components/solutions";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ViewWorkButton from "@/components/viewworkbutton";
import Image from "next/image";
import Link from "next/link";
import { FaMagic } from "react-icons/fa";
import {
  MdKeyboardArrowRight,
  MdOutlineReportGmailerrorred,
} from "react-icons/md";
import CustomButton from "./about/components/CustomButton";

export default function Home() {
  return (
    <main className="md:m-3 md:mx-4">
      <div className="flex justify-center items-center flex-col min-h-[50vh] md:min-h-[70vh] md:mt-10 ">
        <div className="flex justify-center px-4 items-center border shadow-md p-1 rounded-3xl text-sm font-normal">
          <h3 className="font-jet-mono  text-neutral-500 text-sm md:text-base">
            Your go-to Team for Websites & Apps
          </h3>
        </div>

        <h1 className="text-4xl md:text-6xl tracking-[-2px]  text-center  font-medium mt-4 md:leading-[68px] flex flex-col ">
          <span>We turn your ideas</span> <span>into unqiue software</span>{" "}
          products
        </h1>
        <div>
          <p className="text-neutral-600 text-center text-sm md:text-base font-light mt-4 px-7 md:px-2 max-w-[480px] ">
            From design and development to deployment, we create custom websites
            and apps that perfectly align with your vision.
          </p>
        </div>
        <div className="flex gap-4 mt-12 relative">
          <div className="flex flex-col gap-4 ">
            <CallButtton />
          </div>
          <div className="flex justify-start">
            <ViewWorkButton />
          </div>
          <span className="absolute -bottom-7 text-neutral-400 text-sm">
            Response within 12 hours
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center my-8 md:my-20 justify-center h-[300px]">
        <h2 className="font-medium text-3xl md:text-4xl  leading-[44px] text-center">
          Certified by Industry Leaders You Trust
        </h2>
        <div className="sm:flex gap-7 md:gap-14 flex justify-center  items-center flex-wrap">
          <Image
            src="/companyLogo/google.png"
            alt="google"
            className="w-[28px] h-[28px] md:w-[50px] md:h-[50px]"
            width={54}
            height={55}
          />
          <Image
            src="/companyLogo/android.png"
            alt="android"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
            width={60}
            height={60}
          />
          <Image
            src="/companyLogo/aws.png"
            alt=" amazon aws"
            className="w-[46px] h-[30px] md:w-[89px] md:h-[54px]"
            width={89}
            height={54}
          />
          <Image
            src="/companyLogo/meta-icon.png"
            alt="Meta"
            className="w-[46px] h-[30px] md:w-[80px] md:h-[54px]"
            width={80}
            height={54}
          />
          <Image
            src="/companyLogo/googlecloud.png"
            alt="googlecloud"
            className="w-[34px] h-[28px] md:w-[68px] md:h-[54px]"
            width={68}
            height={54}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center mt-20 mx-3">
        <p className="flex gap-2 items-center text-xs md:text-base rounded-xm shadow-sm border-neutral-200 border font-jet-mono text-neutral-500 rounded-3xl p-2 px-4">
          <MdOutlineReportGmailerrorred className="text-red-700 text-xs md:text-base" />{" "}
          The Problems
        </p>
        <h2 className="font-medium text-3xl md:text-4xl leading-[44px] text-center max-w-[600px] ">
          We provide solutions for Your Most Pressing Digital Issues
        </h2>
        <div className="grid grid-cols-1 md:h-[220px] justify-center   text-xl  lg:text-2xl  max-w-[1150px] gap-6 md:grid-cols-3   mt-10  border-[#FEE9EA] border-[5px] rounded-3xl m-1 p-1">
          <div className="flex   ">
            <div className="mx-4  mt-6 flex flex-col   gap-4">
              <Image
                src="/home/problem2.png"
                alt="problem2"
                width={34}
                height={34}
              ></Image>
              <p>Need visually stunning and user-friendly websites and apps</p>
            </div>
            <Separator
              orientation="vertical"
              className="w-[1px]  bg-[#FEE9EA] hidden md:block"
            />
          </div>

          <div className="flex ">
            <div className="mx-4  mt-6 gap-4 flex flex-col m-1  ">
              <Image
                src="/home/problem1.png"
                alt="problem1"
                width={34}
                height={34}
              ></Image>
              <p>Looking for a skilled team to outsource your projects</p>
            </div>
            <Separator
              orientation="vertical"
              className="w-[1px] bg-[#FEE9EA] hidden md:block"
            />
          </div>

          <div className="flex flex-col  gap-3  p-4 m-1  ">
            <Image
              src="/home/problem3.png"
              alt="problem3"
              width={34}
              height={34}
            ></Image>
            <p>Want end-to-end support from development to deployment</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center mt-32">
        <p className="flex gap-2 items-center rounded-xm text-xs md:text-base shadow-sm border-neutral-200 border font-jet-mono text-neutral-500 rounded-3xl p-2 px-4">
          <FaMagic className="" /> Our Solutions
        </p>
        <h2 className="font-medium text-3xl md:text-4xl leading-[44px] text-center max-w-[600px]">
          Effective Solutions to Overcome Your Digital Roadblocks{" "}
        </h2>
        <Solutions />
      </div>
      <div className="flex w-full  justify-center items-center mt-10">
        <PreviousWork />
      </div>
      <Services />
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full mx-3 md:mx-32 bg-[#F7F7F7] rounded-[1.25rem] p-6 md:p-10 mb-10">
          <div className="flex flex-col items-center md:items-start justify-center w-full gap-3">
            <p className="text-3xl md:text-4xl font-medium text-center md:text-left">
              Have unique or custom requests? We are up for it 👍
            </p>

            <p className="font-light text-sm md:text-base text-center md:text-left">
              Feel free to reach out – we’re here to help brainstorm and turn
              your ideas into successful products.
            </p>
          </div>

          <div className="mt-4 md:mt-0  md:flex md:justify-end">
            <CustomButton
              btnText="Contact Us"
              bgColor="bg-white"
              linkSrc="/work"
              textColor="text-[#292929]"
              targetTab="_self"
            />
          </div>
        </div>
      </div>
      <FAQs />
    </main>
  );
}
