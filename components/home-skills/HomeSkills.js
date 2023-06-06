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
  SiContentful
} from "@icons-pack/react-simple-icons";

const HomeSkills = () => {
  return (
    <section>
      <h1 className="text-xl font-bold text-dark dark:text-light">Skills</h1>

      <div className="mt-4">
          <div className="flex items-start gap-2 lg:gap-5">
            <div className="flex-[2]">
              <h2 className="text-sm">Front-end</h2>
            </div>
            <div className="flex-[8]">
              <div className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-10 gap-4">
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiHtml5 xlinkTitle="true" />
                  HTML5
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiCss3 xlinkTitle="true" />
                  CSS3
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiSass xlinkTitle="true" />
                  SCSS
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiJavascript xlinkTitle="true" />
                  JavaScript
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiBootstrap xlinkTitle="true" />
                  Bootstrap
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiTailwindcss xlinkTitle="true" />
                  Tailwind
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiJquery xlinkTitle="true" />
                  jQuery
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiReact xlinkTitle="true" />
                  React.js
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiRedux xlinkTitle="true" />
                  Redux
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiNextdotjs xlinkTitle="true" />
                  Next.js
                </div>
              </div>
              <hr className="my-4" />
            </div>
          </div>
          <div className="flex items-start gap-2 lg:gap-5">
            <div className="flex-[2]">
              <h2 className="text-sm">Softwares</h2>
            </div>
            <div className="flex-[8]">
              <div className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-10 gap-4">
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiGithub xlinkTitle="true" />
                  GitHub
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiFigma xlinkTitle="true" />
                  Figma
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiMicrosoftword xlinkTitle="true" />
                  MS Word
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiMicrosoftpowerpoint xlinkTitle="true" />
                  MS Point
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiVisualstudiocode xlinkTitle="true" />
                  VS Code
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiFirebase xlinkTitle="true" />
                  Firebase
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiGoogleanalytics xlinkTitle="true" />
                  Analytics
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiGooglesearchconsole xlinkTitle="true" />
                  S Console
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiNetlify xlinkTitle="true" />
                  Netlify
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiVercel xlinkTitle="true" />
                  Vercel
                </div>
                <div className="flex flex-col items-center text-xs text-dark dark:text-light text-center">
                  <SiContentful xlinkTitle="true" />
                  Contentful
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
