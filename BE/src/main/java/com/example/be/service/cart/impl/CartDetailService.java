package com.example.be.service.cart.impl;

import com.example.be.dto.ICartDetailDto;
import com.example.be.model.cart.CartDetail;
import com.example.be.repository.cart.ICartDetailRepository;
import com.example.be.service.cart.ICartDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartDetailService implements ICartDetailService {
    @Autowired
    private ICartDetailRepository iCartDetailRepository;


    @Override
    public CartDetail save(CartDetail cartDetail) {
        return iCartDetailRepository.save(cartDetail);
    }

    @Override
    public List<ICartDetailDto> findAll(String username) {
        return iCartDetailRepository.findAll(username);
    }

    @Override
    public List<Integer> findAllCartDetail(Integer userId) {
        return iCartDetailRepository.findAllCartDetail(userId);
    }

    @Override
    public CartDetail findByCartDetailId(Integer cartDetailId) {
        return iCartDetailRepository.findById(cartDetailId).get();
    }

    @Override
    public void updateAmount(Integer amount, Integer cartDetailId) {
        iCartDetailRepository.updateAmount(amount, cartDetailId);
    }

    @Override
    public void setCart(Integer userId) {
        iCartDetailRepository.setCart(userId);
    }

    @Override
    public void deleteCartDetail(Integer cartId, Integer productId) {
        iCartDetailRepository.deleteCartDetailByCartCartIdAndProductProductId(cartId, productId);
    }
}
