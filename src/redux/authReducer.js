import {AuthApi} from "../components/api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = 'SET_AUTH_USER';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuthUser: false
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.authUser
            };


        default:
            return state;
    }
};


export const setAuthUserData = (id, login, email, isAuthUser) => ({type: SET_AUTH_USER, authUser: {id, login, email, isAuthUser}});

export const authMe = () => (dispatch) => {
   return  AuthApi.getAuthMe().then(data => {
        if (data.resultCode === 0) {
            const {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email, true))
        }
    })
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    const data = await AuthApi.autLogin(email, password, rememberMe);
        debugger
        if (data.resultCode === 0) {
            dispatch(authMe())
        } else {
            dispatch(stopSubmit("login", {_error: data.messages.length > 0 ? data.messages : 'some error'}))
        }
};

export const logout = () => async (dispatch) => {
    const data = await AuthApi.autLogout();
        debugger
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
  };


export default authReducer;