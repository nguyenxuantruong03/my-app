"use client"
import { useState } from "react";
import { SearchBar } from "./components/searchBar";
import { SearchResult, SearchResultsList } from "./components/serchResultList";



function SearchPage() {
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false);
  return (
      <div>
        <SearchBar setResults={setResults} setLoading={setLoading}/>
        <SearchResultsList results={results} loading={loading}/>
    </div>
  );
}

export default SearchPage;
