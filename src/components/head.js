import React, { useEffect, useState } from "react"
import classes from '../styles/head.module.scss'
import Pcnavbar from "./pcnavbar"
import { FiLinkedin, FiGithub, FiInstagram, FiMail, FiFileText } from "react-icons/fi"

import myPortfolioPhoto from '../images/portfolio_photo.jpeg'

import Image from "next/image"

const TYPING_TEXT = "I’m Srushti"

function TypingName(){
    const [text, setText] = useState("")

    useEffect(() => {
        let i = 0
        let deleting = false
        let timeoutId

        const tick = () => {
            if(!deleting){
                i += 1
                setText(TYPING_TEXT.slice(0, i))

                if(i >= TYPING_TEXT.length){
                    deleting = true
                    timeoutId = setTimeout(tick, 3500)
                    return
                }
                timeoutId = setTimeout(tick, 110)
            } else {
                i -= 1
                setText(TYPING_TEXT.slice(0, i))

                if(i <= 0){
                    deleting = false
                    timeoutId = setTimeout(tick, 500)
                    return
                }
                timeoutId = setTimeout(tick, 60)
            }
        }

        timeoutId = setTimeout(tick, 110)

        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <h1 className={classes.headName}>
            {text}
            <span className={classes.headCaret}>&nbsp;</span>
        </h1>
    )
}

export default function Header(){

    return(
        <div className={classes.headRoot} id="newHead">
            <Pcnavbar />
            <div className={classes.headSubRoot}>
                <div className={classes.headRow} data-aos="fade-up">
                    <div className={classes.headWrite}>
                        <p className={classes.headKicker}>Hey There,</p>
                        <TypingName />
                        <p className={classes.headTagline}>I build, debug & ship for the web.</p>
                        <p className={classes.headAbout}>I’m a Full-Stack Developer who enjoys building scalable web applications and designing clean, reliable systems across the frontend and backend. I like turning ideas into practical solutions and solving problems that go beyond just writing code.

I enjoy understanding how systems fit together, improving existing solutions, and exploring new technologies. I’m always curious to learn, experiment, and find better ways to build and ship software. For me, good development is about building software that is simple, maintainable, and built to last.
</p>
                        <a href="/Srushti_Deshmukh_CV.pdf" target="_blank" className={classes.headResume}>
                            <FiFileText /> Resume
                        </a>
                    </div>
                    <div className={classes.headImg}>
                        <div className={classes.headImgCard}>
                            <div className={classes.headImgFrame}>
                                <Image className={classes.headMainImg} src={myPortfolioPhoto} alt="Srushti Deshmukh" priority />
                            </div>
                            <p className={classes.headImgCaption}>Software Developer</p>
                        </div>
                        <div className={classes.headSocials}>
                            <a href="https://mail.google.com/mail/?view=cm&to=srushtideshmukh54@gmail.com" aria-label="Email" target="_blank" rel="noreferrer" className={`${classes.socialIcon} ${classes.socialMail}`}><FiMail /></a>
                            <a href="https://www.linkedin.com/in/srushti-deshmukh-616111221/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className={`${classes.socialIcon} ${classes.socialLinkedin}`}><FiLinkedin /></a>
                            <a href="https://github.com/Srushti2002" aria-label="GitHub" target="_blank" rel="noreferrer" className={`${classes.socialIcon} ${classes.socialGithub}`}><FiGithub /></a>
                            <a href="https://instagram.com/srushtideshmukh27?igshid=ZWIzMWE5ZmU3Zg==" aria-label="Instagram" target="_blank" rel="noreferrer" className={`${classes.socialIcon} ${classes.socialInstagram}`}><FiInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
