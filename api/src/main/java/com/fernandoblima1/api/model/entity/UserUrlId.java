package com.fernandoblima1.api.model.entity;

import lombok.Data;

@Data
public class UserUrlId {
  private User user;
  private ShortedUrl url;
}
