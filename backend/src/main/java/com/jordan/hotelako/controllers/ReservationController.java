package com.jordan.hotelako.controllers;

import com.jordan.hotelako.entity.models.Reservation;
import com.jordan.hotelako.entity.services.IReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*")
public class ReservationController {
    @Autowired
    IReservationService reservationService;

    @GetMapping("/reservation")
    public List<Reservation> getAllReservations() {
        return reservationService.getAll();
    }

    @GetMapping("/reservation/{id}")
    public Reservation getOne(@PathVariable(value = "id") Long id) {
        return reservationService.get(id);
    }

    @PostMapping("/reservation")
    public void post(Reservation reservation) {
        reservationService.post(reservation);
    }

    @PutMapping("/reservation/{id}")
    public void put(@PathVariable(value = "id") Long id, Reservation reservation) {
        reservationService.put(reservation, id);
    }

    @DeleteMapping("/reservation/{id}")
    public void delete(@PathVariable(value = "id") Long id) {
        reservationService.delete(id);
    }

    //Informes
    @GetMapping("/reservation/exportInvoice")
    public ResponseEntity<Resource> exportInvoice(@RequestParam int idUser, @RequestParam int idReservation){
        return this.reservationService.exportInvoice(idUser, idReservation);
    }
    @GetMapping("/reservation/exportAverageReservationData")
    public ResponseEntity<Resource> exportAverageReservationData(@RequestParam int year){
        return this.reservationService.exportAverageReservationData(year);
    }

    @GetMapping("/reservation/exportUserReservations")
    public ResponseEntity<Resource> exportUserReservations(@RequestParam int idUser){
        return this.reservationService.exportUserReservations(idUser);
    }

    
}