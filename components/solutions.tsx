import Image from "next/image";
import React from "react";
import { FaReact } from "react-icons/fa";

const Solutions = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-4 mx-4 lg:mx-36 sm:m-12 m-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex  gap-2 ">
          <span className="text-3xl sm:text-4xl md:text-5xl font-medium lg:pt-[145px] ">
            1.
          </span>
          <div className="flex justify-center  flex-col flex-wrap">
            <div className="mb-6 relative font-medium text-3xl sm:text-4xl md:text-5xl">
              <h2 className=" flex flex-wrap ">
                We Design Stunning
                <div className="relative w-12 h-12">
                  <Image
                    src="/companyLogo/figma.png"
                    alt="Figma logo"
                    width={48}
                    height={48}
                    className="object-cover rounded-xl"
                  />
                </div>
                Websites and Apps
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We design visually appealing and intuitive websites and apps that
              reflect your brand's personality while ensuring exceptional user
              experience and performance.
            </p>
          </div>
        </div>
        <div className=" hidden lg:flex relative h-[500px]">
          <Image
            src="/Solutions/services1.png"
            alt="service1"
            fill={true}
          ></Image>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className=" hidden lg:flex relative h-[500px]">
          <Image
            src="/Solutions/services2.png"
            alt="service1"
            fill={true}
          ></Image>
        </div>
        <div className="flex  gap-2 ">
          <span className="text-3xl sm:text-4xl md:text-5xl font-medium lg:pt-[145px] ">
            2.
          </span>
          <div className="flex justify-center  flex-col flex-wrap">
            <div className="mb-6 relative font-medium text-3xl sm:text-4xl md:text-5xl">
              <h2 className=" flex flex-wrap flex-col">
                Outsource your projects to our expert
                <div className="relative w-12 h-12">
                  <Image
                    src="/companyLogo/googlecloud.png"
                    alt="Figma logo"
                    width={48}
                    height={48}
                    className="object-cover rounded-xl p-1"
                  />
                </div>
                team
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We design visually appealing and intuitive websites and apps that
              reflect your brand's personality while ensuring exceptional user
              experience and performance.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex  gap-2 ">
          <span className="text-3xl sm:text-4xl md:text-5xl font-medium lg:pt-[145px] ">
            3.
          </span>
          <div className="flex justify-center  flex-col flex-wrap">
            <div className="mb-6 relative font-medium text-3xl sm:text-4xl md:text-5xl">
              <h2 className=" flex flex-wrap ">
                Full Development
                <div className="relative w-12 h-12">
                  <Image
                    src="/companyLogo/react.png"
                    alt="Figma logo"
                    width={48}
                    height={48}
                    className="object-cover rounded-xl"
                  />
                </div>
                Lifecycle Support
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We design visually appealing and intuitive websites and apps that
              reflect your brand's personality while ensuring exceptional user
              experience and performance.
            </p>
          </div>
        </div>
        <div className=" hidden lg:flex relative h-[500px]">
          <Image
            src="/Solutions/services3.png"
            alt="service1"
            fill={true}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
