import React from "react";

const HomeWts = () => {
  const testimonials = [
    {
      name: "Hein Htet Zan",
      country: "Myanmar",
      position: "Web Instructor",
      company: "MMSIT",
      website : "https://mms-it.com/",
      saying:
        'Te Nyain is a well-trained student who took the "Special Web Design" course from us. He is specialized in Front-end development and delivering trustworthy interactive websites to his consumers.',
    },
    {
      name: "Tr. Thant",
      company: "BS Camp",
      country: "Myanmar",
      website : "https://bscampmm.com/",
      position: "IT instructor",
      saying:
        "Te Nyain is a cooperative and collaborative student. He is open to learning and receptive to improving his studies. He follows directions perfectly and shows respect for peers and teachers. I'm impressed by his passion for discussion and collaboration. It's an honor to be his teacher.",
    },
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
                    at <a href={item.website} target="_blank" rel="noreferrer"><b>{item.company}</b></a>
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
