"use client"; // This is a client component 👈🏽

import Hook from "./hook";

/* Component */
import ProjectCardSm from "../common/ProjectCardSm";

const HomeProjects = () => {
  const { projects, isLoading } = Hook();

  console.log({ projects });
  return (
    <section>
      <h1 className="text-xl font-bold text-dark dark:text-light">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 relative z-10">
        {projects?.map((item, index) => {
          return <ProjectCardSm item={item} key={index} />;
        })}
      </div>
    </section>
  );
};

export default HomeProjects;
