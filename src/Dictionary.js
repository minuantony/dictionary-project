import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function showResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResponse);
  }
  function updateChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search a word"
          autoFocus={true}
          onChange={updateChange}
        />
        <input type="submit" value="Search" />
      </form>
      <br />
      <Results results={results} />
    </div>
  );
}
