package com.myntra.backend.repository;

import com.myntra.backend.modal.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

	@Query("Select r from Rating r where r.product.id=:productId")
	public List<Review> getAllProductsReview(@Param("productId") Long productId);
}
