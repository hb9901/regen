import styles from "../styles/Main.module.css"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Main(){
  const [githublink,setGithubLink] = useState("");
    return(
    <div className={styles.main}>
      <div className={styles.intro}>
        <div className={styles.box1}>
          <div className={styles.box2}>
            <div className={styles.box3}></div>
          </div>
        </div>
        <div className={styles.text}>
          <div className={styles.text1}>
            REGEN.md
          </div>
          <div className={styles.text2}>
            The easiest way to build a README.md for your git repository
          </div>
        </div>
      </div>
      <div className={styles.fileuploader}>
        <div className={styles.input}>
          <input className={styles.inputsite} type="text" onChange={(e) => setGithubLink(e.target.value)} placeholder="Input your git repository here"/>
          <div className={styles.inputtext}>ex {`)`} https://github.com//regen</div>
        </div>
        <Link className={styles.link} to="/GenerateReadme" state={{githublink:githublink}} >
          <button className={styles.sendtoserver}>Readme 생성</button>
        </Link>
      </div>
    </div>
    )
}

export default Main;