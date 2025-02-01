import { projectsInfo } from "@/utils";
import WorkHeader from "./components/WorkHeader";
import WorkImage from "./components/WorkImage";
import GeneralPoints from "./components/GeneralPoints";
import GitRepoButton from "./components/GitRepoButton";

export default async function WorkInfo({
  params,
}: {
  params: Promise<{ workId: string }>;
}) {
  const workId = (await params).workId;

  const project = projectsInfo.find(
    (project) => project.id === parseInt(workId as string, 10)
  );

  if (!project) {
    return {
      notFound: true,
    };
  }

  const imgSrc = project.images[0];

  return (
    <main className="mt-16 flex flex-col items-center justify-center md:gap-32 gap-20 md:px-64 px-6">
      <WorkHeader
        title={project.title}
        desc={project.description}
        tags={project.tags}
        author={project.author}
        tech={project.tech}
        timePeriod={project.timeRequired}
        link={project.githubRepo}
      />
      <WorkImage imgSrc={imgSrc} />
      <GeneralPoints generals={project.problems} mainHeading="Problems :" />
      <hr className="w-full border-t-[1px] border-[#E6E6E6]" />
      <GeneralPoints generals={project.keyFeat} mainHeading="Key Features :" />
      <hr className="w-full border-t-[1px] border-[#E6E6E6]" />
      <GeneralPoints generals={project.approaches} mainHeading="Approaches :" />
      <GitRepoButton link={project.githubRepo} />
    </main>
  );
}
