import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import {Servicios} from './pages/Servicios'
import { SobreMi } from './pages/SobreMi';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route  path="/" element={<HomePage />} />
          <Route  path="/sobremi" element={<SobreMi />} />
          <Route path="/servicios" element={ <Servicios />} />
        </Routes>
        {<Footer />}
      </div>
    </Router>
  )
}

export default App
