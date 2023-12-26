import React from 'react'
import styles from "./BreadCrumbs.module.css"
const BreadCrumbs = ({ topicName }) => {
    return (
        <div className={styles.breadCrumbsContainer}>
            <span>Topics</span>
            <span>{">"}</span>
            <span>
                {topicName}
            </span>
        </div>
    )
}

export default BreadCrumbs