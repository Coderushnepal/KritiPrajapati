import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import serveFavicon from 'serve-favicon';

import router from './routes.js';

const server = express();

server.use(serveFavicon('./public/favicon.ico'));
server.use(helmet());
server.use(morgan('common'));
server.use(bodyParser.json());

server.use(router);

const PORT = 8848;

server.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});
