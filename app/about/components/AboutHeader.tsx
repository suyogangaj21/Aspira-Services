import Image from "next/image";
import CustomButton from "./CustomButton";

const AboutHeader = () => {
  return (
    <div className="flex justify-center items-center flex-col md:gap-16 gap-8 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col justify-center items-center self-stretch gap-5">
        <div className="who-we-are">
          <div className="rounded-xl border-[#e3e3e3] border border-b-2 md:px-3 px-2 md:py-1 py-[2px] text-sm text-center shadow-sm">
            <p>Who we are?</p>
          </div>
        </div>
        <div className="about-heading max-w-[800px] w-full px-2 md:px-0">
          <h1 className="text-center md:text-[46px] text-[32px] font-semibold md:leading-[3rem] leading-9">
            Driven by the Love for building software that truly stands out
          </h1>
        </div>
      </div>
      <div className="flex justify-between flex-col items-center md:gap-11 gap-9">
        <div className="beliefs md:px-0 px-4">
          <div className="md:text-start text-center md:py-2 py-4">
            <h3 className="md:text-xl text-lg font-semibold">
              We believe in following :
            </h3>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <div className="flex gap-3 md:items-center items-start self-stretch">
              <div className="flex md:h-10 h-6 md:w-10 w-8 md:p-[10px] p-2 justify-center items-center md:rounded-xl rounded-lg bg-[#f7f7f7]">
                <Image
                  src={"/bullet-point.svg"}
                  alt="bullet-point"
                  width={20}
                  height={20}
                />
              </div>
              <div className="text-base">
                <p>
                  Understanding our clients’ vision and bringing it to life with
                  creativity and passion.
                </p>
              </div>
            </div>
            <div className="flex gap-3 md:items-center items-start self-stretch">
              <div className="flex md:h-10 h-6 md:w-10 w-8 md:p-[10px] p-2 justify-center items-center md:rounded-xl rounded-lg bg-[#f7f7f7]">
                <Image
                  src={"/bullet-point.svg"}
                  alt="bullet-point"
                  width={20}
                  height={20}
                />
              </div>
              <div className="text-base">
                <p>
                  Building great software through collaboration, innovation, and
                  a focus on solving real problems.
                </p>
              </div>
            </div>
            <div className="flex gap-3 md:items-center items-start self-stretch">
              <div className="flex md:h-10 h-6 md:w-10 w-8 md:p-[10px] p-2 justify-center items-center md:rounded-xl rounded-lg bg-[#f7f7f7]">
                <Image
                  src={"/bullet-point.svg"}
                  alt="bullet-point"
                  width={20}
                  height={20}
                />
              </div>
              <div className="text-base">
                <p>
                  Seeing every project as more than development — it’s about
                  creating something that truly matters.
                </p>
              </div>
            </div>
            <div className="flex gap-3 md:items-center items-start self-stretch">
              <div className="flex md:h-10 h-6 md:w-10 w-8 md:p-[10px] p-2 justify-center items-center md:rounded-xl rounded-lg bg-[#f7f7f7]">
                <Image
                  src={"/bullet-point.svg"}
                  alt="bullet-point"
                  width={20}
                  height={20}
                />
              </div>
              <div className="text-base">
                <p>
                  Crafting products that are functional and beautiful, blending
                  design with development precision.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CustomButton
          linkSrc="https://cal.com/vineet-babar"
          btnText="Book a Call Now"
          bgColor="bg-[#272a2e]"
          textColor="text-white"
          targetTab="_blank"
        />
      </div>
    </div>
  );
};

export default AboutHeader;
