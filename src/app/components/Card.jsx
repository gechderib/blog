import React from 'react'
import styles from './Card.module.css'
const Card = ({title, description}) => {
  return (
    <div className={styles.card}>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Card