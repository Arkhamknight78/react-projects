import { useState } from "react";
import { ThemeProvider } from "./context/Theme";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/card";

function App() {
  const [themeMode, setThemeMode]= useState("light")
  const darkTheme=()=> setThemeMode("dark")
  const lightTheme=()=> setThemeMode("light")

  //actual change in theme
  useEffect(()=>{
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(`${themeMode}`)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* theme vtn */}
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          {/* cards */}
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
