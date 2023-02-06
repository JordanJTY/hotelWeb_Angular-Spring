package com.jordan.hotelako.entity.services;

import com.jordan.hotelako.entity.models.Reservation;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IReservationService {
    Reservation get(long id);

    List<Reservation> getAll();

    void post(Reservation reservation);

    void put(Reservation reservation, long id);

    void delete(long id);

    ResponseEntity<Resource> exportInvoice(int idUser, int idReservation);

    ResponseEntity<Resource> exportAverageReservationData(int year);

    ResponseEntity<Resource> exportUserReservations(int idUser);

    ResponseEntity<Resource> exportAverageAnnualProfit();
}
