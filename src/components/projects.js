import React from 'react'
import OutsideLink from './utils/outside-link'

const Projects = () => {
    return (
        <section className="my-32 flex flex-col" id="projects">
            <div className="max-w-4xl">
                <h5 className="uppercase font-semibold text-lg md:text-lg text-blue-600 tracking-tight">My Portfolio</h5>
                <h3 className="text-black text-3xl md:text-5xl font-bold">Here are some of my personal projects</h3>
                <p className="text-gray-500 my-6">
                    Besides coding, I enjoy flying FPV drones, this passion led me to develop a couple of personal projects that you can find online.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">

                <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md max-w-xl">
                    <OutsideLink href="https://lucafpv.com">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Luca FPV</h5>
                    </OutsideLink>
                    <p class="mb-3 font-normal text-gray-500">A blog about FPV drones, where I review stuff and create tutorials</p>
                    <p class="mb-3 font-semibold text-gray-700">Tech: React, GatsbyJS, TailwindCSS</p>
                    <OutsideLink href="https://lucafpv.com" extraCssClasses="inline-flex items-center text-sm font-semibold bg-blue-600 py-3 px-8 rounded-full text-white">
                        Take a look
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 -mr-1 w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </OutsideLink>
                </div>

                <div class="p-6 bg-white rounded-lg border border-gray-200 shadow-md max-w-xl">
                    <OutsideLink href="https://fpvfinder.netlify.app/">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">FPV finder</h5>
                    </OutsideLink>
                    <p class="mb-3 font-normal text-gray-500">A price comparison website, to find the best FPV products</p>
                    <p class="mb-3 font-semibold text-gray-700">Tech: SvelteKit, TailwindCSS, Django, DRF, Celery, PostgresSQL</p>
                    <OutsideLink href="https://fpvfinder.netlify.app/" extraCssClasses="inline-flex items-center text-sm font-semibold bg-blue-600 py-3 px-8 rounded-full text-white">
                        Take a look
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 -mr-1 w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </OutsideLink>
                </div>

            </div>
        </section>
    )
}

export default Projects
