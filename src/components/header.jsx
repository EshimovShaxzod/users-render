import React from 'react'
import PersonLogo from '../assets/logo/Person-logo.png'
import { useEffect, useState, useRef } from 'react';

const Header = () => {

    const darkIcon = useRef()

  const [theme, setTheme] = useState("ligth")

  useEffect(() => {
    if(theme === 'dark'){
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const darkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className='p-5 mb-8 flex items-center justify-between shadow-sm'>
        <span className='flex items-center gap-5'>
         <img className='pointer dark:text-white' src={PersonLogo} width='60' alt="" />
         <h1 className='text-4xl dark:text-white'>Users</h1>
        </span>
        <button onClick={darkMode} className='dark:text-white'>
          Dark Mode
        </button>
    </div>
  )
}

export default Header