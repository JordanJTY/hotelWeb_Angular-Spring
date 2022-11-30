package com.jordan.hotelako.entity.services;

import com.jordan.hotelako.entity.models.Apartment;

import java.util.List;

public interface IApartmentService {
    public Apartment get(long id);

    public List<Apartment> getAll();

    public void post(Apartment apartment);

    public void put(Apartment apartment, long id);

    public void delete(long id);
}

