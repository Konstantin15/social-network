import React from 'react';
import {compose} from 'redux';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId=this.props.authId;
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId);
        this.props.getUserStatus(userId)
    }

    render() {
        //console.log('Render')
        return (
            <Profile {...this.props} />
        )
    }
}

/*const withAuthComponent = withAuthRedirect(ProfileContainer);*/

const mapStateToProps = (state) => {
    //console.log('mapStateToProps')
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus}),
    withRouter,
    /*withAuthRedirect*/
)(ProfileContainer)