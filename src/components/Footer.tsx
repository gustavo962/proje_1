import styled from 'styled-components'
import { colors } from '../styles/global'

const Wrapper = styled.footer`
  margin-top: 80px;
  background-color: ${colors.lightPink};
  padding: 40px 0;
  text-align: center;
  color: ${colors.pink};
`

const Logo = styled.div`
  display: inline-block;
  border: 2px solid ${colors.pink};
  padding: 4px 10px;
  font-weight: bold;
  margin-bottom: 16px;
`

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;

  span {
    width: 24px;
    height: 24px;
    border: 1px solid ${colors.pink};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Text = styled.p`
  max-width: 480px;
  margin: 0 auto;
  font-size: 12px;
  line-height: 1.5;
`

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <Logo>efood</Logo>
        <Socials>
          <span>f</span>
          <span>i</span>
          <span>x</span>
        </Socials>
        <Text>
          Este é um projeto fictício desenvolvido para fins educacionais.
          Layout inspirado em aplicativo de delivery, mas com visual próprio.
        </Text>
      </div>
    </Wrapper>
  )
}

export default Footer