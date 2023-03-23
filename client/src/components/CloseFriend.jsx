import React from 'react';
import styles from "../styles/closefriend.module.css";
// import { } from "@material-ui/icons";
// import { Link } from "react-router-dom";

export default function Closefriend({picture,username }) {
    // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    // console.log(user)
    return (
        <li className={styles.sidebarFriend}>
            <img src={picture} alt="" className={styles.sidebarFriendImg}  />
            <span className={styles.sidebarFriendName}>{username}</span>
        </li>
    )
}
