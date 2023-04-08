/**
 * 파일 역할: 검색 결과 리스트 컴포넌트 (in 서치 컴포넌트)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.04.08.
 */

import { useContext } from "react";
import StockContext from "../context/StockContext";
import ThemeContext from "../context/ThemeContext";

function MatchLine({ match, setInput }) {
  const { isDarkMode } = useContext(ThemeContext);
  const { setStockSymbol } = useContext(StockContext);

  return (
    <li
      onClick={() => {
        setStockSymbol(match.symbol);
        setInput("");
      }}
      key={match.symbol}
      className={`m-2 p-4 text-sm flex items-center justify-between rounded-md cursor-pointer ${
        isDarkMode ? "hover:bg-indigo-600" : "hover:bg-indigo-200"
      } transition duration-300 md:text-base`}
    >
      <span>{match.symbol}</span>
      <span className="text-xs md:text-sm">{match.description}</span>
    </li>
  );
}

export default MatchLine;
