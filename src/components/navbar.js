import React from "react"
//import classes from '../styles/navbar.module.scss'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar(){
    const [show, setShow] = React.useState(false);

    function toggle(){
        setShow(prevState => !prevState)
    }
   
    return(
        
             <div>
                <GiHamburgerMenu onClick={toggle} height="31px" width="21px" />
                {show ?
                <ul     data-aos="fade-up">
                    <li><a href="#newHead">Head</a></li>
                    <li><a href="#newAboutUs">About me</a></li>
                    <li><a href="#newSkill">Skills</a></li>
                    <li><a href="#newProject">Projects</a></li>
                    <li><a href="#newContact">Contact</a></li>
                
                    
                        <li><a href=""></a>Resume</li>
                        <li ><a href="https://www.linkedin.com/in/srushti-deshmukh-616111221/">LinkedIn</a></li>
                        <li><a href="https://github.com/Srushti2002">Github</a></li>
                        <li><a href="https://instagram.com/srushtideshmukh27?igshid=ZWIzMWE5ZmU3Zg==">Instagram</a></li>
                        <li><a href="https://mail.google.com/mail/?view=cm&to=srushtideshmukh54@gmail.com">Mail</a></li>

                    
                        
                    
                    
                </ul>
                :<div></div>
            }
            </div>
                
            

    )
}