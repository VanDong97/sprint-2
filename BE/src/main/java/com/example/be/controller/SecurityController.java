package com.example.be.controller;

import com.example.be.jwt.JwtUtility;
import com.example.be.model.user.AccountDetails;
import com.example.be.payload.reponse.JwtResponse;
import com.example.be.payload.request.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class SecurityController {

    @Autowired
    private JwtUtility jwtUtility;
    @Autowired
    private AuthenticationManager authenticationManager;


    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody @Valid LoginRequest loginRequest) {

        // Đăng nhâpj username với password .
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword());

        // Xác thực tài khoản , nếu sai có Exception
        Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        // Lưu trữ kết quả , thông tin đã xác thực của người dùng.
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Tạo một chuỗi JWT để trả về cho người dùng sau khi xác thực thành công.
        String jwt = jwtUtility.generateJwtToken(loginRequest.getUsername());


        // Lấy thông tin chi tiết của tài khoản , vd như ROlE gì .
        AccountDetails userDetails = (AccountDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        // Trả về một đối tượng JwtResponse chứa chuỗi JWT, thông tin tài khoản người dùng và danh sách quyền truy cập.
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
        return ResponseEntity.ok(
                new JwtResponse(
                        jwt,
                        userDetails.getUsername(),
                        roles)
        );
    }
}