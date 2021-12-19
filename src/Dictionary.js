import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function showDictionaryResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }
  function showPixelsResponse(response) {
    console.log("abc");
    console.log(response);
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showDictionaryResponse);
    let pixelsApiKey =
      "563492ad6f91700001000001043db19c7f184526b44650aaf405bb8e";
    let pixelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pixelsApiUrl, {
        headers: { Authorization: `Bearer ${pixelsApiKey}` },
      })
      .then(showPixelsResponse);
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
        <h5>
          <strong>What word you want to look up?</strong>
        </h5>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search a word"
            autoFocus={true}
            onChange={updateChange}
            className="search-form"
          />
        </form>
      </section>

      <Results results={results} photos={photos} />
    </div>
  );
}
