package com.jordan.hotelako.entity.services.impl;

import com.jordan.hotelako.entity.dao.IUserDao;
import com.jordan.hotelako.entity.models.User;
import com.jordan.hotelako.entity.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private IUserDao userDao;

    @Override
    public User get(long id) {
        return userDao.findById(id).get();
    }

    @Override
    public List<User> getAll() {
        return (List<User>) userDao.findAll();
    }

    @Override
    public void post(User appUser) {
        userDao.save(appUser);
    }

    @Override
    public void put(User appUser, long id) {
        userDao.findById(id).ifPresent((x) -> {
            appUser.setId(id);
            userDao.save(appUser);
        });
    }

    @Override
    public void delete(long id) {
        userDao.deleteById(id);
    }

}
