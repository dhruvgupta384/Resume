import React from 'react'
import styles from './Cards.module.scss'
import Image from 'next/image'
function Cards({ img, desc ,inner}) {
    return (
    <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src={img}/>
            </div>
            <h3 style={{margin:'10px 0px 10px 0px'}}>
                {inner}
            </h3>
            <p style={{width:'90%',color:'gray',fontSize:'0.9rem'}}>
                {desc&&desc}
            </p>
            </div>
    )
}

export default Cards