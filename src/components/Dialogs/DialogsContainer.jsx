import React from "react";
import {compose} from 'redux';
import {createActionNewMessageAdd} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";


const mapStateToProps = (state) => {
    return {
        state: state.messagesPage,
    }
};

/*const withAuthComponent = withAuthRedirect(Dialogs)*/

const mapDispatchToProps = (dispatch) => {
    return {
        addDialog: (newMessageDialogs) => {
            dispatch(createActionNewMessageAdd(newMessageDialogs))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);