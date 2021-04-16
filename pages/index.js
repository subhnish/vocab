import Head from "next/head";
import AddButton from "../components/AddButton";
import NavBar from "../components/NavBar";
import WordsContainer from "../components/WordsContainer";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";

export default function Home(props) {
  let [data, setData] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");
  let [filtered, setFilter] = useState([]);
  

  useEffect(async () => {
   updateData()
  }, [data]);

  //Function to call through props when Data get Updated through Add Button Form
  const updateData = async () => {
    const getWords = async () => {
      let response = await fetch("/api/word/getAllWords");
      return await response.json();
    };
    let wordsData = await getWords();
    if(wordsData.length !== data.length) {
    setData([...wordsData]);
    setFilter([...wordsData]);
    }
  }

  const handleSearchTerm = (value) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchTerm.length > 0) {
        let regEx = new RegExp(`${searchTerm}`, "i");
        let results = data.map((x) => {
          let { word } = x;
          let found = regEx.test(word);
          if (found) return x;
        });
        results = results.filter((x) => x);
        setFilter(results);
      } else if (data.length !== 0) {
        setFilter(data);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  return (
    <React.Fragment>
      <Head>
        <title>Vocabulary App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainWrapper}>
        <NavBar searchTerm={handleSearchTerm} />
        <div className={styles.content}>
          <div className={styles.innerContent}>
            <h1 className={styles.heading1}>Word List</h1>
            <div className={styles.wordsContainer}>
              {data.length !== 0 ? <WordsContainer data={filtered} /> : ""}
            </div>
            <AddButton 
            updateData={updateData}
            />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
