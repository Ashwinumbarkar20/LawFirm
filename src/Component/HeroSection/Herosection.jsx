import React from 'react'
import styles from './Herosection.module.css'
import heroimg from '../../assets/Hero Image.png'
export default function Herosection() {
  return (
    <>
        <div className={`${styles.mainDiv}`}>
            <div className={`${styles.left}`} >
            
                <h1>You don’t have to 
                Fight them Alone.</h1>
                
                <h6>Lorem ipsum dolor sit amet consectetur 
                adipiscing elit blandit, curabitur sodales
                conubia ut inceptos faucibus himenaeos tortor
                eget, hac massa gravida arcu interdum proin curae.</h6>
            
            <div className={`${styles.talk}`}>
            <input type="email" name="email" id="" placeholder='Enter your eamil address' ></input>
            <button className={`${styles.talkbtn}`}>Let's talk</button>
            
            </div>
            
            </div>

            <div className={`${styles.right}`} >
                <div className={`${styles.image}`}>
                     <img src={heroimg} alt="hero imgage" />
                </div>
            </div>
        </div> 
    </>
  )
}
