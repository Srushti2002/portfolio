import React from "react"
import classes from '../styles/head.module.scss'
import Pcnavbar from "./pcnavbar"


import Image from "next/image"

export default function Headerr(){

    

    


    
    return(
        <div className={classes.headRoot}>
            <Pcnavbar data-aos="fade-up" />
            <div className={classes.headSubRoot} data-aos="fade-up">
             {/* <nav className={classes.navBar}>
             
                <img className={classes.navImg} src="https://w7.pngwing.com/pngs/909/687/png-transparent-hamburger-button-hot-dog-computer-icons-pancake-hot-dog-share-icon-navbar-menu.png" onClick={toggle} />
                {show ?
                <ul className={classes.navBarList}>
                    <li><a href="/head">Head</a></li>
                    <li><a href="/aboutus">About me</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href=""></a>Resume</li>
                    <li className={classes.navCon}><a href="">LinkedIn</a></li>
                    <li className={classes.navCon}><a href="">Github</a></li>
                    <li className={classes.navTact}><a href="">Instagram</a></li>
                    <li className={classes.navTact}><a href="">Mail</a></li>
                    
                    
                </ul>
                :<div></div>
            }
            </nav> */}

            <div className={classes.headRow} id="newHead">
            <div className={classes.headWrite}>
            <p className={classes.headWriteMain}>Hi, my
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
                <Image className={classes.headMainImg} src = 'https://cdn5.vectorstock.com/i/1000x1000/45/39/avatar-woman-with-laptop-design-vector-31604539.jpg' alt="photo" />
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