package com.jordan.hotelako.entity.models;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;
import java.util.concurrent.TimeUnit;

@Entity
public class Reservation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotNull
    @ManyToOne
    private User appUser;
    @NotNull
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

    public String getNombre(){
        return this.apartment!=null ? this.apartment.getType() : "----";
    }

    public Double getSubTotal(){
        long dateBeforeInMs = this.endDate.getTime();
        long dateAfterInMs = this.startDate.getTime();

        long timeDiff = Math.abs(dateAfterInMs - dateBeforeInMs);

        long daysDiff = TimeUnit.DAYS.convert(timeDiff, TimeUnit.MILLISECONDS);
        return Double.parseDouble(String.valueOf(this.apartment.getPrice() * daysDiff));
    }

    public int getCantidad(){
        long dateBeforeInMs = this.endDate.getTime();
        long dateAfterInMs = this.startDate.getTime();

        long timeDiff = Math.abs(dateAfterInMs - dateBeforeInMs);

        long daysDiff = TimeUnit.DAYS.convert(timeDiff, TimeUnit.MILLISECONDS);
        return Integer.parseInt(String.valueOf(daysDiff));
    }

    public double getPrecio(){
        return this.apartment.getPrice();
    }
}
