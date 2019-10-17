import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": '8b1f15f2-93db-4ece-b769-3037bd519df6'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getProfile(userId) {
        console.warn('Please use new method in object profileApi');
        return profileApi.getProfile(userId);
    },
    unfollowApi(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    followApi(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    }
};

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    }
};

export const AuthApi = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    autLogin(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    autLogout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
};