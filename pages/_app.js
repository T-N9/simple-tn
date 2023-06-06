import "../styles/global.css";
import "../styles/style.css";

/* Components */
import { NavBar, Footer } from "../components";

import Providers from "../store/providers";
import { DataProvider } from "../store/DataContext";

export const metadata = {
  title: "Te Nyain Moe Lwin | Creative Front-end developer",
  description:
    "Hello there, I am Te Nyain Moe Lwin,a front-end developer who delivers fast and reliable websites. I care about your business values and targeted customers to meet your golden goals for tomorrow.",
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <svg
        class="pointer-events-none hidden dark:block fixed isolate z-50 opacity-70 mix-blend-soft-light top-0"
        width="100%"
        height="100%"
      >
        <filter id="pedroduarteisalegend">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#pedroduarteisalegend)"
        ></rect>
      </svg>
      <div
        className="absolute lg:fixed z-20 top-[3.2rem] lg:top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none"
        style={{}}
      >
        <div className="w-[108rem] flex-none flex justify-end lg:justify-start">
          <picture>
            <source
              srcSet="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
              type="image/avif"
            />
            <img
              src="https://tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png"
              alt=""
              className="w-[71.75rem] flex-none max-w-none dark:hidden"
              decoding="async"
            />
          </picture>
          <picture>
            <source
              srcSet="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
              type="image/avif"
            />
            <img
              src="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png"
              alt=""
              className="w-[90rem] flex-none max-w-none hidden dark:block"
              decoding="async"
            />
          </picture>
        </div>
      </div>
      <DataProvider>
        <Providers>
          <NavBar />
          <span className="mt-28 block"></span>
          <Component {...pageProps} />
          <Footer />
        </Providers>
      </DataProvider>
    </>
  );
}

// text-dark dark:bg-dark dark:text-white
