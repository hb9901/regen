import React from "react";
import { Link } from "react-router-dom";
import styles from "./Loaded.module.css";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";


export default function Loaded(props){
    function downloadFile() {
        const blob = new Blob([props.readme], {type: 'text/plain'})
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `README.md`
        a.click()
        a.remove()
        window.URL.revokeObjectURL(url);
      }
      
    return(
        <div className={styles.loadedmain}>
            <div className={styles.header}>README.md has been created successfully!</div>
            <div className={styles.box}>
                <div className = {styles.text}><ReactMarkdown children={props.readme} remarkPlugins={[remarkGfm]} /></div>
            </div>
            <div className={styles.footer}>
                <Link to="/"><button className={styles.homebutton}>Back to home</button></Link>
                <button className={styles.downloadbutton} onClick={()=>downloadFile()}>Download Readme</button>
            </div>
        </div>
    )
}