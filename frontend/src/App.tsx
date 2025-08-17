import './assets/scss/global.module.scss'

import Banner from "./Pages/Banner"
import Footer from './Pages/Footer'
import Parallax from './Pages/Parallax'
import Sobre from './Pages/Sobre'
import VendaCarros from './Pages/VendaCarros'

function App() {

  return (
    <>
      <Banner />
      <Sobre />
      <Parallax />
      <VendaCarros />
      <Footer />
    </>
  )
}

export default App
