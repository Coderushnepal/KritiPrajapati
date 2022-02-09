import http from 'http';
import fs from 'fs';

http
  .createServer((request, response) => {
    try {
      console.log('before sync read file')
      const file = fs.readFileSync("sample-file.txt");
      console.log('after sync read file')
      // Send the response body
      response.end(file.toString());
    } catch (err) {
      console.log("An error occurred:", err);
    }
  })
  .listen(8085);

// Console will print the message
console.log("Server running at http://127.0.0.1:8085/");