import React from 'react'
import styles from './Practices.module.css'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'


export default function Practices() {
  
    return (
    <>
        <div className={`${styles.mainDiv}`}>
          <span className={`${styles.Header}`}> Area of Practices</span>

          <div className={`${styles.Girdimg} row`}>

         
          <div className={`${styles.imgdiv} col-6`}>
         <img src={img2} alt="NameOfLaw" />     
           <span>ELDER ABUSE</span>
          </div>

          <div className={`${styles.imgdiv} col-6`}>
         <img src={img1} alt="NameOfLaw" />     
           <span>BUSINESS LAW</span>
          </div>

          <div className={`${styles.imgdiv} col-6`}>
         <img src={img3} alt="NameOfLaw" />     
           <span>LANDLORD DISPUTES</span>
          </div>

          <div className={`${styles.imgdiv} col-6`}>
         <img src={img5} alt="NameOfLaw" />     
           <span>Partnership LAW</span>
          </div>

          <div className={`${styles.imgdiv} col-6`}>
         <img src={img6} alt="NameOfLaw" />     
           <span>REAL ESTATE LAW</span>
          </div>

          <div className={`${styles.imgdiv} col-6 `}>
         <img src={img4} alt="NameOfLaw" />     
           <span>LEGAL CONTRACT</span>
          </div>

          </div>
          

          


        </div>
    </>
  )
}
