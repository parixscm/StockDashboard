/**
 * 파일 역할: 메인 페이지
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.04.07.
 */

import { useState } from "react";
import Dashboard from "./components/Dashboard";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="text-2xl font-quicksand">
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <Dashboard />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
