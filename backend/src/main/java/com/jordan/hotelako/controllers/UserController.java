package com.jordan.hotelako.controllers;


import com.jordan.hotelako.entity.models.User;
import com.jordan.hotelako.entity.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*")
public class UserController {
    @Autowired
    IUserService userService;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/user")
    public List<User> getAllUsers() {
        return userService.getAll();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/user/{id}")
    public User getOne(@PathVariable(value = "id") Long id) {
        return userService.get(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/user")
    public void post(User appUser) {
        userService.post(appUser);
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @PutMapping("/user/{id}")
    public void put(@PathVariable(value = "id") Long id, User appUser) {
        userService.put(appUser, id);
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    @DeleteMapping("/user/{id}")
    public void delete(@PathVariable(value = "id") Long id) {
        userService.delete(id);
    }
}
