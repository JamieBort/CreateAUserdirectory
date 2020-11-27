//  Require Packages
const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
const app = express();

// Express app engine and set.
app.engine('mustache', mustacheExpress());
app.set('views', 'views');
app.set('view engine', 'mustache');

// Express app being used
app.use(express.static('public'));

// Express app get.
app.get('/', function (request, response) {
    var status = "Employed"
    var can_see_ternary=false;
    var available = "no message"

    console.log(data.users[1].id);
    console.log(data.users[1].job);
    console.log(data.users[2].id);
    console.log(data.users[2].job);

    for (var i = 0; i < data.users.length; i++) {
        if(data.users[i].job==null){
            data.users[i].job="Available for hire.";
            data.users[i].company="Available for hire.";
            status = "Now available"
        };
        // console.log(data.users[i].id);
        // console.log(data.users[i].job);
        // console.log(data.users[i].company);
        
    };
    console.log(data.users[1].id);
    console.log(data.users[1].job);
    console.log(data.users[2].id);
    console.log(data.users[2].job);

    response.render('home', { 
    
    // users: data.users,
    users_data: data.users,

    can_see_toggle_first:can_see_ternary ? "hidden" : "",
    can_see_toggle_second:can_see_ternary ? "" : "hidden",
    status:status,
    available:status,
    
        
    })
    

    // document.getElementsByTagName("p").innerHTML = "The full URL of this page is:<br>"
    // document.getElementById("demo").innerHTML = "The full URL of this page is:<br>";
});

// Retrieving data from data.js
// This video explains how 'robotName' below works: https://www.youtube.com/watch?v=oZGmHNZv7Sc
app.get('/:robotName', function (request, response) { // robotName is used below by asigning it to 'username'.
    let username = request.params.robotName; // 'username' is referenced in home.mustache.
    // console.log("the username");
    // console.log(username);
    let robot_item = null; // 'username' is referenced in home.mustache
    // let theURL = window.location.href;
    // let theURL = request.params.robotName;
    // document.getElementById("demo").innerHTML = "The full URL of this page is:<br>";
    // document.getElementsByTagName("p").innerHTML = "The full URL of this page is:<br>"
    for (var i = 0; i < data.users.length; i++) {
        let item = data.users[i];

        // console.log(item.job);
        // if(item.job == null) {console.log(item);} // Isolated the jobs that are not filled.
        // console.log(item);
        // console.log(item.job);
        
        if (item.username === username) {
            // if(item.username==data.users[i].username){console.log(data.users[i].job);}
            // console.log(item.username);
            // console.log(data.users[i].username);
            // console.log(item.job);
            if(item.job == "Available for hire."||item.job == null){
                // console.log("it is null");
                // console.log(item.job);
                    response.render('profile_available', { // 'profile' is referenced in profile.mustache
                        WhatIsThis: item // 'WhatIsThis' is referenced in profile.mustache
                    })
                    robot_item = item; // asigning 'data.users[i]' to robot_item. 

            }
            else{
                // console.log(item.job);
                response.render('profile', { // 'profile' is referenced in profile.mustache
                WhatIsThis: item // 'WhatIsThis' is referenced in profile.mustache
                })
            robot_item = item; // asigning 'data.users[i]' to robot_item.
            }

             
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

// Changed from 3000 to 5000 so that I could run this on Heroku.
// App listen.
// app.listen(3000, function () {
app.listen(process.env.PORT || 5000, function () {
    console.log('The app is running at http://localhost:5000/.');
});
