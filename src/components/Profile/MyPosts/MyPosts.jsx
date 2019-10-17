import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/formControl/FormControl";
import {maxLengthCreator, required} from "../../../utils/Validator";

const maxLength10 = maxLengthCreator(10)

const AddNewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={'textMessage'} placeholder={'React kamasutra'}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
};

const ReduxAddPost = reduxForm({form: 'newMessage'})(AddNewPost);

const MyPosts = (props) => {
    const postsNewArr = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)

    const addPost = (formData) => {
        props.addPost(formData.textMessage);
    };

    return (
        <div>
            <h3>My posts</h3>
            <ReduxAddPost onSubmit={addPost}/>
            <div className={s.posts}>
                {postsNewArr}
            </div>
        </div>
    )

};

export default MyPosts;