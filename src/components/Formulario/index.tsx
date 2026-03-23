import { FormContainer, Campo, Botao, Container, Titulo } from './styles'

const Formulario = () => (
  <FormContainer>
    <Container>
      <Titulo>Busque por vagas</Titulo>
      <form>
        <Campo type="text" placeholder="Digite a tecnologia (ex: React, Java, Python)" />
        <Botao type="submit">Buscar</Botao>
      </form>
    </Container>
  </FormContainer>
)

export default Formulario