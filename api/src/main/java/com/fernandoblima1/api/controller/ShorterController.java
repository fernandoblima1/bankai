package com.fernandoblima1.api.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fernandoblima1.api.model.dto.UrlDTO;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class ShorterController {

  @PostMapping("/")
  public String createShortUrl(@RequestBody UrlDTO url) {
    return new String("Teste");
  }

}
