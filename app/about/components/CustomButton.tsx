import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type CustomButtonProps = {
  linkSrc: string;
  btnText: string;
  bgColor: string;
  textColor: string;
  targetTab: string;
};

const CustomButton = ({
  linkSrc,
  btnText,
  bgColor,
  textColor,
  targetTab,
}: CustomButtonProps) => {
  return (
    <Button className="bg-white rounded-xl shadow-sm shadow-neutral-500 text-base text-black hover:bg-white hover:text-black px-5 py-3">
      <Link href={linkSrc}>{btnText}</Link>
      <Image
        width={16}
        height={16}
        src={`/right-arrow.svg`}
        alt="right-arrow"
      />
    </Button>
  );
};

{
  /* <Link href={linkSrc} target={targetTab}>
<div
  className={`flex items-center justify-center py-[10px] md:pl-5 pl-4 md:pr-4 pr-3 rounded-xl shadow-2xl gap-1 ${bgColor} md:text-base text-sm max-w-fit`}
>
  <div>
    <button className={textColor}>{btnText}</button>
  </div>
  <Image
    width={16}
    height={16}
    src={`/right-arrow.svg`}
    alt="right-arrow"
  />
</div>
</Link> */
}

export default CustomButton;
