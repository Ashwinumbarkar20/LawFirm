import React from 'react'
import styles from './Name.module.css'
import pic from '../../assets/pic.png'
export default function Name({name,Totalcases}) {
  return (
    <>
     <div className={`${styles.mainDiv}`}>
        <div className={`${styles.content}`}>

            <div className={`${styles.imageDiv}`} ><img src={pic} alt="user_Pic" className={`${styles.image}`}/></div>
            
            <div className={`${styles.userdetails}`}>
                <p>{name}</p>
                <p>{`${Totalcases} Cases`}</p>
            </div>
        
        </div>
        </div>
        
    
    </>
  )
}
