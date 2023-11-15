const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log('Data read from "welcome.txt":', data);
  }
});
