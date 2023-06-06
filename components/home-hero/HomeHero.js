  
import Image from "next/image";
import Link from "next/link";

import {
  BiPen,
  BiEnvelope,
  // BiLogoGithub,
  // BiLogoLinkedin,
} from "react-icons/bi";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const HomeHero = () => {
  return (
    <header>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5">
        <div className="w-full md:w-[60%]">
          <p className="text-lg">
            Hello there, I am <span className="font-bold">Te Nyain</span>
          </p>{" "}
          <h1 className="font-bold text-2xl font-heading text-primary dark:text-accent">
            Front-end Developer
          </h1>{" "}
          <p className="text-lg">
            {" "}
            A developer who delivers fast and reliable websites. I care about
            your business values and targeted customers to meet your golden
            goals for tomorrow.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap">
            <Link
              className="flex gap-2 items-center text-sm group"
              href={"/writings"}
            >
              <span className="flex p-1 bg-gradient-to-tl from-primary via-primary to-blue-400 dark:from-accent dark:via-accent dark:to-green-400 rounded-lg text-white ">
                <BiPen
                  className="group-hover:scale-110 transition-all"
                  size={20}
                />
              </span>
              Writings
            </Link>

            <a
              className="flex gap-2 items-center text-sm group"
              href="https://github.com/T-N9"
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex p-1 bg-gradient-to-tl from-primary via-primary to-blue-400 dark:from-accent dark:via-accent dark:to-green-400 rounded-lg text-white">
                <AiOutlineGithub
                  className="group-hover:scale-110 transition-all"
                  size={20}
                />
              </span>
              GitHub
            </a>
            <a
              className="flex gap-2 items-center text-sm group"
              href="https://www.linkedin.com/in/te-nyain-moe-lwin-80b4a11a4/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex p-1 bg-gradient-to-tl from-primary via-primary to-blue-400 dark:from-accent dark:via-accent dark:to-green-400 rounded-lg text-white">
                <AiOutlineLinkedin
                  className="group-hover:scale-110 transition-all"
                  size={20}
                />
              </span>
              LinkedIn
            </a>

            <a
              className="flex gap-2 items-center text-sm group"
              href="mailto:tenyainmoelwin@gmail.com"
            >
              <span className="flex p-1 bg-gradient-to-tl from-primary via-primary to-blue-400 dark:from-accent dark:via-accent dark:to-green-400 rounded-lg text-white">
                <BiEnvelope
                  className="group-hover:scale-110 transition-all"
                  size={20}
                />
              </span>
              Mail
            </a>
          </div>
        </div>
        <div className=" flex justify-center relative z-20">
          <div className="tn-shadow-2 bg-light z-10 bg-opacity-30 rounded-full ">
            <Image
              className="rounded-full border-4 shadow border-white relative z-20"
              src={
                "https://tenyain.com/_ipx/w_750,q_100/%2Fcontent%2Fpropic.webp?url=%2Fcontent%2Fpropic.webp&w=750&q=100"
              }
              width={150}
              height={150}
              quality={100}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
