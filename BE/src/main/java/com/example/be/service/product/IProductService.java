package com.example.be.service.product;

import com.example.be.model.product.Product;

import java.util.List;

public interface IProductService {
    List<Product> showList();

    List<Product> getProductByTypeProduct(Integer type);

    Product findById(Integer productId);

    void setAmount(Integer amount, Integer productId);
}
