import {
  AiFillGithub,
  AiOutlineLink,
  AiOutlineFolderView,
} from "react-icons/ai";

const ProjectCardSm = ({ item }) => {
  return (
    <div className="tn-shadow-1 bg-white dark:bg-dark bg-opacity-50 backdrop-filter backdrop-blur-lg p-4">
      <h1 className="font-bold text-2xl">{item.title}</h1>
      <p>{item.description}</p>

      <div className="flex justify-between items-center mt-3 dark:text-light ">
        <div className="flex gap-3 ">
          <a
            className="hover:text-primary dark:hover:text-accent transition-all duration-300"
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLink size={30} />
          </a>
          <a
            className="hover:text-primary dark:hover:text-accent transition-all duration-300"
            href={item.gitHubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={30} />
          </a>
        </div>

        <AiOutlineFolderView size={30} />
      </div>
    </div>
  );
};

export default ProjectCardSm;
