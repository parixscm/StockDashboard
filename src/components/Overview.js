/**
 * 파일 역할: 오버뷰 컴포넌트 (in 대시보드 컴포넌트)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.22.
 */

import Card from "./Card";

function Overview({ symbol, price, change, changePercent, currency }) {
  return (
    <Card>
      <span className="absolute left-2 top-2 text-neutral-400 text-lg xl:text-xl 2xl:text-2xl">
        {symbol}
      </span>
      <div className="w-full h-full flex items-center justify-around">
        <span className="flex items-center text-base xl:text-2xl">
          ${price}
        </span>
        <span className="m-2 text-base text-neutral-400 xl:text-xl">
          {currency}
        </span>
        <span
          className={`text-base text-neutral-400 xl:text-xl ${
            change > 0 ? "text-lime-500" : "text-red-500"
          }`}
        >
          {change} <span>({changePercent})%</span>
        </span>
      </div>
    </Card>
  );
}

export default Overview;
