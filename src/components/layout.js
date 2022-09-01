import React from 'react'

import Header from './header'
import Footer from './footer'

const Layout = ({children}) => {
  return (
    <div className="max-w-7xl flex flex-col mx-auto p-4 sm:p-6">
        <Header />
            <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout
