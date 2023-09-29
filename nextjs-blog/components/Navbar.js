import React from 'react'
// import styles from '../styles/navbar.scss'
import styles from '../styles/navbar.module.scss';
function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.nav}>
                Dhruv Gupta 
        </div>
        <div className={styles.navbarsub}>
            <p style={{fontSize:'20px'}}>
                About
            </p>
            <p style={{fontSize:'20px'}}>
                Contact
            </p>
        </div>
    </div>
  )
}

export default Navbar