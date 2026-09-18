import classes from '../styles/education.module.scss'

const educationInfo = [
    {
        institution: "Institution Name",
        degree: "Degree, Major",
        timeline: "20XX - 20XX",
        description: "Add a short note here — CGPA/percentage, relevant coursework, or achievements.",
        key: 0
    },
    {
        institution: "Institution Name",
        degree: "Higher Secondary (12th)",
        timeline: "20XX - 20XX",
        description: "Add a short note here — percentage, stream, or achievements.",
        key: 1
    },
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
