import React from "react"
import {createActionNewMessageAdd, createActionTextCountMess} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        state: state.messagesPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDialog: () => {
            dispatch(createActionNewMessageAdd())
        },
        newTextMes: (text) => {
            dispatch(createActionTextCountMess(text))
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;