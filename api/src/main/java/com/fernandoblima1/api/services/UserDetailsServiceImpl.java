package com.fernandoblima1.api.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.fernandoblima1.api.model.entity.UserAuthenticated;
import com.fernandoblima1.api.model.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
  private final UserRepository userRepository;

  @Override
  public UserDetails loadUserByUsername(String nickname) throws UsernameNotFoundException {
    return userRepository.findByNickname(nickname)
        .map(UserAuthenticated::new)
        .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));
  }
}
