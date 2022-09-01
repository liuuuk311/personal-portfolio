import React from 'react'
import OutsideLink from './utils/outside-link'
import { GitHubIcon, LinkedInIcon } from './icons'

const AboutMe = () => {
  return (
    <section className="my-32" id="about-me">
        <div className="flex flex-col">
            <div className="max-w-4xl">
                <h5 className="uppercase font-semibold text-lg md:text-lg text-blue-600 tracking-tight">About Me</h5>
                <h3 className="text-black text-3xl md:text-5xl font-bold">Get to know the person behind the pixels</h3>
                <p className="text-gray-500 my-6">
                    I love working with smart people on challenging problems: easy stuff is quickly demotivating if you do this job with passion.
                </p>
                <p className="text-gray-500 my-6">
                    Consider myself disciplined and motivated, with the ability to produce results in a demanding, high-pressure environment.
                </p>
            </div>
            <div className="max-w-4xl">
                <h4 className="text-black text-2xl md:text-4xl font-bold">Let's connect</h4>
                <p className="text-gray-500 my-6">
                    If you want to see more of my work, please check out my GitHub page. I am always updating my repositories with new projects. Alternatively, connect with me on LinkedIn to see my latest work experiences and skills.
                </p>
                <div className="flex flex-row gap-4 my-4 text-gray-500">
                    <OutsideLink href="https://www.linkedin.com/in/luca-palonca/">
                        <LinkedInIcon />
                    </OutsideLink>
                    <OutsideLink href="https://github.com/liuuuk311/">
                        <GitHubIcon />
                    </OutsideLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe