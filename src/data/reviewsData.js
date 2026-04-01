// ─────────────────────────────────────────────
//  SHARED REVIEWS DATA — single source of truth
//  Both Home page and Testimonials page read from here.
//  To add a permanent review, just add it to this array.
// ─────────────────────────────────────────────

export const initialReviews = [
  {
    id: 1,
    name: "Aarchi Shah",
    company: "Individual Client",
    feedback:
      "ANS Fincorp made the entire loan process smooth and stress-free. From documentation to final approval, everything was handled professionally and transparently. We truly felt supported at every step.",
    rating: 5,
  },
  {
    id: 2,
    name: "Vini Patel",
    company: "Small Business Owner",
    feedback:
      "What we appreciated most about ANS Fincorp was their clear guidance and honest advice. They explained all options patiently and helped us choose the best solution for our financial needs.",
    rating: 5,
  },
  {
    id: 3,
    name: "Swayam Shah",
    company: "Individual Client",
    feedback:
      "Thanks to ANS Fincorp, our loan was approved faster than expected. Their team is responsive, knowledgeable, and always ready to help. Highly reliable service.",
    rating: 4,
  },
  {
    id: 4,
    name: "Nehal Shah",
    company: "Entrepreneur",
    feedback:
      "ANS Fincorp stands out for their personal attention and commitment. They didn't treat us like just another client but genuinely worked in our best interest.",
    rating: 5,
  },
];

const STORAGE_KEY = "ans_reviews";

// Load reviews: localStorage first, fall back to initialReviews
export function loadReviews() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {}
  return initialReviews;
}

// Save reviews array to localStorage
export function saveReviews(reviews) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  } catch (e) {}
}

// Delete a review by id and persist
export function deleteReview(reviews, id) {
  const updated = reviews.filter((r) => r.id !== id);
  saveReviews(updated);
  return updated;
}
