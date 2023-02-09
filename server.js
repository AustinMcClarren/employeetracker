// Dependencies
const inquier = require("inquirer");
const mysql = require('mysql2');
const { printTable } = require("console-table-printer");
var express = require('express')


const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection( //not connected?
    {
      host: 'localhost',
      // MySQL username,
      user: 'austin',
      // MySQL password
      password: 'password',
      database: 'employee_db'
    },
    console.log(`Connected to the classlist_db database.`)
  );




  mysql.createConnection(err => { //shooting error here, connection not correct?
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    afterConnection();
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
        return;
    }
  });
  
}

//VIEWING 
function Vdept(){
  db.query("select * from department", function (err,res){
    if(err)throw err;
    printTable(res);
    start();
  });
}

function Vrole(){
  db.query("select * from employee", function (err,res){
    if(err)throw err;
    printTable(res);
    start();
  });
}

function Vemployee(){
  db.query("select * from Role", function (err,res){
    if(err)throw err;
    printTable(res);
    start();
  });
}




//ADDING
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
      message: 'What is your role is?',
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
    db.query("INSERT INTO employee ( id, first_name, last_name, role_id, manager_id)", function (err,res){
      if(err)throw err;
      printTable(res);
      start();
    });
  })
}







function Adepartment(){
  inquier
  .prompt([
    {
      type: 'input',
      message: 'What department are you in?',
      name: 'department_name',
    },
  ])
  .then((answers)=>{
    console.info('Answers:', answers);
    db.query("INSERT INTO department (id,name)", function (err,res){
      if(err)throw err;
      printTable(res);
      start();
    });
  });
}





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
    db.query("INSERT INTO role (id, title, salary, department_id)", function (err,res){
      if(err)throw err;
      printTable(res);
      start();
    });
  })
}





app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  