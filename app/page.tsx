import React from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Features from './components/sections/Features'
import Testimonials from './components/sections/Testimonials'
import Gallery from './components/sections/Gallery'
import Contacts from './components/sections/Contacts'
import Footer from './components/sections/Footer'

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Gallery />
      <Contacts />
      <Footer />
    </main>
  )
}

export default Home
