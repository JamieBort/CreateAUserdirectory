// 1. determine which packages I will need.
// 2. write lines of code for engine
// 3. write lines of code for static
// 4. app get #1
// 5. app get #2
// 6. for statement (?)
// 7. if statement (?)
// 8. listen 3000


// ======= Require Packages =======
const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
const app = express();

// ======= Express app being used =======
app.engine('mustache', mustacheExpress());
app.set('views', '../views');
app.set('view engine', 'mustache');

// how to comment on this next line?
app.use(express.static('public'));

// how to comment on this next line?
app.get('/', function(require, response){
  response.render('home', {
    users: data.users
  })
});

// ======= Retrieving data from data.js =======

app.get('/users/:robotName', function(require, response){
  let username = require.params.robotName;
  let robot_item = null;
  for (var i = 0; i < data.users.length; i++) {
    let item = data.users[i]
    if (item.username === username) {
      robot_item = item;
      break;
    }
  }

// ======= Error Message and Console.log =======
if (robot_item === null) {
  req.status(404).send('The user is not found');
  return;
  }
response.render('Yeah!', robot_item);
});

app.listen(3000, function() {
  console.log('The app is running.');
});
