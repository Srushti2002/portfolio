import React from "react"
import 'aos/dist/aos.css'
import AOS from 'aos'
import Head from "next/head"
import { Inter } from 'next/font/google'
import Header from '../components/head'
import Aboutus from '../components/aboutus'
import Skills from '../components/skill'
import Projects from '../components/projects'
import Contact from '../components/contact'


const inter = Inter({ subsets: ['latin'] })

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
          <Aboutus />
          <Skills /> 
          <Projects />
          <Contact />
    
    </div>
    
  )
}
