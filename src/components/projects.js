import classes from '../styles/projects.module.scss'

const projectInfo = [
    {
        name: "Apple Clone",
        description: "The website has been developed using the React framework and serves as a replica of a well-known Apple website in India.",
        key: 1
    },
    {
        name: "DineEase",
        description: "A Bootstrap-designed website that enables customers to make table reservations and place food orders online., CSS, and JS.",
        key: 2
    },
    {
        name: "Video Player",
        description: "A customized video player that can be controlled by the user through keys, developed with HTML, CSS, and JS.",
        key: 3
    },
    {
        name: "RA Prediction",
        description: "A model using OpenCV, machine learning, and deep learning has been developed to predict the presence of Rheumatoid Arthritis by analyzing images.",
        key : 4
    },
    {
        name: "Mood Snap",
        description: "A model that utilizes openCv, and deep learning technologies to analyze facial features in an image and predict the emotional state of the person depicted.",
        key: 5
    }
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