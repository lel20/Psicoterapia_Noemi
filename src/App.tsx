import './App.css'
import { Navbar } from './components/Navbar'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'
import backgroundImage from './assets/Naturaleza.jpg'
function App() {
  return (
    <div className='min-h-screen bg-no-repeat bg-fixed 'style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "100%" }}>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
