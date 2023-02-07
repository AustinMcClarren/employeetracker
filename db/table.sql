
-- creating the department TABLE
CREATE TABLE department (
  
  PRIMARY KEY (id),
 
  -- Creates a numeric column called "id"
  id INT NOT NULL ,

  -- MAKES A STRING COLUMN CALLED "NAME" WHICH CANNOT CONTAIN NULL
  name VARCHAR(30) NOT NULL
  
);



-- creating the role TABLE
CREATE TABLE role (

  PRIMARY KEY (id) ,
  
  id INT NOT NULL ,  

  -- The UNIQUE constraint ensures that all values in a column are different.
  title VARCHAR(30)  NOT NULL UNIQUE,
  
  salary DECIMAL(15.5) NOT NULL,
  
  department_id INT
  
);




-- creating the employee TABLE
CREATE TABLE employee (
  
  PRIMARY KEY (id)
  
  id INT NOT NULL,
  
  first_name VARCHAR(30)  NOT NULL,
  
  last_name VARCHAR(30) NOT NULL,
  
  role_id INT NOT NULL,
  
  manager_id INT NULL
  
);
