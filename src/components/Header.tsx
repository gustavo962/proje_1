import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../styles/global'

const Wrapper = styled.header<{ $home?: boolean }>`
  background-color: ${colors.lightBg};
  background-image:
    linear-gradient(rgba(230, 103, 103, 0.05), rgba(230, 103, 103, 0.05)),
    repeating-linear-gradient(
      90deg,
      rgba(230, 103, 103, 0.06) 0px,
      rgba(230, 103, 103, 0.06) 2px,
      transparent 2px,
      transparent 18px
    );
  color: ${colors.coral};
  height: ${({ $home }) => ($home ? '384px' : '186px')};
`

const Inner = styled.div<{ $home?: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $home }) => ($home ? 'flex-start' : 'flex-start')};
`

const TopBar = styled.div`
  height: 80px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  font-size: 18px;
  font-weight: 700;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    justify-items: center;
    height: auto;
    padding: 20px 0;
  }
`

const Left = styled.div`
  justify-self: start;
`

const Center = styled.div`
  justify-self: center;
`

const Right = styled.div`
  justify-self: end;

  button {
    background: transparent;
    color: ${colors.coral};
    font-size: 18px;
    font-weight: 700;
  }
`

const Logo = styled(Link)`
  display: inline-block;
  border: 2px solid ${colors.coral};
  padding: 4px 8px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
`

const Hero = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Title = styled.h1`
  max-width: 540px;
  color: ${colors.coral};
  font-size: 36px;
  line-height: 1.2;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 28px;
    padding: 0 16px;
  }
`

type Props = {
  showHero?: boolean
  cartText?: string
  onCartClick?: () => void
}

const Header = ({ showHero = false, cartText, onCartClick }: Props) => {
  return (
    <Wrapper $home={showHero}>
      <div className="container">
        <Inner $home={showHero}>
          <TopBar>
            <Left>
              <Link to="/">Restaurantes</Link>
            </Left>

            <Center>
              <Logo to="/">efood</Logo>
            </Center>

            <Right>
              {cartText ? (
                <button type="button" onClick={onCartClick}>
                  {cartText}
                </button>
              ) : (
                <span />
              )}
            </Right>
          </TopBar>

          {showHero && (
            <Hero>
              <Title>
                Viva experiências gastronômicas no conforto da sua casa
              </Title>
            </Hero>
          )}
        </Inner>
      </div>
    </Wrapper>
  )
}

export default Header