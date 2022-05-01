import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation.js'
import Landing from '../components/landing.js'
import About from '../components/about.js'
import Instructor from '../components/instructor.js'
import { Link } from "react-scroll";

export default function Home() {
  return (
    <>
    <Navigation/>
    <Landing/>
    <About/>
    <Instructor/>
    </>
    
    // About Us

    // Instructor

    // Sign Up 

    // Logos
  )
}
