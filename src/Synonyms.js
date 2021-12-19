import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props);
  if (props) {
    return (
      <div>
        <ul className="synonyms">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li className="synonym" key={index}>
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
