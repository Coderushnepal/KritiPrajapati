import express from 'express'; // defalt export
import bodyParser from 'body-parser';

// import { Router } from 'express'; // named export


const server = express();

const loggingMiddleware = (req, res, next) => {
  const url = req.url;
  const method = req.method;

  console.log(`[${new Date().toISOString()}] ${method} ${url}`);

  next();
};

server.use(bodyParser.json());
server.use(loggingMiddleware);

server.get('/', (req, res, next) => {
  res.send('This is the response from the index(/) route');
});

server.get('/cars', (req, res, next) => {
  res.send('This is the response from the cars(/cars) route');
});

server.post('/cars', (req, res, next) => {
  console.log(req.body);

  res.send('This is the response from post request for the car');
});

const PORT = 8848;

server.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});

// GET /cars -> Get all cars
// GET /cars/1 -> Get car with id 1

// POST /cars -> Add a new car
// {
//   manufacturer: 'Hyundai',
//   model: 'i10',
// }

// PUT /cars/1 -> Update the car 1
// {
//   manufacturer: 'Laxmi Hyundai',
//   model: 'i10 Magna',
// }

// DELETE /cars/1 -> Delete the car 1

// GET -> Fetch
// POST -> Write operation
// PUT -> Update operation
// DELETE -> Remove operation

// PATCH /cars/1 -> Update certain properties of the car 1
// {
//   model: 'i10 Magna'
// }