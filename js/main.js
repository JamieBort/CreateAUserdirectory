// Using the attached data.js file, build an Express app that works as a directory of users in the file. You should use require to get the data from the data.js file.

// The amount of info each user has varies. Users with no job or company data are currently looking for work.

// We are going to require express.
// We are going to require readline.


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });


// The following will read the 'data.js' file line by line and log it to the console:
var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream('data.js')
});

var lineno = 0;
myInterface.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});