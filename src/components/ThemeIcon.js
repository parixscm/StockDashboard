/**
 * 파일 역할: 테마 설정 컴포넌트 (in 헤더 컴포넌트)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.22.
 */

import { MoonIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeIcon() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className={`p-2 absolute right-8 rounded-lg border-1 border-neutral-400 shadow-md xl:right-32 ${
        isDarkMode ? "shadow-gray-800" : null
      }`}
      onClick={toggleDarkMode}
    >
      <MoonIcon
        className={`w-5 h-5 cursor-pointer stroke-1 fill-none stroke-neutral-400 ${
          isDarkMode
            ? "fill-yellow-400 stroke-yellow-400"
            : "fill-none stroke-neutral-400"
        }`}
      />
    </button>
  );
}

export default ThemeIcon;
