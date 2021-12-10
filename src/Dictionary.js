import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  function updateChange(event) {
    console.log(event);
    console.log(event.target.value);
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
