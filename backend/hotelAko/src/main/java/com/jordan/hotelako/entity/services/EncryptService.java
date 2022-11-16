package com.jordan.hotelako.entity.services;

import com.jordan.hotelako.entity.models.User;

public interface EncryptService {

    String encryptPassword(String password);
    boolean verifyPassword(String originalPassword, String hashPassword);
    User saveUser(User newUser);
}
