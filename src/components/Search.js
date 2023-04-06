import { useState } from "react";
import { mockSearchResult } from "../constants/mock";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import SearchResults from "./SearchResults";

function Search() {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState(mockSearchResult.result);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = () => {
    setBestMatches(mockSearchResult.result);
  };

  return (
    <div className="w-96 my-4 flex items-center relative bg-white border-2 border-neutral-200 rounded-md z-50">
      <input
        type="text"
        value={input}
        placeholder="Search stock..."
        className="w-full px-4 py-2 focus:outline-none rounded-md text-base"
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
        className="w-8 h-8 m-1 p-2 flex items-center justify-center bg-indigo-600 rounded"
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
