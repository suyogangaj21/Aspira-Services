import { projectsInfo } from "@/utils";
import ProjectCard from "./ProjectCard";
import ViewWork from "@/components/ViewWork";

const Projects = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 md:mx-20 mx-6 place-items-start gap-8">
        {projectsInfo.map((p) => {
          return (
            <ProjectCard
              key={p.id}
              id={p.id}
              thumbnail={p.thumbnail}
              title={p.title}
              description={p.description}
              tags={p.tags}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
