import React from "react";

const HomeWts = () => {
  const testimonials = [
    {
      name: "Hein Htet",
      country: "Myanmar",
      position: "Instructor",
      company: "MMSIT",
      saying:
        'Te Nyain is a well-trained student who took the "Special Web Design" course from us. He is specialized in Front-end development and delivering trustworthy interactive websites to his consumers.',
    },
    {
      name: "Tr. Thant",
      company: "BS Camp",
      country: "Myanmar",
      position: "IT instructor",
      saying:
        "Te Nyain is a cooperative and collaborative student. He is open to learning and receptive to improving his studies. He follows directions perfectly and shows respect for peers and teachers. I'm impressed by his passion for discussion and collaboration. It's an honor to be his teacher.",
    },
    // {
    //   name: "David",
    //   country: "Myanmar",
    //   position: "Front-end developer",
    //   saying:
    //     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    // },
    // {
    //   name: "Michael",
    //   country: "Japan",
    //   position: "Senior Programmer",
    //   saying:
    //     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sunt in culpa qui officia deserunt mollit anim id est laborum.",
    // },
  ];

  return (
    <section>
      <h1 className="heading-1">
        Testimonies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3 relative z-10">
        {testimonials.map((item, index) => {
          return (
            <div className="" key={index}>
              <p className="border-l-2 text-sm border-primary dark:border-accent pl-4">
                {item.saying}
              </p>
              <p className="pl-4 mt-2 text-sm">
                <span className="font-bold text-primary dark:text-accent">
                  {item.name}
                </span>{" "}
                / {item.position}{" "}
                {item.company && (
                  <span>
                    at <b>{item.company}</b>
                  </span>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeWts;
