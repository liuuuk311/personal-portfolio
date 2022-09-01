import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Hero = () => {
    const data = useStaticQuery(query);
    const img = data.me
        ? data.me.edges[0].node.childImageSharp.gatsbyImageData
        : "";
    return (
        <section className="mb-4 relative" id="home">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 my-auto">
                    <h5 className="max-w-2xl mb-2 font-semibold text-blue-600 lg:mb-4 md:text-xl lg:text-2xl">
                        Hey There 👋 I am
                    </h5>
                    <h1 className="max-w-2xl mb-4 text-4xl font-bold leading-none tracking-normal md:text-5xl xl:text-6xl">
                        Luca Palonca
                    </h1>
                    <h1 className="max-w-2xl mb-2 text-gray-500 lg:mb-4 text-md lg:text-2xl">
                        <span className="font-semibold text-black">Full-Stack Software Engineer</span>
                    </h1>
                    <p className="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl mb-8">
                    I have more than 3 years of experience in backend engineering, software engineering, and ETL engineering. I have a master's degree in computer science. I am skilled in Python, and Javascript.
                    </p>
                    {/* <Link className="text-xl font-semibold bg-blue-600 py-3 px-8 rounded-full text-white inline"
                            to={"#contact-me"}>
                        Contact Me
                    </Link> */}
                </div>
                <div className="md:w-1/2 h-64 md:h-96 md:py-0 py-8 bg-gray-200">
                    img
                    {/* {!cssBgSVGstyle ? <GatsbyImage
                        image={image}
                        className="rounded-lg"
                        alt={altText}
                    /> : ""
                    } */}
                </div>
            </div>
            
        </section >
    );
}

const query = graphql`
query CorsoFPVHeroQuery {
    allFile(filter: {relativePath: {eq: "corso-fpv/corso-1.jpg"}}) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(height: 650, placeholder: BLURRED, formats: [AUTO, WEBP])
          }
        }
      }
    }
  }
`;

export default Hero