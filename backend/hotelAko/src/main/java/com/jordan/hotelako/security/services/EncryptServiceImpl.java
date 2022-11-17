package com.jordan.hotelako.security.services;

import com.jordan.hotelako.entity.dao.IUserDao;
import com.jordan.hotelako.entity.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class EncryptServiceImpl implements EncryptService{

    @Autowired
    private IUserDao userDao;

    @Override
    public String encryptPassword(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

    @Override
    public boolean verifyPassword(String originalPassword, String sendedPassword) {
        return originalPassword.matches(sendedPassword);
    }

    @Override
    public User saveUser(User newUser){
        return this.userDao.save(newUser);
    }
}
