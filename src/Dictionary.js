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
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search a word"
            autoFocus={true}
            onChange={updateChange}
            className="search-form"
          />
          <input type="submit" value="Search" />
        </form>
      </section>
      <br />

      <Results results={results} />
    </div>
  );
}
