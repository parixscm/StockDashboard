/**
 * 파일 역할: 디테일 컴포넌트 (in 대시보드 컴포넌트)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.22.
 */

import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Card from "./Card";

function Details({ details }) {
  const { isDarkMode } = useContext(ThemeContext);

  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = number => {
    return (number / 1000).toFixed(2);
  };

  return (
    <Card>
      <ul
        className={`w-full h-full -mt-5 flex flex-col justify-between divide-y-1 md:-mt-2 xl:mt-0 ${
          isDarkMode ? "divide-gray-800" : null
        }`}
      >
        {Object.keys(detailsList).map(item => (
          <li
            key={item}
            className="flex-1 flex justify-between items-center text-sm"
          >
            <span>{detailsList[item]}</span>
            <span className="text-right font-bold">
              {item === "marketCapitalization"
                ? `${convertMillionToBillion(details[item])}B`
                : details[item]}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Details;
