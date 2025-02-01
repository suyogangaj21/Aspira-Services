"use client";

import { BiSolidBadgeDollar } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { MdKeyboardArrowRight, MdVerified } from "react-icons/md";
import { Button } from "./ui/button";
import CallButtton from "./CallButtton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 gap-4 mx-4 lg:mx-32 m-12">
      <p className="flex gap-2 items-center rounded-xm shadow-sm border-neutral-200 border font-jet-mono text-neutral-500 rounded-3xl p-2 px-4">
        <BiSolidBadgeDollar className="" /> Pricing
      </p>
      <h2 className="font-medium text-4xl leading-[44px] text-center max-w-[600px]">
        Website & App Packages Designed to Suit Your Budget and Goals{" "}
      </h2>
      <div className="flex flex-col gap-6 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  md:px-16 rounded-3xl py-7 md:m-5 m-1 p-2  border-[#EEEEEE] border">
          <div className="flex flex-col gap-4">
            <p className="flex gap-1 max-w-fit text-xs items-center rounded-xm shadow-sm border-neutral-200 border font-jet-mono text-neutral-500 rounded-3xl p-2 px-3">
              <BsFire width={16} height={16} className="" />
              Web Design + App Design
            </p>
            <h2 className="font-medium text-4xl ">UI/UX Design</h2>
            <h4 className="text-lg ">
              For startups that want to quickly explore a new visual direction
              on their website.
            </h4>
            <div className="text-base leading-5 flex gap-4 flex-col my-7">
              <p className="flex gap-2 ">
                <MdVerified
                  width={16}
                  height={16}
                  className="text-gray-600  mt-1"
                />
                Editable Figma, Sketch, or Adobe XD files for development
                handoff.
              </p>
              <p className="flex gap-2 ">
                <MdVerified
                  width={16}
                  height={16}
                  className="text-gray-600  mt-1"
                />
                Complete UI kit and style guide for design consistency.
              </p>
              <p className="flex gap-2 ">
                <MdVerified
                  width={16}
                  height={16}
                  className="text-gray-600  mt-1"
                />
                Interactive prototypes to showcase app or website functionality.
              </p>
              <p className="flex gap-2 ">
                <MdVerified
                  width={16}
                  height={16}
                  className="text-gray-600  mt-1"
                />
                Responsive design that adapts to all screen sizes.
              </p>
              <p className="flex gap-2 ">
                <MdVerified
                  width={16}
                  height={16}
                  className="text-gray-600  mt-1"
                />
                Up to 3 initial design concepts offering variety.
              </p>
            </div>
            <CallButtton />
          </div>
          <div className="w-[350px] h-[300px] sm:w-[440px] sm:h-[440px] flex justify-center items-center">
            <DotLottieReact
              src="https://lottie.host/4e5184d2-a25c-4a97-aa09-d7c8ffc518ba/J7d0ewr1R4.lottie"
              loop
              autoplay
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  md:px-16 rounded-3xl py-7 md:m-5 m-1 p-2  border-[#EEEEEE] border">
          <div className="flex flex-col gap-4">
            <p className="flex gap-1 max-w-fit text-xs items-center rounded-xm shadow-sm border-neutral-200 border font-jet-mono text-neutral-500 rounded-3xl p-2 px-3">
              <BsFire width={16} height={16} className="" />
              Web Design + App Design
            </p>
            <h2 className="font-medium text-4xl ">Website Development</h2>
            <h4 className="text-lg ">
              For startups that want to quickly explore a new visual direction
              on their website.
            </h4>
            <div className="text-base leading-5 flex gap-4 flex-col my-7">
              <p className="flex gap-2 ">
                <MdVerified
                  width={16}
                  height={16}
                  className="text-gray-600  mt-1"
                />
                Full-stack web development using Next.js & modern backend tech.
              </p>
              <p className="flex gap-2 ">
                <MdVerified
                  width={16}
                  height={16}
                  className="text-gray-600  mt-1"
                />
                Scalable cloud-native solutions using AWS and GCP integration.{" "}
              </p>
              <p className="flex gap-2 ">
                <MdVerified
                  width={16}
                  height={16}
                  className="text-gray-600  mt-1"
                />
                CI/CD pipeline deployment with Jenkins, GitHub actions and
                Ansible.{" "}
              </p>
              <p className="flex gap-2 ">
                <MdVerified
                  width={16}
                  height={16}
                  className="text-gray-600  mt-1"
                />
                Tailored web and app development with modern UI/UX.{" "}
              </p>
              <p className="flex gap-2 ">
                <MdVerified
                  width={16}
                  height={16}
                  className="text-gray-600  mt-1"
                />
                DevOps automation with Docker, Kubernetes, and Terraform.{" "}
              </p>
            </div>
            <CallButtton />
          </div>
          <div className="w-[350px] h-[300px] sm:w-[440px] sm:h-[440px] flex justify-center items-center">
            <DotLottieReact
              src="https://lottie.host/ad0da6c5-a8e5-4fab-9255-8e9a7ebfb703/2vdE4hg2WP.lottie"
              loop
              autoplay
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  md:px-16 rounded-3xl py-7 md:m-5 m-1 p-2  border-[#EEEEEE] border">
          <div className="flex flex-col gap-4">
            <p className="flex gap-1 max-w-fit text-xs items-center rounded-xm shadow-sm border-neutral-200 border font-jet-mono text-neutral-500 rounded-3xl p-2 px-3">
              <BsFire width={16} height={16} className="" />
              Web Design + App Design
            </p>
            <h2 className="font-medium text-4xl ">App Development</h2>
            <h4 className="text-lg ">
              For startups that want to quickly explore a new visual direction
              on their website.
            </h4>
            <div className="text-base leading-5 flex gap-4 flex-col my-7">
              <p className="flex gap-2 ">
                <MdVerified
                  width={16}
                  height={16}
                  className="text-gray-600  mt-1"
                />
                Firebase and Cloud Integration
              </p>
              <p className="flex gap-2 ">
                <MdVerified
                  width={16}
                  height={16}
                  className="text-gray-600  mt-1"
                />
                Backend Development with Third-Party APIs{" "}
              </p>
              <p className="flex gap-2 ">
                <MdVerified
                  width={16}
                  height={16}
                  className="text-gray-600  mt-1"
                />
                UI/UX Design with Modern Interfaces{" "}
              </p>
              <p className="flex gap-2 ">
                <MdVerified
                  width={16}
                  height={16}
                  className="text-gray-600  mt-1"
                />
                Responsive design that adapts to all screen sizes.
              </p>
              <p className="flex gap-2 ">
                <MdVerified
                  width={16}
                  height={16}
                  className="text-gray-600  mt-1"
                />
                Bug Fixing and Performance Optimization{" "}
              </p>
            </div>
            <CallButtton />
          </div>
          <div className="w-[350px] h-[300px] sm:w-[440px] sm:h-[440px] flex justify-center items-center">
            <DotLottieReact
              src="https://lottie.host/23562f17-ae14-4fdf-8adc-dd3b137a81d1/xxveDUptA9.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-around rounded-xl bg-[#F7F7F7] w-full  items-center m-4 mx-8 p-5 gap-3 ">
        <div className="flex flex-col gap-3">
          <h2 className="md:text-[28px] text-base font-medium leading-6">
            Have unique or custom requests ? We are up for it 👍{" "}
          </h2>
          <p className="text-sm md:text-base font-normal">
            Feel free to reach out – we’re here to help brainstorm and turn your
            ideas into successful products
          </p>
        </div>
        <div>
          <Link href={"https://cal.com/vineet-babar"}>
            <Button className="rounded-xl text-base font-normal bg-white text-black shadow-xl hover:bg-white hover:text-black">
              Contact Us
              <MdKeyboardArrowRight width={20} height={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
