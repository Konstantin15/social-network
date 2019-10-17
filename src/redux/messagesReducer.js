const NEW_MESSAGE_ADD = 'NEW-MESSAGE-ADD';


const initialState = {
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
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEW_MESSAGE_ADD:
            const message = {
                id: 6,
                message: action.newMessageDialogs
            };
            return {
                ...state,
                messages: [...state.messages, message],
            };

        default:
            return state;

    }
}

    export const createActionNewMessageAdd = (newMessageDialogs) => ({type: NEW_MESSAGE_ADD, newMessageDialogs});

    export default messagesReducer;