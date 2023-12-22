import React from 'react'
import styles from './Card.module.css'
import Link from 'next/link'
const Card = ({title, description}) => {
  return (
    <Link href={`/topics/${title}`} className='p-5 border border-red-200 rounded-lg'>
        <h1 className={styles.carTitle}>{title}</h1>
        <p className={styles.cardText}>{description}</p>
    </Link>
  )
}

export default Card