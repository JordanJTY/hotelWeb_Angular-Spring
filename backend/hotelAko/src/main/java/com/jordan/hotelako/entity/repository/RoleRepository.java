package com.jordan.hotelako.entity.repository;

import com.jordan.hotelako.entity.models.ERole;
import com.jordan.hotelako.entity.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
