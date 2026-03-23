import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../styles/global'

const Wrapper = styled.header<{ $small?: boolean }>`
  background-color: ${colors.lightPink};
  background-image: linear-gradient(
      90deg,
      rgba(230, 103, 103, 0.03) 0%,
      rgba(230, 103, 103, 0.03) 100%
    ),
    repeating-linear-gradient(
      90deg,
      rgba(230, 103, 103, 0.04) 0px,
      rgba(230, 103, 103, 0.04) 2px,
      transparent 2px,
      transparent 18px
    );
  padding: ${({ $small }) => ($small ? '20px 0' : '64px 0')};
`

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.pink};
  font-size: 14px;
  font-weight: bold;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Logo = styled(Link)`
  border: 2px solid ${colors.pink};
  color: ${colors.pink};
  font-weight: bold;
  font-size: 20px;
  padding: 4px 10px;
`

const HeroText = styled.h1`
  text-align: center;
  margin-top: 80px;
  color: ${colors.pink};
  font-size: 36px;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 48px;
  }
`

type Props = {
  showHero?: boolean
  cartText?: string
  onCartClick?: () => void
}

const Header = ({ showHero = false, cartText, onCartClick }: Props) => {
  return (
    <Wrapper $small={!showHero}>
      <div className="container">
        <TopBar>
          <Link to="/">Restaurantes</Link>
          <Logo to="/">efood</Logo>
          {cartText ? (
            <button
              type="button"
              onClick={onCartClick}
              style={{ background: 'transparent', color: colors.pink, fontWeight: 'bold' }}
            >
              {cartText}
            </button>
          ) : (
            <span>Seu delivery favorito</span>
          )}
        </TopBar>

        {showHero && (
          <HeroText>
            Viva experiências gastronômicas no conforto da sua casa
          </HeroText>
        )}
      </div>
    </Wrapper>
  )
}

export default Header