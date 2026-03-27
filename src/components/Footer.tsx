import styled from 'styled-components'
import { colors } from '../styles/global'

const Wrapper = styled.footer`
  background: ${colors.footerBg};
  height: 298px;
  margin-top: 120px;
  display: flex;
  align-items: center;
`

const Content = styled.div`
  width: 100%;
  text-align: center;
  color: ${colors.coral};
`

const Logo = styled.div`
  display: inline-block;
  border: 2px solid ${colors.coral};
  padding: 4px 8px;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 24px;
`

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${colors.coral};
    display: inline-block;
  }
`

const Text = styled.p`
  max-width: 480px;
  margin: 0 auto;
  font-size: 10px;
  line-height: 1.4;
`

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <Content>
          <Logo>efood</Logo>
          <Icons>
            <span />
            <span />
            <span />
          </Icons>
          <Text>
            A efood é uma plataforma para divulgação de estabelecimentos,
            responsavel pela entrega, contato entre o cliente e o restaurante.
          </Text>
        </Content>
      </div>
    </Wrapper>
  )
}

export default Footer