package com.fernandoblima1.api.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fernandoblima1.api.services.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class AuthenticationController {
  private final AuthenticationService authService;

  @PostMapping("/login")
  public String login(Authentication authentication) {
    return authService.authenticate(authentication);
  }

  // @PostMapping("/logout")
  // public void logout(Authentication authentication) {
  // return authService.authenticate(authentication);
  // }
}
