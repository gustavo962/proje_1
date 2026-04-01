import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RestaurantCard from '../components/RestaurantCard'
import { Restaurant } from '../types'

const Section = styled.section`
  padding: 80px 0 0;
`

const Grid = styled.div`
  width: 1024px;
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 490px);
  justify-content: space-between;
  row-gap: 48px;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    gap: 24px;
    width: 100%;
  }
`

type Props = {
  restaurants: Restaurant[]
}

const Home = ({ restaurants }: Props) => {
  return (
    <>
      <Header showHero />
      <Section>
        <div className="container">
          <Grid>
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </Grid>
        </div>
      </Section>
      <Footer />
    </>
  )
}

export default Home