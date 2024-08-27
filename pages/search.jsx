import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter from next/router

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      router.push(`/searchresults/${query}`); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search query"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
