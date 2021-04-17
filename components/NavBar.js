import React, { useState } from "react";
import styles from "./../styles/NavBar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import { Hidden, IconButton, makeStyles, TextField } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      color: "white",
    },
    input: {
      color: "white"
    }
  },
}));

export default function NavBar(props) {
  let [searchClass, setSearchClass] = useState(false);
  let [searchValue, setSearchValue] = useState("")
  const classes = useStyles();

  const handleSearchBar = () => {
    if (searchClass) {
      setSearchClass(false);
    } else {
      setSearchClass(true);
    }
  };

  const handleSearchTerm = (e) => {
    e.preventDefault();
    props.searchTerm(e.target.value);
    setSearchValue(e.target.value)
  };

  return (
    <React.Fragment>
      <div className={styles.nav}>
       { !searchClass ? <h2 className={styles.header}>Vocab</h2> : ""}
        <div className={styles.searchBar}>
          <IconButton aria-label="search">
          {  !searchClass ? <SearchIcon onClick={handleSearchBar} style={{ color: "white" }} /> :
            <CloseIcon onClick={handleSearchBar} style={{ color: "white" }} />}
          </IconButton>
          {searchClass ? (
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              style={{ color: "white" }}
            >
              <TextField
                id="searchTerm"
                onChange={handleSearchTerm}
                autoFocus={searchClass}
                className={classes.root}
                value={searchValue}
                InputProps={{
                  className: classes.input
                }}
              />
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
