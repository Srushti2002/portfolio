import classes from '../styles/aboutus.module.scss'
export default function Aboutus(){
    return(
        <div className={classes.aboutUsRoot} id="newAboutUs">
            <div className={classes.aboutUsSec} data-aos=  "fade-up">
                <p className={classes.aboutUsHeading}>About Me</p>
                <p className={classes.aboutUsContent}>Hello and welcome! I&apos;m Srushti Deshmukh, a passionate full-stack web developer specializing in the MERN stack. With a strong foundation in front-end technologies and hands-on experience building end-to-end web applications, I love turning ideas into responsive, scalable, and user-focused solutions.
                    My journey began in front-end development, where I honed my skills in HTML, CSS, and JavaScript. Over time, I transitioned into full-stack development, embracing the backend with Node.js and Express, and integrating MongoDB for robust data handling. Whether it's creating seamless user experiences, building secure authentication systems, or connecting frontend and backend through clean APIs, I enjoy crafting applications that are both intuitive and technically sound.
                    Let&apos;s connect and create something amazing together!

</p>
            </div>
        </div>
    )
}