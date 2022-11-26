package com.jordan.hotelako.entity.models;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Reservation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private User appUser;
    @ManyToOne
    private Apartment apartment;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private Date startDate;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private Date endDate;

    public Reservation(User appUser, Apartment apartment, Date startDate, Date endDate) {
        super();
        this.appUser = appUser;
        this.apartment = apartment;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Reservation() {
        super();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getAppUser() {
        return appUser;
    }

    public void setAppUser(User appUser) {
        this.appUser = appUser;
    }

    public Apartment getApartment() {
        return apartment;
    }

    public void setApartment(Apartment apartment) {
        this.apartment = apartment;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

}
