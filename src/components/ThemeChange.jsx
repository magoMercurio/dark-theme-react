import { useEffect, useState } from "react";

import LightIcon from "../assets/icon/LigthIcon";
import MoonIcon from "../assets/icon/MoonIcon";

function ThemeChange() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
});

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  return (
    <>
      <button className=" rounded-full w-7 h-7 hover:bg-blue-500 dark:hover:bg-red-500  flex items-center justify-center"
        onClick={handleChangeTheme}
    >        
      {theme === 'light' ? <LightIcon /> : <MoonIcon />}

      </button>
    </>
  )
}

export default ThemeChange
