package com.example.be.repository.user;

import com.example.be.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IUserRepository extends JpaRepository<User, Integer> {
    @Query(value = "select a.* from  user as a where a.username= :username", nativeQuery = true)
    User findUserByUsername(@Param("username") String username);

}
