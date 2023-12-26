import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
const Header = () => {
  return (
    <div className={styles.headerWraper}>
      <Link href='/' className={styles.headerLogo}>Header</Link>
    </div>
  )
}

export default Header