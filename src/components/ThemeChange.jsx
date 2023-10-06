import { useEffect } from "react";
import { useState } from "react"

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
      <button className="bg-slate-200 px-4 py-2 rounded h-20 hover:bg-slate-300 dark:bg-slater-950"
        onClick={handleChangeTheme}
    >
        Cambiar Tema 
      </button>
    </>
  )
}

export default ThemeChange
