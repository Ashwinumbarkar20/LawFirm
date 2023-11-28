import React from 'react'
import styled from 'styled-components'
import { CiCirclePlus } from "react-icons/ci";
import styles from './Faq.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Faq() {
  return (
    <>
      <div className={`${styles.mainDiv}`}>
        <div className={`${styles.faqName}`}>   
            <h1>FAQ</h1>
            <p>Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. </p>
        </div>
        <div className={`${styles.faQuestion}`}>
            <h3>Do I need a personal injury report?</h3>
            <p>Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exer. Amet minim mollit non deserunt
ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
        <div >
        <Accordion className={`${styles.mainacc}`}>
        <AccordionSummary
          expandIcon={<CiCirclePlus style={{backgroundColor:"#E3B748", color:"#111111",fontSize:"50px",borderRadius:"55px" }}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <h6>How much is my case worth?</h6>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={`${styles.mainacc}`}>
        <AccordionSummary
          expandIcon={<CiCirclePlus style={{backgroundColor:"#E3B748", color:"#111111",fontSize:"50px",borderRadius:"55px" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          
        >
          <h6>What should I do right after car accidect?</h6>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={`${styles.mainacc}`}>
        <AccordionSummary
          expandIcon={<CiCirclePlus style={{backgroundColor:"#E3B748", color:"#111111",fontSize:"50px",borderRadius:"55px" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          
        >
          <h6>How much is my case worth?</h6>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
        </div>
        </div>
      </div>
    </>
  )

}
