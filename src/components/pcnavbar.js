import React from "react"
import classes from '../styles/navbar.module.scss'
import Navbar from './navbar'
import { GiHamburgerMenu } from "react-icons/gi";

import Swal from 'sweetalert2'


export default function Pcnavbar(){
    const [hire, setHire] = React.useState(false)

    function click(){
        setHire(prevState => !prevState)
    }

    const Alert = () => {
        Swal.fire({title: "The resume will be available soon",
        color: '#33272A',
        background: "#FAEEE7",
        confirmButtonColor: '#F9749C',
        
        })
    }
    return(
        <nav className={classes.navBar} >
            <div className={classes.navBarRoot} >
            <ul className={classes.navBarList}>
                    <li><a href="#newHead">Head</a></li>
                    <li><a href="#newAboutUs">About me</a></li>
                    <li><a href="#newSkill">Skills</a></li>
                    <li><a href="#newProject">Projects</a></li>
                    <li><a href="#newContact">Contact</a></li>
                    <div className={classes.navHire}>
                    <GiHamburgerMenu className={classes.navHireImg} onClick={click} height="31px" width="21px" />
                        {hire ?
                    <ul onClick={click}>
                    <li><a href="#" onClick={Alert}>Resume</a></li>
                    <li ><a href="https://www.linkedin.com/in/srushti-deshmukh-616111221/">LinkedIn</a></li>
                    <li><a href="https://github.com/Srushti2002">Github</a></li>
                    <li><a href="https://instagram.com/srushtideshmukh27?igshid=ZWIzMWE5ZmU3Zg==">Instagram</a></li>
                    <li><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">Mail</a></li>

                    </ul>: <div></div>
                    }
                    
                    </div>
                       
                </ul>
                
            <div className={classes.pcMenu}>
                <Navbar />
            </div>

            </div> 

        </nav>
                
    )
}