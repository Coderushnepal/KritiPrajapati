// import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
// import serveFavicon from 'serve-favicon';

import router from './routes.js';
import logger, { logStream } from './utils/logger.js';
import errorHandler from './middlewares/errorHandler.js';

const server = express();

dotenv.config();

// server.use(cors());
// server.use(serveFavicon('./public/favicon.ico'));

server.use(helmet());
server.use(morgan('dev', { stream: logStream }));
server.use(bodyParser.json());

server.use(router);

server.use(errorHandler);

server.listen(process.env.PORT, () => {
  logger.info(`Listening on localhost:${process.env.PORT}`);
});