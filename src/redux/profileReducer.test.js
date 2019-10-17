import profileReducer, {createActionAddPost, deletePost} from "./profileReducer";

const state = {
    posts: [
        {id: 1, message: "My first post", likesCount: 15},
        {id: 2, message: "My best post", likesCount: 10},
        {id: 3, message: "It's my friend", likesCount: 12},
        {id: 4, message: "Aloha baby", likesCount: 0},
    ]
};

it('must be five length', () => {

    const action = createActionAddPost('Hello stupid asle');

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
});

it('message must be correct', () => {

    const action = createActionAddPost('Hello stupid asle');

    const newState = profileReducer(state, action)

    expect(newState.posts[4].message).toBe('Hello stupid asle')
});

it('must be three length', () => {

    const action = deletePost(1);

    const newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
});