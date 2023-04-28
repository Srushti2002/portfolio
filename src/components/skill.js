import classes from '../styles/skill.module.scss'

const skillInfo = [
    {
        width: 75,
        name: "Web Development",
        percentage: "75%",
        key: 1
    },
    {
        width: 50,
        name: "Data Science",
        percentage: "50%",
        key: 2
    },
    {
        width: 65,
        name: "Machine Learning",
        percentage: "60%",
        key: 3
    }
    

]
export default function Skills(){
    return(
        <div className={classes.skillRoot} id="newSkill">
            <p className={classes.skillHeading}  data-aos="fade-up">Skills</p>
            <div className={classes.skillSet}  data-aos="fade-up">

            {skillInfo.map((skill) =>  {
                return(
                        <div key = {skill.key} className={classes.skillCase}>
                                <p className={classes.skillName}> {skill.name}   </p>
                            <div className={classes.skillSection}>

                                <div className={classes.skillBar} >

                    

                                    <div className={classes.skillBarColored} style={{width: `${skill.width}%`,}}   ></div>

                                    <div className={classes.skillBarEmpty}></div>
                                </div>
                                <div className={classes.skillPercentage}>
                                    <p>{skill.percentage}</p>
                                </div>

                            </div>
                        
                        </div>
            


                );
            }





            )
        }
            
            </div>
        </div>
    )
}