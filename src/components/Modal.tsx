import styled from 'styled-components'
import { Product } from '../types'
import { colors } from '../styles/global'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 20;
`

const Box = styled.div`
  background-color: ${colors.pink};
  width: 100%;
  max-width: 900px;
  padding: 32px;
  position: relative;
  color: ${colors.cream};
`

const Close = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  background: transparent;
  color: ${colors.cream};
  font-size: 22px;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h2`
  margin-bottom: 16px;
`

const Text = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
`

const Button = styled.button`
  background-color: ${colors.cream};
  color: ${colors.pink};
  padding: 8px 12px;
  font-weight: bold;
`

type Props = {
  product: Product
  onClose: () => void
  onAddToCart: (product: Product) => void
}

const Modal = ({ product, onClose, onAddToCart }: Props) => {
  return (
    <Overlay onClick={onClose}>
      <Box onClick={(e) => e.stopPropagation()}>
        <Close onClick={onClose}>×</Close>

        <Content>
          <img src={product.image} alt={product.name} />
          <div>
            <Title>{product.name}</Title>
            <Text>{product.description}</Text>
            <Text>{product.portion}</Text>
            <Button onClick={() => onAddToCart(product)}>
              Adicionar ao carrinho - R$ {product.price.toFixed(2)}
            </Button>
          </div>
        </Content>
      </Box>
    </Overlay>
  )
}

export default Modal