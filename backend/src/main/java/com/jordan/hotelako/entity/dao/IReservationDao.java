package com.jordan.hotelako.entity.dao;

import com.jordan.hotelako.entity.models.Chart;
import com.jordan.hotelako.entity.models.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public interface IReservationDao extends CrudRepository<Reservation, Long> {

    @Query(value = "SELECT * FROM db_hotel.reservation r WHERE r.id =:idReservation", nativeQuery = true)
    Iterable<Reservation> findById(int idReservation);

    @Query(value = "SELECT count(r.apartment_id) as numberApartment, " +
            "a.type as typeApartment " +
            "FROM db_hotel.reservation r " +
            "JOIN db_hotel.apartment a " +
            "ON a.id = r.apartment_id " +
            "WHERE YEAR(r.end_date) =:yearSelected " +
            "GROUP BY a.type", nativeQuery = true)
    List<Chart> avgReservations(int yearSelected);
    @Query(value = "SELECT * FROM db_hotel.reservation r WHERE r.id =:idReservation AND r.app_user_id =:idUser", nativeQuery = true)
    Optional<Reservation> findByIdAndUserId(int idUser, int idReservation);
    @Query(value = "SELECT DATEDIFF( r.end_date, r.start_date)*a.price FROM db_hotel.reservation r join db_hotel.apartment a on r.apartment_id = a.id where r.app_user_id =:idUser AND r.id =:idReservation", nativeQuery = true)
    Double totalByIdUser(int idUser, int idReservation);
}
