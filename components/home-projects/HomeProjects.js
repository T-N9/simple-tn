"use client"; // This is a client component 👈🏽
import { useContext } from "react";
import { DataContext } from "@/app/DataContext";
import Link from "next/link";
import Hook from "./hook";

/* Component */
import ProjectCardSm from "../common/ProjectCardSm";

/* Icons */
import { BsArrowRightShort } from "react-icons/bs";

const HomeProjects = () => {
  // const { projects, isLoading } = Hook();
  const { projectData, isLoading } = useContext(DataContext);
  return (
    <section>
      <div className="flex justify-between w-full md:w-[60%] items-center text-dark dark:text-light">
        <h1 className="text-xl font-bold text-dark dark:text-light">Projects</h1>

        <Link
          href={"/projects"}
          className="text-xs flex justify-center items-center hover:text-primary dark:hover:text-accent"
        >
          View More <BsArrowRightShort size={20} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 relative z-10">
        {projectData ? (
          projectData?.slice(0, 4)?.map((item, index) => {
            return <ProjectCardSm item={item} key={index} />;
          })
        ) : (
          <p className="text-center underline text-primary dark:text-accent text-sm">Loading</p>
        )}
      </div>
    </section>
  );
};

export default HomeProjects;
