/**
 * 파일 역할: 차트 컴포넌트 (in 대시보드 컴포넌트)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.22.
 */

import Card from "./Card";
import ChartFilter from "./ChartFilter";
import StockContext from "../context/StockContext";
import ThemeContext from "../context/ThemeContext";
import {
  convertUnixTimestampToDate,
  convertDateToUnixTimestamp,
  createDate,
} from "../utils/date";
import { useCallback, useContext, useEffect, useState } from "react";
import { fetchHistoricalData } from "../api/fetchStock";

// 차트 관련 컴포넌트 불러오기
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { chartConfig } from "../constants/config";

function Chart() {
  const { isDarkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("1W");

  // 차트에서 사용하기 위한 데이터 포맷으로 변환(to UnixTimestamp)
  const formatData = data => {
    return data.c.map((item, idx) => {
      return {
        value: +item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[idx]),
      };
    });
  };

  // 기간 별 startDate, endDate 계산
  const getDateRange = useCallback(() => {
    const { days, weeks, months, years } = chartConfig[filter];
    const endDate = new Date();
    const startDate = createDate(endDate, -days, -weeks, -months, -years);

    const endDateUnix = convertDateToUnixTimestamp(endDate);
    const startDateUnix = convertDateToUnixTimestamp(startDate);

    return { startDateUnix, endDateUnix };
  }, [filter]);

  const updateChartData = useCallback(async () => {
    try {
      const { startDateUnix, endDateUnix } = getDateRange();
      const resolution = chartConfig[filter].resolution;
      const result = await fetchHistoricalData(
        stockSymbol,
        resolution,
        startDateUnix,
        endDateUnix
      );
      setData(formatData(result));
    } catch (error) {
      setData([]);
      console.log(error);
    }
  }, [getDateRange, filter, stockSymbol]);

  useEffect(() => {
    updateChartData();
  }, [stockSymbol, filter, updateChartData]);

  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map(item => (
          <li key={item}>
            <ChartFilter
              text={item}
              isActive={filter === item}
              clickHandler={() => setFilter(item)}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={isDarkMode ? "#312e81" : "rgb(199 210 514)"}
                stopOpacity="rgb(199 210 514)"
              />
              <stop
                offset="95%"
                stopColor={isDarkMode ? "#312e81" : "rgb(199 210 514)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="url(#chartColor)"
            fillOpacity={1}
            strokeWidth={0.5}
          />
          <Tooltip
            contentStyle={isDarkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={isDarkMode ? { color: "#818cf8" } : null}
          />
          <XAxis dataKey="date" />
          <YAxis type="number" domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default Chart;
