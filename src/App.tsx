import { Routes, Route } from 'react-router-dom'
import { useMemo, useState } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { Product } from './types'
import { restaurants } from './data/restaurants'

function App() {
  const [cart, setCart] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'delivery' | 'payment' | 'success'>('cart')

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price, 0)
  }, [cart])

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product])
    setSelectedProduct(null)
    setIsCartOpen(true)
    setCheckoutStep('cart')
  }

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index))
  }

  const openModal = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  const openCart = () => {
    setIsCartOpen(true)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  const goToDelivery = () => setCheckoutStep('delivery')
  const goToPayment = () => setCheckoutStep('payment')
  const finishOrder = () => setCheckoutStep('success')

  const resetOrder = () => {
    setCart([])
    setCheckoutStep('cart')
    setIsCartOpen(false)
  }

  return (
    <Routes>
      <Route path="/" element={<Home restaurants={restaurants} />} />
      <Route
        path="/perfil/:id"
        element={
          <Profile
            restaurants={restaurants}
            cart={cart}
            totalPrice={totalPrice}
            selectedProduct={selectedProduct}
            isCartOpen={isCartOpen}
            checkoutStep={checkoutStep}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
            onOpenModal={openModal}
            onCloseModal={closeModal}
            onOpenCart={openCart}
            onCloseCart={closeCart}
            onGoToDelivery={goToDelivery}
            onGoToPayment={goToPayment}
            onFinishOrder={finishOrder}
            onResetOrder={resetOrder}
          />
        }
      />
    </Routes>
  )
}

export default App