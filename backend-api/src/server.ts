import express from 'express'
import { router as RootRouter } from './routes'
import { logger } from './utils/logger'
import './schema'
const app = express()

app.use(express.json())

app.use('/api/v1/', RootRouter)

app.listen(process.env.PORT || 5000, () => {
    logger.info('Backend app running')
})
