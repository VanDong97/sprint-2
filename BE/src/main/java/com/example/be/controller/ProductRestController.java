package com.example.be.controller;

import com.example.be.dto.ICartDetailDto;
import com.example.be.model.cart.Cart;
import com.example.be.model.cart.CartDetail;
import com.example.be.model.cart.PurchaseHistory;
import com.example.be.model.product.Brand;
import com.example.be.model.product.Product;
import com.example.be.model.product.ProductType;
import com.example.be.model.user.User;
import com.example.be.service.cart.ICartDetailService;
import com.example.be.service.cart.ICartService;
import com.example.be.service.cart.IPurchaseService;
import com.example.be.service.product.IBrandService;
import com.example.be.service.product.IProductService;
import com.example.be.service.product.IProductTypeService;
import com.example.be.service.user.impl.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Random;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ProductRestController {
    @Autowired
    private IBrandService iBrandService;

    @Autowired
    private IProductTypeService iProductTypeService;

    @Autowired
    private IProductService iProductService;

    @Autowired
    private ICartDetailService iCartDetailService;

    @Autowired
    private IUserService iUserService;

    @Autowired
    private ICartService iCartService;


    @GetMapping("/productByType/{type}")
    public ResponseEntity<List<Product>> displayProductByType(@PathVariable Integer type) {
        List<Product> products = iProductService.getProductByTypeProduct(type);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/brand")
    public ResponseEntity<List<Brand>> showListBrand() {
        List<Brand> brandList = iBrandService.findAll();
        if (brandList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(brandList, HttpStatus.OK);
        }
    }

    @GetMapping("/type")
    public ResponseEntity<List<ProductType>> showListType() {
        List<ProductType> productTypeList = iProductTypeService.findAll();
        if (productTypeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(productTypeList, HttpStatus.OK);
        }
    }

    @GetMapping("")
    public ResponseEntity<List<Product>> findAllByName(@RequestParam(required = false,defaultValue = "")String search) {
        List<Product> listProduct = iProductService.findAllByName(search);
        return new ResponseEntity<>(listProduct, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Product> findById(@PathVariable("id") Integer id) {
        Product product = iProductService.findById(id);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
}
