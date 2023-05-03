interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  inOffer: boolean;
  offerPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export const products: Product[] = [
  {
    name: 'filete de fescado',
    description:
      'Every day is taco ipsum tuesday. A wonderful morning for breakfast tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.',
    price: 10.5,
    category: 'Mariscos',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1682358626/resturant/filete_de_pescado_new97c.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'cojinova frita',
    description:
      'Every day is taco ipsum tuesday. A wonderful morning for breakfast tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.',
    price: 12.0,
    category: 'Mariscos',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1682358755/resturant/cojinova_frita_srmbnq.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'chita frita',
    description:
      'Every day is taco ipsum tuesday. A wonderful morning for breakfast tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.',
    price: 8.0,
    category: 'Mariscos',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1682358876/resturant/chita_frita_yiblep.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'sudado de lenguado',
    description:
      'Every day is taco ipsum tuesday. A wonderful morning for breakfast tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.',
    price: 7.0,
    category: 'Mariscos',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1682358875/resturant/sudado_lenguado_bmwe7j.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'sudaddo de chita',
    description:
      'Every day is taco ipsum tuesday. A wonderful morning for breakfast tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.',
    price: 21.0,
    category: 'Mariscos',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1682358918/resturant/sudado_chita_fxmvif.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'leche de tigre',
    description:
      'Every day is taco ipsum tuesday. A wonderful morning for breakfast tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.',
    price: 15,
    category: 'Entradas',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1682876279/resturant/leche_de_tigre_1_k4eeyw.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'chorito a la chalaca',
    description:
      'Every day is taco ipsum tuesday. A wonderful morning for breakfast tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.',
    price: 12.0,
    category: 'Entradas',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1682876282/resturant/chorito_chalaca_1_gzkcfl.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'conchitas a la chalaca',
    description:
      'Every day is taco ipsum tuesday. A wonderful morning for breakfast tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.',
    price: 8.0,
    category: 'Entradas',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1682876283/resturant/conchitas-a-la-chalaca_1_emjbii.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'ensalada de palta',
    description:
      'Every day is taco ipsum tuesday. A wonderful morning for breakfast tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.',
    price: 7.0,
    category: 'Entradas',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1682876290/resturant/ensalada_palta_1_yakyws.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'papas a la huancaina',
    description:
      'Every day is taco ipsum tuesday. A wonderful morning for breakfast tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.',
    price: 21.0,
    category: 'Entradas',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1682876292/resturant/papas-a-la-huancaina_1_wshztc.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'chicharron de pescado',
    description:
      'Every day is taco ipsum tuesday. A wonderful morning for breakfast tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.',
    price: 15,
    category: 'Fuentes',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1682875893/resturant/p03-fuente-chicharron-pescado_1_cnjqm6.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'chaufa de marisco',
    description:
      'Every day is taco ipsum tuesday. A wonderful morning for breakfast tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.',
    price: 12.0,
    category: 'Fuentes',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1682875893/resturant/chaufademarisco_1_x6ste0.png',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'ronda marina',
    description:
      'Every day is taco ipsum tuesday. A wonderful morning for breakfast tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.',
    price: 8.0,
    category: 'Fuentes',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1682875894/resturant/rnodamanrina_1_nxiog6.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'combinado',
    description:
      'Every day is taco ipsum tuesday. A wonderful morning for breakfast tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.',
    price: 7.0,
    category: 'Fuentes',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1682875894/resturant/combinado_1_vq0skm.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'jalea',
    description:
      'Every day is taco ipsum tuesday. A wonderful morning for breakfast tacos. Yeah, apparently the taco shack was robbed. They left the money but took the tacos.',
    price: 21.0,
    category: 'Fuentes',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1682875907/resturant/jalea_1_mo10wa.jpg',
    inOffer: false,
    offerPrice: 0,
  },
];
