import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white'>
    {children}
    </div>
  )
}

export default Layout
