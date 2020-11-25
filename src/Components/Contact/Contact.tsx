import React from 'react';
import { GitHubIcon } from '../index';
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contact} >
            <h1 style={{ color: "grey" }} className="center">Contact Query</h1>
            <br />
            <a className="btn btn-primary center" href="https://github.com/naveedaa?tab=repositories">
                <GitHubIcon width={"18px"} />
                <span className="ml-2 mr-4 text-center">
                    Visit Repo
                </span>
            </a>
        </div>
    )
}

export default Contact;