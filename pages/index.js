import Head from "next/head";
import {
    HomeHero,
    HomeProjects,
    HomeWts,
    HomeSkills,
    HomeContact,
    Motto,
  } from "../components";

const Home = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1192d3" />
        <meta
          name="title"
          content="Te Nyain Moe Lwin | Creative Front-end developer"
        />
        <meta
          name="description"
          content="Hello there, I am Te Nyain Moe Lwin, a front-end developer who delivers fast and reliable websites. I care about your business values and targeted customers to meet your golden goals for tomorrow."
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
        <title>Te Nyain Moe Lwin | Creative Front-end developer</title>
        <meta
          name="title"
          content="Te Nyain Moe Lwin | Creative Front-end developer"
        />
        <meta
          name="description"
          content="Hello there, I am Te Nyain Moe Lwin, a front-end developer who delivers fast and reliable websites. I care about your business values and targeted customers to meet your golden goals for tomorrow."
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simple.tenyain.com/" />
        <meta
          property="og:title"
          content="Te Nyain Moe Lwin | Creative Front-end developer"
        />
        <meta
          property="og:description"
          content="Hello there, I am Te Nyain Moe Lwin, a front-end developer who delivers fast and reliable websites. I care about your business values and targeted customers to meet your golden goals for tomorrow."
        />
        <meta property="og:image" content="meta.png" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://simple.tenyain.com/" />
        <meta
          property="twitter:title"
          content="Te Nyain Moe Lwin | Creative Front-end developer"
        />
        <meta
          property="twitter:description"
          content="Hello there, I am Te Nyain Moe Lwin,
              a front-end developer who delivers fast and reliable websites. I care about your business values and targeted customers to meet your golden goals for tomorrow."
        />
        <meta property="twitter:image" content="meta.png" />
        <title>Te Nyain Moe Lwin | Creative Front-end developer</title>
      </Head>
      <main className="dark:bg-dark relative max-w-3xl mx-auto px-4 lg:px-0">
        <HomeHero />
        <span className="block  h-1 my-10 relative -z-0 w-full md:w-[60%] bg-light"></span>
        <HomeProjects />
        <span className="block  h-1 my-10 relative -z-0 w-full bg-light"></span>
        <HomeWts />
        <span className="block  h-1 my-10 relative -z-0 w-full bg-light"></span>
        <HomeSkills />
        <span className="block  h-1 my-10 relative -z-0 w-full bg-light"></span>
        <HomeContact />
        <span className="block  h-1 my-10 relative -z-0 w-full bg-light"></span>
        <Motto />
      </main>
    </>
  );
};

export default Home;
