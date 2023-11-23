package com.myntra.backend.service;

import com.myntra.backend.exception.CartItemException;
import com.myntra.backend.exception.UserException;
import com.myntra.backend.modal.Cart;
import com.myntra.backend.modal.CartItem;
import com.myntra.backend.modal.Product;

public interface CartItemService {
	
	public CartItem createCartItem(CartItem cartItem);
	
	public CartItem updateCartItem(Long userId, Long id,CartItem cartItem) throws CartItemException, UserException;
	
	public CartItem isCartItemExist(Cart cart,Product product,String size, Long userId);
	
	public void removeCartItem(Long userId,Long cartItemId) throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long cartItemId) throws CartItemException;
	
}
