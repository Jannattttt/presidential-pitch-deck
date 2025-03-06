"use client"

import { useState, useEffect } from "react"
import "./App.css"
import Hero from "./components/Hero"
import Foreword from "./components/Foreword"
import Overview from "./components/Overview"
import Vision from "./components/Vision"
import Structure from "./components/Structure"
import Community from "./components/Community"
import VisualAppeal from "./components/VisualAppeal"
import Timeline from "./components/Timeline"
import Action from "./components/Action"
import CallToAction from "./components/CallToAction"
import Outcomes from "./components/Outcomes"
import Conclusion from "./components/Conclusion"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="app">
      <Navbar scrollPosition={scrollPosition} />
      <Hero />
      <Foreword />
      <Overview />
      <Vision />
      <Structure />
      <Community />
      <VisualAppeal />
      <Timeline />
      <Action />
      <CallToAction />
      <Outcomes />
      <Conclusion />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

