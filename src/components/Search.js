/**
 * 파일 역할: 서치바 컴포넌트 (in 헤더 컴포넌트)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.22.
 */

import { useContext, useState } from "react";
import { mockSearchResult } from "../constants/mock";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { searchSymbols } from "../api/fetchStock";
import SearchResults from "./SearchResults";
import ThemeContext from "../context/ThemeContext";

function Search() {
  const { isDarkMode } = useContext(ThemeContext);
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResults = await searchSymbols(input);
        const result = searchResults.result;
        setBestMatches(result);
      }
    } catch (error) {
      setBestMatches([]);
      console.error(error);
    }
  };

  return (
    <div
      className={`w-96 my-4 flex items-center relative  border-2 rounded-md z-50 ${
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
        onKeyDown={e => {
          if (e.key === "Enter") {
            updateBestMatches();
          }
        }}
      />
      {input && (
        <button onClick={clear} className="m-1">
          <XMarkIcon className="w-4 h-4 fill-gray-500" />
        </button>
      )}
      <button
        onClick={updateBestMatches}
        className="w-8 h-8 m-1 p-2 flex items-center justify-center bg-indigo-600 rounded transition duration-200 hover:ring-2 ring-indigo-400"
      >
        <MagnifyingGlassIcon className="w-4 h-4 fill-gray-100" />
      </button>
      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null}
    </div>
  );
}

export default Search;
