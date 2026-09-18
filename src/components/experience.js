import classes from '../styles/experience.module.scss'

const experienceInfo = [
    {
        company: "Agripal Farm Solutions",
        role: "Software Developer",
        timeline: "Jan 2026 - Present",
        techStack: ["React", "Node.js", "MongoDB", "Express.js", "AWS"],
        description: "Building and scaling a multi-tenant Learning Management System used by 1,000+ users across 5+ organizations, with features for learners, admins, and superadmins.",
        key: 0
    },
    {
        company: "TATA Consultancy Services",
        role: "Assistant System Engineer",
        timeline: "Aug 2024 - Dec 2025",
        techStack: ["React", "Node.js", "MongoDB", "Express.js"],
        description: "Worked on a production insurance platform, building responsive React interfaces and Node.js APIs while handling validations, bug fixes, troubleshooting, and production issues."
    },
    {
        company: "GBJ Buzz",
        role: "Frontend Developer Intern",
        timeline: "Dec 2023 - Jun 2024",
        techStack: ["React", "Sanity CMS", "Tailwind CSS"],
        description: "Built a client portfolio website highlighting their achievements, projects, and professional journey, with a responsive and polished UI. Integrated Sanity CMS for dynamic blog management and content updates.",
        key: 2
    },
]

export default function Experience(){
    return(
        <div className={classes.experienceRoot} id="newExperience">
            <p className={classes.experienceTitle} data-aos="fade-up">
                <span className={classes.titleNumber}>01.</span> Experience
                <span className={classes.titleLine}></span>
            </p>

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
