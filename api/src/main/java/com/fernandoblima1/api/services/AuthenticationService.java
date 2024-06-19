package com.fernandoblima1.api.services;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
  private final JwtService jwtService;

  public String authenticate(Authentication authentication) {
    return jwtService.generateToken(authentication);
  }

  public String logout(Authentication authentication) {
    return jwtService.generateToken(authentication);
  }

}
