package com.fernandoblima1.api.model.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fernandoblima1.api.model.entity.ShortedUrl;

public interface ShortedUrlRepository extends JpaRepository<ShortedUrl, String> {

  Optional<ShortedUrl> findById(String id);

}
