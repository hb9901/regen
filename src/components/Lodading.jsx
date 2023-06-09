import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from "../styles/Loading.module.css";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Loading(props){
    //스크롤바 자동으로 내리기
    const scrollRef = useRef();
    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [props.readme])
    
    return(
        <div className={styles.main}>
            <div className={styles.background}></div>
            <div className={styles.loadingpage}>
                <div className={styles.generatemd} ref={scrollRef}>
                    <ReactMarkdown children={props.readme} components={{
                        code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                {...props}
                                children={String(children).replace(/\n$/, '')}
                                style={dark}
                                language={match[1]}
                                PreTag="div"
                            />
                            ) : (
                            <code {...props} className={className}>
                                {children}
                            </code>
                            )}}} remarkPlugins={[remarkGfm]} />
                </div>
                <div className={styles.boxplace}>
                    <div className={styles.box1}>
                        <div className={styles.box2}>
                            <div className={styles.box3}></div>
                        </div>
                    </div>
                    <div className={styles.boxtext}>Creating README.md...</div>
                </div>

            </div>
        </div>
    )
}