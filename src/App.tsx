import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Productos from './components/Productos'
import Diferenciales from './components/Diferenciales'
import Proceso from './components/Proceso'
import MarcasPropias from './components/MarcasPropias'
import ClientesTicker from './components/ClientesTicker'
import Formulario from './components/Formulario'
import Footer from './components/Footer'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <Productos />
      <Diferenciales />
      <Proceso />
      <MarcasPropias />
      <Formulario />
      <ClientesTicker />
      <Footer />
    </main>
  )
}

export default App
