import React from 'react'
import styles from './Teamsection.module.css'
import Name from '../Namecard/Name';
export default function Teamsection() {
    const team=[
        {name:"John Doe", Totalcases:234},
        {name:"John Doe", Totalcases:234},
        {name:"John Doe", Totalcases:234},
        {name:"John Doe", Totalcases:234},
        {name:"John Doe", Totalcases:234},
        {name:"John Doe", Totalcases:234}
    ];

  return (
    <>
    <div className={`${styles.mainDiv}`}>
    <span className={`${styles.Header}`}>Our Team</span>
    <div className={`${styles.teamDiv}`}>
{team.map((lawyer)=>{return <Name 
key={lawyer.Totalcases} 
name={lawyer.name} 
Totalcases={lawyer.Totalcases}/>})}
    </div>
    </div>
    </>
  )
}
