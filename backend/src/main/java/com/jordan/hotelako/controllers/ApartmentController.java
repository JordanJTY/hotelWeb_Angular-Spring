package com.jordan.hotelako.controllers;

import com.jordan.hotelako.entity.dao.IApartmentDao;
import com.jordan.hotelako.entity.models.Apartment;
import com.jordan.hotelako.entity.services.IApartmentService;
import com.jordan.hotelako.tools.ImageUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(value = "*")
public class ApartmentController {
    @Autowired
    IApartmentService apartmentService;

    @Autowired
    IApartmentDao iApartmentDao;

    @GetMapping("/apartment")
    public List<Apartment> getAllApartment() {
        List<Apartment> db = apartmentService.getAll();
        db.forEach((x)->{
            byte[] noZip = ImageUtility.decompressImage(x.getImage());
            x.setImage(noZip);
        });
        return db;
    }

    @GetMapping("/apartment/{id}")
    public Apartment getOne(@PathVariable(value = "id") Long id) {
        final Apartment db = apartmentService.get(id);

        return Apartment.builder()
                .nameImg(db.getNameImg())
                .typeImg(db.getTypeImg())
                .image(ImageUtility.decompressImage(db.getImage()))
                .amount(db.getAmount())
                .price(db.getPrice())
                .description(db.getDescription())
                .type(db.getType())
                .id(db.getId())
                .build();
    }

    @PostMapping("/apartment")
    public void post(Apartment apartment, @RequestParam("file") MultipartFile image) throws IOException {
        String randomID = UUID.randomUUID().toString();
        String filename = randomID.concat(randomID + image.getOriginalFilename().substring(image.getOriginalFilename().lastIndexOf(".")));

        apartment.setNameImg(filename);
        apartment.setTypeImg(image.getContentType());
        apartment.setImage(ImageUtility.compressImage(image.getBytes()));
        apartmentService.post(apartment);
    }

    @PutMapping("/apartment/{id}")
    public void put(@PathVariable(value = "id") Long id, Apartment apartment, @RequestParam("file") MultipartFile image) throws IOException {
        String randomID = UUID.randomUUID().toString();
        String filename = randomID.concat(randomID + image.getOriginalFilename().substring(image.getOriginalFilename().lastIndexOf(".")));

        apartment.setNameImg(filename);
        apartment.setTypeImg(image.getContentType());
        apartment.setImage(ImageUtility.compressImage(image.getBytes()));
        apartmentService.put(apartment, id);
    }

    @DeleteMapping("/apartment/{id}")
    public void delete(@PathVariable(value = "id") Long id) {
        apartmentService.delete(id);
    }
}
