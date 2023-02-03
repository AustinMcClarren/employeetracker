
-- creating the department TABLE
CREATE TABLE department (
  
  PRIMARY KEY (id)
 
  id INT NOT NULL AUTO_INCREMENT,
  
  name VARCHAR(30) NULL
  
);



-- creating the role TABLE
CREATE TABLE role (

  PRIMARY KEY (id)
  
  id INT NOT NULL AUTO_INCREMENT,  
  
  title VARCHAR(30) NULL,
  
  salary DECIMAL(15.5) NULL,
  
  department_id INT NULL
  
);




-- creating the employee TABLE
CREATE TABLE employee (
  
  PRIMARY KEY (id)
  
  id INT NOT NULL AUTO_INCREMENT,
  
  first_name VARCHAR(30) NULL,
  
  last_name VARCHAR(30) NULL,
  
  role_id INT NULL,
  
  manager_id INT NULL
  
);
