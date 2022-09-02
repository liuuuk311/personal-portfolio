import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <Link to={"/"} class="inline-flex text-xl font-semibold bg-blue-600 py-3 px-8 rounded-full text-white">
              Back to Homepage
            </Link>

            <img src="https://i.giphy.com/media/j6aoUHK5YiJEc/giphy.webp" alt="Not Found" className="mx-auto my-8"/>
        </div>   
    </div>
</section>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
