package com.myntra.backend.service;

import com.myntra.backend.exception.ProductException;
import com.myntra.backend.modal.Review;
import com.myntra.backend.modal.User;
import com.myntra.backend.request.ReviewRequest;

import java.util.List;

public interface ReviewService {

	public Review createReview(ReviewRequest req, User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
