import mongoose from 'mongoose'
import { logger } from '../utils/logger'

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    logger.info('connected to DB')
})