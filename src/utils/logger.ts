import { createLogger, format, transports } from 'winston';

const { combine, colorize, timestamp, printf } = format;
const { Console, File } = transports;

export default createLogger({
    format: combine(
        colorize(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        printf(({ timestamp, level, stack, message }) =>
            stack
                ? `[${timestamp}] [${level}] ${stack}`
                : `[${timestamp}] [${level}] ${message}`
        )
    ),
    transports: [
        new Console(),
        new File({
            level: 'error',
            filename: 'errors.log',
        }),
    ],
});
