import classes from '../styles/projects.module.scss'

const projectInfo = [
    
    {
        name: "Intellirecruit",
        description: "IntelliRecruit, built with React, optimizes resumes by providing feedback and compatibility scores based on job descriptions.",
        key : 1
    },
       
    {
        name: "Daily Diary",
        description: "Built a full-stack diary app with JWT authentication, user-specific content, and AI-powered mood analysis. Hosted on Render with MongoDB Atlas. ",
        key: 2
    },
    {
        name: "Codepen Clone",
        description: "A React-based CodePen clone is a website where users can write code in HTML, CSS, and JavaScript, and see the output in real-time.",
        key: 3
    },
    {
        name: "ListNest",
        description: "A React-based task management website that lets users add and remove tasks easily, keeping track of their to-do list.",
        key: 4
    },
    {
        name: "DrowsyGuard",
        description: "A Drowsiness Detection System employing transfer learning to identify when drivers are drowsy, alerting them to prevent road accidents.",
        key: 5
    },
]

export default function Projects(){
    return(
        <div className={classes.projectRoot} id="newProject">
            <p className={classes.projectTitle} data-aos="fade-up">Projects</p>
      
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