CREATE TABLE user (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password CHAR(50)
)ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE rider_info (
  rider_info_id INT(11) AUTO_INCREMENT PRIMARY KEY,
  fname VARCHAR(255),
  lname VARCHAR(255),
  sex ENUM('male', 'female'),
  phone VARCHAR(10),
  location ENUM('RNP', 'Billian', 'AJ Park', 'เกกี', 'ประตูข้างวิศวะ', '3 แยกวิศวะ', 'คณะวิทย์', 'FBT', 'จินดา', 'ตลาดนัดสุวรรณภูมิ'),
  model VARCHAR(255),
  bike_id VARCHAR(255),
  `status` ENUM('1', '0'),
  password CHAR(50)
)ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE van_info (
  van_info_id INT(11) AUTO_INCREMENT PRIMARY KEY,
  fname VARCHAR(255),
  lname VARCHAR(255),
  sex ENUM('male', 'female'),
  phone VARCHAR(10),
  password CHAR(50)
)ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE category (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
)ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE suggestion_place (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  place_name VARCHAR(255),
  place_location TEXT,
  category_id INT(11),
  FOREIGN KEY (category_id) REFERENCES category(id)
)ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE fav_place (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  place_id INT(11),
  user_id INT(11),
  FOREIGN KEY (place_id) REFERENCES suggestion_place(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
)ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE round_van (
  round_van_id INT(11) AUTO_INCREMENT PRIMARY KEY,
  location ENUM('Future Park', 'อนุสาวรีย์', 'ซีคอนสแควร์', 'มีนบุรี'),
  price INT(11),
  seat INT(11),
  date DATE,
  time CHAR(100),
  van_id INT(11),
  create_by INT(11),
  create_time TIMESTAMP,
  FOREIGN KEY (van_id) REFERENCES van_info(van_info_id)
)ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


CREATE TABLE book_van (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  user_id INT(11),
  round_van_id INT(11),
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (round_van_id) REFERENCES round_van(round_van_id)
)ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE reviews (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  review TEXT,
  place_id INT(11),
  rate INT(11),
  user_id INT(11),
  `like` INT(11),
  FOREIGN KEY (place_id) REFERENCES suggestion_place(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
)ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE images (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  image_file_path VARCHAR(255),
  user_id INT(11),
  rider_id INT(11),
  van_id INT(11),
  place_id INT(11),
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (rider_id) REFERENCES rider_info(rider_info_id),
  FOREIGN KEY (van_id) REFERENCES van_info(van_info_id),
  FOREIGN KEY (place_id) REFERENCES suggestion_place(id)
)ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;