import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RestaurantCard from '../components/RestaurantCard'
import { Restaurant } from '../types'

const List = styled.section`
  padding: 56px 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

type Props = {
  restaurants: Restaurant[]
}

const Home = ({ restaurants }: Props) => {
  return (
    <>
      <Header showHero />
      <List>
        <div className="container">
          <Grid>
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </Grid>
        </div>
      </List>
      <Footer />
    </>
  )
}

export default Home