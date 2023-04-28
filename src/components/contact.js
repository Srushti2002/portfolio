import classes from '../styles/contact.module.scss'

export default function Contact(){
    return(
        <div className={classes.contactRoot} id="newContact" > 
        <div className={classes.contactLabel} data-aos="fade-up">

            <p className={classes.contactMain}>Contact me for inquiries or collaboration</p>
                                 <form className={classes.contactBox}>
                <input type="text" name="name" placeholder="Name"></input>
                <input type="email" name="email" placeholder="Email" required></input>
                <input type="text" name="subject" placeholder="Subject"></input>
                <textarea rows="14" cols="20">
                    Message
                </textarea>
                <input className={classes.contactButton} type="submit" value =   "Submit" />
            </form>
            <p className={classes.contactLastLine}>Designed and developed by <a className={classes.myName} href="https://linktr.ee/SrushtiDeshmukh" target="_blank">Srushti Deshmukh</a></p>
 
        </div>
        </div>
    )
}