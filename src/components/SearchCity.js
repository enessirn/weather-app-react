import React, { useEffect, useState } from "react";
function SearchCity() {
  const [term, setTerm] = useState("");
  useEffect(() => {
    console.log(term);
  }, [term]);
  
  return (
    <div>
      <input
        className="outline-none border-none w-80 text-[20px] px-4 rounded-xl h-12"
        placeholder="Enter a city... e.g Samsun"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        required
      />
    </div>
  );
}

export default SearchCity;
