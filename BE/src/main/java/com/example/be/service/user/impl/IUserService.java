package com.example.be.service.user.impl;

import com.example.be.model.user.User;

public interface IUserService {
    User findUserByUsername(String username);

    boolean checkOldPassword(String oldPassword, String password);

    User findById(Integer userId);


}
