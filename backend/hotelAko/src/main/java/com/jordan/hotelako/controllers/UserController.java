package com.jordan.hotelako.controllers;


import com.jordan.hotelako.entity.models.User;
import com.jordan.hotelako.entity.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@CrossOrigin(value = "*")
public class UserController {
    @Autowired
    IUserService userService;

    @GetMapping("/user")
    public List<User> getAllUsers() {
        return userService.getAll();
    }

    @GetMapping("/user/{id}")
    public User getOne(@PathVariable(value = "id") Long id) {
        return userService.get(id);
    }

    @PostMapping("/user")
    public void post(User appUser) {
        userService.post(appUser);
    }

    @PutMapping("/user/{id}")
    public void put( @PathVariable(value = "id") Long id, User appUser) {
        userService.put(appUser, id);
    }

    @DeleteMapping("/user/{id}")
    public void delete(@PathVariable(value = "id") Long id) {
        userService.delete(id);
    }
}
