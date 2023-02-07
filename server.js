// Dependencies
const inquier = require("inquirer");
const mysql = require('mysql2');


// create the connection to database
const connection = mysql.createConnection({
 
    //HOST, WHERE ITS BEING RAN
  host: 'localhost',
  
  //USERNAME
  user: 'austin',
  

//PASSWORD
password: '' ,
database: 'localdb'
});

connection.connect(function(err){
    if(err) throw err;
    console.log('MYSQL CONNECTED');

    //start function
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
                "Delete Employees",
                "Add Roles",
                "Add Departments",
                "View Employees",
                "View Employees By Manager",
                "View Roles",
                "View Departments",
                "Update Employee Roles",
                "All Finished - Print Data",
                "Exit"]


         }   
        ])
}