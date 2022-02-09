import http from 'http';
import fs from 'fs';

http.createServer((request, response) => {
  console.log('before read file')

  fs.readFile('sample-file.txt', (err, data) => {
    if (err) {
      console.log('An error occurred.', err);
    }
    console.log('File read')

    // Send the response body
    response.end(data.toString());
  });
  console.log('after read file')

}).listen(8085);

// Console will print the message
console.log('Server running at http://127.0.0.1:8085/');