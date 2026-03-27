import styled from 'styled-components'
import { Product } from '../types'
import { colors } from '../styles/global'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${colors.darkOverlay};
  z-index: 25;
`

const Panel = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: 360px;
  min-height: 100vh;
  background: ${colors.coral};
  padding: 32px 8px 16px;
  color: ${colors.paleText};
`

const CartItem = styled.li`
  background: ${colors.footerBg};
  color: ${colors.coral};
  padding: 8px;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    margin-bottom: 8px;
  }

  span {
    font-size: 14px;
  }
`

const Remove = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  background: transparent;
  color: ${colors.coral};
  font-size: 12px;
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  margin: 24px 0 16px;
`

const Button = styled.button`
  width: 100%;
  background: ${colors.footerBg};
  color: ${colors.coral};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 8px;
  margin-bottom: 8px;
`

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 16px;
`

const Group = styled.div`
  margin-bottom: 8px;
`

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 4px;
`

const Input = styled.input`
  width: 100%;
  height: 32px;
  border: none;
  outline: none;
  background: ${colors.footerBg};
  padding: 8px;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`

type Props = {
  isOpen: boolean
  cart: Product[]
  totalPrice: number
  step: 'cart' | 'delivery' | 'payment' | 'success'
  onClose: () => void
  onRemoveFromCart: (index: number) => void
  onGoToDelivery: () => void
  onGoToPayment: () => void
  onFinishOrder: () => void
  onResetOrder: () => void
}

const Sidebar = ({
  isOpen,
  cart,
  totalPrice,
  step,
  onClose,
  onRemoveFromCart,
  onGoToDelivery,
  onGoToPayment,
  onFinishOrder,
  onResetOrder
}: Props) => {
  if (!isOpen) return null

  return (
    <Overlay onClick={onClose}>
      <Panel onClick={(e) => e.stopPropagation()}>
        {step === 'cart' && (
          <>
            <ul>
              {cart.map((item, index) => (
                <CartItem key={`${item.id}-${index}`}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <span>R$ {item.price.toFixed(2)}</span>
                  </div>
                  <Remove onClick={() => onRemoveFromCart(index)}>x</Remove>
                </CartItem>
              ))}
            </ul>

            <Total>
              <span>Valor total</span>
              <span>R$ {totalPrice.toFixed(2)}</span>
            </Total>

            <Button onClick={onGoToDelivery}>Continuar com a entrega</Button>
          </>
        )}

        {step === 'delivery' && (
          <>
            <Title>Entrega</Title>

            <Group>
              <Label>Quem irá receber</Label>
              <Input defaultValue="João Paulo de Souza" />
            </Group>

            <Group>
              <Label>Endereço</Label>
              <Input />
            </Group>

            <Group>
              <Label>Cidade</Label>
              <Input />
            </Group>

            <Row>
              <Group>
                <Label>CEP</Label>
                <Input />
              </Group>
              <Group>
                <Label>Número</Label>
                <Input />
              </Group>
            </Row>

            <Group>
              <Label>Complemento (opcional)</Label>
              <Input />
            </Group>

            <Button onClick={onGoToPayment}>Continuar com o pagamento</Button>
            <Button onClick={onClose}>Voltar para o carrinho</Button>
          </>
        )}

        {step === 'payment' && (
          <>
            <Title>Pagamento - Valor a pagar R$ {totalPrice.toFixed(2)}</Title>

            <Group>
              <Label>Nome no cartão</Label>
              <Input defaultValue="João Paulo de Souza" />
            </Group>

            <Row>
              <Group>
                <Label>Número do cartão</Label>
                <Input />
              </Group>
              <Group>
                <Label>CVV</Label>
                <Input />
              </Group>
            </Row>

            <Row>
              <Group>
                <Label>Mês de vencimento</Label>
                <Input />
              </Group>
              <Group>
                <Label>Ano de vencimento</Label>
                <Input />
              </Group>
            </Row>

            <Button onClick={onFinishOrder}>Finalizar pagamento</Button>
            <Button onClick={onGoToDelivery}>Voltar para edição de endereço</Button>
          </>
        )}

        {step === 'success' && (
          <>
            <Title>Pedido realizado - 123456</Title>
            <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados
              a realizar cobranças extras.
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
              Lembre-se da importância de higienizar as mãos após o recebimento.
            </p>
            <Button onClick={onResetOrder}>Concluir</Button>
          </>
        )}
      </Panel>
    </Overlay>
  )
}

export default Sidebar