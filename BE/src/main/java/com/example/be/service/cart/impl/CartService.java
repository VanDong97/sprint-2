package com.example.be.service.cart.impl;

import com.example.be.model.cart.Cart;
import com.example.be.repository.cart.ICartRepository;
import com.example.be.service.cart.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository iCartRepository;

    @Override
    public Cart save(Cart cart) {
        return iCartRepository.save(cart);
    }
}
