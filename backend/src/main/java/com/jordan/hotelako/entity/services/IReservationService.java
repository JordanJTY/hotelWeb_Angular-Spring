package com.jordan.hotelako.entity.services;

import com.jordan.hotelako.entity.models.Reservation;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IReservationService {
    public Reservation get(long id);

    public List<Reservation> getAll();

    public void post(Reservation reservation);

    public void put(Reservation reservation, long id);

    public void delete(long id);

    ResponseEntity<Resource> exportInvoice(int idUser, int idReservation);

    ResponseEntity<Resource> exportData(int year);
}
