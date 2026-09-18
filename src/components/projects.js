import classes from '../styles/projects.module.scss'

const projectInfo = [
    {
        name: "EduShare",
        description: "Built a learning platform where mentors share video playlists, students track progress and take AI-generated MCQ quizzes, with async video summarization for a smoother experience.",
        tech: ["React", "Redux", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Redis", "Docker", "Gemini AI"],
        key: 0
    },

    {
        name: "Intellirecruit",
        description: "IntelliRecruit, built with React, optimizes resumes by providing feedback and compatibility scores based on job descriptions.",
        tech: ["React", "Python", "Flask", "Gemini API"],
        key: 1
    },

    {
        name: "Daily Diary",
        description: "Built a full-stack diary app with JWT authentication, user-specific content, and AI-powered mood analysis. Hosted on Render with MongoDB Atlas.",
        tech: ["React", "MongoDB", "Node.js", "Express"],
        key: 2
    },
    {
        name: "Codepen Clone",
        description: "A React-based CodePen clone is a website where users can write code in HTML, CSS, and JavaScript, and see the output in real-time.",
        tech: ["React", "CSS"],
        key: 3
    },

    {
        name: "ListNest",
        description: "A React-based task management website that lets users add and remove tasks easily, keeping track of their to-do list.",
        tech: ["React", "CSS"],
        key: 4
    },

]

export default function Projects(){
    return(
        <div className={classes.projectRoot} id="newProject">
            <p className={classes.projectTitle} data-aos="fade-up">
                <span className={classes.titleNumber}>02.</span> Projects
                <span className={classes.titleLine}></span>
            </p>

            <div className={classes.content}>
                <div className={classes.cards}>

            {
                projectInfo.map((project) => {
                    return(
                        <div key = {project.key} className={classes.projectHolder} data-aos="fade-up" >
                            <div className={classes.projectEach}>
                                <div className={classes.projectName}>{project.name}</div>

                                <div className={classes.projectData}>
                                <div className={classes.projectDescribe}>{project.description}</div>
                                </div>

                                {project.tech.length > 0 &&
                                    <div className={classes.techStack}>
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className={classes.techTag}>{tech}</span>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>

                    )
                }
                )
            }
            </div>
            </div>


        </div>
    )
}
