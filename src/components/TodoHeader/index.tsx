
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";


const TodoHeader = () => {

  const { theme,toggleTheme } = useContext(ThemeContext);

    return (
         <header className="flex justify-between p-5 items-centermb-6">
        <h1 className="text-white text-4x1 sm:text-[2.5rem] font-bold tracking[1rem]">
          T O D O
        </h1>

        <button className="cursor-pointer" onClick={toggleTheme}>
          <img className="w-8 h-8" src={`${themeConfig[theme].icon}`} alt="Alternar Tema"/>
        </button>
      </header>
    )}

export default TodoHeader;