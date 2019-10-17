import {usersApi} from "../components/api/api";
import {updateObjectInArray} from "../utils/objects-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOGGLE_LOADER = 'SET_TOGGLE_LOADER';
const SET_TOGGLE_BUTTON_DISABLED = 'SET_TOGGLE_BUTTON_DISABLED';

const initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 5,
    toggleLoader: false,
    buttonDisabled: [],
    fake: 10
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FAKE':
            return {
                ...state,
                fake: state.fake + 1
            };
        case FOLLOW:
            return {
                ...state,
                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })*/
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };

        case UNFOLLOW:
            return {
                ...state,
                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })*/
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };

        case SET_USERS:
            return {...state, users: action.users};

        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOGGLE_LOADER:
            return {...state, toggleLoader: action.toggleLoader};
        case SET_TOGGLE_BUTTON_DISABLED:
            return {
                ...state,
                buttonDisabled: action.buttonDisabled
                    ? [...state.buttonDisabled, action.userId]
                    : state.buttonDisabled.filter(id => id !== action.userId)
            };

        default:
            return state;
    }
};


export const followAccept = (userId) => ({type: FOLLOW, userId});
export const unfollowAccept = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber});
export const setToggleLoader = (toggleLoader) => ({type: SET_TOGGLE_LOADER, toggleLoader});
export const setToggleButtonDisabled = (buttonDisabled, userId) => ({
    type: SET_TOGGLE_BUTTON_DISABLED,
    buttonDisabled,
    userId
});

export const getUsers = (pageNumber, pageSize) => {
    return  async (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(setToggleLoader(true));
        const data = await usersApi.getUsers(pageNumber, pageSize);
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
            dispatch(setToggleLoader(false));
    }
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
dispatch(setToggleButtonDisabled(true, userId));
    const data = await apiMethod(userId);
        if (data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(setToggleButtonDisabled(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersApi.followApi.bind(usersApi), followAccept)
};

export const unfollow = (userId) => async (dispatch) => {
    const apiMethod = usersApi.unfollowApi.bind(usersApi);
    const actionCreator = unfollowAccept;

    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
};


export default usersReducer;