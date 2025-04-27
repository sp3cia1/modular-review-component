
export const CURRENT_USER_ID = "user123";
export const CURRENT_PRODUCT_ID = "product001";

export const users = {
  "user123": {
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  "user456": {
    name: "Sarah Miller",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  "user789": {
    name: "David Chen",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  "user101": {
    name: "Emma Wilson",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg"
  },
  "user202": {
    name: "James Rodriguez",
    avatar: "https://randomuser.me/api/portraits/men/57.jpg"
  },
  "user303": {
    name: "Olivia Taylor",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  "user404": {
    name: "Michael Brown",
    avatar: "https://randomuser.me/api/portraits/men/81.jpg"
  },
  "user505": {
    name: "Sophia Garcia",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  "user606": {
    name: "Ethan Wilson",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  "user707": {
    name: "Isabella Moore",
    avatar: "https://randomuser.me/api/portraits/women/89.jpg"
  },
  "user808": {
    name: "Noah Thompson",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  "user909": {
    name: "Ava Martinez",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  "user010": {
    name: "Jackson White",
    avatar: "https://randomuser.me/api/portraits/men/91.jpg"
  },
  "user011": {
    name: "Charlotte Lee",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  "user012": {
    name: "Lucas Harris",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg"
  }
};

export const mockReviews = [
  {
    _id: "rev001",
    productId: CURRENT_PRODUCT_ID,
    customerId: CURRENT_USER_ID,
    title: "Excellent product, highly recommended!",
    description: "I've been using this for about a month now and I'm incredibly impressed. The quality is outstanding and it performs exactly as advertised. Would definitely buy again.",
    rating: 5,
    createdAt: new Date(2025, 3, 20).toISOString() 
  },
  {
    _id: "rev002",
    productId: CURRENT_PRODUCT_ID,
    customerId: "user456",
    title: "Good but could be better",
    description: "Overall satisfied with my purchase. The product works well but there are a few minor issues that could be improved. The interface isn't as intuitive as I hoped.",
    rating: 4,
    createdAt: new Date(2025, 3, 15).toISOString() 
  },
  {
    _id: "rev003",
    productId: CURRENT_PRODUCT_ID,
    customerId: "user789",
    title: "Disappointed with quality",
    description: "Not what I expected. The material feels cheap and it started showing wear after just a couple weeks. I expected better durability at this price point.",
    rating: 2,
    createdAt: new Date(2025, 3, 5).toISOString()
  },
  {
    _id: "rev004",
    productId: CURRENT_PRODUCT_ID,
    customerId: "user101",
    title: "Absolutely terrible",
    description: "Complete waste of money. Broke within days and customer service was unhelpful. Would not recommend to anyone.",
    rating: 1,
    createdAt: new Date(2025, 3, 18).toISOString()
  },
  {
    _id: "rev005",
    productId: CURRENT_PRODUCT_ID,
    customerId: "user202",
    title: "Just okay",
    description: "It's fine. Nothing spectacular but gets the job done. I was expecting more based on the price and reviews, but it's serviceable.",
    rating: 3,
    createdAt: new Date(2025, 2, 30).toISOString() 
  },
  {
    _id: "rev006",
    productId: CURRENT_PRODUCT_ID,
    customerId: "user303",
    title: "Fantastic design and functionality",
    description: "Love everything about it. The design is sleek and modern, and all features work perfectly. Shipping was fast too!",
    rating: 5,
    createdAt: new Date(2025, 3, 1).toISOString() 
  },
  {
    _id: "rev007",
    productId: CURRENT_PRODUCT_ID,
    customerId: "user404",
    title: "Doesn't match description",
    description: "Product doesn't match what was advertised. Color is different and it's smaller than what the dimensions stated.",
    rating: 2,
    createdAt: new Date(2025, 3, 7).toISOString() 
  },
  {
    _id: "rev008",
    productId: CURRENT_PRODUCT_ID,
    customerId: "user505",
    title: "Great value for money",
    description: "Really happy with this purchase. It's exactly what I needed and the price was reasonable compared to similar products.",
    rating: 5,
    createdAt: new Date(2025, 2, 24).toISOString() 
  },
  {
    _id: "rev009",
    productId: "product002", // Different product to test filtering
    customerId: "user606",
    title: "Not compatible with my setup",
    description: "The product itself seems fine but it doesn't work with my existing equipment as advertised. Had to return it.",
    rating: 3,
    createdAt: new Date(2025, 3, 22).toISOString() 
  },
  {
    _id: "rev010",
    productId: CURRENT_PRODUCT_ID,
    customerId: "user707",
    title: "Solid performance so far",
    description: "Been using for a few weeks and it works great. The battery life is impressive and the design is practical for everyday use.",
    rating: 4,
    createdAt: new Date(2025, 3, 10).toISOString() 
  },
  {
    _id: "rev011",
    productId: CURRENT_PRODUCT_ID,
    customerId: "user808",
    title: "Perfect for my needs",
    description: "Exactly what I was looking for. Easy to use and works flawlessly. Highly recommend to anyone needing this type of product.",
    rating: 5,
    createdAt: new Date(2025, 2, 12).toISOString() 
  },
  {
    _id: "rev012",
    productId: CURRENT_PRODUCT_ID,
    customerId: "user909",
    title: "Expected more features",
    description: "It's okay but missing some features I thought would be included. The basic functionality works well though.",
    rating: 3,
    createdAt: new Date(2025, 2, 19).toISOString() 
  },
  {
    _id: "rev013",
    productId: CURRENT_PRODUCT_ID,
    customerId: "user010",
    title: "Completely unusable",
    description: "Do not buy this product. It stopped working after the first day and the company has ignored my emails requesting support.",
    rating: 1,
    createdAt: new Date(2025, 3, 14).toISOString() 
  },
  {
    _id: "rev014",
    productId: CURRENT_PRODUCT_ID,
    customerId: "user011",
    title: "Good product, slow shipping",
    description: "The product itself is great, but shipping took forever. Almost two weeks longer than estimated delivery time.",
    rating: 4,
    createdAt: new Date(2025, 3, 5).toISOString() 
  },
  {
    _id: "rev015",
    productId: CURRENT_PRODUCT_ID,
    customerId: "user012",
    title: "Worth every penny",
    description: "Exceeded all my expectations. The quality is outstanding and it makes my daily tasks so much easier. Would definitely recommend to friends and family.",
    rating: 5,
    createdAt: new Date(2025, 3, 17).toISOString() 
  }
];