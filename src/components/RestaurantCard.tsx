import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Restaurant } from '../types'
import { colors } from '../styles/global'

const Card = styled.article`
  border: 1px solid ${colors.border};
  background-color: ${colors.white};
`

const Image = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }
`

const TagGroup = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

const Tag = styled.span`
  background-color: ${colors.pink};
  color: ${colors.cream};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 8px;
`

const Content = styled.div`
  padding: 8px;
`

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-bottom: 8px;

  h3 {
    font-size: 18px;
    color: ${colors.pink};
  }

  span {
    color: ${colors.pink};
    font-weight: bold;
  }
`

const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${colors.pink};
  margin-bottom: 16px;
`

const Button = styled(Link)`
  display: inline-block;
  background-color: ${colors.pink};
  color: ${colors.cream};
  padding: 6px 10px;
  font-size: 14px;
  font-weight: bold;
`

type Props = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <Card>
      <Image>
        <img src={restaurant.cover} alt={restaurant.title} />
        <TagGroup>
          <Tag>Destaque</Tag>
          <Tag>{restaurant.category}</Tag>
        </TagGroup>
      </Image>
      <Content>
        <TitleRow>
          <h3>{restaurant.title}</h3>
          <span>{restaurant.rating} ★</span>
        </TitleRow>
        <Description>{restaurant.description}</Description>
        <Button to={`/perfil/${restaurant.id}`}>Saiba mais</Button>
      </Content>
    </Card>
  )
}

export default RestaurantCard