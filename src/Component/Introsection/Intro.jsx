import React from 'react'
import styles from './Intro.module.css'
export default function Intro() {
  return (
    <>
<div className={`${styles.mainDiv}`}>
    <div className={`${styles.left}`}><span>Let’s Introduce Ourself</span></div>
    <div className={`${styles.right}`}><h3>Criminal Lawyer</h3><span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation.</span></div>
</div>
    </>
  )
}
