package com.example.be.model.cart;

import com.example.be.model.user.Customer;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "create_date")
    private LocalDateTime createDate;
    @Column(name = "is_delete")
    private boolean isDelete;
    @JoinColumn(name = "customer_id")
    @ManyToOne
    private Customer customer;

    public Order() {
    }

    public Order(Long id, LocalDateTime createDate, boolean isDelete, Customer customer) {
        this.id = id;
        this.createDate = createDate;
        this.isDelete = isDelete;
        this.customer = customer;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
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
}
