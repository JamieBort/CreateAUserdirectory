// Using the attached data.js file, build an Express app that works as a directory of users in the file. You should use require to get the data from the data.js file.

// The amount of info each user has varies. Users with no job or company data are currently looking for work.

// 1. determine which packages I will need.
// 2. write lines of code for engine
// 3. write lines of code for static
// 4. app get #1
// 5. app get #2
// 6. for statement (?)
// 7. if statement (?)
// 8. listen 3000

//  Require Packages
const express = require('express')
const app = express()
const data = require('./data.js');
const mustacheExpress = require('mustache-express');

// Mustache-express app engine and set.

// Express app being used.
app.use(express.static('public'));

// Express app get.
app.get('/', function (req, res) {
    res.send('Hello World')
    res.render('home', {
        users: data.users
    })
});


// Retrieving data from data.js for when the name of the robot is selected.
// app.get('/:robotName', function (req, res) { // New endpoint.
//     res.send('Hello World')
//   });

//  Error Message and Console.log


// App listen.
app.listen(3000, () => console.log('Example app listening on port 3000!'));