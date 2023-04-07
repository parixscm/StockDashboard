/**
 * 파일 역할: 대시보드 컴포넌트 (in 메인 페이지)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.04.07.
 */

import { useContext } from "react";
import { mockCompanyDetails } from "../constants/mock";
import Header from "./Header";
import Overview from "./Overview";
import Details from "./Details";
import Chart from "./Chart";
import ThemeContext from "../context/ThemeContext";

function Dashboard() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen p-10 grid gap-6 auto-rows-fr grid-cols-1 grid-rows-8 font-quicksand md:grid-cols-2 md:grid-rows-7 xl:grid-cols-3 xl:grid-rows-5 ${
        isDarkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="flex justify-start items-center col-span-1 row-span-1 md:col-span-2 xl:col-span-3">
        <Header name={mockCompanyDetails.name} />
      </div>
      <div className="row-span-4 md:col-span-2 text-sm">
        <Chart />
      </div>
      <div>
        <Overview
          symbol={mockCompanyDetails.ticker}
          price={300}
          change={30}
          changePercent={10.0}
          currency={"USD"}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={mockCompanyDetails} />
      </div>
    </div>
  );
}

export default Dashboard;
