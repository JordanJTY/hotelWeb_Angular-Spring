package com.jordan.hotelako.controllers;


import com.jordan.hotelako.entity.models.User;
import com.jordan.hotelako.entity.repository.RoleRepository;
import com.jordan.hotelako.entity.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.List;

@RestController
@CrossOrigin(value = "*")
public class UserController {
    @Autowired
    IUserService userService;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    RoleRepository roleRepository;

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
    public void put(@PathVariable(value = "id") Long id, User appUser) {
        byte[] decodingPW = Base64.getDecoder().decode(appUser.getPassword());
        String decodedPw = new String(decodingPW);
        byte[] decodingName = Base64.getDecoder().decode(appUser.getUsername());
        String decodedName = new String(decodingName);
        String encryptPw = encoder.encode(decodedPw);
        appUser.setUsername(decodedName);
        appUser.setPassword(encryptPw);
        appUser.setRoles(getOne(id).getRoles());
        userService.put(appUser, id);
    }

    @DeleteMapping("/user/{id}")
    public void delete(@PathVariable(value = "id") Long id) {
        userService.delete(id);
    }
}
