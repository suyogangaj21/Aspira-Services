import CallButtton from "@/components/CallButtton";
import FAQs from "@/components/FAQs";
import Services from "@/components/services";
import Solutions from "@/components/solutions";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ViewWork from "@/components/ViewWork";
import Image from "next/image";
import Link from "next/link";
import { FaMagic } from "react-icons/fa";
import {
  MdKeyboardArrowRight,
  MdOutlineReportGmailerrorred,
} from "react-icons/md";

export default function Home() {
  return (
    <main className="m-3 mx-4">
      <div className="flex justify-center items-center flex-col min-h-[80vh] ">
        <div className="flex justify-center px-4 items-center border shadow-md p-1 rounded-3xl text-sm font-normal">
          <h3 className="font-jet-mono  text-neutral-500 text-sm md:text-base">
            Your go-to Team for Websites & Apps
          </h3>
        </div>

        <h1 className="text-5xl md:text-6xl tracking-[-2px] max-w-[800px] text-center sm:text-6xl font-medium mt-2 md:leading-[68px] flex flex-col ">
          We turn your ideas into unqiue software products
        </h1>
        <div>
          <p className="text-neutral-600 text-center text-sm md:text-base font-light mt-4  max-w-[480px] ">
            From design and development to deployment, we create custom websites
            and apps that perfectly align with your vision.
          </p>
        </div>
        <div className="flex gap-4 mt-8">
          <div className="flex flex-col gap-4 ">
            <CallButtton />
          </div>
          <Button className="bg-white rounded-lg shadow-lg text-black hover:bg-white hover:text-neutral-700">
            <Link href="/work">View our work</Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center my-20  justify-center h-[300px]">
        <h2 className="font-medium text-4xl leading-[44px] text-center">
          Certified by Industry Leaders You Trust
        </h2>
        <div className="sm:flex gap-14 flex justify-center mb-24  items-center flex-wrap">
          <Image
            src="/companyLogo/google.png"
            alt="google"
            width={54}
            height={55}
          />
          <Image
            src="/companyLogo/android.png"
            alt="android"
            width={60}
            height={60}
          />
          <Image src="/companyLogo/aws.png" alt="aws" width={89} height={54} />
          <Image
            src="/companyLogo/meta-icon.png"
            alt="Meta"
            width={80}
            height={54}
          />
          <Image
            src="/companyLogo/googlecloud.png"
            alt="googlecloud"
            width={68}
            height={54}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center mt-20">
        <p className="flex gap-2 items-center rounded-xm shadow-sm border-neutral-200 border font-jet-mono text-neutral-500 rounded-3xl p-2 px-4">
          <MdOutlineReportGmailerrorred className="text-red-700 text-sm md:text-base" />{" "}
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
        <p className="flex gap-2 items-center rounded-xm text-sm md:text-base shadow-sm border-neutral-200 border font-jet-mono text-neutral-500 rounded-3xl p-2 px-4">
          <FaMagic className="" /> Our Solutions
        </p>
        <h2 className="font-medium text-3xl md:text-4xl leading-[44px] text-center max-w-[600px]">
          Effective Solutions to Overcome Your Digital Roadblocks{" "}
        </h2>
        <Solutions />
      </div>
      <ViewWork />
      <Services />
      <FAQs />
    </main>
  );
}
