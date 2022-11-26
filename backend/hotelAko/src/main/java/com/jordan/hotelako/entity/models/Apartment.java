package com.jordan.hotelako.entity.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Apartment implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String type;

    private String nameImg;

    private String typeImg;

    @Column(name = "image", unique = false, nullable = false, length = 100000)
    private byte[] image;
    private String description;
    private float price;
    private int amount;

    @JsonIgnore
    @OneToMany(mappedBy = "apartment")
    private List<Reservation> reservations;

//    public Apartment(String type, String nameImg, String typeImg, byte[] image, String description, float price, int amount) {
//        super();
//        this.type = type;
//        this.nameImg = nameImg;
//        this.typeImg = typeImg;
//        this.image = image;
//        this.description = description;
//        this.price = price;
//        this.amount = amount;
//    }
//
//    public Apartment() {
//        super();
//    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getNameImg() {
        return nameImg;
    }

    public void setNameImg(String nameImg) {
        this.nameImg = nameImg;
    }

    public String getTypeImg() {
        return typeImg;
    }

    public void setTypeImg(String typeImg) {
        this.typeImg = typeImg;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
}
