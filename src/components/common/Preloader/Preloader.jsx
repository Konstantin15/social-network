import React from "react"
import loader from "../../../assets/images/loader.svg";
import styles from "../../Users/Users.module.css";

const Preloader = (props) => {
    return (
        <div>
            <img src={loader} className={styles.preloader} alt=""/>
        </div>
    )
};

export default Preloader;