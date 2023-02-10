
-- DROPS THE EMPLOYEE DATABASE
DROP DATABASE IF EXISTS Employee_db;

-- CREATES THE EMPLOYEE DATABASE 

CREATE DATABASE Employee_db;

-- USES THE EMPLOYEE DATABASE 
USE Employee_db;




-- creating the department TABLE
CREATE TABLE department(
  -- Creates a numeric column called "id"
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,

  dep_name VARCHAR(30) NOT NULL
  
);



-- creating the role TABLE
CREATE TABLE role (

  id INT PRIMARY KEY AUTO_INCREMENT,

  title VARCHAR(30) NOT NULL UNIQUE,
  
  salary DECIMAL(15.5) NOT NULL,

  Department_id INT,

Foreign Key (Department_id) REFERENCES department(id)

ON DELETE SET NULL
);




-- creating the employee TABLE
CREATE TABLE employee (

  id INT PRIMARY KEY AUTO_INCREMENT,
  
  first_name VARCHAR(30) NOT NULL,
  
  last_name VARCHAR(30) NOT NULL,
  
  role_id iNT,
  
  manager_id INT,

Foreign Key (role_id) REFERENCES role(id)
);
