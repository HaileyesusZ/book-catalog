import winston from "winston"

const logConfig = {
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.printf(options => `${options.level}: ${[options.timestamp]} : [${options.moduleName || 'Server'}] ${JSON.stringify(options.message)}`),
    )
}

const winstonLogger = winston.createLogger(logConfig)
const moduleLogger = (moduleName: string = '') => {
    return winstonLogger.child({ moduleName })
}

export { winstonLogger as logger, moduleLogger }