import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "My first post", likesCount: 15},
                {id: 2, message: "My best post", likesCount: 10},
                {id: 3, message: "It's my friend", likesCount: 12},
                {id: 4, message: "Aloha baby", likesCount: 0},
            ],
            textAreaVal: "React kamasutra"
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Vasiliy"},
                {id: 2, name: "Valerka"},
                {id: 3, name: "Jonne"},
                {id: 4, name: "Missi"},
                {id: 5, name: "Octobus"}
            ],
            messages: [
                {id: 1, message: "How are you?"},
                {id: 2, message: "I am the best"},
                {id: 3, message: "Who are you?"},
                {id: 4, message: "When you going home"},
                {id: 5, message: "Oki doki"}
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: "Gosha"},
                {id: 2, name: "Gogi"},
                {id: 3, name: "Givi"},
            ]
        }
    },
    _renderEntireTree() {
        console.log('it is a new post')
    },

    getState() {
        return this._state
    },
    subscribe(observe) {
        this._renderEntireTree = observe
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._renderEntireTree(this._state);
    }

}





window.store = store;

export default store;
