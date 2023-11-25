import React from 'react'
import styles from './Card.module.css'
export default function Card({img,rate,content}) {
  return (
    <>
<div className={`${styles.mainCard}`}> 
<div className={`${styles.img}`}>
  <img src={img} alt="Logo" />
</div>
<span className={`${styles.rate}`}>{rate}% Success Rate</span>
<p className={`${styles.textmsg}`}>{content}</p>
<button className={`${styles.readMorebtn}`}>Read More</button>
</div>
    </>
  )
}
