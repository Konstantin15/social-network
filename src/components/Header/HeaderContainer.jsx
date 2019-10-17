import React from 'react';
import Header from "./Header";
import {authMe, logout} from "../../redux/authReducer";
import {connect} from "react-redux"


class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuthUser: state.auth.isAuthUser,
    login: state.auth.login
})

export default connect(mapStateToProps, {authMe, logout})(HeaderContainer);