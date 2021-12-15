import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div>
      <a href={props.phonetic.audio} target="_blank">
        {" "}
        Listen{" "}
      </a>
      <div>{props.phonetic.text}</div>
    </div>
  );
}
