import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
        <div className={s.loginBox}>
            {props.isAuthUser ? <div>{props.login} - <button onClick={props.logout}>LogOut</button></div> :
            <NavLink to="/login">LogIn</NavLink>
            }
        </div>
    </header>
}

export default Header;