import React, {useState} from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { menuItems } from "./menu-items"
import Menu from "./menu"
import OutsideLink from "../utils/outside-link"


const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`


const Header = ({cssExtraClasses}) => {
  const { site } = useStaticQuery(query)
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  return (
    <nav className={`flex flex-col ${cssExtraClasses}`}>
      <div className="mb-8 flex flex-row justify-between md:h-24 items-center">
        <Link to={`/`} className="hidden md:inline-block">
          <span className="text-3xl font-bold">{site.siteMetadata.title}</span>
        </Link>
        <div className="flex flex-row flex-grow md:justify-end items-end">
          <Menu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
          <OutsideLink extraCssClasses="hidden ml-4 text-xl font-semibold bg-blue-600 py-3 px-8 rounded-full text-white md:inline"
                  href={"https://drive.google.com/file/d/1tWwnUNmPlW2X-9R0ZRUfEWdiI97880sI/view?usp=sharing"}>
            Download CV
          </OutsideLink>
          <Link to={`/`} className="md:hidden mx-auto">
            <span className="text-2xl font-bold">{site.siteMetadata.title}</span>
          </Link>
        </div>
      </div>
      {isNavOpen && 
          <div className="flex flex-col divide-y pt-2">
          {menuItems.map(({link, label}) => {
            return <Link 
              to={link} 
              className="py-3 w-full text-base font-semibold text-center" 
             >
                {label}
              </Link>
        })}
        </div>
      }
    </nav>
  )
}


export default Header
