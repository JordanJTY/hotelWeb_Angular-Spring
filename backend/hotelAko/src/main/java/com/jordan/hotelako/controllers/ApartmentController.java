package com.jordan.hotelako.controllers;

import com.jordan.hotelako.entity.models.Apartment;
import com.jordan.hotelako.entity.services.IApartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*")
public class ApartmentController {
    @Autowired
    IApartmentService apartmentService;

    @GetMapping("/apartment")
    public List<Apartment> getAllApartment() {
        return apartmentService.getAll();
    }

    @GetMapping("/apartment/{id}")
    public Apartment getOne(@PathVariable(value = "id") Long id) {
        return apartmentService.get(id);
    }

    @PostMapping("/apartment")
    public void post(Apartment apartment) {
        apartmentService.post(apartment);
    }

    @PutMapping("/apartment/{id}")
    public void put( @PathVariable(value = "id") Long id, Apartment apartment) {
        apartmentService.put(apartment, id);
    }

    @DeleteMapping("/apartment/{id}")
    public void delete(@PathVariable(value = "id") Long id) {
        apartmentService.delete(id);
    }
}
