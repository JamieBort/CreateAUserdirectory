// 1. determine which packages I will need.
// 2. write lines of code for engine
// 3. write lines of code for static
// 4. app get #1
// 5. app get #2
// 6. for statement (?)
// 7. if statement (?)
// 8. listen 3000


//  Require Packages
const express = require('express'); // express is used to 
const mustacheExpress = require('mustache-express'); // mustache-express is used to 
const data = require('./data.js');
const app = express();

// Express app engine and set.
app.engine('mustache', mustacheExpress());
app.set('views', '../views');
app.set('view engine', 'mustache');

// Express app being used
app.use(express.static('public'));

// Express app get.
app.get('/', function (request, response) {
  response.render('home', { // 'home' references home.mustache
    users: data.users
      })
});

// Retrieving data from data.js
app.get('/:robotName', function (request, response) { // robotName is used below by asigning it to 'username'.
  let username = request.params.robotName; // 'username' is referenced in home.mustache.
  let robot_item = null; // 'username' is referenced in home.mustache
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
    return;
  }
});

// App listen.
app.listen(3000, function () {
  console.log('The app is running at http://localhost:3000/.');
});
