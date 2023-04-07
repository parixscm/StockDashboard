/**
 * 파일 역할: 카드 컴포넌트 (in 대시보드 컴포넌트)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.22.
 */

import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Card({ children }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`w-full h-full p-8 relative rounded-md border-2 ${
        isDarkMode
          ? "bg-gray-900 border-gray-800"
          : "bg-white border-neutral-200"
      }`}
    >
      {children}
    </div>
  );
}

export default Card;
