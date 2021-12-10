import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function showResponse(response) {
    console.log(response.data);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResponse);
  }
  function updateChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search a word"
          autoFocus={true}
          onChange={updateChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
