import Image from "next/image";
import Link from "next/link";

import { BiPen, BiEnvelope } from "react-icons/bi";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { RxDotsVertical } from "react-icons/rx";

import Hook from "./hook";

const AboutHero = () => {
  const { seeMore, setSeeMore } = Hook();

  return (
    <header>
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-5">
        <div className="w-full md:w-[60%]">
          <p>
            <span className="text-xl">Hello there! I am <b>Te Nyain Moe Lwin</b></span>, a passionate and
            creative front-end web developer, ready to bring your ideas to life.
            At the age of 22, I have already gained over a year of valuable
            experience in the field. Since 2020, I have immersed myself in the
            world of digital design, web development, and content creation,
            constantly striving to provide intuitive and accessible information
            through my work.
            <br />
            <br />
            Hailing from Myanmar, I am proud to be a Karen (/kəˈrɛn/ kə-REN),
            also known as the Kayin or Kawthoolese. As a computer science
            student, I am currently specializing in front-end web development,
            where I excel at turning my own ideas into functional and visually
            stunning web applications.
            <br />
            <br />
            <span className="text-lg font-bold text-primary dark:text-accent">
              “ My goal is to deliver a front-end stack from scratch to
              well-performed websites. ”
            </span>
            <span
              className={`${seeMore ? "hidden" : "table"} text-center mx-auto`}
            >
              <RxDotsVertical size={20} />{" "}
            </span>
            <span className={seeMore ? "block" : "hidden"}>
              <br />
              One of my passions lies in creating captivating UI designs and
              prototypes, as I firmly believe that a strong visual foundation is
              key to an exceptional user experience. I also find that
              collaborations play a crucial role in my growth as both a
              technical professional and a communicator. Working alongside
              talented individuals inspires me to continuously improve my skills
              and create extraordinary digital experiences.
              <br />
              <br />
              Beyond the realm of web development, I find solace in the world of
              music. During my spare time, you can often find me playing
              instruments and composing music. This creative outlet fuels my
              imagination and enhances my ability to think outside the box.
              <br />
              <br />
              <span className="text-lg font-bold text-primary dark:text-accent">
                “ I care about your business values and targeted customers to
                meet your golden goals for tomorrow. ”
              </span>
              <br />
              <br />
              I approach each project with genuine care, always considering your
              business values and the needs of your target customers. By
              understanding your objectives, I strive to help you achieve your
              golden goals for tomorrow.
              <br />
              <br />
              Let&apos;s embark on a collaborative journey together, where your
              ideas will be meticulously crafted into powerful web solutions. I
              can&apos;t wait to bring your vision to life and make a meaningful
              impact in the digital realm.
            </span>
            {seeMore && <br />}
            <button
              onClick={() => setSeeMore((prev) => !prev)}
              className="text-center mx-auto table text-sm underline mb-6"
            >
              See {seeMore ? "Less" : "More"}
            </button>
          </p>
          <div className="social-banner">
            <Link
              className="flex gap-2 items-center text-sm group"
              href={"/writings"}
            >
              <span className="icon-btn ">
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
              <span className="icon-btn">
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
              <span className="icon-btn">
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
              <span className="icon-btn">
                <BiEnvelope
                  className="group-hover:scale-110 transition-all"
                  size={20}
                />
              </span>
              Mail
            </a>
          </div>
        </div>
        <div className=" flex w-full md:w-auto justify-center z-20 relative md:sticky md:top-20">
          <div className=" bg-light z-10 bg-opacity-30 rounded-3xl ">
            <Image
              className="rounded-3xl w-full border-4 shadow border-white relative z-20"
              src={
                "https://tenyain.com/_ipx/w_3840,q_100/%2F_next%2Fstatic%2Fmedia%2FaboutHero.5d0d531c.webp?url=%2F_next%2Fstatic%2Fmedia%2FaboutHero.5d0d531c.webp&w=3840&q=100"
              }
              width={300}
              height={150}
              quality={100}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHero;
