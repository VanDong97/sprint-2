package com.example.be.model.cart;

import com.example.be.model.product.Product;
import com.example.be.model.user.Customer;

import javax.persistence.*;

@Entity
@Table(name = "shopping_cart")
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer quantity;
    @Column(name = "is_delete")
    private boolean isDelete;
    @JoinColumn(name = "customer_id")
    @ManyToOne
    private Customer customer;
    @JoinColumn(name = "product_id")
    @ManyToOne
    private Product product;

    public ShoppingCart() {
    }

    public ShoppingCart(Long id, Integer quantity, boolean isDelete, Customer customer, Product product) {
        this.id = id;
        this.quantity = quantity;
        this.isDelete = isDelete;
        this.customer = customer;
        this.product = product;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
