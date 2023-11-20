import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.css";

export default function Error(){
    return(
        <div className={styles.loadedmain}>
            <div className={styles.header}>Internal Server Error</div>
            <div className={styles.footer}>
                <Link to="/"><button className={styles.homebutton}>Back to home</button></Link>
            </div>
        </div>
    )
}