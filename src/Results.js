import React from "react";
import "./Results.css";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>
          <mark>{props.results.word}</mark>
        </h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
