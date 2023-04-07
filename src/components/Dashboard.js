/**
 * 파일 역할: 대시보드 컴포넌트 (in 메인 페이지)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.04.07.
 */

import { useContext, useState, useEffect, useCallback } from "react";
import { fetchQuote, fetchStockDetails } from "../api/fetchStock";
import Header from "./Header";
import Overview from "./Overview";
import Details from "./Details";
import Chart from "./Chart";
import ThemeContext from "../context/ThemeContext";
import StockContext from "../context/StockContext";

function Dashboard() {
  const { stockSymbol } = useContext(StockContext);
  const { isDarkMode } = useContext(ThemeContext);
  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});

  const updateStockDetails = useCallback(async () => {
    try {
      const result = await fetchStockDetails(stockSymbol);
      setStockDetails(result);
    } catch (error) {
      setStockDetails({});
      console.log(error);
    }
  }, [stockSymbol]);

  const updateStockOverview = useCallback(async () => {
    try {
      const result = await fetchQuote(stockSymbol);
      setQuote(result);
    } catch (error) {
      setQuote({});
      console.log(error);
    }
  }, [stockSymbol]);

  useEffect(() => {
    // const updateStockDetails = async () => {
    //   try {
    // const result = await fetchStockDetails(stockSymbol);
    // setStockDetails(result);
    //   } catch (error) {
    // setStockDetails({});
    // console.log(error);
    //   }
    // };

    // const updateStockOverview = async () => {
    // try {
    //   const result = await fetchQuote(stockSymbol);
    //   setQuote(result);
    // } catch (error) {
    //   setQuote({});
    //   console.log(error);
    // }
    // };

    updateStockDetails();
    updateStockOverview();
    // }, [stockSymbol]);
  }, [updateStockDetails, updateStockOverview]);

  return (
    <div
      className={`min-h-screen p-10 grid gap-6 auto-rows-fr grid-cols-1 grid-rows-8 font-quicksand md:grid-cols-2 md:grid-rows-7 xl:grid-cols-3 xl:grid-rows-5 ${
        isDarkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="flex justify-start items-center col-span-1 row-span-1 md:col-span-2 xl:col-span-3">
        <Header name={stockDetails.name} />
      </div>
      <div className="row-span-4 md:col-span-2 text-sm">
        <Chart />
      </div>
      <div>
        <Overview
          symbol={stockSymbol}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={stockDetails} />
      </div>
    </div>
  );
}

export default Dashboard;
