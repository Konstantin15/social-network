const TEXT_COUNT_POST = 'TEXT-COUNT-POST';
const NEW_ADD_POST = 'NEW-ADD-POST';


const profileReducer = (state, action) => {

    if (action.type === NEW_ADD_POST) {
        const post = {
            id: 5,
            message: state.textAreaVal,
            likesCount: 0
        };
        state.posts.push(post);
        state.textAreaVal = '';
    } else if (action.type === TEXT_COUNT_POST) {
        state.textAreaVal = action.val;
    }
    return state;
}

export const createActionTextCountPost = (text) => ({type: TEXT_COUNT_POST, val: text});

export const createActionAddPost = () => ({type: NEW_ADD_POST});

export default profileReducer;