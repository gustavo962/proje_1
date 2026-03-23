import Vaga from '../Vaga'
import { Container, Lista, Secao, Titulo } from './styles'

const ListaVagas = () => (
  <Secao>
    <Container>
      <Titulo>Vagas disponíveis</Titulo>
      <Lista>
        <Vaga
          titulo="Desenvolvedor Front-end React"
          localizacao="Remoto"
          nivel="Júnior"
          modalidade="CLT"
          link="https://github.com"
        />
        <Vaga
          titulo="Desenvolvedor Full Stack"
          localizacao="São Paulo - SP"
          nivel="Pleno"
          modalidade="PJ"
          link="https://github.com"
        />
        <Vaga
          titulo="UI Designer"
          localizacao="Florianópolis - SC"
          nivel="Pleno"
          modalidade="CLT"
          link="https://github.com"
        />
        <Vaga
          titulo="Desenvolvedor Back-end Node.js"
          localizacao="Remoto"
          nivel="Sênior"
          modalidade="PJ"
          link="https://github.com"
        />
      </Lista>
    </Container>
  </Secao>
)

export default ListaVagas