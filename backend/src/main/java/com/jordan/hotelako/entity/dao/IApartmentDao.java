package com.jordan.hotelako.entity.dao;

import com.jordan.hotelako.entity.models.Apartment;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface IApartmentDao extends CrudRepository<Apartment, Long> {
    Optional<Apartment> findById(Long id);
}
