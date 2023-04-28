import classes from '../styles/aboutus.module.scss'
export default function Aboutus(){
    return(
        <div className={classes.aboutUsRoot} id="newAboutUs">
            <div className={classes.aboutUsSec} data-aos="fade-up">
                <p className={classes.aboutUsHeading}>About Me</p>
                <p className={classes.aboutUsContent}>Hello and welcome to my portfolio! My name is Srushti, and I am a skilled front-end web developer with a passion for creating beautiful and user-friendly websites.
As a front-end developer, I specialize in building websites that are not only visually appealing but also highly functional and easy to use. I have a strong background in HTML, CSS, and JavaScript, as well as experience with popular front-end framework such as React.
My portfolio showcases some of my most recent projects, where I have leveraged my technical skills and creative abilities to create engaging user interfaces and seamless user experiences. I believe that a website should not only look good but should also be intuitive and easy to navigate.
</p>
            </div>
        </div>
    )
}