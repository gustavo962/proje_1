import styled from 'styled-components'
import { Product } from '../types'
import { colors } from '../styles/global'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${colors.darkOverlay};
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

const Box = styled.div`
  width: 1024px;
  max-width: 100%;
  background: ${colors.coral};
  padding: 32px;
  position: relative;
  color: ${colors.paleText};
`

const Close = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  background: transparent;
  color: ${colors.paleText};
  font-size: 24px;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Image = styled.img`
  height: 280px;
  object-fit: cover;
`

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`

const Text = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
`

const Button = styled.button`
  background: ${colors.footerBg};
  color: ${colors.coral};
  font-size: 14px;
  font-weight: 700;
  padding: 6px 8px;
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
          <Image src={product.image} alt={product.name} />

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