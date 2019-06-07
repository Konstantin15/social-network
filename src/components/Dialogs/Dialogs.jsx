import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";


const Dialogs = (props) => {
    const dialogsNewArr = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    const messagesNewArr = props.state.messages.map(m => <DialogMessage message={m.message}/>)


    const addDialog = () => {
        props.addDialog();
    }

    const newTextMes = (e) => {
        const target = e.target;
        const text = target.value;
        props.newTextMes(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>{dialogsNewArr}</div>
                <div>
                    <textarea placeholder='Hello, enter your message' onChange={newTextMes} value={props.state.newMessageText}/>
                </div>
                <div>
                    <button onClick={ addDialog }>Add dialog</button>
                </div>
            </div>
            <div className={s.messageItems}>
                <div>{messagesNewArr}</div>
            </div>
        </div>
    )
}

export default Dialogs