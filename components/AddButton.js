import {makeStyles, Modal, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import styles from "./../styles/AddButton.module.css"
import AddWordForm from "./AddWordForm";
import Notification from "./Notification";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top: "10px",
        maxWidth: `fit-content`,
        backgroundColor: "white",
        left: "5%",
        right: "5%",
        padding: "1rem",
        margin: "0 auto"
    },
}))
export default function AddButton(props) {
    const [open, setOpen] = useState(false); // Form Open and Close
    const [message, setMessage] = useState("") //Set Message for Notification after Submitting form
    const [showNoti, setNoti] = useState(false) // Show Notifications

const handleNotiShow = () => {
    //Show Notificaiton for 3 Seconds
    setNoti(true)
    setTimeout(() => {
    setNoti(false)
    }, 3000);
}
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (word) => {
        let response = await fetch(`/api/word/addWord`, {
           method: "POST",
           headers: {
            'Content-Type': 'application/json'
          },
           body: JSON.stringify({word: word})
       })
       handleClose() 
       let result = await response.json()
       console.log(result)
       if(result.error) setMessage("Failed to Add the Word")
       else setMessage("Succesfully added the Word")
       handleNotiShow()
       props.updateData() // Callback to ipdate Data state in pages/index.js
    }

    return (<React.Fragment>
         <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="Add a Word"
              aria-describedby="Add a Word to the Dictionary"
            >
              <div className={classes.paper}>
          <AddWordForm
          title="Add to Dictionary"
          closeForm={handleClose}
          handleSubmit={handleSubmit}
          />
              </div>
            </Modal>
        <button
        onClick={handleOpen}
        className={styles.addbtn}>
        <span className={styles.addbtn__font}>
        +
        </span>
        </button>
       {showNoti ? <Notification 
        message={message}
        /> : ""}
    </React.Fragment>)
}