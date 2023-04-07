/**
 * 파일 역할: 차트 컴포넌트 (in 대시보드 컴포넌트)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.22.
 */

import Card from "./Card";
import ChartFilter from "./ChartFilter";
import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { chartConfig } from "../constants/config";
import { mockHistoricalData } from "../constants/mock";
import { convertUnixTimestampToDate } from "../utils/date";

function Chart() {
  const [data, setData] = useState(mockHistoricalData);
  const [filter, setFilter] = useState("1W");

  // Convert Rechart data format
  const formatData = data => {
    return data.c.map((item, idx) => ({
      value: item.toFixed(2),
      date: convertUnixTimestampToDate(data.t[idx]),
    }));
  };

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
        <AreaChart data={formatData(data)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgb(199 210 514)"
                stopOpacity="rgb(199 210 514)"
              />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
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
          <Tooltip />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default Chart;
