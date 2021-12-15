import React from "react";

export default function Synonyms(props) {
  return (
    <div>
      {props.synonyms.map(function (synonym, index) {
        return (
          <div>
            <div key={index}>{synonym}</div>
          </div>
        );
      })}
    </div>
  );
}
