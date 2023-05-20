CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password CHAR(50)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE rider_info (
  rider_info_id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
  fname VARCHAR(255),
  lname VARCHAR(255),
  sex ENUM('male', 'female'),
  phone VARCHAR(10),
  location ENUM('RNP', 'Billian', 'AJ Park', 'เกกี', 'ประตูข้างวิศวะ', '3 แยกวิศวะ', 'คณะวิทย์', 'FBT', 'จินดา', 'ตลาดนัดสุวรรณภูมิ'),
  model VARCHAR(255),
  bike_id VARCHAR(255),
  `status` ENUM('1', '0'),
  password CHAR(50)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE van_info (
  van_info_id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
  fname VARCHAR(255),
  lname VARCHAR(255),
  sex ENUM('male', 'female'),
  phone VARCHAR(10),
  password CHAR(50)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE category (
  id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
  name VARCHAR(255)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE suggestion_place (
  id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
  place_name VARCHAR(255),
  place_location TEXT,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES category(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE fav_place (
  id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
  place_id INT,
  user_id INT,
  FOREIGN KEY (place_id) REFERENCES suggestion_place(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE round_van (
  round_van_id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
  location ENUM('Future Park', 'อนุสาวรีย์', 'ซีคอนสแควร์', 'มีนบุรี'),
  price INT,
  seat INT,
  date DATE,
  time CHAR(100),
  van_id INT,
  create_by INT,
  create_time TIMESTAMP,
  FOREIGN KEY (van_id) REFERENCES van_info(van_info_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


CREATE TABLE book_van (
  id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
  user_id INT,
  round_van_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (round_van_id) REFERENCES round_van(round_van_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
  review TEXT,
  place_id INT,
  rate INT,
  user_id INT,
  `like` INT,
  FOREIGN KEY (place_id) REFERENCES suggestion_place(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE images (
  id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
  image_file_path VARCHAR(255),
  user_id INT,
  rider_id INT,
  van_id INT,
  place_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (rider_id) REFERENCES rider_info(rider_info_id),
  FOREIGN KEY (van_id) REFERENCES van_info(van_info_id),
  FOREIGN KEY (place_id) REFERENCES suggestion_place(id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;