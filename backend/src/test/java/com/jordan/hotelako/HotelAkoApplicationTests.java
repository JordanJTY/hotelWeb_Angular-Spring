package com.jordan.hotelako;

import com.jordan.hotelako.entity.models.User;
import com.jordan.hotelako.entity.services.impl.ReservationServiceImpl;
import com.jordan.hotelako.entity.services.impl.UserServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
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

    @Test
    void testGetData() throws Exception {
        this.mvc.perform(get("/apartment"))
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

        this.mvc.perform(post("/user"))
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
