import { Footer } from "../components/Footer"
import { MainContent } from "../components/MainContent"
import { Navbar } from "../components/Navbar"

function HomePage() {
  return (
    <div className='min-h-screen bg-no-repeat bg-fixed bg-white'>
      <Navbar/>
      <MainContent />
      <Footer />
    </div>
  )
}
export default HomePage