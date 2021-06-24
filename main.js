//  Require Packages
const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
const app = express();

// Express app engine and set.
// NOTE: app.engine(ext, callback)
// The ext parameter is the extension type like ejs, hbs, etc 
// Return Value: It returns on Object.
app.engine('mustache', mustacheExpress());
// app.set(name, value)
app.set('views', 'views');
// below is saying use 'mustache' as the view engine.
app.set('view engine', 'mustache');

// Express app being used
// NOTE: app.use(path, callback)
// path: It is the path for which the middleware function is being called. It can be a string representing a path or path pattern or regular expression pattern to match the paths.
// callback: It is a middleware function or a series/array of middleware functions.
// More info here: https://stackoverflow.com/questions/11321635/nodejs-express-what-is-app-use
app.use(express.static('public'));

// Express app get.
app.get('/', function (request, response) {
    var status = "Employed"
    var can_see_ternary = false;
    var available = "no message"

    for (var i = 0; i < data.users.length; i++) {
        if (data.users[i].job == null) {
            data.users[i].job = "Available for hire.";
            data.users[i].company = "Available for hire.";
            status = "Now available"
        };
    };
    // console.log(data.users[1].id);
    // console.log(data.users[2].job);
    // console.log(data.users[3].company);

    // NOTE: The render() method renders a view.
    // res.render(view [, locals] [, callback])
    // Locals: It is basically an object whose properties define local variables for the view.
    // Callback It is a callback function.
    // Returns: It returns an Object.
    response.render('home', {

        // users: data.users,
        users_data: data.users,

        can_see_toggle_first: can_see_ternary ? "hidden" : "",
        can_see_toggle_second: can_see_ternary ? "" : "hidden",
        status: status,
        available: status,
    })
});

// Retrieving data from data.js
// This video explains how 'robotName' below works: https://www.youtube.com/watch?v=oZGmHNZv7Sc
app.get('/:robotName', function (request, response) { // robotName is used below by assigning it to 'username'.
    let username = request.params.robotName; // 'username' is referenced in home.mustache.
    // console.log("username: ",username);
    let robot_item = null; // 'username' is referenced in home.mustache
    
    for (var i = 0; i < data.users.length; i++) {
        let item = data.users[i];

        // console.log(item.job);
        // if(item.job == null) {console.log(item);} // Isolated the jobs that are not filled.
        // console.log(item);
        // console.log(item.job);

        if (item.username === username) {
            // if(item.username==data.users[i].username){
            //     console.log(data.users[i].job);
            // }
            // console.log(item.username);
            // console.log(data.users[i].username);
            // console.log(item.job);
            // if(item.job == "Available for hire."||item.job == null){
            //     // console.log("it is null");
            //     // console.log(item.job);
            //         response.render('profile_available', { // 'profile' is referenced in profile.mustache
            //             WhatIsThis: item // 'WhatIsThis' is referenced in profile.mustache
            //         })
            //         robot_item = item; // assigning 'data.users[i]' to robot_item. 

            // }
            // else{
            // console.log(item.job);

            // NOTE: See notes above about the render() method.
            response.render('profile', { // 'profile' is referenced in profile.mustache
                profile_item: item // 'profile_item' is referenced in profile.mustache
            })
            robot_item = item; // assigning 'data.users[i]' to robot_item.
        }


    }

    // }

    //  Error Message and Console.log
    if (robot_item === null) {
        response.setHeader('Content-type','text/html')
        response.status(404).send(`<p>${username}`+ ' is not found.</p><a class="home_a" href="/">Return to the Robot Employee Database</a>');
        
        console.log(`${username}`+ ' is not in the data.js file.');
        return;
    }


});

// Changed from 3000 to 5000 so that I could run this on Heroku.
// App listen.
// app.listen(3000, function () {
app.listen(process.env.PORT || 5000, function () {
    console.log('The app is running at http://localhost:5000/.');
});
