import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuthUser: state.auth.isAuthUser
    }
};

export const withAuthRedirect = (Component) => {

    class redirectComponent extends React.Component {
        render() {
            if(!this.props.isAuthUser) return <Redirect to="/login"/>

            return <Component {...this.props} />
        }
    }

    const authContainerRedirect = connect(mapStateToProps)(redirectComponent);

    return authContainerRedirect;
};
