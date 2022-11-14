package com.jordan.hotelako.entity.services;

import com.jordan.hotelako.entity.dao.IApartmentDao;
import com.jordan.hotelako.entity.models.Apartment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApartmentServiceImpl implements IApartmentService {

    @Autowired
    private IApartmentDao apartmentDao;

    @Override
    public Apartment get(long id) {
        return apartmentDao.findById(id).get();
    }

    @Override
    public List<Apartment> getAll() {
        return (List<Apartment>) apartmentDao.findAll();
    }

    @Override
    public void post(Apartment apartment) {
        apartmentDao.save(apartment);
    }

    @Override
    public void put(Apartment apartment, long id) {
        apartmentDao.findById(id).ifPresent((x) -> {
            apartment.setId(id);
            apartmentDao.save(apartment);
        });
    }

    @Override
    public void delete(long id) {
        apartmentDao.deleteById(id);
    }

}
