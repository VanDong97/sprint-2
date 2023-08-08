package com.example.be.service.cart;

import com.example.be.dto.ICartDetailDto;
import com.example.be.model.cart.CartDetail;

import java.util.List;

public interface ICartDetailService {
    CartDetail save(CartDetail cartDetail);

    List<ICartDetailDto> findAll(String username);

    List<Integer> findAllCartDetail(Integer userId);

    CartDetail findByCartDetailId(Integer cartDetailId);

    void updateAmount(Integer amount, Integer cartDetailId);

    void setCart(Integer userId);

    void deleteCartDetail(Integer cartId, Integer productId);
}
