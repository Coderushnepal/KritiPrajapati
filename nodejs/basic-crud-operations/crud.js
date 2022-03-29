import os from 'os';
import fs from 'fs';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import winston from 'winston';
import bodyParser from 'body-parser';
import serveFavicon from 'serve-favicon';

const server = express();

server.use(serveFavicon('./public/favicon.ico'));

const logger = winston.createLogger({
  level: 'info',
});

logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

server.use(helmet());
server.use(morgan('common'));
server.use(bodyParser.json());

server.get('/', (req, res, next) => {
  res.send('This is the response from the index(/) route');
});

server.get('/cars', (req, res, next) => {
  logger.info('Fetching all cars');

  fs.readFile('./data.txt', (err, data) => {
    if (err) {
      logger.error(`Error reading from file: ${err.message}`);

      res.status(400).json({
        message: `Error reading from file`,
      });

      return;
    }

    const str = data
      .toString()
      .split('\n')
      .filter((a) => !!a)
      .map((row) => JSON.parse(row));

    res.json({
      message: 'List of cars',
      data: str,
    });
  });
});

server.get('/cars/:carIdentifier', (req, res, next) => {
  const carId = +req.params.carIdentifier;

  fs.readFile('./data.txt', (err, data) => {
    if (err) {
      logger.error(`Error reading from file: ${err.message}`);

      res.status(400).json({
        message: `Error reading from file`,
      });

      return;
    }

    const carInfo = data
      .toString()
      .split('\n')
      .find((a) => !!a && JSON.parse(a).id === carId);

    if (!carInfo) {
      logger.error(`Could not find car with id: ${carId}`);

      res.status(404).json({
        message: `Could not find car with id: ${carId}`,
      });

      return;
    }

    res.json({
      data: JSON.parse(carInfo),
      message: `Details of carId ${carId}`,
    });
  });
});

server.post('/cars', (req, res, next) => {
  logger.debug('Payload received', req.body);

  const insertParams = {
    id: Date.now(),
    ...req.body,
  };

  const insertData = JSON.stringify(insertParams) + os.EOL;

  logger.info('Checking file existence');

  fs.readFile('./data.txt', (err, data) => {
    if (err) {
      logger.error(`Cannot find file: data.txt`);

      res.status(404).json({
        message: `Cannot find file: data.txt`,
      });

      return;
    }

    const carInfo = data
      .toString()
      .split('\n')
      .find((a) => {
        if (!a) {
          return false;
        }

        const parsedData = JSON.parse(a);

        const alreadyExists =
          insertParams.manufacturer === parsedData.manufacturer && insertParams.model === parsedData.model;

        return alreadyExists;
      });

    if (carInfo) {
      logger.error(`The data for the car already exists`);

      res.status(404).json({
        message: `The data for the car already exists`,
      });

      return;
    }

    logger.info('File existence verified. Now writing to file');

    fs.appendFile('./data.txt', insertData, (err) => {
      if (err) {
        logger.error(`Error writing to file: ${err.message}`);

        res.status(400).json({
          message: `Error writing to file: ${err.message}`,
        });
      }

      logger.info('Successfully written to file');

      res.json({
        message: 'Added record successfully',
        data: insertParams,
      });
    });
  });
});

const PORT = 8848;

server.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});