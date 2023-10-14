import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';


const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
