import classes from '../styles/contact.module.scss'
import {useForm, ValidationError} from "@formspree/react"
import { FiMail, FiLinkedin, FiGithub, FiSend } from "react-icons/fi"

export default function Contact(){
    const [state, handleSubmit] = useForm("xrgvjeay");

    if(state.succeeded){
        return (


                <div className={classes.submitMessage}>
                   <p className={classes.submitMessageHeading} data-aos="fade-up">Your form has been submitted.</p>
                    <p className={classes.submitMessageBox} data-aos="fade-up">
                        Thank you for reaching out!
                I appreciate your interest and
                will respond to your message as soon as possible.
                </p>
                <p className={classes.submitContactLine}>Designed and developed by <a className={classes.submitMyName} href="https://linktr.ee/SrushtiDeshmukh" target="_blank">Srushti Deshmukh</a></p>

                </div>
        )
    }


    return(
        <div className={classes.contactRoot} id="newContact" >
            <p className={classes.contactTitle} data-aos="fade-up">
                <span className={classes.titleNumber}>05.</span> Contact
                <span className={classes.titleLine}></span>
            </p>
            <p className={classes.contactMain} data-aos="fade-up">Get In Touch</p>
            <p className={classes.contactSub} data-aos="fade-up">Have a project in mind or just want to say hi? My inbox is always open.</p>

            <div className={classes.contactGrid} data-aos="fade-up">
                <div className={classes.channelsCard}>
                    <p className={classes.channelsTitle}>Direct Channels</p>
                    <p className={classes.channelsIntro}>Reach out directly via email or connect across professional networks.</p>

                    <div className={classes.channelList}>
                        <a href="https://mail.google.com/mail/?view=cm&to=srushtideshmukh54@gmail.com" target="_blank" rel="noreferrer" className={classes.channelRow}>
                            <span className={classes.channelIcon}><FiMail /></span>
                            <span className={classes.channelText}>
                                <span className={classes.channelLabel}>Email</span>
                                <span className={classes.channelValue}>srushtideshmukh54@gmail.com</span>
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/in/srushti-deshmukh-616111221/" target="_blank" rel="noreferrer" className={classes.channelRow}>
                            <span className={classes.channelIcon}><FiLinkedin /></span>
                            <span className={classes.channelText}>
                                <span className={classes.channelLabel}>LinkedIn</span>
                                <span className={classes.channelValue}>linkedin.com/in/srushti-deshmukh</span>
                            </span>
                        </a>
                        <a href="https://github.com/Srushti2002" target="_blank" rel="noreferrer" className={classes.channelRow}>
                            <span className={classes.channelIcon}><FiGithub /></span>
                            <span className={classes.channelText}>
                                <span className={classes.channelLabel}>GitHub</span>
                                <span className={classes.channelValue}>github.com/Srushti2002</span>
                            </span>
                        </a>
                    </div>

                    <p className={classes.channelsFooter}>Open to full-time opportunities and freelance collaborations.</p>
                </div>

                <form onSubmit={handleSubmit} className={classes.contactBox}>
                    <label htmlFor="name">Your Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="e.g. Jane Doe"
                    />

                    <label htmlFor="email">Your Email Address</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="e.g. jane@example.com"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Share details about your project or inquiry..."
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />

                    <button type="submit" className={classes.contactButton} disabled={state.submitting}>
                        <FiSend /> Send Message
                    </button>
                </form>
            </div>

            <p className={classes.contactLastLine}>Designed and developed by <a className={classes.myName} href="https://linktr.ee/SrushtiDeshmukh" target="_blank">Srushti Deshmukh</a></p>

        </div>
    )
}
