import { mockReviews, CURRENT_USER_ID } from "../mockData/reviews";

// local copy of reviews to simulate persistence
let reviews = [...mockReviews];

// for simulating network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getReviewsByProductId = async (productId, starFilter, page = 1, limit = 10) => {
  await delay(300);
  
  let filteredReviews = reviews.filter(review => review.productId === productId);
  
  // apply star filter if provided
  if (starFilter && starFilter >= 1 && starFilter <= 5) {
    filteredReviews = filteredReviews.filter(review => review.rating === starFilter);
  }
  
  // calculating pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedReviews = filteredReviews.slice(startIndex, endIndex);
  
  return {
    reviews: paginatedReviews,
    total: filteredReviews.length
  };
};

export const addReview = async (reviewData) => {
  await delay(500); 
  
  
  if (!reviewData.productId || !reviewData.title || !reviewData.description || !reviewData.rating) {
    throw new Error("Missing required review fields");
  }
  
  
  const newReview = {
    _id: `rev${Date.now()}`,
    customerId: CURRENT_USER_ID, 
    createdAt: new Date().toISOString(),
    ...reviewData
  };
  
  reviews = [...reviews, newReview];
  
  return newReview;
};

export const editReview = async (reviewId, reviewData) => {
  await delay(400);
  
  const reviewIndex = reviews.findIndex(review => review._id === reviewId);
  
  if (reviewIndex === -1) {
    throw new Error("Review not found");
  }
  
  // checking if user owns the review
  if (reviews[reviewIndex].customerId !== CURRENT_USER_ID) {
    throw new Error("Unauthorized: You can only edit your own reviews");
  }

  const updatedReview = {
    ...reviews[reviewIndex],
    title: reviewData.title || reviews[reviewIndex].title,
    description: reviewData.description || reviews[reviewIndex].description,
    rating: reviewData.rating || reviews[reviewIndex].rating,
  };
  
  reviews[reviewIndex] = updatedReview;
  
  return updatedReview;
};


export const deleteReview = async (reviewId) => {
  await delay(350); 

  const review = reviews.find(review => review._id === reviewId);
  
  if (!review) {
    throw new Error("Review not found");
  }
 
  if (review.customerId !== CURRENT_USER_ID) {
    throw new Error("Unauthorized: You can only delete your own reviews");
  }
  
  reviews = reviews.filter(review => review._id !== reviewId);
  
  return { success: true };
};