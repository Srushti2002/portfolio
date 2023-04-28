import React from "react"
import { GiAbstract002, GiAbstract003, GiAbstract010, GiAllForOne, GiShamblingMound } from "react-icons/gi";

import Head from 'next/head'
import Image from 'next/image'

import 'aos/dist/aos.css'
import AOS from 'aos'
//import ColorButton from '../components/colorbutton'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Headerr from '../components/head'
import Aboutus from '../components/aboutus'
import Skills from '../components/skill'
import Projects from '../components/projects'
import Contact from '../components/contact'
//import Navbar from '../components/navbar'
import Pcnavbar from '../components/pcnavbar'
//import ColorButton from "@/components/colorbutton";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {






  React.useEffect(() => {
    AOS.init({
      duration: 2000,
      // initClassName: "sb-initial-anim",
      // once: false,
      // mirror: true,
      // offset: 50,
      // debounceDelay: 100,
      // throttleDelay: 100,
    })
  }, []);
  return (
        <div>


      
      <Headerr />
      {/* <ColorButton /> */}
      <Aboutus />
      <Skills /> 
      <Projects />
      <Contact />
    </div>
    
  )
}
