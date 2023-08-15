package com.example.be.service.product.impl;

import com.example.be.model.product.Product;
import com.example.be.repository.product.IProductRepository;
import com.example.be.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;


    @Override
    public List<Product> findAllByName(String search) {
        return iProductRepository.findAllByProductName(search);
    }

    @Override
    public List<Product> getProductByTypeProduct(Integer type) {
        return iProductRepository.getProductByType(type);
    }

    @Override
    public Product findById(Integer productId) {
        return iProductRepository.findById(productId).get();
    }

    @Override
    public void setAmount(Integer amount, Integer productId) {
        iProductRepository.setAmount(amount, productId);
    }
}
