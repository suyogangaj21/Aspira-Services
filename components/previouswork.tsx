import Image from "next/image";
import Link from "next/link";
import CustomButton from "../app/about/components/CustomButton";
interface PreviousWorkProps {
  linkSrc?: string;
  btnText?: string;
  title?: string;
  description?: string;
}
const PreviousWork: React.FC<PreviousWorkProps> = ({
  linkSrc,
  btnText,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full mx-3 md:mx-32 bg-[#f7f7f7] rounded-[1.25rem] p-6 md:p-10 mb-10">
      <div className="flex flex-col items-start justify-center md:gap-2 gap-0 ">
        <div>
          <p className="text-xl md:text-2xl font-medium">
            {title ? title : "Want to see our previous work?"}
          </p>
        </div>
        <div>
          <p className="font-light text-sm md:text-base">
            {description
              ? description
              : "Explore our diverse portfolio of design and development projects."}
          </p>
        </div>
      </div>

      <div className="mt-4 md:mt-0   md:flex md:justify-end">
        <CustomButton
          btnText={btnText ? btnText : "View our work"}
          bgColor="bg-white"
          linkSrc={linkSrc ? linkSrc : "/work"}
          textColor="text-[#292929]"
          targetTab="_self"
        />
      </div>
    </div>
  );
};

export default PreviousWork;
