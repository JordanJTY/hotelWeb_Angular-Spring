package com.jordan.hotelako.entity.dao;

import com.jordan.hotelako.entity.models.User;
import org.springframework.data.repository.CrudRepository;

public interface IUserDao extends CrudRepository<User, Long> {

}