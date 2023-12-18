import React from 'react'
import styles from './Card.module.css'
const Card = ({title, description}) => {
  return (
    <div className={styles.card}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardText}>{description}</p>
    </div>
  )
}

export default Card