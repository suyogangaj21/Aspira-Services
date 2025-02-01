import Image from "next/image";

type LogoComponentProps = {
  Imgsrc: string;
  title: string;
  content: string;
};

const LogoComponent = ({ Imgsrc, title, content }: LogoComponentProps) => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="bg-[#f7f7f7] rounded-2xl md:p-4 p-2 flex items-center justify-center md:w-14 w-10 md:h-14 h-10">
        <Image src={Imgsrc} alt="logo" height={24} width={24} />
      </div>
      <div className="flex flex-col md:gap-1 gap-0">
        <p className="text-[#515151] text-sm">{title}</p>
        <p className="text-[#292929] text-base font-medium">{content}</p>
      </div>
    </div>
  );
};

export default LogoComponent;
