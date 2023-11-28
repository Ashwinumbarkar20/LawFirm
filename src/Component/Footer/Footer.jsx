import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/FirmLogo.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <>
        <div className={`${styles.mainDiv}`}>
            <nav className={`${styles.mainnav}`}>
                <div className={`${styles.logo}`}>
                <img src={logo} alt="Logo" />
                </div>
                <div className={`${styles.Menu}`}>
                    <ul className={`${styles.Menulist}`}>
                        <li>Home</li>
                        <li>Attorneys</li>
                        <li>Practice Areas </li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className={`${styles.logodiv}`}>
                    <ul className={`${styles.logolist}`}>
                        <li><FaInstagramSquare color='red'/></li>
                        <li><FaFacebookSquare /></li>
                        <li><FaTwitterSquare /></li>
                        <li><FaPinterestSquare /></li>

                    </ul>
                </div>
            </nav>
         </div>
         <div className={`${styles.footerDiv}`}>
            <ul>
                <li>© 2020 Acme. All right reserved.</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>

            </ul>
         </div>
    </>
  )
}
