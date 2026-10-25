import SmoothScroll from './components/SmoothScroll/SmoothScroll'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'

export default function App() {
  return (
    <SmoothScroll>
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </SmoothScroll>
  )
}
