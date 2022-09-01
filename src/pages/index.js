import React from "react"
import AboutMe from "../components/about"
import Experience from "../components/experience"
import Hero from "../components/hero"
import Projects from "../components/projects"

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <AboutMe />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
