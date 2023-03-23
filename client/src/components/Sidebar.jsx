import React, { useLayoutEffect } from 'react';
import styles from "../styles/sidebar.module.css";
import { RssFeed, Chat, Videocam, Group, Bookmark, HelpOutline, Work, Event, School } from "@material-ui/icons";
import { Users } from "../dummyData.js";
import CloseFriends from "./CloseFriend.jsx";

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarWrapper}>
                <ul className={styles.sidebarList}>
                    <li className={styles.sidebarListItem}>
                        <RssFeed className={styles.sidebarIcon} />
                        <span className={styles.sidebarListItemText}><a href="twitter.com" style={{ textDecoration: "none" }}>Twitter</a></span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Chat className={styles.sidebarIcon} />
                        <span className={styles.sidebarListItemText}><a href="facebook.com" style={{ textDecoration: "none" }}>Facebook</a></span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Videocam className={styles.sidebarIcon} />
                        <span className={styles.sidebarListItemText}><a href="youtube.com" style={{ textDecoration: "none" }}>Youtube</a></span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Group className={styles.sidebarIcon} />
                        <span className={styles.sidebarListItemText}><a href="github.com" style={{ textDecoration: "none" }}>Github</a></span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <HelpOutline className={styles.sidebarIcon} />
                        <span className={styles.sidebarListItemText}><a href="stackoverflow.com" style={{ textDecoration: "none" }}>Questions</a></span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Work className={styles.sidebarIcon} />
                        <span className={styles.sidebarListItemText}><a href="linkedin.com" style={{ textDecoration: "none" }}>Jobs</a></span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <Event className={styles.sidebarIcon} />
                        <span className={styles.sidebarListItemText}><a href="http://www.davp.nic.in/cal_of_events.htm" style={{ textDecoration: "none" }}>Events</a></span>
                    </li>
                    <li className={styles.sidebarListItem}>
                        <School className={styles.sidebarIcon} />
                        <span className={styles.sidebarListItemText}><a href="https://in.coursera.org/courses?query=social%20media%20marketing" style={{ textDecoration: "none" }}>Courses</a></span>
                    </li>
                </ul>
                <hr className={styles.sidebarHR} />
                <b>All Friends:</b>
                <ul className={styles.sidebarFriendList}>
                {Users.map((u)=> (
            <CloseFriends key={u.id} picture={u.profilePicture} username={u.username}/>
          ))}  
                </ul>
            </div>
        </div>
    )
}