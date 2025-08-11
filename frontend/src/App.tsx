import './assets/scss/global.module.scss'

import Banner from "./Pages/Banner"
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
    </>
  )
}

export default App
