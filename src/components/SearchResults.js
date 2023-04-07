/**
 * 파일 역할: 서치 결과 컴포넌트 (in 헤더 컴포넌트)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.22.
 */

import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function SearchResults({ results }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <ul
      className={`w-full h-64 absolute top-14 border-2 rounded-md overflow-y-scroll ${
        isDarkMode
          ? "bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark"
          : "border-neutral-200 bg-white custom-scrollbar"
      }`}
    >
      {results.map(result => (
        <li
          key={result.symbol}
          className={`m-2 p-4 text-sm flex items-center justify-between rounded-md cursor-pointer ${
            isDarkMode ? "hover:bg-indigo-600" : "hover:bg-indigo-200"
          } md:text-base`}
        >
          <span>{result.symbol}</span>
          <span>{result.description}</span>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
