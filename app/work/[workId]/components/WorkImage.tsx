import Image from "next/image";

const WorkImage = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="w-full">
      <Image src={imgSrc} alt="main-img" height={668} width={1064} />
    </div>
  );
};

export default WorkImage;
