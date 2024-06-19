package com.fernandoblima1.api.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fernandoblima1.api.config.ResponseModel;
import com.fernandoblima1.api.model.dto.UrlDTO;
import com.fernandoblima1.api.model.entity.ShortedUrl;
import com.fernandoblima1.api.services.ShortUrlService;

import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequiredArgsConstructor
public class ShorterController {

  private final ShortUrlService shortUrlService;

  @GetMapping("/")
  public ResponseEntity<ResponseModel<ShortedUrl>> getShortUrl(Pageable paginacao) {
    var result = shortUrlService.consultar(paginacao);
    ResponseModel<ShortedUrl> response = new ResponseModel<>();
    response.setList(result.getContent());
    response.setTotalElements(result.getTotalElements());
    response.setTotalPages(result.getTotalPages());
    return ResponseEntity.status(HttpStatus.OK).body(response);
  }

  @PostMapping("/")
  public ResponseEntity<ResponseModel<ShortedUrl>> createShortUrl(@RequestBody UrlDTO url) {
    ResponseModel<ShortedUrl> response = new ResponseModel<>();
    ShortedUrl shortedUrl = shortUrlService.encode(url);
    response.setData(shortedUrl);
    return ResponseEntity.status(HttpStatus.OK).body(response);
  }

}
