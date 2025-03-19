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
import Covers from "./components/Cover" 
import Timeline from "./components/Timeline"
import Action from "./components/Action"
import CallToAction from "./components/CallToAction"
import Outcomes from "./components/Outcomes"
import Conclusion from "./components/Conclusion"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import NewsFeed from "./components/NewsFeed"
import Footer from "./components/Footer"
import Title from "./components/Title"
import Cover from "./components/Cover"

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
      <Title />
      <Vision />
      <Structure />
      <Community />
      <VisualAppeal />
      <Cover />
      <Timeline />
      <Action />
      <CallToAction />
      <Outcomes />
      <Conclusion />
      <NewsFeed />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

