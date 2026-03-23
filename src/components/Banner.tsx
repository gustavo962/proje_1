import styled from 'styled-components'

const Wrapper = styled.section`
  height: 280px;
  position: relative;
  background-size: cover;
  background-position: center;
  margin-bottom: 56px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
  }
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0 32px;
  color: #fff;
`

const Category = styled.span`
  font-size: 22px;
  font-weight: 100;
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
`

type Props = {
  image: string
  category: string
  title: string
}

const Banner = ({ image, category, title }: Props) => {
  return (
    <Wrapper style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <Content>
          <Category>{category}</Category>
          <Title>{title}</Title>
        </Content>
      </div>
    </Wrapper>
  )
}

export default Banner