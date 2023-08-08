package com.example.be.service.cart;

import com.example.be.model.cart.PurchaseHistory;

import java.util.List;

public interface IPurchaseService {
    List<PurchaseHistory> findAllByUserId(Integer userId);

    PurchaseHistory save (PurchaseHistory purchaseHistory);
}
