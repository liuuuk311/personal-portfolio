import React from 'react'

const Experience = () => {
    return (
        <section className="md:max-w-5xl my-32" id="">
            <h5 className="uppercase font-semibold text-lg md:text-lg text-blue-600 tracking-tight">
                Experience &#38; Education
            </h5>
            <h3 className="text-black text-3xl md:text-5xl font-bold">My Resume</h3>
            <p className="text-gray-500 my-6">
            I am a full-stack engineer with experience in backend development, ETL processes, and business intelligence. I have a master's degree in computer science from the University of Studi di Milano-Bicocca and I am currently working as a backend software engineer at Sailogy SA. I am also proficient in Python and Javascript.
            </p>
            <ol class="relative border-l border-gray-200">
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <h3 class="text-xl font-semibold text-gray-900">Backend Software Engineer</h3>
                    <h4 class="text-gray-500 font-semibold">
                        Sailogy SA | Chiasso, Switzerland
                    </h4>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">Mar 2020 - Present</time>
                    <p class="mt-2 mb-4 text-base font-normal text-gray-500">
                    Responsible for designing, writing, and testing well-structured, maintainable clean code. Typical projects are developing RESTful API services and design fast, scalable and secure microservices in continuous integration.
                   </p>
                   <p class="mt-2 mb-4 text-base font-normal text-gray-500">
                   Technologies: Python, Django, DRF, FastAPI, Tortoise, PostgreSQL, Gitlab, Docker, Kubernetes
                </p>                
                </li>
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <h3 class="text-xl font-semibold text-gray-900">Software Engineer (Freelance)</h3>
                    <h4 class="text-gray-500 font-semibold">
                        University of Studi di Milano-Bicocca | Remote
                    </h4>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">Nov 2019 - Apr 2020</time>
                    <p class="mt-2 mb-4 text-base font-normal text-gray-500">
                    Developed a prototype of a semantic search engine for finding PHDs candidates using several Information Retrieval techniques and using Elasticsearch &#38; Python.
                   </p>                
                </li>
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <h3 class="text-xl font-semibold text-gray-900">ETL Engineer</h3>
                    <h4 class="text-gray-500 font-semibold">
                        Techedge | Milan, Italy
                    </h4>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">Jan 2019 - Mar 2020</time>
                    <p class="mt-2 mb-4 text-base font-normal text-gray-500">
                    Developing ETL processes on Oracle Database using ODI and other ETL tools to load data into DWHs &#38; DMs. Also implemented some customs solutions with Python.
                   </p>                
                </li>
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <h3 class="text-xl font-semibold text-gray-900">Full-Stack Engineer (Internship)</h3>
                    <h4 class="text-gray-500 font-semibold">
                        Bounce Technologies LTD | Brighton, UK
                    </h4>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">Aug 2018 - Sep 2018</time>
                    <p class="mt-2 mb-4 text-base font-normal text-gray-500">
                    Developed a Business Intelligence dashboard using Python &#38; JS to deliver useful insights to the CEO of the company.
                   </p>                
                </li>
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                    <h3 class="text-xl font-semibold text-gray-900">Master's degree, Computer Science</h3>
                    <h4 class="text-gray-500 font-semibold">
                        University of Studi di Milano-Bicocca | Milan, Italy
                    </h4>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">Oct 2017 - Oct 2019</time>
                    <p class="mt-2 mb-4 text-base font-normal text-gray-500">
                    Grade: 110/110
                    
                   </p>  
                   <p class="mt-2 mb-4 text-base font-normal text-gray-500">
                   Co-author of the paper “Online anomaly search in time series: significant online discord” published in Knowledge and Information Systems, 62(8), pp.3083-3106.
                    </p>              
                </li>
            </ol>
        </section>
    )
}

export default Experience