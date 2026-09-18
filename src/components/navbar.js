import React from "react"
import classes from '../styles/navbar.module.scss'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar(){
    const [show, setShow] = React.useState(false);

    function toggle(){
        setShow(prevState => !prevState)
    }

    return(
        <div className={classes.mobileNavRoot}>
            {show
                ? <IoClose onClick={toggle} className={classes.mobileNavIcon} />
                : <GiHamburgerMenu onClick={toggle} className={classes.mobileNavIcon} />
            }
            {show &&
                <ul onClick={toggle} className={classes.mobileNavList}>
                    <li><a href="#newExperience">Experience</a></li>
                    <li><a href="#newProject">Projects</a></li>
                    <li><a href="#newSkill">Skills</a></li>
                    <li><a href="#newEducation">Education</a></li>
                    <li><a href="#newContact">Contact</a></li>
                    <li className={classes.mobileNavDivider}></li>
                    <li><a href="/Srushti_Deshmukh_CV.pdf" target="_blank">Resume</a></li>
                    <li><a href="https://www.linkedin.com/in/srushti-deshmukh-616111221/">LinkedIn</a></li>
                    <li><a href="https://github.com/Srushti2002">Github</a></li>
                    <li><a href="https://instagram.com/srushtideshmukh27?igshid=ZWIzMWE5ZmU3Zg==">Instagram</a></li>
                    <li><a href="https://mail.google.com/mail/?view=cm&to=srushtideshmukh54@gmail.com">Email</a></li>
                </ul>
            }
        </div>
    )
}
