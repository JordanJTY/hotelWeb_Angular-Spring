package com.jordan.hotelako.security.controllers;

import com.jordan.hotelako.entity.models.ERole;
import com.jordan.hotelako.entity.models.Role;
import com.jordan.hotelako.entity.models.User;
import com.jordan.hotelako.entity.repository.RoleRepository;
import com.jordan.hotelako.entity.repository.UserRepository;
import com.jordan.hotelako.security.jwt.JwtUtils;
import com.jordan.hotelako.security.payload.request.LoginRequest;
import com.jordan.hotelako.security.payload.request.SignupRequest;
import com.jordan.hotelako.security.payload.response.JwtResponse;
import com.jordan.hotelako.security.payload.response.MessageResponse;
import com.jordan.hotelako.security.services.impl.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Base64;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        byte[] decodingPW = Base64.getDecoder().decode(loginRequest.getPassword());
        String decodedPw = new String(decodingPW);
        byte[] decodingName = Base64.getDecoder().decode(loginRequest.getUsername());
        String decodedName = new String(decodingName);

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(decodedName, decodedPw));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                userDetails.getDateBirth(),
                roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        byte[] decodingPW = Base64.getDecoder().decode(signUpRequest.getPassword());
        String decodedPw = new String(decodingPW);
        byte[] decodingName = Base64.getDecoder().decode(signUpRequest.getUsername());
        String decodedName = new String(decodingName);
        if (userRepository.existsByUsername(decodedName)) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(decodedName,
                signUpRequest.getEmail(),
                encoder.encode(decodedPw),
                signUpRequest.getDateBirth());

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}
