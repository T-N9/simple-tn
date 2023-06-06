import Head from "next/head";
import { AboutHero, Motto, HomeWts, AboutTimeline } from "../components";

export const metadata = {
  title: "About Te Nyain",
  description: "Generated by create next app",
};

const About = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta name="title" content="About Te Nyain Moe Lwin | Who am I?" />
        <meta
          name="description"
          content="I am a creative front-end web developer from Myanmar. I am currently specializing in front-end web development and creating web applications from my own idea. My goal is to deliver a front-end stack from scratch to well-performed websites."
        />
        <meta
          name="keywords"
          content="Te Nyain Moe Lwin, Te Nyain, Moe Lwin, Moe, web, web developer, web development, front-end, UI, Myanmar, junior web developer, job, freelance, promoting, branding, product branding, creative"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Te Nyain Moe Lwin" />
        <meta property="og:locale" content="en-US" />

        {/* <!-- Primary Meta Tags --> */}
        <title>About Te Nyain Moe Lwin | Who am I?</title>
        <meta name="title" content="About Te Nyain Moe Lwin | Who am I?" />
        <meta
          name="description"
          content="I am a creative front-end web developer from Myanmar. I am currently specializing in front-end web development and creating web applications from my own idea. My goal is to deliver a front-end stack from scratch to well-performed websites."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simple.tenyain.com/about" />
        <meta
          property="og:title"
          content="About Te Nyain Moe Lwin | Who am I?"
        />
        <meta
          property="og:description"
          content="I am a creative front-end web developer from Myanmar. I am currently specializing in front-end web development and creating web applications from my own idea. My goal is to deliver a front-end stack from scratch to well-performed websites."
        />
        <meta property="og:image" content="meta.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://simple.tenyain.com/about" />
        <meta
          property="twitter:title"
          content="About Te Nyain Moe Lwin | Who am I?"
        />
        <meta
          property="twitter:description"
          content="I am a creative front-end web developer from Myanmar. I am currently specializing in front-end web development and creating web applications from my own idea. My goal is to deliver a front-end stack from scratch to well-performed websites."
        />
        <meta property="twitter:image" content="meta.png" />
        <title>About Te Nyain Moe Lwin | Who am I?</title>
      </Head>
      <main className="dark:bg-dark relative max-w-3xl mx-auto px-4 lg:px-0">
        <AboutHero />
        <span className="block  h-1 my-5 relative -z-0 w-full md:w-[60%] bg-light"></span>
        <AboutTimeline/>
        <span className="block  h-1 my-5 relative -z-0 w-full bg-light"></span>
        <HomeWts/>
        <span className="block  h-1 my-5 relative -z-0 w-full bg-light"></span>

        <Motto />
      </main>
    </>
  );
};

export default About;
