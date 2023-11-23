package com.myntra.backend.service;

import com.myntra.backend.exception.ProductException;
import com.myntra.backend.modal.Cart;
import com.myntra.backend.modal.User;
import com.myntra.backend.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public String addCartItem(Long userId, AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
