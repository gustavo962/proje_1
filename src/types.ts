export type Product = {
  id: number
  name: string
  description: string
  image: string
  price: number
  portion: string
}

export type Restaurant = {
  id: number
  title: string
  category: string
  rating: number
  description: string
  cover: string
  heroImage: string
  products: Product[]
}