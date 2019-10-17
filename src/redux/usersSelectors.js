import {createSelector} from "reselect";

const getDataUsersSelector = (state) => {
    return state.usersPage.users;
};

export const getDataUsers = createSelector(getDataUsersSelector, (users) => {
    debugger
    return users.filter( u => true)
});

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
};

export const getPageSize = (state) => {
    return state.usersPage.pageSize
};

export const getToggleLoader = (state) => {
    return state.usersPage.toggleLoader
};

export const getSetToggleButtonDisabled = (state) => {
    return state.usersPage.setToggleButtonDisabled
};

export const getButtonDisabled = (state) => {
    return state.usersPage.buttonDisabled
};