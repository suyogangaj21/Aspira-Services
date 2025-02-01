import CustomButton from "@/app/about/components/CustomButton";
import Image from "next/image";

type projectCardProps = {
  id: number;
  thumbnail: string;
  tags: Array<string>;
  title: string;
  description: string;
};

const ProjectCard = ({
  thumbnail,
  tags,
  title,
  description,
  id,
}: projectCardProps) => {
  return (
    <div className="flex flex-col gap-4 items-start justify-center w-full">
      <div className="p-image  rounded-[26px] bg-[#f7f7f7] overflow-hidden">
        <Image
          src={thumbnail}
          alt="thumbnail-project"
          width={600}
          height={400}
          className="rounded-[40px] w-[450px] h-[350px] md:w-[600px] md:h-[400px] object-cover"
        />
      </div>
      <div className="p-summary flex flex-col md:gap-4 gap-2 max-w-[600px] w-full">
        <div className="p-tags flex md:gap-3 gap-2 flex-wrap">
          {tags.map((t, i) => {
            return (
              <div key={i} className="py-1 px-3 bg-[#f2f2f2] rounded-full">
                <p className="text-xs font-light text-[#595959]">{t}</p>
              </div>
            );
          })}
        </div>
        <div className="p-info flex justify-between gap-2 items-center tracking-[-1%] md:px-0 px-2">
          <div className="flex flex-col gap-1 text-start">
            <div className="p-title">
              <p className="font-medium md:text-2xl text-xl md:leading-[40px] leading-[30px]">
                {title}
              </p>
            </div>
            <div className="p-desc">
              <p className="text-[#515151] text-base md:leading-6 leading-5">
                {description}
              </p>
            </div>
          </div>
          {id == 6 ? (
            <div className="text-neutral-400">Comming Soon</div>
          ) : (
            <div className="p-view">
              <CustomButton
                bgColor="bg-white"
                btnText="View"
                linkSrc={
                  id === 1
                    ? "https://www.behance.net/vineetbabarux"
                    : id === 5
                    ? "https://www.behance.net/vineetbabarux"
                    : `/work/${id}`
                }
                targetTab="_self"
                textColor="text-[#292929]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
