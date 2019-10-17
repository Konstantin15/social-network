import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/formControl/FormControl";
import {maxLengthCreator, required} from "../../utils/Validator";

const maxLength15 = maxLengthCreator(15)

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={'newMessageDialogs'} placeholder='Hello, enter your message'
                       validate={[required, maxLength15]}/>
            </div>
            <div>
                <button>Add dialog</button>
            </div>
        </form>
    )
};

const DialogsFromRedux = reduxForm({form: 'formNewMessageDialogs'})(DialogsForm)

const Dialogs = (props) => {

    const dialogsNewArr = props.state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    const messagesNewArr = props.state.messages.map(m => <DialogMessage key={m.id} message={m.message}/>)


    const addDialog = (formData) => {
        props.addDialog(formData.newMessageDialogs);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>{dialogsNewArr}</div>
                <DialogsFromRedux onSubmit={addDialog}/>
            </div>
            <div className={s.messageItems}>
                <div>{messagesNewArr}</div>
            </div>
        </div>
    )
}

export default Dialogs