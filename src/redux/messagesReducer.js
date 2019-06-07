const NEW_MESSAGE_ADD = 'NEW-MESSAGE-ADD';
const TEXT_COUNT_MES = 'TEXT-COUNT-MES';


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
    newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEW_MESSAGE_ADD: {
            const message = {
                id: 6,
                message: state.newMessageText,
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(message);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case TEXT_COUNT_MES: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.text;
            return stateCopy;
        }
        default:
            return state;

    }
}

    export const createActionNewMessageAdd = () => ({type: NEW_MESSAGE_ADD});

    export const createActionTextCountMess = (text) => ({type: TEXT_COUNT_MES, text: text});

    export default messagesReducer;