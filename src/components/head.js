import React from "react"
import classes from '../styles/head.module.scss'
import Pcnavbar from "./pcnavbar"
import { FiLinkedin, FiGithub, FiInstagram, FiMail, FiFileText } from "react-icons/fi"

import myPortfolioPhoto from '../images/portfolio_photo.jpeg'

import Image from "next/image"


export default function Header(){

    return(
        <div className={classes.headRoot} id="newHead">
            <Pcnavbar />
            <div className={classes.headSubRoot}>
                <div className={classes.headRow} data-aos="fade-up">
                    <div className={classes.headWrite}>
                        <p className={classes.headKicker}>Hey There,</p>
                        <h1 className={classes.headName}>I’m Srushti</h1>
                        <p className={classes.headTagline}>I build, debug & ship for the web.</p>
                        <p className={classes.headAbout}>
                            I’m a Full-Stack Developer. I enjoy building scalable web applications, designing clean and reliable systems, and working across both frontend and backend.

I like turning ideas into practical solutions and solving problems that require more than just writing code. I enjoy understanding how different parts of a system fit together, improving existing solutions, and exploring new technologies along the way.

For me, development is not just about making things work — it’s about making them simple, maintainable, and built to last. I’m always curious to learn, experiment, and find better ways to build and ship software.
</p>
                        <div className={classes.headCta}>
                            <a href="/ResumeNew (3).pdf" target="_blank" className={classes.headResume}>
                                <FiFileText /> Resume
                            </a>
                            <div className={classes.headSocials}>
                                <a href="https://mail.google.com/mail/?view=cm&to=srushtideshmukh54@gmail.com" aria-label="Email" target="_blank" rel="noreferrer" className={`${classes.socialIcon} ${classes.socialMail}`}><FiMail /></a>
                                <a href="https://www.linkedin.com/in/srushti-deshmukh-616111221/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className={`${classes.socialIcon} ${classes.socialLinkedin}`}><FiLinkedin /></a>
                                <a href="https://github.com/Srushti2002" aria-label="GitHub" target="_blank" rel="noreferrer" className={`${classes.socialIcon} ${classes.socialGithub}`}><FiGithub /></a>
                                <a href="https://instagram.com/srushtideshmukh27?igshid=ZWIzMWE5ZmU3Zg==" aria-label="Instagram" target="_blank" rel="noreferrer" className={`${classes.socialIcon} ${classes.socialInstagram}`}><FiInstagram /></a>
                            </div>
                        </div>
                    </div>
                    <div className={classes.headImg}>
                        <div className={classes.headImgFrame}>
                            <Image className={classes.headMainImg} src={myPortfolioPhoto} alt="Srushti Deshmukh" priority />
                        </div>
                        <p className={classes.headImgCaption}>Software Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
