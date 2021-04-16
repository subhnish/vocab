import React from "react"

export default function Notification(props) {

return (
    <React.Fragment>
    <div style={{
        position: "fixed",
        bottom: "1rem",
        width: "90%",
        left: "5%",
        right: "5%",
        backgroundColor: "#000",
        color: "white",
        borderRadius: "10px"
    }}>
    <p style={{
        margin: "1rem"
    }
    }>{props.message}</p>
    </div>

    </React.Fragment>
)
}