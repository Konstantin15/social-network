import React from "react"
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/formControl/FormControl"
import {required} from "../../utils/Validator";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux"
import {Redirect} from "react-router-dom";
import styles from "./../common/formControl/FormControl.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField('email', Input, 'Email', [required])}
            {/*<div>
                <Field name={'email'} component={Input} placeholder={'Email'}
                       validate={[required]}/>
            </div>*/}

            {/*<div>
                <Field name={'password'} component={Input} placeholder={'Password'}
                       validate={[required]} type={'password'}/>
            </div>*/}
            {createField('password', Input, 'Password', [required], {type: 'password'})}

            {/*<div>
                <Field name={'rememberMe'} component={Input} type={'checkbox'}/> remember me
            </div>*/}
            {createField('rememberMe', Input, null, [], {type: 'checkbox'}, "remember me")}

            {props.error && <div className={styles.commonError}>
                {props.error}
            </div>}
            <div>
                <button>LogIn</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if(props.isAuthUser) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuthUser: state.auth.isAuthUser
});

export default connect (mapStateToProps, {login})(Login);