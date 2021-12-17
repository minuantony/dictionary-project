import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props) {
    return (
      <div>
        <ul className="synonyms">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li className="synonym">
                <div key={index}>{synonym}</div>
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
