// 1. determine which packages I will need.
// 2. write lines of code for engine
// 3. write lines of code for static
// 4. app get #1
// 5. app get #2
// 6. for statement (?)
// 7. if statement (?)
// 8. listen 3000


//  Require Packages
const express = require('express'); // express is a light-weight web application framework to help organize your web application into an MVC architecture.
const mustacheExpress = require('mustache-express'); // mustache-express is a template engine that allows us to use the files in the 'view' directory.
const data = require('./data.js');
const app = express();

// Express app engine and set.
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// Express app being used
app.use(express.static('public'));

// Express app get.
app.get('/', function (request, response) {
    response.render('home', { // 'home' references home.mustache
        users: data.users
    })
    // document.getElementsByTagName("p").innerHTML = "The full URL of this page is:<br>"
    // document.getElementById("demo").innerHTML = "The full URL of this page is:<br>";
});

// Retrieving data from data.js
// This video explains how 'robotName' below works: https://www.youtube.com/watch?v=oZGmHNZv7Sc
app.get('/:robotName', function (request, response) { // robotName is used below by asigning it to 'username'.
    let username = request.params.robotName; // 'username' is referenced in home.mustache.
    let robot_item = null; // 'username' is referenced in home.mustache
    // let theURL = window.location.href;
    // let theURL = request.params.robotName;
    // document.getElementById("demo").innerHTML = "The full URL of this page is:<br>";
    // document.getElementsByTagName("p").innerHTML = "The full URL of this page is:<br>"
    for (var i = 0; i < data.users.length; i++) {
        let item = data.users[i]
        if (item.username === username) {
            response.render('profile', { // 'profile' is referenced in profile.mustache
                WhatIsThis: item // 'WhatIsThis' is referenced in profile.mustache
            })
            robot_item = item; // asigning 'data.users[i]' to robot_item. 
        }
    }

    //  Error Message and Console.log
    if (robot_item === null) {

        response.status(404).send('That user is not found.');
        // response.status(404).send('That user is not found.' + window.location.href);
        // document.getElementById("demo").innerHTML = "The full URL of this page is: ";
        // document.getElementsByTagName("p").innerHTML = "The full URL of this page is: "
        // console.log(location.href);
        // console.log("Hello");
        // console.log(this.attr("href"));
        // console.log(this.getAttribute('href'));
        // console.log(window.location.pathname);
        // console.log(window.location.href);
        return;
    }


});

// App listen.
// app.listen(process.env.PORT || 5000, function () {
//     console.log('The app is running at http://localhost:5000/.');
// });
