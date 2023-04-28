import classes from '../styles/projects.module.scss'

const projectInfo = [
    {
        name: "asd",
        description: "asdfgh zxcvbn qwerty",
        key: 1
    },
    {
        name: "asd",
        description: "asdfgh zxcvbn qwerty",
        key: 2
    },
    {
        name: "asd",
        description: "asdfgh zxcvbn qwerty",
        key: 3
    }
]

export default function Projects(){
    return(
        <div className={classes.projectRoot} id="newProject">
            <p className={classes.projectTitle} data-aos="fade-up">Projects</p>
            {
                projectInfo.map((project)      => {
                    return(
                        <div className={classes.projectHolder} data-aos="fade-up">
                            <div className={classes.projectEach}>
                                <div className={classes.projectName}>{project.name}</div>
                                <div className={classes.projectDescribe}>{project.description}</div>
                            </div>
                        </div>

                    )
                }
                )
            }
        </div>
    )
}