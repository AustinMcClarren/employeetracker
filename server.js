// Dependencies
const inquier = require("inquirer");
const mysql = require('mysql2');


const PORT = process.env.PORT || 3306;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'austin',
      // MySQL password
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the classlist_db database.`)
  );




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



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  