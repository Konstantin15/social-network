import React from 'react';
import styles from './Users.module.css';
import usersPhoto from "../../assets/images/users.png";
import {NavLink, Redirect} from "react-router-dom";


const Users = (props) => {
    let countPage = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= countPage; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? styles.selectedPage : styles.paginator}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p} -</span>
                })}
            </div>

            {props.users.map(u => <div key={u.id} className={styles.wrapperProf}>
                <div>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : usersPhoto}
                            className={styles.avatar}/>
                        </NavLink>
                    </div>
                    {u.followed ?

                        <button disabled={props.buttonDisabled.some(id => id === u.id )} onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> :

                        <button disabled={props.buttonDisabled.some(id => id === u.id )} onClick={() => {
                            props.follow(u.id)
                        }}>follow</button>}

                    <p className={styles.fullName}>{u.name}</p>
                </div>
                <div>
                    <div>{u.status}</div>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.town'}</div>
                </div>
            </div>)}
        </div>
    )
};
export default Users;