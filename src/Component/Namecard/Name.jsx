import React from 'react'
import styles from './Name.module.css'
import pic from '../../assets/pic.png'
export default function Name({name,Totalcases}) {
  return (
    <>
     <div className={`${styles.mainDiv}`}>
        <div className={`${styles.content}`}>

            <div><img src={pic} alt="user_Pic" /></div>
            
            <div className={`${styles.userdetails}`}>
                <p>{name}</p>
                <p>{Totalcases}</p>
            </div>
        
        </div>
        </div>
        
    
    </>
  )
}
