import express from 'express'
import { BookModel } from '../../schema/book'
import { moduleLogger } from '../../utils/logger'
const bookLogger = moduleLogger('BookModule')

const router = express.Router()

/**
 * gets all books
 */
router.get('/', async (req, res) => {
    try {
        const books = await BookModel.find({})
        return res.send({ data: books })
    } catch (error) {
        bookLogger.error(error.stack || error.message)
        return res.status(500).send({ message: 'Unable to load books' })
    }
})

/**
 * adds a book
 */
router.post('/', async (req, res) => {
    try {
        const book = req.body
        if (!book) {
            return res.status(401).send({ message: 'Please provide book details' })
        }
        const newBook = await BookModel.create(book)
        return res.send({ data: newBook })
    } catch (error) {
        bookLogger.error(error.stack || error.message)
        return res.status(500).send({ message: 'Unable to add a book' })
    }
})

/**
 * updates a book
 */
router.patch('/:id', async (req, res) => {
    try {
        const book = req.body
        const oldBookId = req.params.id
        if (!book || !oldBookId) {
            return res.status(401).send({ message: 'Please provide complete book details' })
        }
        const updatedBook = await BookModel.findOneAndUpdate({_id: oldBookId}, book, {new: true})
        return res.send({ data: updatedBook })
    } catch (error) {
        bookLogger.error(error.stack || error.message)
        return res.status(500).send({ message: 'Unable to update a book' })
    }
})
/**
 * deletes a book
 */
router.delete('/:id', async (req, res) => {
    try {
        const oldBookId = req.params.id
        if (!oldBookId) {
            return res.status(401).send({ message: 'Please provide the book to delete' })
        }
        const deletedBook = await BookModel.findOneAndDelete({_id: oldBookId})
        return res.send({ data: deletedBook })
    } catch (error) {
        bookLogger.error(error.stack || error.message)
        return res.status(500).send({ message: 'Unable to delete a book' })
    }
})

export { router }