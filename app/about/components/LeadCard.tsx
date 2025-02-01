import Image from "next/image";
import Link from "next/link";

type LeadCardProps = {
  name: string;
  desc: string;
  title: string;
  imageSrc: string;
  linkedIn: string;
};

const LeadCard = ({ name, title, desc, imageSrc, linkedIn }: LeadCardProps) => {
  return (
    <div className="flex flex-row gap-4 md:gap-6 items-start justify-between">
      <div className="w-2/5 md:w-1/3 h-full flex flex-col items-center">
        <Image
          className="aspect-square rounded-lg w-full"
          src={imageSrc}
          height={128}
          width={128}
          layout="responsive"
          alt="lead_pic"
        />
        <div className="block md:hidden mt-2">
          <Link href={linkedIn} target="_blank">
            <div className="flex items-center justify-center py-1 px-[10px] rounded-lg border border-[#e2e2e2] max-w-fit">
              <p className="text-xs">View LinkedIn</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:gap-3 justify-start items-start w-3/5 md:w-2/3">
        <div className="flex flex-col gap-0">
          <div className="l-name">
            <p className="text-sm md:text-base font-medium">{name}</p>
          </div>
          <div className="l-title">
            <p className="text-xs text-[#515151]">{title}</p>
          </div>
        </div>
        <div className="l-description">
          <p className="text-sm md:text-base md:leading-6 leading-[18px]">
            {desc}
          </p>
        </div>
        <div className="hidden md:flex l-linkedIn-btn items-start">
          <Link href={linkedIn} target="_blank">
            <div className="flex items-center justify-center py-2 px-[17px] rounded-xl border border-[#e2e2e2] max-w-fit">
              <p className="text-sm">View LinkedIn</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeadCard;
