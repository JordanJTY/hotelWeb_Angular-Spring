package com.jordan.hotelako.entity.dao;

import com.jordan.hotelako.entity.models.Reservation;
import org.springframework.data.repository.CrudRepository;

public interface IReservationDao extends CrudRepository<Reservation, Long> {

}
