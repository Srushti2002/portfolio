import classes from '../styles/experience.module.scss'

const experienceInfo = [
    {
        company: "Company Name",
        role: "Software Engineer",
        timeline: "Jan 2024 - Present",
        techStack: ["React", "Node.js", "MongoDB"],
        description: "Describe your key responsibilities and achievements in this role.",
        key: 0
    },
    {
        company: "Company Name",
        role: "Software Engineer Intern",
        timeline: "Jun 2023 - Dec 2023",
        techStack: ["JavaScript", "Express", "MySQL"],
        description: "Describe your key responsibilities and achievements in this role.",
        key: 1
    },
    {
        company: "Company Name",
        role: "Web Developer Intern",
        timeline: "Jan 2023 - May 2023",
        techStack: ["HTML", "CSS", "JavaScript"],
        description: "Describe your key responsibilities and achievements in this role.",
        key: 2
    },
]

export default function Experience(){
    return(
        <div className={classes.experienceRoot} id="newExperience">
            <p className={classes.experienceTitle} data-aos="fade-up">Experience</p>

            <div className={classes.content}>
                {
                    experienceInfo.map((exp) => {
                        return(
                            <div key={exp.key} className={classes.experienceHolder} data-aos="fade-up">
                                <div className={classes.experienceEach}>
                                    <div className={classes.experienceHeader}>
                                        <div className={classes.company}>{exp.company}</div>
                                        <div className={classes.timeline}>{exp.timeline}</div>
                                    </div>
                                    <div className={classes.role}>{exp.role}</div>
                                    <div className={classes.techStack}>
                                        {exp.techStack.map((tech, i) => (
                                            <span key={i} className={classes.techTag}>{tech}</span>
                                        ))}
                                    </div>
                                    <div className={classes.description}>{exp.description}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
