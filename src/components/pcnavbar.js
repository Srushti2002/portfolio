import React from "react"
import classes from '../styles/navbar.module.scss'
import Navbar from './navbar'

export default function Pcnavbar(){
    return(
        <nav className={classes.navBar}>
            <div className={classes.navPill}>
                <a href="#newHead" className={classes.navLogo}>Srushti Deshmukh</a>

                <ul className={classes.navBarList}>
                    <li><a href="#newHead">About</a></li>
                    <li><a href="#newExperience">Experience</a></li>
                    <li><a href="#newProject">Projects</a></li>
                    <li><a href="#newSkill">Skills</a></li>
                    <li><a href="#newEducation">Education</a></li>
                    <li><a href="#newContact">Contact</a></li>
                </ul>

                <div className={classes.navActions}>
                    <a href="/Srushti_Deshmukh_CV.pdf" target="_blank" className={classes.navResume}>Resume</a>
                    <div className={classes.navMobile}>
                        <Navbar />
                    </div>
                </div>
            </div>
        </nav>
    )
}
