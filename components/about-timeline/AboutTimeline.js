import React from "react";

const AboutTimeline = () => {
  return (
    <section>
      <h1 className="text-xl font-bold text-dark dark:text-light">Timeline</h1>

      <div className="mt-3 flex flex-col md:flex-row gap-3 justify-between">
        <div className="border-l border-primary dark:border-accent pl-5 flex flex-col gap-3">
          <div className="relative">
            <span className="bg-primary dark:bg-accent w-3 absolute top-2 -left-6 h-3 block border-dark dark:border-light border-4 rounded-full"></span>
            <h2 className="font-bold text-xl">2015 - 2016</h2>
            <h3 className="text-dark dark:text-light font-primary">
              Passed Matriculation Examination
            </h3>
          </div>

          <div className="relative">
            <span className="bg-primary dark:bg-accent w-3 absolute top-2 -left-6 h-3 block border-dark dark:border-light border-4 rounded-full"></span>
            <h2 className="font-bold text-xl">2016-2017</h2>
            <h3 className="text-dark dark:text-light font-primary">
              UCSH - CS 1<sup>st</sup> year
            </h3>

            <ul className="list-disc text-xs">
              <li>
                UCSH Web Design Competition (HTML & CSS) - 1<sup>st</sup> Prize
              </li>
            </ul>
          </div>

          <div className="relative">
            <span className="bg-primary dark:bg-accent w-3 absolute top-2 -left-6 h-3 block border-dark dark:border-light border-4 rounded-full"></span>
            <h2 className="font-bold text-xl">2017-2018</h2>
            <h3 className="text-dark dark:text-light font-primary">
              UCSH - CS 2<sup>nd</sup> year
            </h3>

            <ul className="list-disc text-xs">
              <li>
                UCSH English Impromptu Speech - 1<sup>st</sup> Prize
              </li>
              <li>
                Designer at{" "}
                <a
                  className="text-primary dark:text-accent font-bold"
                  href="https://www.facebook.com/BarCampHinthada"
                  target="_blank"
                  rel="noreferrer"
                >
                  BarCamp Hinthada 2018
                </a>{" "}
              </li>
            </ul>
          </div>

          <div className="relative">
            <span className="bg-primary dark:bg-accent w-3 absolute top-2 -left-6 h-3 block border-dark dark:border-light border-4 rounded-full"></span>
            <h2 className="font-bold text-xl">2018-2019</h2>
            <h3 className="text-dark dark:text-light font-primary">
              UCSH - CS 3<sup>rd</sup> year
            </h3>

            <ul className="list-disc text-xs">
              <li>
                UCSH ICT & Project Show - 1<sup>st</sup> Prize
              </li>
              <li>
                Co-founded{" "}
                <a
                  className="text-primary dark:text-accent font-bold"
                  href="https://sites.google.com/view/ucshmusicclub/home?pli=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  UCSH Music Club
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-l border-primary dark:border-accent pl-5 flex flex-col gap-3">
          <div className="relative">
            <span className="bg-primary dark:bg-accent w-3 absolute top-2 -left-6 h-3 block border-dark dark:border-light border-4 rounded-full"></span>
            <h2 className="font-bold text-xl">2020</h2>
            <h3 className="text-dark dark:text-light font-primary">
              Covid Outbreak
            </h3>
            <ul className="text-xs list-disc">
              <li>
                Started learning Web design & development{" "}
                <a
                  className="text-primary dark:text-accent font-bold"
                  href="https://www.facebook.com/mmsoss"
                  target="_blank"
                  rel="noreferrer"
                >
                  @MMSIT
                </a>
              </li>
              <li>
                Continued self-study Software Engineering and Communications
              </li>
            </ul>
          </div>

          <div className="relative">
            <span className="bg-primary dark:bg-accent w-3 absolute top-2 -left-6 h-3 block border-dark dark:border-light border-4 rounded-full"></span>
            <h2 className="font-bold text-xl">2021</h2>
            <h3 className="text-dark dark:text-light font-primary">
              Dark Times in Myanmar
            </h3>

            <ul className="list-disc text-xs">
              <li>
                <a
                  className="text-primary dark:text-accent font-bold"
                  href="https://twitter.com/hashtag/WhatsHappeningInMyanmar?src=hashtag_click"
                >
                  #WhatsHappeningInMyanmar
                </a>{" "}
              </li>

              <li>My Front-end and Freelancing journey were started</li>
            </ul>
          </div>

          <div className="relative">
            <span className="bg-primary dark:bg-accent w-3 absolute top-2 -left-6 h-3 block border-dark dark:border-light border-4 rounded-full"></span>
            <h2 className="font-bold text-xl">2022</h2>
            <h3 className="text-dark dark:text-light font-primary">
              On Job Training
            </h3>

            <ul className="list-disc text-xs">
              <li>
                4 months of OJT at <b>Myanmar High Society</b>
              </li>

              <li>
                Preparation for JLPT + ITPEC Fundamental Engineering Examination
              </li>
            </ul>
          </div>

          <div className="relative">
            <span className="bg-primary dark:bg-accent w-3 absolute top-2 -left-6 h-3 block border-dark dark:border-light border-4 rounded-full"></span>
            <h2 className="font-bold text-xl">2023</h2>
            <h3 className="text-dark dark:text-light font-primary">
              In Progress
            </h3>

            <ul className="list-disc text-xs">
              <li>Passed ITPEC Fundamental IT Engineer Examination</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
