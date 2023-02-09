
-- DEPARTMENT
INSERT INTO department (id,name)VALUES
(001'Management'),
(002'IT Department'),
(003'Accounting'),
(004'Administration'),
(005'Human Resources');




-- ROLE
INSERT INTO role (id, title, salary, department_id) VALUES 
(001,"CEO", 100000, 1),
(002,"CFO", 70000, 2),
(003,"Chief Engineer", 70000, 3),
(004,"CMO", 50000, 4),
(005,"Junior Engineer", 60000, 5);




-- EMPLOYEES
INSERT INTO employee ( id, first_name, last_name, role_id, manager_id) VALUES 
( 001,"austin","doe", 0, 0),
( 002 "mark", "doe", 1, 1),
( 003,"john", "doe", 2, 2),
( 004,"zach", "doe", 3, 3),
( 005,"stephen", "doe", 4, 4),
( 006,"lion", "doe", 5, 5),
( 007,"leon", "doe", 6, 6),
( 008,"jonathon", "doe", 7, 7),
( 009,"charles", "doe", 8, 8);


