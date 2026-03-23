import styled from 'styled-components'
import { Product } from '../types'
import { colors } from '../styles/global'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 15;
`

const Aside = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: 360px;
  max-width: 100%;
  min-height: 100vh;
  background-color: ${colors.pink};
  padding: 32px 16px;
  color: ${colors.cream};
  overflow-y: auto;
`

const ProductItem = styled.li`
  display: flex;
  gap: 8px;
  background-color: ${colors.cream};
  padding: 8px;
  margin-bottom: 16px;
  color: ${colors.pink};
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  span {
    font-size: 14px;
  }
`

const RemoveButton = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  background: transparent;
  color: ${colors.pink};
  font-size: 12px;
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0 16px;
  font-weight: bold;
`

const ActionButton = styled.button`
  width: 100%;
  background-color: ${colors.cream};
  color: ${colors.pink};
  font-weight: bold;
  padding: 8px;
  margin-bottom: 8px;
`

const Title = styled.h3`
  margin-bottom: 16px;
`

const FieldGroup = styled.div`
  margin-bottom: 8px;
`

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: bold;
`

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 8px;
  background-color: ${colors.cream};
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
      <Aside onClick={(e) => e.stopPropagation()}>
        {step === 'cart' && (
          <>
            <Title>Carrinho</Title>

            <ul>
              {cart.map((item, index) => (
                <ProductItem key={`${item.id}-${index}`}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <span>R$ {item.price.toFixed(2)}</span>
                  </div>
                  <RemoveButton onClick={() => onRemoveFromCart(index)}>
                    remover
                  </RemoveButton>
                </ProductItem>
              ))}
            </ul>

            <Total>
              <span>Valor total</span>
              <span>R$ {totalPrice.toFixed(2)}</span>
            </Total>

            <ActionButton onClick={onGoToDelivery} disabled={cart.length === 0}>
              Continuar com a entrega
            </ActionButton>
          </>
        )}

        {step === 'delivery' && (
          <>
            <Title>Entrega</Title>

            <FieldGroup>
              <Label>Quem irá receber</Label>
              <Input defaultValue="Gustavo de Souza" />
            </FieldGroup>

            <FieldGroup>
              <Label>Endereço</Label>
              <Input defaultValue="Rua Exemplo" />
            </FieldGroup>

            <FieldGroup>
              <Label>Cidade</Label>
              <Input defaultValue="Taió" />
            </FieldGroup>

            <Row>
              <FieldGroup>
                <Label>CEP</Label>
                <Input defaultValue="89190-000" />
              </FieldGroup>

              <FieldGroup>
                <Label>Número</Label>
                <Input defaultValue="123" />
              </FieldGroup>
            </Row>

            <FieldGroup>
              <Label>Complemento</Label>
              <Input defaultValue="Casa" />
            </FieldGroup>

            <ActionButton onClick={onGoToPayment}>
              Continuar com o pagamento
            </ActionButton>
            <ActionButton onClick={onClose}>Voltar para o carrinho</ActionButton>
          </>
        )}

        {step === 'payment' && (
          <>
            <Title>Pagamento - Valor a pagar R$ {totalPrice.toFixed(2)}</Title>

            <FieldGroup>
              <Label>Nome no cartão</Label>
              <Input defaultValue="Gustavo de Souza" />
            </FieldGroup>

            <Row>
              <FieldGroup>
                <Label>Número do cartão</Label>
                <Input defaultValue="1234 5678 9101 1121" />
              </FieldGroup>

              <FieldGroup>
                <Label>CVV</Label>
                <Input defaultValue="321" />
              </FieldGroup>
            </Row>

            <Row>
              <FieldGroup>
                <Label>Mês de vencimento</Label>
                <Input defaultValue="10" />
              </FieldGroup>

              <FieldGroup>
                <Label>Ano de vencimento</Label>
                <Input defaultValue="2028" />
              </FieldGroup>
            </Row>

            <ActionButton onClick={onFinishOrder}>
              Finalizar pagamento
            </ActionButton>
            <ActionButton onClick={onGoToDelivery}>
              Voltar para a edição de endereço
            </ActionButton>
          </>
        )}

        {step === 'success' && (
          <>
            <Title>Pedido realizado</Title>
            <p style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
              Seu pedido foi enviado para preparação e em breve seguirá para
              entrega no endereço informado.
            </p>

            <p style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
              Gostaríamos de lembrar que nossos entregadores não realizam cobranças extras.
            </p>

            <p style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
              Agradecemos pela preferência e desejamos uma ótima refeição.
            </p>

            <ActionButton onClick={onResetOrder}>Concluir</ActionButton>
          </>
        )}
      </Aside>
    </Overlay>
  )
}

export default Sidebar