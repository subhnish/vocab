import React from "react";
import styles from "../styles/Word.module.css";

export default function Word(props) {
  let { title, results } = props;
  /*
    ---Format---
    Results
        LexicalEntries
            [LexicalCategory]
            Entries
                Senses
                    [Definations] - Optional
    */

  let renderResults = results.map((result) => {
    return (result.lexicalEntries.map((lexEnt) => {
      return (
        <React.Fragment>
          <i className={styles.lxc}>({lexEnt.lexicalCategory.text})</i>
          {(lexEnt.entries.map((entry) => {
            return (
              <React.Fragment>
                {(entry.senses.map((sense) => {
                  return (
                    <React.Fragment>
                      {(sense.definitions ? sense.definitions.map((definition) => (
                        <p className={styles.dfn}>{definition}</p>
                      )): "")}
                    </React.Fragment>
                  );
                }))[0]}
              </React.Fragment>
            );
          }))[0]}
        </React.Fragment>
        
      );
    }));
  });

  return (
    <React.Fragment>
      <div className={styles.wordCard}>
        <h2>{title}</h2>
        <p>{renderResults}</p>
        </div>
        <hr className={styles.hr}/>
    </React.Fragment>
  );
}
