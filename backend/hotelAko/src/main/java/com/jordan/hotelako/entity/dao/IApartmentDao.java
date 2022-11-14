package com.jordan.hotelako.entity.dao;

import com.jordan.hotelako.entity.models.Apartment;
import org.springframework.data.repository.CrudRepository;

public interface IApartmentDao extends CrudRepository<Apartment, Long> {

}
