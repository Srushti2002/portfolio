import React from "react"
import classes from '../styles/navbar.module.scss'
import Navbar from './navbar'

export default function Pcnavbar(){
    return(
        <nav className={classes.navBar}>
            <div className={classes.navBarRoot}>
                <a href="#newHead" className={classes.navLogo}>SD</a>

                <ul className={classes.navBarList}>
                    <li><a href="#newExperience"><span>01.</span> Experience</a></li>
                    <li><a href="#newProject"><span>02.</span> Projects</a></li>
                    <li><a href="#newSkill"><span>03.</span> Skills</a></li>
                    <li><a href="#newEducation"><span>04.</span> Education</a></li>
                    <li><a href="#newContact"><span>05.</span> Contact</a></li>
                </ul>

                <div className={classes.navMobile}>
                    <Navbar />
                </div>
            </div>
        </nav>
    )
}
