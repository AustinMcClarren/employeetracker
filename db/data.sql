-- DEPARTMENT

INSERT INTO department (name) VALUES
('Management'),
('IT Department'),
('Accounting'),
('Administration'),
('Human Resources');




-- ROLE
INSERT INTO role (title, salary, department_id) VALUES 
("CEO", 100000, 1),
("CFO", 70000, 2),
("Chief Engineer", 70000, 3),
("CMO", 50000, 4),
("Junior Engineer", 60000, 5);




-- EMPLOYEES
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
( "austin","doe", 0, 0),
( "mark", "doe", 1, 1),
( "john", "doe", 2, 2),
( "zach", "doe", 3, 3),
( "stephen", "doe", 4, 4),
( "lion", "doe", 5, 5),
( "leon", "doe", 6, 6),
( "jonathon", "doe", 7, 7),
( "charles", "doe", 8, 8);


