/**
 * 파일 역할: 메인 페이지
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.04.07.
 */

import { useState } from "react";
import Dashboard from "./components/Dashboard";
import ThemeContext from "./context/ThemeContext";
import StockContext from "./context/StockContext";

function App() {
  const [stockSymbol, setStockSymbol] = useState("TSLA");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="text-2xl font-quicksand">
      {/* isDarkMode, stockSymbol -> 전역 상태 관리 */}
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
          <Dashboard />
        </StockContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
