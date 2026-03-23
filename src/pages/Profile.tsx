import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import Sidebar from '../components/Sidebar'
import { Product, Restaurant } from '../types'

const Grid = styled.section`
  padding-bottom: 40px;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`

type Props = {
  restaurants: Restaurant[]
  cart: Product[]
  totalPrice: number
  selectedProduct: Product | null
  isCartOpen: boolean
  checkoutStep: 'cart' | 'delivery' | 'payment' | 'success'
  onAddToCart: (product: Product) => void
  onRemoveFromCart: (index: number) => void
  onOpenModal: (product: Product) => void
  onCloseModal: () => void
  onOpenCart: () => void
  onCloseCart: () => void
  onGoToDelivery: () => void
  onGoToPayment: () => void
  onFinishOrder: () => void
  onResetOrder: () => void
}

const Profile = ({
  restaurants,
  cart,
  totalPrice,
  selectedProduct,
  isCartOpen,
  checkoutStep,
  onAddToCart,
  onRemoveFromCart,
  onOpenModal,
  onCloseModal,
  onOpenCart,
  onCloseCart,
  onGoToDelivery,
  onGoToPayment,
  onFinishOrder,
  onResetOrder
}: Props) => {
  const { id } = useParams()
  const restaurant = restaurants.find((item) => item.id === Number(id))

  if (!restaurant) {
    return <h1>Restaurante não encontrado</h1>
  }

  return (
    <>
      <Header
        cartText={`${cart.length} produto(s) no carrinho`}
        onCartClick={onOpenCart}
      />

      <Banner
        image={restaurant.heroImage}
        category={restaurant.category}
        title={restaurant.title}
      />

      <Grid>
        <div className="container">
          <ProductGrid>
            {restaurant.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={onOpenModal}
              />
            ))}
          </ProductGrid>
        </div>
      </Grid>

      <Footer />

      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={onCloseModal}
          onAddToCart={onAddToCart}
        />
      )}

      <Sidebar
        isOpen={isCartOpen}
        cart={cart}
        totalPrice={totalPrice}
        step={checkoutStep}
        onClose={onCloseCart}
        onRemoveFromCart={onRemoveFromCart}
        onGoToDelivery={onGoToDelivery}
        onGoToPayment={onGoToPayment}
        onFinishOrder={onFinishOrder}
        onResetOrder={onResetOrder}
      />
    </>
  )
}

export default Profile