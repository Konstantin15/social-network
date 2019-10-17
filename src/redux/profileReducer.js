import {profileApi, usersApi} from "../components/api/api";

const NEW_ADD_POST = 'NEW-ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const FAKE = 'FAKE';

const initialState = {
    posts: [
        {id: 1, message: "My first post", likesCount: 15},
        {id: 2, message: "My best post", likesCount: 10},
        {id: 3, message: "It's my friend", likesCount: 12},
        {id: 4, message: "Aloha baby", likesCount: 0},
    ],
    userProfile: null,
    status: ''
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEW_ADD_POST:
            let post = {
                id: 5,
                message: action.newTextMessage,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, post]
            };

        case SET_USER_PROFILE:
            return {...state, userProfile: action.userProfile};

        case SET_USER_STATUS:
            return {...state, status: action.status};

        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.userId)};

        default:
            return state;
    }
};

export const fake = () => ({type: FAKE});

export const createActionAddPost = (newTextMessage) => ({type: NEW_ADD_POST, newTextMessage});

export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const deletePost = (userId) => ({type: DELETE_POST, userId});


export const getProfile = (userId) => async (dispatch) => {
    const data = await usersApi.getProfile(userId);
    dispatch(setUserProfile(data))
};


export const getUserStatus = (userId) => async (dispatch) => {
    const data = await profileApi.getUserStatus(userId);
    dispatch(setUserStatus(data))
};

export const updateUserStatus = (status) => async (dispatch) => {
   const data = await profileApi.updateUserStatus(status);
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
};

export default profileReducer;