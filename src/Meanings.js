import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  console.log(props);
  if (props != null) {
    return (
      <div className="Meanings">
        <section>
          <h4 className="partOfSpeech">
            <em>{props.meaning.partOfSpeech}</em>
          </h4>
          <div className="definition">
            {props.meaning.definitions[0].definition}
          </div>
          <div className="example">
            <em>
              <strong>Eg:</strong> "{props.meaning.definitions[0].example}"
            </em>
          </div>
          <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
        </section>
      </div>
    );
  } else {
    return null;
  }
}
