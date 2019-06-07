import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsNewArr = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef();

    const addPost = () => {
        props.addPost();
    };

    const textChange = () => {
        let text = newPostElement.current.value;
        props.textChange(text);
    };

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={textChange} ref={ newPostElement } value={props.textValue}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsNewArr}
            </div>
        </div>
    )

}

export default MyPosts;