import classes from '../styles/skill.module.scss'

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons"

const skillInfo = [
    { name: "React", slug: "react/react-original", key: 0 },
    { name: "Next.js", slug: "nextjs/nextjs-original", key: 1 },
    { name: "MongoDB", slug: "mongodb/mongodb-original", key: 2 },
    { name: "Express", slug: "express/express-original", invert: true, key: 3 },
    { name: "Node.js", slug: "nodejs/nodejs-original", key: 4 },
    { name: "Git", slug: "git/git-original", key: 5 },
    { name: "GitHub", slug: "github/github-original", invert: true, key: 6 },
    { name: "AWS", slug: "amazonwebservices/amazonwebservices-original-wordmark", key: 7 },
    { name: "HTML5", slug: "html5/html5-original", key: 8 },
    { name: "CSS3", slug: "css3/css3-original", key: 9 },
    { name: "JavaScript", slug: "javascript/javascript-original", key: 10 },
    { name: "Bootstrap", slug: "bootstrap/bootstrap-original", key: 11 },
    { name: "MUI", slug: "materialui/materialui-original", key: 12 },
    { name: "Redis", slug: "redis/redis-original", key: 13 },
    { name: "Docker", slug: "docker/docker-original", key: 14 },
    { name: "Redux", slug: "redux/redux-original", key: 15 },
    { name: "Postman", slug: "postman/postman-original", key: 16 },
    { name: "C++", slug: "cplusplus/cplusplus-original", key: 17 },
]

export default function Skills(){
    return(
        <div className={classes.skillRoot} id="newSkill">
            <p className={classes.skillHeading} data-aos="fade-up">
                <span className={classes.titleNumber}>03.</span> Skills
                <span className={classes.titleLine}></span>
            </p>
            <div className={classes.skillGrid} data-aos="fade-up">
                {skillInfo.map((skill) => (
                    <div key={skill.key} className={classes.skillCard}>
                        <span className={classes.skillIcon}>
                            <img
                                src={`${DEVICON_BASE}/${skill.slug}.svg`}
                                alt={skill.name}
                                className={skill.invert ? classes.iconInvert : undefined}
                            />
                        </span>
                        <p className={classes.skillName}>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
