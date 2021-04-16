import React, { useState } from "react";
import styles from "./../styles/NavBar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import { Hidden, IconButton, makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      color: "white",
    },
  },
}));

export default function NavBar(props) {
  let [searchClass, setSearchClass] = useState(false);

  const classes = useStyles();

  const handleSearchBar = () => {
    if (searchClass) {
      setSearchClass(false);
    } else {
      setSearchClass(true);
    }
  };
  
  const handleSearchTerm = (e) => {
      e.preventDefault()
      props.searchTerm(e.target.value)
  }

  return (
    <React.Fragment>
      <div className={styles.nav}>
        <h2 className={styles.header}>Vocab</h2>
        <div className={styles.searchBar}>
          <IconButton aria-label="search">
            <SearchIcon
              onClick={handleSearchBar}
              style={{ color: "white" }}
            />
          </IconButton>
          {searchClass ? (
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="searchTerm"  onChange={handleSearchTerm}/>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
