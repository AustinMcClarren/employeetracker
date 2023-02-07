DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;
drop TABLE IF EXISTS employee;

-- creating the department TABLE
CREATE TABLE department (
  -- Creates a numeric column called "id"
  department_id INT PRIMARY KEY,

  -- MAKES A STRING COLUMN CALLED "NAME" WHICH CANNOT CONTAIN NULL
  name VARCHAR(30) NOT NULL
  
);



-- creating the role TABLE
CREATE TABLE role (

  theRole_id INT PRIMARY KEY,

  -- The UNIQUE constraint ensures that all values in a column are different.
  title VARCHAR(30) NOT NULL UNIQUE,
  
  salary DECIMAL(15.5) NOT NULL,

  department_id INT,

  FOREGN KEY(department_id) REFERENCES department(department_id)
);




-- creating the employee TABLE
CREATE TABLE employee (

  employee_id INT PRIMARY KEY,
  
  first_name VARCHAR(30) NOT NULL,
  
  last_name VARCHAR(30) NOT NULL,
  
  role_id INT NOT NULL,
  
  manager_id INT NULL ,

 FOREIGN KEY (manager_id) REFERENCES employee(manager_id),

 FOREIGN KEY (role_id) REFERENCES role(role_id)

);
