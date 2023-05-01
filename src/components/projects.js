import classes from '../styles/projects.module.scss'

const projectInfo = [
    {
        name: "Apple Clone",
        description: "The website has been developed using the React framework and serves as a replica of a well-known Apple website in India.",
        key: 1
    },
    {
        name: "Restaurant Website",
        description: "A Bootstrap-designed website that enables customers to make table reservations and place food orders online., CSS, and JS.",
        key: 2
    },
    {
        name: "Custom Video Player",
        description: "A customized video player that can be controlled by the user through keys, developed with HTML, CSS, and JS.",
        key: 3
    },
    {
        name: "Rheumatoid Arthritis Prediction",
        description: "A prognostic model has been developed for Rheumatoid Arthritis, an autoimmune and inflammatory disease, utilizing OpenCV, machine learning, and deep learning techniques. The model is designed to predict the presence of arthritis in patients by analyzing images.",
        key : 4
    },
    {
        name: "dfghdg",
        description: " aadsfs dfsd dhdr",
        key: 5
    }
]

export default function Projects(){
    return(
        <div className={classes.projectRoot} id="newProject">
            <p className={classes.projectTitle} data-aos="fade-up">Projects</p>
            



            

            

            {
                projectInfo.map((project) => {
                    return(
                        <div key = {project.key} className={classes.projectHolder} data-aos="fade-up" >
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