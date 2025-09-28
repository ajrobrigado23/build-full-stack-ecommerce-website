package com.luv2code.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name="product")
// Lombok generate getters / setters
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    // Many to one
    @ManyToOne()
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategory category;

    @Column(name = "sku")
    private String sku;


    @Column(name = "name")
    private String name;


    @Column(name = "description")
    private String description;


    @Column(name = "unit_price")
    private BigDecimal unitPrice;


    @Column(name = "image_url")
    private String imageUrl;


    @Column(name = "active")
    private boolean active;


    @Column(name = "units_in_stock")
    private int unitsInStock;


    @Column(name = "date_created")
    // Hibernate will automatically manage the timestamps
    @CreationTimestamp
    private Date dateCreated;


    @Column(name = "last_updated")
    @UpdateTimestamp
    private Date lastUpdated;
}
