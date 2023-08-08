package com.example.be.repository.cart;

import com.example.be.model.cart.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICartRepository extends JpaRepository<Cart, Integer> {
}
