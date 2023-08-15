package com.example.be.controller;

import com.example.be.dto.ICartDetailDto;
import com.example.be.model.cart.CartDetail;
import com.example.be.model.cart.PurchaseHistory;
import com.example.be.model.product.Product;
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
import java.util.Random;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class CartRestController {
    @Autowired
    private IProductService iProductService;

    @Autowired
    private ICartDetailService iCartDetailService;

    @Autowired
    private IUserService iUserService;

    @Autowired
    private IPurchaseService iPurchaseService;

    @GetMapping("/cart/{username}")
    public ResponseEntity<?> findAllCartDetail(@PathVariable String username) {
        List<ICartDetailDto> cartDetailDtoList = iCartDetailService.findAll(username);

        if (cartDetailDtoList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(cartDetailDtoList, HttpStatus.OK);
        }
    }

    @GetMapping("/cart/updateAmount/{amount}/{cartDetailId}")
    public ResponseEntity<?> updateAmount(@PathVariable Integer amount, @PathVariable Integer cartDetailId) {
        iCartDetailService.updateAmount(amount, cartDetailId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/cart/setCart/{userId}")
    public ResponseEntity<?> setCart(@PathVariable Integer userId) {
        iCartDetailService.setCart(userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/cart/deleteCartDetail/{cartId}/{productId}")
    public ResponseEntity<?> deleteCartDetail(@PathVariable Integer cartId, @PathVariable Integer productId) {
        iCartDetailService.deleteCartDetail(cartId, productId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/cart/setAmount/{amount}/{productId}")
    public ResponseEntity<Product> setAmount(@PathVariable Integer amount, @PathVariable Integer productId) {
        iProductService.setAmount(amount, productId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/cart/history/{userId}")
    public ResponseEntity<List<PurchaseHistory>> getAllPurchase(@PathVariable Integer userId) {
        List<PurchaseHistory> purchaseHistoryList = iPurchaseService.findAllByUserId(userId);
        return new ResponseEntity<>(purchaseHistoryList, HttpStatus.OK);
    }

    @GetMapping("/cart/save/{userId}/{total}")
    public ResponseEntity<?> saveHistory(@PathVariable Integer userId,
                                         @PathVariable Integer total) {
        List<Integer> cart = iCartDetailService.findAllCartDetail(userId);
        User user = iUserService.findById(userId);
        PurchaseHistory purchaseHistory = new PurchaseHistory();
        Random random = new Random();
        Date date = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        simpleDateFormat.format(date);
        purchaseHistory.setOrderDate(simpleDateFormat.format(date));
        purchaseHistory.setCodeBill(String.valueOf(random.nextInt(90000) + 10000));
        purchaseHistory.setUser(user);
        purchaseHistory.setTotal(Double.valueOf(total));
        iPurchaseService.save(purchaseHistory);
        for (Integer in : cart) {
            CartDetail cartDetail = iCartDetailService.findByCartDetailId(in);
            cartDetail.setPurchaseHistory(purchaseHistory);
            iCartDetailService.save(cartDetail);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}