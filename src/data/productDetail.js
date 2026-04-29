// src/data/products.js

export const products = [
  {
    id: "1",
    name: "Men Sweatshirt",
    price: 999,
 images: [
  "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=500",
  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
],
    reviews: [
      { id: 1, user: "Rahul", comment: "Good quality", rating: 4 },
      { id: 2, user: "Aman", comment: "Nice product", rating: 5 }
    ]
  },
  {
    id: "2",
    name: "Shoes",
    price: 1999,
    images: [
      "https://via.placeholder.com/303",
      "https://via.placeholder.com/304"
    ],
    reviews: [
      { id: 1, user: "Priya", comment: "Comfortable", rating: 5 }
    ]
  }
];