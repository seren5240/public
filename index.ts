import { createLogger, format, transports } from 'winston';
const logger = createLogger({
  format: format.combine(format.colorize(), format.simple()),
  transports: [new transports.Console()]
});
logger.info('foo');
logger.info('wow');
const another = 3;
console.log('many things');
