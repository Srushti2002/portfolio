import classes from '../styles/skill.module.scss'
import Skillsvg from "../svg/svg_component/skillsvg"

const skillInfo = [
    {
        width: 80,
        name: "Frontend",
        percentage: "80%",
        key: 1
    },
    {
        width: 75,
        name: "Backend",
        percentage: "75%",
        key: 2
    },
    {
        width: 60,
        name: "Database",
        percentage: "60%",
        key: 3
    }
    

]
export default function Skills(){
    return(
        <div className={classes.skillRoot} id="newSkill">
            <p className={classes.skillHeading}  data-aos="fade-up">Skills</p>
            <div className={classes.skillImgHolder} data-aos="fade-up">
            <div className={classes.skillSet}>

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
            <Skillsvg />
            </div>
        </div>
    )
}