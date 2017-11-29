INSERT INTO users
  (name, password, avatar)
VALUES
  ('aegon', '5bastard5', 'http://static6.businessinsider.com/image/598c650987543364bd49feee-480/game-of-thrones-season-seven-jon-snow-helen-sloan-hbo-photo-6.jpg'),
  ('daenerys', '86dragons', 'https://media.glamour.com/photos/599b02cf0701570c3f4c153a/master/w_644,c_limit/Dany.jpg'),
  ('tyrion', 'imp45', 'http://i.telegraph.co.uk/multimedia/archive/03295/Tyrion_1_3295189b.jpg');

INSERT INTO cities
  (city, country)
VALUES
  ('Dragonstone', 'Westeros'),
  ('Winterfell', 'Westeros'),
  ('Naath', 'Sothoryos');

INSERT INTO posts
  (user_id, city_id, date_added, content)
VALUES
  (3, 1, 03-19-2017, 'This land has the best wine!'),
  (1, 2, 07-29-2017, 'Even in the summer, it is cold.'),
  (2, 3, 02-14-2017, 'I met my best friend on this island.');
