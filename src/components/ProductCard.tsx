import styled from 'styled-components'
import { Product } from '../types'
import { colors } from '../styles/global'

const Card = styled.article`
  background-color: ${colors.pink};
  padding: 8px;
  color: ${colors.cream};
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  margin-bottom: 8px;
`

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`

const Text = styled.p`
  font-size: 14px;
  line-height: 1.5;
  flex: 1;
  margin-bottom: 8px;
`

const Button = styled.button`
  width: 100%;
  background-color: ${colors.cream};
  color: ${colors.pink};
  font-weight: bold;
  padding: 6px;
`

type Props = {
  product: Product
  onOpenModal: (product: Product) => void
}

const ProductCard = ({ product, onOpenModal }: Props) => {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Title>{product.name}</Title>
      <Text>{product.description}</Text>
      <Button onClick={() => onOpenModal(product)}>Mais detalhes</Button>
    </Card>
  )
}

export default ProductCard