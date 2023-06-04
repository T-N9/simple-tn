import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineCodepen,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="container lg:max-w-4xl mx-auto flex items-center justify-between px-4 py-2 tn-shadow-1 mt-7">
      <div className="text-center text-xs flex justify-between items-center w-full">
        <div>
          © 2023{" "}
          <a
            className="text-primary dark:text-accent"
            href="https://tenyain.com/"
          >
            tenyain.com
          </a>
        </div>

        <div className="text-dark dark:text-light flex gap-3">
          <a
            className=" transition-colors hover:text-primary dark:hover:text-accent"
            href="https://github.com/T-N9"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={30} />
          </a>
          <a
            className=" transition-colors hover:text-primary dark:hover:text-accent"
            href="https://www.linkedin.com/in/te-nyain-moe-lwin-80b4a11a4/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={30} />
          </a>
          <a
            className=" transition-colors hover:text-primary dark:hover:text-accent"
            href="https://codepen.io/t-n9"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineCodepen size={30} />
          </a>
          <a
            className=" transition-colors hover:text-primary dark:hover:text-accent"
            href="mailto:tenyainmoelwin@gmail.com"
          >
            <AiFillMail size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
