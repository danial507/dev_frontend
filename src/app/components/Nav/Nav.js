'use client'
import { useState, useEffect } from 'react'
import { IconButton } from '@material-tailwind/react'
import Script from 'next/script'
import Logo from '../elements/Logo'
import NavList from './NavList'
import NavMobile from './NavMobile'
import NavButtons from './NavButtons'

export default function Nav() {
  const [openNav, setOpenNav] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (localStorage.getItem('color-theme') === 'dark') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  return (
    <nav
      className="block w-full shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 dark:bg-[#303b51] bg-[linear-gradient(90deg, rgba(246, 246, 246, 0.80) 0%, rgba(246, 246, 246, 0.60) 100%);
1x
] text-white mx-auto py-2 px-4 py-4 md:py-[1.6rem] md:h-[100px] "
    >
      <Script id="manage-theme-change">
        {`
          var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});
          `}
      </Script>
      <div className="mx-auto flex items-center justify-between dark:text-white text-blue-gray-900">
        <Logo with={180} height={41} theme={theme} />
        <NavList />
        <NavButtons setTheme={setTheme} />
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <NavMobile open={openNav} />
    </nav>
  )
}
