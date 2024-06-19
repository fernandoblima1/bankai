package com.fernandoblima1.api.model.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "shorted_url")
public class ShortedUrl {
  @Id
  private String id;

  @Column(name = "original_url")
  private String originalUrl;
  private String description;

  @Column(name = "created_at")
  private LocalDateTime createdAt;

  @Column(name = "expiration_time")
  private Long expirationTime;

  private Integer accessCount;
  private Boolean active;
}
