// Dependencies
const inquier = require("inquirer");
const mysql = require('mysql2');
const cTable = require('console.table');
const express = require('express');


const PORT = process.env.PORT || 3002;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




//SQL CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "austin",
  password: "",
  database: "employee_db"
});


db.connect(function(err) {
  if (err) throw err
  console.log(`${db.threadId}`) // shows you the thread id, mysql is running on a thread. each time you end it it goes up
  start();
});
  




//prompt to run questions for application
function start(){
    inquier
        .prompt([
         {
        
            type: "list",
            name: "ToDo",
            message: "What would you like to do?",
            choices: [
                "Add Employees",
                "Add Roles",
                "Add Departments",
                "View Employees",
                "View Roles",
                "View Departments",
                "Exit"]


    } 
  ])
  
  .then(({ToDo}) =>{
    switch (ToDo) {
      case "Add Employees":
          Aemployee();
        return;
    
      case "Add Roles":
        Arole();
         return;
  
      case"Add Departments":
        Adepartment();
        return;

        case "View Employees":
        Vemployee();
        return;
    
      case "View Roles":
        Vrole();
        return;

      case "View Departments":
        Vdept();
        return;

      case "Update Employee Roles":
        updateEmployee();
        return;

        case 'Exit':
        Exit();
    }
  });
  
}



//VIEW DEPARTMENT
function Vdept(){
  db.query("SELECT * FROM department", function (err,res){
    if(err)throw err;
    console.table(res);
    start();
  });
}

//VIEW ROLE
function Vrole(){
  db.query("SELECT * FROM employee", function (err,res){
    if(err)throw err;
    console.table(res);
    start();
  });
}

//VIEW EMPLOYEE
function Vemployee(){
  db.query("SELECT * FROM role", function (err,res){
    if(err)throw err;
    console.table(res);
    start();
  });
}




// adding a employee
function Aemployee(){
  inquier
  .prompt([
    {
      type: 'input',
      message: 'What is your first name?',
      name: 'first_name',
    },

    {
      type: 'input',
      message: 'What is your last name?',
      name: 'last_name',
    },

    {
      type: 'input',
      message: 'What is your role?',
      name: 'role_id',
    },

    {
      type: 'input',
      message: 'What is your manager id?',
      name: 'manager_id',
    },
  ])
  .then((answers)=>{
    console.info('Answers:', answers);
    db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) values (?,?,?,?)", [answers.first_name, answers.last_name, answers.role_id, answers.manager_id], function (err,res){

      if(err)throw err;
      console.table(res);
      start();
    });
  })
}



//adding a department
function Adepartment(){
  inquier
  .prompt([
    {
      type: 'input',
      message: 'What department are you in?',
      name: 'department',
    },
  ])
  .then((answers)=>{
    console.info('Answers:', answers);
    // for every colum need another ?
    db.query("INSERT INTO department (name) values (?)",[answers.department], function (err,res){
      if(err)throw err;
      Vdept(); //this will show the table
      start();
    });
  });
}



//adding a role
function Arole(){
  inquier
  .prompt([
    {
      type: 'input',
      message: 'What is your title?',
      name: 'title',
    },

    {
      type: 'input',
      message: 'What is your salary?',
      name: 'salary',
    },

    {
      type: 'input',
      message: "what is your department id?",
      name: 'department_id',
    },
  ])

  .then((answers)=>{
    console.info('Answers:', answers);
    db.query("INSERT INTO role (title, salary, department_id) values (?,?,?)", [answers.title, answers.salary, answers.department_id ], function (err,res){
      if(err)throw err;
     Vrole();
      start();
    });
  })
}




//updating an employee
function updateEmployee() {
  return inquirer
  .prompt([{
      type: 'list',
      name: 'employee',
      message: 'Which employee would you like to update?',
  },{
      type: 'list',
      name: 'newRole',
      message: 'What is the employees new role?',
  }])
  .then((answer) => {
    if(err, res){
}   Arole(answer);
      Vemployee();
      Aemployee();
  })    
};

function Exit(){
  return process.exit();
}

//where its listening from
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  









// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 