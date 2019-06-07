const TEXT_COUNT_POST = 'TEXT-COUNT-POST';
const NEW_ADD_POST = 'NEW-ADD-POST';

const initialState = {
    posts: [
        {id: 1, message: "My first post", likesCount: 15},
        {id: 2, message: "My best post", likesCount: 10},
        {id: 3, message: "It's my friend", likesCount: 12},
        {id: 4, message: "Aloha baby", likesCount: 0},
    ],
    textAreaVal: "React kamasutra"
}


const profileReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case NEW_ADD_POST:{
            let post = {
                id: 5,
                message: state.textAreaVal,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(post);
            stateCopy.textAreaVal = '';
            return stateCopy;
        }
        case TEXT_COUNT_POST: {
            let stateCopy = {...state};
            stateCopy.textAreaVal = action.val;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const createActionTextCountPost = (text) => ({type: TEXT_COUNT_POST, val: text});

export const createActionAddPost = () => ({type: NEW_ADD_POST});

export default profileReducer;