import { Card, Titulo, Local, LinkBotao, Tag } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  link: string
}

const Vaga = ({ titulo, localizacao, nivel, modalidade, link }: Props) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Local>{localizacao}</Local>
    <div>
      <Tag>{nivel}</Tag>
      <Tag>{modalidade}</Tag>
    </div>
    <LinkBotao href={link} target="_blank">
      Ver detalhes
    </LinkBotao>
  </Card>
)

export default Vaga