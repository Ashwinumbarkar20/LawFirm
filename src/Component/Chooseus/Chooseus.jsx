import React from 'react'
import img from '../../assets/Gift 1.jpg'
import styles from './Chooseus.module.css'
import Card from '../Card/Card'
export default function Chooseus() {
const content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.";
  return (
  <>
    <div className={`${styles.mainDiv}`}>
        <span className={`${styles.mainHeading}`}>Why Choose us?</span>
        <div className={`${styles.cards}`}>
            <Card img={img} rate={100} content={content}></Card>
            <Card img={img} rate={90} content={content}></Card>
            <Card img={img} rate={87} content={content}></Card>
        </div>
    </div>
  </>
  )
}
