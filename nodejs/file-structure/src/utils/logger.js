import winston from "winston";

const logger = winston.createLogger({
  level: "info",
});

logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

export default logger;
