import classes from '../styles/education.module.scss'

const educationInfo = [
    {
        institution: "G. H. Raisoni College of Engineering, Nagpur",
        degree: "Bachelor of Technology in Artificial Intelligence",
        timeline: "2020 - 2024",
        description: "B.Tech. in Artificial Intelligence with a CGPA of 8.88, with strong foundations in software engineering, web development, data structures, and problem-solving.",
        key: 0
    }
]

export default function Education(){
    return(
        <div className={classes.educationRoot} id="newEducation">
            <p className={classes.educationTitle} data-aos="fade-up">
                <span className={classes.titleNumber}>04.</span> Education
                <span className={classes.titleLine}></span>
            </p>

            <div className={classes.content}>
                {
                    educationInfo.map((edu) => {
                        return(
                            <div key={edu.key} className={classes.educationHolder} data-aos="fade-up">
                                <div className={classes.educationEach}>
                                    <div className={classes.educationHeader}>
                                        <div className={classes.institution}>{edu.institution}</div>
                                        <div className={classes.timeline}>{edu.timeline}</div>
                                    </div>
                                    <div className={classes.degree}>{edu.degree}</div>
                                    <div className={classes.description}>{edu.description}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
