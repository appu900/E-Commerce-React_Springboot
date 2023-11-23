package com.myntra.backend.service;

import com.myntra.backend.exception.ProductException;
import com.myntra.backend.modal.Rating;
import com.myntra.backend.modal.User;
import com.myntra.backend.request.RatingRequest;

import java.util.List;

public interface RatingServices {
	
	public Rating createRating(RatingRequest req, User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
