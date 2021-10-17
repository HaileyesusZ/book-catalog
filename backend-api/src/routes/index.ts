import express from 'express'
import { router as BookController } from './books'
const router = express.Router()

router.use('/books', BookController)

export { router }