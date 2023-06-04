import { HomeHero, HomeProjects } from "@/components"

export default function Home() {
  return (
    <main className="dark:bg-dark relative max-w-3xl h-[200vh] mx-auto px-4 lg:px-0">
      <HomeHero/>
      <span className="block  h-1 my-5 relative -z-0 w-full md:w-[60%] bg-light"></span>
      <HomeProjects/>
    </main>
  )
}
