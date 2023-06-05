"use client";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiJquery,
  SiNextdotjs,
  SiRedux,
  SiGithub,
  SiFigma,
  SiMicrosoftword,
  SiMicrosoftpowerpoint,
  SiVisualstudiocode,
  SiFirebase,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiNetlify,
  SiVercel,
} from "@icons-pack/react-simple-icons";

const HomeSkills = () => {
  return (
    <section>
      <h1 className="text-xl font-bold text-dark dark:text-light">Skills</h1>

      <div className="mt-4">
          <div className="flex items-start gap-2 lg:gap-5">
            <div className="flex-[2]">
              <h2 className="">Front-end</h2>
            </div>
            <div className="flex-[8]">
              <div className="flex gap-4 flex-wrap">
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiHtml5 xlinkTitle="true" />
                  HTML5
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiCss3 xlinkTitle="true" />
                  CSS3
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiSass xlinkTitle="true" />
                  SCSS
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiJavascript xlinkTitle="true" />
                  JavaScript
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiBootstrap xlinkTitle="true" />
                  Bootstrap
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiTailwindcss xlinkTitle="true" />
                  Tailwind
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiJquery xlinkTitle="true" />
                  jQuery
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiReact xlinkTitle="true" />
                  React.js
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiRedux xlinkTitle="true" />
                  Redux
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiNextdotjs xlinkTitle="true" />
                  Next.js
                </div>
              </div>
              <hr className="my-4" />
            </div>
          </div>
          <div className="flex items-start gap-2 lg:gap-5">
            <div className="flex-[2]">
              <h2 className="">Softwares</h2>
            </div>
            <div className="flex-[8]">
              <div className="flex gap-4 flex-wrap">
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiGithub xlinkTitle="true" />
                  GitHub
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiFigma xlinkTitle="true" />
                  Figma
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiMicrosoftword xlinkTitle="true" />
                  MS Word
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiMicrosoftpowerpoint xlinkTitle="true" />
                  MS Point
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiVisualstudiocode xlinkTitle="true" />
                  VS Code
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiFirebase xlinkTitle="true" />
                  Firebase
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiGoogleanalytics xlinkTitle="true" />
                  Analytics
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiGooglesearchconsole xlinkTitle="true" />
                  S Console
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiNetlify xlinkTitle="true" />
                  Netlify
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light">
                  <SiVercel xlinkTitle="true" />
                  Vercel
                </div>
              </div>
              <hr className="my-4" />
            </div>
          </div>
      </div>
    </section>
  );
};

export default HomeSkills;
