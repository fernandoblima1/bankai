package com.fernandoblima1.api.services;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.fernandoblima1.api.model.dto.UrlDTO;
import com.fernandoblima1.api.model.entity.ShortedUrl;
import com.fernandoblima1.api.model.repository.ShortedUrlRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ShortUrlService {
  private static final String ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  private final ShortedUrlRepository shortedUrlRepository;

  @Transactional
  public ShortedUrl encode(UrlDTO urlDTO) {
    try {
      ShortedUrl shortedUrl = new ShortedUrl();

      MessageDigest md = MessageDigest.getInstance("SHA-256");
      byte[] messageDigest = md.digest(urlDTO.getUrl().getBytes());
      StringBuilder sb = new StringBuilder();
      for (byte b : messageDigest) {
        sb.append(ALPHABET.charAt((b & 0xff) % ALPHABET.length()));
      }
      shortedUrl.setAccessCount(0);
      shortedUrl.setActive(true);
      shortedUrl.setOriginalUrl(urlDTO.getUrl());
      shortedUrl.setId(sb.toString());
      shortedUrl.setCreatedAt(LocalDateTime.now());
      shortedUrl.setDescription(urlDTO.getDescription());

      return shortedUrlRepository.save(shortedUrl);
    } catch (Exception e) {
      e.printStackTrace();
      return null;
    }
  }

  public Page<ShortedUrl> consultar(Pageable paginacao) {

    return shortedUrlRepository.findAll(paginacao);
  }
}
