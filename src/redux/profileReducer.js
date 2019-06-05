const TEXT_COUNT_POST = 'TEXT-COUNT-POST';
const NEW_ADD_POST = 'NEW-ADD-POST';
const NEW_MESSAGE_ADD = 'NEW-MESSAGE-ADD';
const TEXT_COUNT_MES = 'TEXT-COUNT-MES';

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
        if (action.type === NEW_ADD_POST) {
            const post = {
                id: 5,
                message: this._state.profilePage.textAreaVal,
                likesCount: 0
            };
            this._state.profilePage.posts.push(post);
            this._state.profilePage.textAreaVal = '';
            this._renderEntireTree(this._state);
        } else if (action.type === TEXT_COUNT_POST) {
            this._state.profilePage.textAreaVal = action.val;
            this._renderEntireTree(this._state);
        } else if (action.type === NEW_MESSAGE_ADD) {
            const message = {
                id: 6,
                message: this._state.messagesPage.newMessageText,
            };
            this._state.messagesPage.messages.push(message);
            this._state.messagesPage.newMessageText = '';
            this._renderEntireTree(this._state);
        } else if (action.type === TEXT_COUNT_MES) {
            this._state.messagesPage.newMessageText = action.text;
            this._renderEntireTree(this._state);
        }
    }

}

export const createActionTextCountPost = (text) => ({type: TEXT_COUNT_POST, val: text});

export const createActionAddPost = () => ({type: NEW_ADD_POST});

export const createActionNewMessageAdd = () => ({type: NEW_MESSAGE_ADD});

export const createActionTextCountMess = (text) => ({type: TEXT_COUNT_MES, text: text});

window.store = store;

export default store;

/*
let renderEntireTree = () => {
    console.log('it is a new post')
}

const state = {
    profilePage: {
        posts: [
            {id: 1, message: "My first post", likesCount: 15},
            {id: 2, message: "My best post", likesCount: 10},
            {id: 3, message: "It's my friend", likesCount: 12},
            {id: 4, message: "Aloha baby", likesCount: 0},
        ],
        textAreaVal: "React camasutra"
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
}

window.state = state;

export const newPostAdd = () => {
    const post = {
        id: 5,
        message: state.profilePage.textAreaVal,
        likesCount: 0
    };
    state.profilePage.posts.push(post);
    state.profilePage.textAreaVal = '';
    renderEntireTree(state);
}

export const textCount = (val) => {
    state.profilePage.textAreaVal = val;
    renderEntireTree(state);
}

export const newMessageAdd = () => {
    const message = {
        id: 6,
        message: state.messagesPage.newMessageText,
    };
    state.messagesPage.messages.push(message);
    state.messagesPage.newMessageText = '';
    renderEntireTree(state);
}

export const textCountMes = (text) => {
    state.messagesPage.newMessageText = text;
    renderEntireTree(state);
}

export const subscribe = (observe) => {
    renderEntireTree = observe;
}

export default state;*/
