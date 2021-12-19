import React from "react";
import "./Results.css";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import Photos from "./Photos";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    console.log(props.results.phonetics[0].text);
  }
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>
            <strong>{props.results.word}</strong>
          </h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index} className="phonetic">
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}{" "}
        </section>
        <section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meanings meaning={meaning} />
              </div>
            );
          })}
        </section>
        <Photos photos={props.photos} keyword={props.keyword} />
      </div>
    );
  } else {
    return null;
  }
}
