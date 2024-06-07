package com.fernandoblima1.api.model.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.fernandoblima1.api.model.entity.User;

public interface UserRepository extends CrudRepository<User, String> {

  Optional<User> findByNickname(String nickname);

}
