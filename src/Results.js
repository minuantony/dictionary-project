import React from "react";
import "./Results.css";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    console.log(props.results.phonetics[0].text);
  }
  if (props.results) {
    return (
      <div className="Results">
        <h2>
          <mark>{props.results.word}</mark>
        </h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}
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
