package com.jordan.hotelako.entity.services;

import com.jordan.hotelako.entity.models.User;

import java.util.List;

public interface IUserService {
    public User get(long id);

    public List<User> getAll();

    public void post(User appUser);

    public void put(User appUser, long id);

    public void delete(long id);
}
