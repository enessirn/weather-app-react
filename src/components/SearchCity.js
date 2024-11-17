import React, { useState, useContext } from "react";
import ApiContext from "../context/ApiContext";
function SearchCity() {
  const { setQuery } = useContext(ApiContext);
  const [term, setTerm] = useState("");

  const updateQuery = (e) => {
    e.preventDefault();
    setTerm(term.trim())
    setQuery(term)
    setTerm("")
  }
  return (
    <form onSubmit={updateQuery}>
      <input
        className="outline-none border-none w-80 text-[20px] px-4 rounded-xl h-12"
        placeholder="Enter a city... e.g Samsun"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        required
      />
    </form>
  );
}

export default SearchCity;
