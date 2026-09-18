import classes from '../styles/skill.module.scss'
import {
    SiReact, SiNextdotjs, SiMongodb, SiExpress, SiNodedotjs, SiGit, SiGithub, SiAmazonaws,
    SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiMui, SiRedis, SiDocker, SiRedux, SiPostman, SiCplusplus
} from "react-icons/si"

const skillInfo = [
    { name: "React", Icon: SiReact, color: "#61DAFB", key: 0 },
    { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF", key: 1 },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248", key: 2 },
    { name: "Express", Icon: SiExpress, color: "#FFFFFF", key: 3 },
    { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E", key: 4 },
    { name: "Git", Icon: SiGit, color: "#F05032", key: 5 },
    { name: "GitHub", Icon: SiGithub, color: "#F0F6FC", key: 6 },
    { name: "AWS", Icon: SiAmazonaws, color: "#FF9900", key: 7 },
    { name: "HTML", Icon: SiHtml5, color: "#E34F26", key: 8 },
    { name: "CSS", Icon: SiCss3, color: "#1572B6", key: 9 },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", key: 10 },
    { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3", key: 11 },
    { name: "MUI", Icon: SiMui, color: "#007FFF", key: 12 },
    { name: "Redis", Icon: SiRedis, color: "#DC382D", key: 13 },
    { name: "Docker", Icon: SiDocker, color: "#2496ED", key: 14 },
    { name: "Redux", Icon: SiRedux, color: "#764ABC", key: 15 },
    { name: "Postman", Icon: SiPostman, color: "#FF6C37", key: 16 },
    { name: "C++", Icon: SiCplusplus, color: "#00599C", key: 17 },
]

export default function Skills(){
    return(
        <div className={classes.skillRoot} id="newSkill">
            <p className={classes.skillHeading} data-aos="fade-up">
                <span className={classes.titleNumber}>03.</span> Skills
                <span className={classes.titleLine}></span>
            </p>
            <div className={classes.skillGrid} data-aos="fade-up">
                {skillInfo.map((skill) => {
                    const Icon = skill.Icon
                    return (
                        <div key={skill.key} className={classes.skillCard} style={{ '--skill-color': skill.color }}>
                            <Icon className={classes.skillIcon} />
                            <p className={classes.skillName}>{skill.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
