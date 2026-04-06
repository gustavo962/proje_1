import { Restaurant } from '../types'

export const restaurants: Restaurant[] = [
  {
    id: 1,
    title: 'Sakura House',
    category: 'Japonesa',
    rating: 4.8,
    description:
      'Um restaurante com pratos frescos, combinados especiais e sabores marcantes para quem ama culinária oriental.',
    cover:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1400&q=80',
    products: [
      {
        id: 101,
        name: 'Combo Especial',
        description:
          'Peças selecionadas com salmão, cream cheese e acompanhamento especial da casa.',
        image:
          'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
        price: 39.9,
        portion: 'Serve 1 pessoa'
      },
      {
        id: 102,
        name: 'Hot Roll Premium',
        description:
          'Hot roll crocante por fora e macio por dentro, com molho especial.',
        image:
          'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
        price: 29.9,
        portion: '8 unidades'
      },
      {
        id: 103,
        name: 'Temaki Salmão',
        description:
          'Temaki com salmão fresco, arroz temperado e cebolinha.',
        image:
          'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
        price: 25.9,
        portion: '1 unidade'
      },
      {
        id: 104,
        name: 'Yakissoba',
        description:
          'Macarrão salteado com legumes frescos e proteína à escolha.',
        image:
          'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=800&q=80',
        price: 31.9,
        portion: 'Serve 1 pessoa'
      },
      {
        id: 105,
        name: 'Uramaki Filadélfia',
        description:
          'Arroz por fora, recheio generoso de salmão e cream cheese.',
        image:
          'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80',
        price: 27.9,
        portion: '10 unidades'
      },
      {
        id: 106,
        name: 'Guioza',
        description:
          'Pastéis orientais recheados e grelhados no ponto certo.',
        image:
          'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?auto=format&fit=crop&w=800&q=80',
        price: 22.9,
        portion: '6 unidades'
      }
    ]
  },
  {
    id: 2,
    title: 'Bella Massa',
    category: 'Italiana',
    rating: 4.7,
    description:
      'Massas artesanais, molhos encorpados e receitas inspiradas na cozinha italiana tradicional.',
    cover:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80',
    heroImage:
      'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&w=1400&q=80',
    products: [
      {
        id: 201,
        name: 'Pizza Margherita',
        description:
          'Molho de tomate, mussarela, manjericão fresco e massa leve.',
        image:
          'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
        price: 49.9,
        portion: 'Serve 2 pessoas'
      },
      {
        id: 202,
        name: 'Spaghetti ao Molho',
        description:
          'Espaguete artesanal com molho da casa e toque de parmesão.',
        image:
          'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80',
        price: 36.9,
        portion: 'Serve 1 pessoa'
      },
      {
        id: 203,
        name: 'Lasanha Bolonhesa',
        description:
          'Camadas generosas de massa, carne e queijo gratinado.',
        image:
          'https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=800&q=80',
        price: 42.9,
        portion: 'Serve 1 pessoa'
      },
      {
        id: 204,
        name: 'Ravioli de Queijo',
        description:
          'Massa recheada com queijo ao molho suave e ervas.',
        image:
          'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80',
        price: 39.9,
        portion: 'Serve 1 pessoa'
      },
      {
        id: 205,
        name: 'Fettuccine Alfredo',
        description:
          'Massa cremosa com molho alfredo e finalização delicada.',
        image:
          'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
        price: 37.9,
        portion: 'Serve 1 pessoa'
      },
      {
        id: 206,
        name: 'Bruschetta',
        description:
          'Entrada crocante com tomate, alho, azeite e ervas.',
        image:
          'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
        price: 19.9,
        portion: '4 unidades'
      }
    ]
  }
]