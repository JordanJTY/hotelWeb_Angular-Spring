package com.jordan.hotelako.entity.services.impl;

import com.jordan.hotelako.entity.dao.IReservationDao;
import com.jordan.hotelako.entity.models.Reservation;
import com.jordan.hotelako.entity.services.IReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationServiceImpl implements IReservationService {

    @Autowired
    private IReservationDao reservationDao;

    @Override
    public Reservation get(long id) {
        return reservationDao.findById(id).get();
    }

    @Override
    public List<Reservation> getAll() {
        return (List<Reservation>) reservationDao.findAll();
    }

    @Override
    public void post(Reservation reservation) {
        reservationDao.save(reservation);
    }

    @Override
    public void put(Reservation reservation, long id) {
        reservationDao.findById(id).ifPresent((x) -> {
            reservation.setId(id);
            reservationDao.save(reservation);
        });
    }

    @Override
    public void delete(long id) {
        reservationDao.deleteById(id);
    }

}
