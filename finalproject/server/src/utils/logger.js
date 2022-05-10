import winston from 'winston';

const {
  transports,
  createLogger,
  format: { printf, combine, timestamp, colorize }
} = winston;

/**
 * Create custom print format.
 */
const myFormat = printf(({ level, message, timestamp }) => `${timestamp} [ ${level} ] ${message}`);

/**
 * Create new winston logger instance.
 */
const logger = createLogger({
  format: combine(colorize(), timestamp(), myFormat),
  transports: [new transports.Console()]
});

/**
 * A writable stream for winston logging.
 */
export const logStream = {
  write(message) {
    logger.info(message.toString().trim());
  }
};

export default logger;