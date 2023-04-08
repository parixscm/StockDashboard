/**
 * 파일 역할: 서치바 컴포넌트 (in 헤더 컴포넌트)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.04.08.
 */

import { useContext, useEffect, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ClipLoader } from "react-spinners";
import { searchSymbols } from "../api/fetchStock";
import ThemeContext from "../context/ThemeContext";
import MatchLine from "./MatchLine";

function Search() {
  const { isDarkMode } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  useEffect(() => {
    const updateBestMatches = async () => {
      try {
        if (input) {
          setIsLoading(true);
          const searchResults = await searchSymbols(input);
          const results = searchResults.result.filter(
            item => !item.displaySymbol.includes(".")
          );
          setBestMatches(results);
          setIsLoading(false);
        }
      } catch (error) {
        setBestMatches([]);
        console.error(error);
      }
    };
    if (input.length <= 1) setBestMatches([]);
    else updateBestMatches();
  }, [input]);

  return (
    <div
      className={`w-96 my-4 flex items-center relative border-2 rounded-md z-50 ${
        isDarkMode
          ? "bg-gray-900 border-gray-800"
          : "bg-white border-neutral-200"
      }`}
    >
      <input
        type="text"
        value={input}
        placeholder="Search stock..."
        className={`w-full px-4 py-2 focus:outline-none rounded-md text-base ${
          isDarkMode ? "bg-gray-900" : null
        }`}
        onChange={e => setInput(e.target.value)}
      />
      {input && (
        <button onClick={clear} className="m-1">
          <XMarkIcon className="w-4 h-4 fill-gray-500" />
        </button>
      )}
      <div className="w-8 h-8 m-1 p-2 flex items-center justify-center rounded">
        <MagnifyingGlassIcon className="w-4 h-4 fill-gray-700" />
      </div>
      {input.length >= 2 && (
        <ul
          className={`w-full h-64 absolute top-14 border-2 rounded-md overflow-y-scroll ${
            isDarkMode
              ? "bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark"
              : "border-neutral-200 bg-white custom-scrollbar"
          }`}
        >
          {isLoading ? (
            <div className="w-full h-full flex justify-center items-center">
              <ClipLoader
                size={23}
                width={23}
                height={23}
                color={isDarkMode ? "white" : "indigo"}
              />
            </div>
          ) : (
            bestMatches.map((match, idx) => (
              <MatchLine key={idx} match={match} setInput={setInput} />
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default Search;
