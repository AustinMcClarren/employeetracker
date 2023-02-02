// Dependencies
const inquier = require("inquirer");
const mysql = require('mysql2');


// create the connection to database
const connection = mysql.createConnection({
 
    //HOST, WHERE ITS BEING RAN
  host: 'localhost',
  
  //USERNAME
  user: 'root',
  

//PASSWORD
password: ' ' ,
database: 'test'
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


         }   
        ])
}