import Image from "next/image";
import React from "react";
import { FaReact } from "react-icons/fa";

const Solutions = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-4  md:px-28   w-full mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex  gap-2 ">
          <div className="flex justify-center gap-5 flex-col flex-wrap ">
            <h2 className=" flex ml-[24px] flex-wrap text-center items-center font-medium text-[24px]  md:text-[28px]   ">
              <span className="font-medium leading-10 relative left-0 ">
                1.
              </span>
              <span className="ml-3 ">We Design </span>

              <span className=" ">
                <Image
                  src="/companyLogo/figma.png"
                  alt="Figma logo"
                  width={48}
                  height={48}
                  className="object-cover rounded-xl h-[35px] w-[35px] md:w-[48px] md:h-[48px]"
                />
              </span>
              <span className="">Stunning</span>
              <span className="ml-7 ">Websites and Apps</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-[415px]  ml-12">
              We design visually appealing and intuitive websites and apps that
              reflect your brand's personality while ensuring exceptional user
              experience and performance.
            </p>
          </div>
        </div>
        <div className="  relative h-[400px] md:h-[500px] w-full">
          <Image
            src="/Solutions/services1.png"
            alt="service1"
            fill={true}
            className="hidden md:block"
          ></Image>
          <Image
            src="/Solutions/services1.png"
            alt="service1"
            fill={true}
            className="md:hidden"
          ></Image>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div className=" hidden lg:flex relative h-[500px]">
          <Image
            src="/Solutions/services2.png"
            alt="service1"
            fill={true}
          ></Image>
        </div>
        <div className="flex  gap-2 md:ml-20 ">
          <div className="flex justify-center gap-5 flex-col flex-wrap ">
            <h2 className=" flex items-center  ml-[24px] flex-wrap  text-center font-medium text-[24px] md:text-[28px]  max-w-[370px] ">
              <span className="">2.</span>
              <span className="ml-2">Outsource </span>

              <span className=" w-10 h-10 md:w-12 md:h-12 mx-3">
                <Image
                  src="/companyLogo/googlecloud.png"
                  alt="Figma logo"
                  width={48}
                  height={48}
                  className="object-contain rounded-xl w-10 h-10 md:w-12 md:h-12"
                />
              </span>
              <span> your </span>
              <span className="ml-7 ">projects to our team</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-[415px]  ml-12">
              Our expert team is ready to handle your projects with precision,
              delivering high-quality solutions on time. We become an extension
              of your team, ensuring seamless collaboration.
            </p>
          </div>
        </div>
        <div className="md:hidden relative h-[400px]">
          <Image
            src="/Solutions/services2.png"
            alt="service2"
            fill={true}
            className="md:hidden"
          ></Image>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div className="flex  gap-2 md:ml-20 ml-6">
          <div className="flex justify-center gap-5 flex-col flex-wrap ">
            <h2 className=" flex items-center flex-wrap text-center font-medium text-[24px]  md:text-[28px]  max-w-[370px] ">
              <span className="">3.</span>
              <span className="ml-5 m-1">Full </span>

              <span className=" w-10 h-10 md:w-12 md:h-12 mx-2 ">
                <Image
                  src="/companyLogo/react.png"
                  alt="Figma logo"
                  width={48}
                  height={48}
                  className="object-contain rounded-xl w-10 h-10 md:w-12 md:h-12"
                />
              </span>
              <span> Development </span>
              <span className="ml-10">Lifecycle Support</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-[415px]  ml-9">
              Our expert team is ready to handle your projects with precision,
              delivering high-quality solutions on time. We become an extension
              of your team, ensuring seamless collaboration.
            </p>
          </div>
        </div>
        <div className=" h-[330px] relative md:h-[500px] mt-2">
          <Image
            src="/Solutions/services3.png"
            alt="service1"
            fill={true}
            className="hidden md:block"
          ></Image>
          <Image
            src="/Solutions/services3.png"
            alt="service3"
            fill={true}
            className="md:hidden"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
