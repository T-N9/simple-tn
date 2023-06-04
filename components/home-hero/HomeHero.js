import Image from "next/image";

const HomeHero = () => {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5">
          <div className="w-full md:w-[60%]">
              <p className="text-lg">
                Hello there, I am <span className="font-bold">Te Nyain</span>
              </p>{" "}
              <h1 className="font-bold text-2xl font-heading text-primary dark:text-accent">Front-end Developer</h1>{" "}
              <p className="text-lg">
                {" "}
                A developer who delivers fast and reliable websites. I care about your
                business values and targeted customers to meet your golden goals for
                tomorrow.
              </p>
          </div>
          <div className=" flex justify-center relative">

            <div className="tn-shadow-2 bg-light z-10 bg-opacity-30 rounded-full ">
            <Image className="rounded-full border-4 shadow border-white relative z-20" src={'https://tenyain.com/_ipx/w_750,q_100/%2Fcontent%2Fpropic.webp?url=%2Fcontent%2Fpropic.webp&w=750&q=100'} width={150} height={150} quality={100}/>
            </div>
          </div>
      </div>
    </section>
  );
};

export default HomeHero;
