package com.example.be.service.product.impl;

import com.example.be.model.product.Brand;
import com.example.be.repository.product.IBrandRepository;
import com.example.be.service.product.IBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService implements IBrandService {
    @Autowired
    private IBrandRepository iBrandRepository;

    @Override
    public List<Brand> findAll() {
        return iBrandRepository.findAll();
    }
}
