import React from "react"
import classes from '../styles/head.module.scss'
import Pcnavbar from "./pcnavbar"

import myPortfolioPhoto from '../images/portfolio_photo.jpeg'


import Image from "next/image"


export default function Header(){
  
    return(
        <div className={classes.headRoot}>
            <Pcnavbar data-aos="fade-up" />
            <div className={classes.headSubRoot} data-aos="fade-up">
            <div className={classes.headRow} id="newHead">
            <div className={classes.headWrite}>
            <p className={classes.headWriteMain}>Hii, my
            name is <b>Srushti</b></p>
            <p className={classes.headWriteSubData}>I like to craft solid and scalable websites with great user experiences.</p>
            <div className={classes.headLink}>
                {/* <p>Contact me</p> */}
                <div className={classes.headContant}>
                <a href="https://www.linkedin.com/in/srushti-deshmukh-616111221/">LI</a>
                <a href="https://github.com/Srushti2002">GH</a>
                <a href="https://instagram.com/srushtideshmukh27?igshid=ZWIzMWE5ZmU3Zg==">IG</a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">ML</a>

                </div>
                
            </div> 
            
        
            </div>
            <div className={classes.headImg}> 
                <Image className={classes.headMainImg} src={myPortfolioPhoto}  alt="photo" />
            </div>
            </div>
            {/* <div className={classes.headLink}>
                <p>Contact me</p> 
                <div className={classes.headContant}>
                <a href="https://www.linkedin.com/in/srushti-deshmukh-616111221/">LN</a>
                <a href="https://github.com/Srushti2002">GH</a>
                <a href="https://instagram.com/srushtideshmukh27?igshid=ZWIzMWE5ZmU3Zg==">IG</a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">ML</a>

                </div>
                
            </div>  */}
            </div>
            </div>
    )
}