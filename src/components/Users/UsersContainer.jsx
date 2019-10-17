import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {getUsers, follow, unfollow} from "../../redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import {
    getButtonDisabled,
    getCurrentPage,
    getDataUsers,
    getPageSize,
    getSetToggleButtonDisabled,
    getToggleLoader,
    getTotalUsersCount
} from "../../redux/usersSelectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        /*this.props.setToggleLoader(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
            this.props.setToggleLoader(false);
        })*/
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

    render() {
        //console.log('Render users')
        return <>
            {this.props.toggleLoader ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                buttonDisabled={this.props.buttonDisabled}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    //console.log('mapStateToProps')
    return {
        users: getDataUsers(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        toggleLoader: getToggleLoader(state),
        setToggleButtonDisabled: getSetToggleButtonDisabled(state),
        buttonDisabled: getButtonDisabled(state)
    }
};

/*const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setToggleLoader: (toggleLoader) => {
            dispatch(setToggleLoaderAC(toggleLoader))
        }
    }
};*/


export default connect(mapStateToProps, {
    getUsers,
    follow,
    unfollow
})(UsersContainer);