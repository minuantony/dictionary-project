import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props);
  if (props != null) {
    return (
      <div className="Meanings">
        <h4 className="partOfSpeech">{props.meaning.partOfSpeech}</h4>
        <div className="definition">
          {props.meaning.definitions[0].definition}
        </div>
        <div className="example">
          <em>Eg:{props.meaning.definitions[0].example}</em>
        </div>
        <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
        <br />
      </div>
    );
  } else {
    return null;
  }
}
