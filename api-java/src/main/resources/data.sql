INSERT INTO category (id, name) VALUES (1, 'Dogs');
INSERT INTO category (id, name) VALUES (2, 'Cats');
COMMIT;
INSERT INTO pet (name, photourl, category_id, status) VALUES ('Labrador', '/images/labrador.jpg', 1, 'available');
INSERT INTO pet (name, photourl, category_id, status) VALUES ('Beagle', '/images/beagle.jpg', 1, 'pending');
INSERT INTO pet (name, photourl, category_id, status) VALUES ('Husky', '/images/husky.jpg', 1, 'available');
INSERT INTO pet (name, photourl, category_id, status) VALUES ('Corgi', '/images/corgi.jpg', 1, 'sold');
INSERT INTO pet (name, photourl, category_id, status) VALUES ('Shih Tzu', '/images/shihtzu.jpg', 1, 'available');
COMMIT;