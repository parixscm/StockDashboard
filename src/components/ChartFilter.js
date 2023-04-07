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
