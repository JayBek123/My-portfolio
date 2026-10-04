import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/sections/Footer'
import Header from './components/sections/Header'
import { siteContent } from './data/siteContent'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Home from './pages/Home'
import ProjectDetailPage from './pages/ProjectDetailPage'
import WorkPage from './pages/WorkPage'

const { name, email, location, navigation, socialLinks } = siteContent

function App() {
  return (
    <div className="portfolio-page">
      <Header name={name} navigation={navigation} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/:projectName" element={<ProjectDetailPage />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer email={email} name={name} location={location} socialLinks={socialLinks} />
    </div>
  )
}

export default App