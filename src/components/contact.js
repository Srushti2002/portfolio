import classes from '../styles/contact.module.scss'
import {useForm, ValidationError} from "@formspree/react"

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
        <div className={classes.contactLabel} data-aos="fade-up">

            <p className={classes.contactMain}>Contact me for inquiries or collaboration</p>
                
      <form onSubmit={handleSubmit} className={classes.contactBox}>
      <label htmlFor="email">
        Email Address
      </label>
      <input 
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" className={classes.contactButton} disabled={state.submitting}>
        Submit
      </button>
    </form>
  

            
            <p className={classes.contactLastLine}>Designed and developed by <a className={classes.myName} href="https://linktr.ee/SrushtiDeshmukh" target="_blank">Srushti Deshmukh</a></p>
 
        </div>
        </div>
    )
}