package com.myntra.backend.service;

import com.myntra.backend.exception.UserException;
import com.myntra.backend.modal.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;

}
