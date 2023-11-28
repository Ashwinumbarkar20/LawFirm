import React from 'react'
import styles from './News.module.css'

export default function News() {
  return (
    <>
        <div className={`${styles.mainDiv}`}><h1>Subscribe Our Newsletter</h1>
        <div className={`${styles.newsLetter}`}>
            <form >
                <div className={`${styles.mainform}`}>
                    <input className={`${styles.inputtext}`} type="text" name="" id="" placeholder='Enter Name' />
                    <input className={`${styles.inputtext}`} type="email" name="" id="" placeholder='Enter your Email id' />
                    <button className={`${styles.sendbtn}`}>SEND</button>
                </div>
            </form>
        </div></div>
    </>
  )
}
