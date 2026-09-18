import React from "react"
import 'aos/dist/aos.css'
import AOS from 'aos'
import Head from "next/head"
import Header from '../components/head'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Skills from '../components/skill'
import Education from '../components/education'
import Contact from '../components/contact'


export default function Home() {

  React.useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false
    })
  }, []);

  return (
      <div>
       <Head>
        <title>Portfolio</title>
        </Head>
          <Header />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />

    </div>

  )
}
