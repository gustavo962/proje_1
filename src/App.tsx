import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Formulario from './components/Formulario'
import ListaVagas from './components/ListaVagas'
import EstiloGlobal from './style'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Formulario />
      <ListaVagas />
    </>
  )
}

export default App