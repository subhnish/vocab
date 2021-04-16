import React from "react";
import Word from "./Word";
import WordModal from "./WordModal";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styles from "../styles/WordsContainer.module.css"
import {IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top: "0",
        maxWidth: `100vw`,
        height: "100vh",
        backgroundColor: "white",
        left: "0",
        right: "0",
        bottom: "0",
        padding: "1rem",
        margin: "0 auto",
    },
}))

export default function WordsContainer(props) {
    let { data } = props;
    const [open, setOpen] = React.useState({});
    const classes = useStyles();

    const handleOpen = (wordId) => {
        setOpen(prevState=> {
          return {...prevState, [wordId]: true}
        });
    };

    const handleClose = (wordId) => {
      setOpen(prevState=> {
        return {...prevState, [wordId]: false}
      });
    };

    let renderContent = data.map(x => {
        return (
          <React.Fragment>
            <Modal
              open={open[x.wordId]}
              // style={{overflowY: "scroll"}}
              onClose={handleClose}
              aria-labelledby="Word"
              aria-describedby="Word Details"
            >
              <div className={classes.paper}>
                <div className={styles.formCloseBtn} style={{
                  display: "flex",
                  flexDirection: "row-reverse"
                }}>
                <IconButton
                  onClick={()=>handleClose(x.wordId)}
                >
                  <CloseIcon />
                </IconButton>
                </div>
              
                <WordModal title={x.word} results={x.results} />
              </div>
            </Modal>
            <div onClick={()=>handleOpen(x.wordId)}>
              <Word title={x.word} results={x.results} />
            </div>
          </React.Fragment>
        );
    })
    return (<React.Fragment>
            {renderContent}
    </React.Fragment>)
}