import React from "react";
import styles from "../styles/Word.module.css";

export default function WordModal(props) {
  let { title, results } = props;
  /*
    ---Format---
    Results
        LexicalEntries
            [LexicalCategory]
            Entries
                [Etymologies] (Optional)
                Senses
                    [Definations] 
                    [Examples] (Optional)
    */

  let renderResults = results.map((result) => {
    return result.lexicalEntries.map((lexEnt) => {
      return (
        <React.Fragment>
          <i className={styles.lxc}>{lexEnt.lexicalCategory.text}</i>
          {lexEnt.entries.map((entry) => {
            return (
              <React.Fragment>
                {entry.etymologies
                  ? entry.etymologies.map((etymology) => (
                      <p className={styles.etm}>Origin: {etymology}</p>
                    ))
                  : ""}
                {entry.senses.map((sense) => {
                  return (
                    <React.Fragment>
                      {sense.definitions
                        ? sense.definitions.map((definition) => (
                            <p className={styles.dfn}>{definition}</p>
                          ))
                        : ""}
                      <ul className={styles.exm}>
                        {sense.examples
                          ? sense.examples.map((example) => (
                              <li>{example.text}</li>
                            ))
                          : ""}
                      </ul>
                    </React.Fragment>
                  );
                })}
              </React.Fragment>
            );
          })}
        </React.Fragment>
      );
    });
  });

  return (
    <React.Fragment>
      <div>
        <h2>{title}</h2>
        <div className={styles.wordInfo}><p>{renderResults}</p></div>
        <hr className={styles.hr} />
      </div>
    </React.Fragment>
  );
}
