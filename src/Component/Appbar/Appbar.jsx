import React from 'react'


import styles from './Appbar.module.css'
import logo from '../../assets/FirmLogo.png'
export default function Appbar() {
  return (
    <>
 <div className={`${styles.Navbar}`}>

         <div className={`${styles.mainDiv}`}>
            <div className={`${styles.logo}`} >
                <img src={logo} alt="Logo" />
            </div>
            <div className={`${styles.tabs}`}>
                <span>Home</span>
                <span>Attorneys</span>
                <span>Practice Areas</span>
                <span>About Us</span>
            </div>
            <div className={`${styles.contactnow}`}>
                <button className={`${styles.contact}`} > Contact Now</button>
            </div>
         </div>

         </div>

          
   

    </>
  )
}
