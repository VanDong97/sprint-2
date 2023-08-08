package com.example.be.service.user;

import com.example.be.model.user.User;
import com.example.be.repository.user.IUserRepository;
import com.example.be.service.user.impl.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {
    @Autowired
    private IUserRepository userRepository;

    @Override
    public User findUserByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }

    @Override
    public boolean checkOldPassword(String oldPassword, String password) {
        return BCrypt.checkpw(oldPassword,password);
    }

    @Override
    public User findById(Integer userId) {
        return userRepository.findById(userId).orElse(null);
    }

}
