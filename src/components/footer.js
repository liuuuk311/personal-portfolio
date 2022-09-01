import React from 'react'
import { Link } from 'gatsby'
import { menuItems } from "./header/menu-items"

const Footer = () => {
  return (

    <footer class="">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center mb-4 sm:mb-0">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Luca Palonca</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          {menuItems.map(({ link, label }) => {
            return <Link
              to={link}
              className="py-3 text-base font-semibold text-center px-3">
              {label}
            </Link>
          })}
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="/" class="hover:underline">Luca Palonca</a>. All Rights Reserved.
      </span>
    </footer>

  )
}


export default Footer