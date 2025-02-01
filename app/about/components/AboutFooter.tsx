import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const AboutFooter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-9/12 bg-[#f7f7f7] rounded-[1.25rem] p-6 md:p-10 mb-10">
      <div className="flex flex-col items-start justify-center md:gap-2 gap-0 md:w-1/2">
        <div>
          <p className="text-xl md:text-2xl font-medium">
            Want to see our previous work?{" "}
          </p>
        </div>
        <div>
          <p className="font-light text-sm md:text-base">
            Explore our diverse portfolio of design and development projects.
          </p>
        </div>
      </div>

      <div className="mt-4 md:mt-0 w-full md:w-1/2 md:flex md:justify-end">
        <CustomButton
          btnText="View Our Work"
          bgColor="bg-white"
          linkSrc="/work"
          textColor="text-[#292929]"
          targetTab="_self"
        />
      </div>
    </div>
  );
};

export default AboutFooter;
