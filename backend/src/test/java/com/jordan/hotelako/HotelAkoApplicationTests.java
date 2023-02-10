package com.jordan.hotelako;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jordan.hotelako.entity.models.Apartment;
import com.jordan.hotelako.entity.models.Reservation;
import com.jordan.hotelako.entity.models.User;
import com.jordan.hotelako.entity.services.impl.ApartmentServiceImpl;
import com.jordan.hotelako.entity.services.impl.ReservationServiceImpl;
import com.jordan.hotelako.entity.services.impl.UserServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Date;

import static org.mockito.Mockito.doNothing;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
class HotelAkoApplicationTests {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private UserServiceImpl userService;

    @MockBean
    private ReservationServiceImpl reservationService;

    @MockBean
    private ApartmentServiceImpl apartmentService;

    @Test
    void testGetDataApartment() throws Exception {
        this.mvc.perform(get("/apartment"))
                .andExpect(status().isOk());
    }
    @Test
    void testGetDataUser() throws Exception {
        this.mvc.perform(get("/user"))
                .andExpect(status().isOk());
    }

    @Test
    void testGetDataReservation() throws Exception {
        this.mvc.perform(get("/reservation"))
                .andExpect(status().isOk());
    }

    @Test
    void testPostUser() throws Exception {
        User user = new User();
        user.setId(1L);
        user.setUsername("Person");
        user.setEmail("damaiss@gmail.com");
        user.setDateBirth(new Date(2022, 02,02));

        doNothing().when(userService).post(user);

        this.mvc.perform(post("/user")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(user)))
                .andExpect(status().isOk());
    }

    @Test
    void testPostApartment() throws Exception {
        Apartment apartment = new Apartment();
        apartment.setId(1L);
        apartment.setType("Single Aparment");
        apartment.setDescription("Very good aparment");

        doNothing().when(apartmentService).post(apartment);

        this.mvc.perform(post("/aparment")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(apartment)))
                .andExpect(status().isOk());
    }

    @Test
    void testPostReservation() throws Exception {
        Reservation reservation = new Reservation();
        reservation.setId(1L);
        reservation.setStartDate(new Date());
        reservation.setEndDate(new Date());

        doNothing().when(reservationService).post(reservation);

        this.mvc.perform(post("/reservation")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(reservation)))
                .andExpect(status().isOk());
    }

    @Test
    void testPutUser() throws Exception {
        User user = new User();
        user.setId(1L);
        Long id = user.getId();
        user.setUsername("Person");
        user.setEmail("damaiss@gmail.com");
        user.setDateBirth(new Date(2022, 02,02));

        doNothing().when(userService).put(user, id);

        this.mvc.perform(put("/user/{id}", id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(user)))
                .andExpect(status().isOk());
    }
    @Test
    void testPutApartment() throws Exception {
        Apartment apartment = new Apartment();
        apartment.setId(1L);
        Long id = apartment.getId();
        apartment.setType("Single Aparment");
        apartment.setDescription("Very good aparment");

        doNothing().when(apartmentService).put(apartment, id);

        this.mvc.perform(put("/apartment/{id}", id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(apartment)))
                .andExpect(status().isOk());
    }
    @Test
    void testPutReservation() throws Exception {
        Reservation reservation = new Reservation();
        reservation.setId(1L);
        Long id = reservation.getId();
        reservation.setStartDate(new Date());
        reservation.setEndDate(new Date());

        doNothing().when(reservationService).put(reservation, id);

        this.mvc.perform(put("/reservation/{id}", id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(reservation)))
                .andExpect(status().isOk());
    }

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    @Test
    void testDeleteUser() throws Exception {
        Long id = 1L;

        doNothing().when(userService).delete(id);

        this.mvc.perform(delete("/user/{id}", id))
                .andExpect(status().isOk());
    }

    @Test
    void testDeleteApartment() throws Exception {
        Long id = 1L;

        doNothing().when(apartmentService).delete(id);

        this.mvc.perform(delete("/apartment/{id}", id))
                .andExpect(status().isOk());
    }

    @Test
    void testDeleteReservation() throws Exception {
        Long id = 1L;
        doNothing().when(reservationService).delete(id);

        this.mvc.perform(delete("/reservation/{id}", id))
                .andExpect(status().isOk());
    }

}
