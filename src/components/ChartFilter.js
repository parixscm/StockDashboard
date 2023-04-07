/**
 * 파일 역할: 차트 필터(day, week, month, year) 컴포넌트 (in 차트 컴포넌트)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.22.
 */

function ChartFilter({ text, isActive, clickHandler }) {
  return (
    <button
      onClick={clickHandler}
      className={`w-12 h-8 m-2 border-1 rounded-md flex items-center justify-center cursor-pointer ${
        isActive
          ? "bg-indigo-600 border-indigo-700 text-gray-100"
          : "border-indigo-300 text-indigo-300"
      }`}
    >
      {text}
    </button>
  );
}

export default ChartFilter;
