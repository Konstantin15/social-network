import React from "react"
import s from "./../Dialogs.module.css"

const DialogMessage = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}

export default DialogMessage;