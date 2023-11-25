import React from 'react'
import styles from './Image.module.css'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
export default function Image({NameofLaw}) {
  return (
    <div className={`${styles.mainDiv}`}>
      <img src={img}> alt={NameofLaw}</img>
      <span className={`${styles.title}`} >{NameofLaw}</span>
    </div>
  )
}
