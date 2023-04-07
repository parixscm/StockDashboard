/**
 * 파일 역할: 서치 결과 컴포넌트 (in 헤더 컴포넌트)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.22.
 */

function SearchResults({ results }) {
  return (
    <ul className="w-full h-64 absolute top-14 border-2 border-neutral-200 rounded-md overflow-y-scroll custom-scrollbar bg-white">
      {results.map(result => (
        <li
          key={result.symbol}
          className="m-2 p-4 flex items-center justify-between rounded-md hover:bg-indigo-200 cursor-pointer"
        >
          <span>{result.symbol}</span>
          <span>{result.description}</span>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
