package com.example.be.service.cart.impl;

import com.example.be.model.cart.PurchaseHistory;
import com.example.be.repository.cart.IPurchaseRepository;
import com.example.be.service.cart.IPurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchaseService implements IPurchaseService {
    @Autowired
    private IPurchaseRepository iPurchaseRepository;

    @Override
    public List<PurchaseHistory> findAllByUserId(Integer userId) {
        return iPurchaseRepository.findAllnByUserId(userId);
    }

    @Override
    public PurchaseHistory save(PurchaseHistory purchaseHistory) {
        return iPurchaseRepository.save(purchaseHistory);
    }
}
